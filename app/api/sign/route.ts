import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

// Proposal terms live on the server so a signer can't change what gets reported.
type Proposal = {
  title: string;
  company: string;
  core?: string;
  toolkit?: string;
  tiers?: Record<string, string>;
};

const PROPOSALS: Record<string, Proposal> = {
  "spartan-outbound-build": {
    title: "Spartan Marketing: Outbound Client Acquisition Build (Phase 1)",
    company: "Spartan Marketing",
    core: "$21,200 core build",
    toolkit: "$7,400 Switching MSPs Toolkit",
  },
  "hobart-grand-rapids": {
    title: "Hobart Sales and Service Grand Rapids: Service Knowledge Search (Phase 1)",
    company: "Hobart Sales and Service Grand Rapids",
    tiers: {
      foundation: "Foundation, $24,500",
      complete: "Complete, $44,500",
    },
  },
};

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const proposal = PROPOSALS[String(body.proposal)];
    const name = String(body.name || "").trim().slice(0, 200);
    const title = String(body.title || "").trim().slice(0, 200);
    const date = String(body.date || "").trim().slice(0, 60);
    const toolkit = body.toolkit === true;

    if (!proposal || !name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    let investment: string;
    if (proposal.tiers) {
      const tier = proposal.tiers[String(body.tier)];
      if (!tier) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
      investment = tier;
    } else {
      investment = toolkit
        ? `${proposal.core} + ${proposal.toolkit} = $28,600`
        : `${proposal.core} (Toolkit not included)`;
    }

    // Hobart's page only approves a quote. The services agreement comes later.
    const approvalOnly = Boolean(proposal.tiers);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Applied AI Works Proposals" <${process.env.GMAIL_USER}>`,
      to: ["josh@appliedaiworks.com", "josh@guidemktg.com"],
      subject: `${approvalOnly ? "Quote Approved" : "Signed"}: ${proposal.title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #111; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #FF6B00; margin: 0; font-size: 18px;">${approvalOnly ? "New Quote Approved" : "New Agreement Signed"}</h2>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 13px;">appliedaiworks.com/proposals</p>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-size: 13px; color: #666; width: 130px;">Proposal</td><td style="padding: 8px 0; font-size: 14px; color: #111;">${esc(proposal.title)}</td></tr>
              <tr><td style="padding: 8px 0; font-size: 13px; color: #666;">Client</td><td style="padding: 8px 0; font-size: 14px; color: #111;">${esc(proposal.company)}</td></tr>
              <tr><td style="padding: 8px 0; font-size: 13px; color: #666;">Investment</td><td style="padding: 8px 0; font-size: 14px; color: #111; font-weight: 700;">${esc(investment)}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #fff; border-left: 4px solid #FF6B00; border-radius: 4px;">
              <p style="margin: 0; font-size: 12px; color: #999; text-transform: uppercase;">Signed by</p>
              <p style="margin: 4px 0 0; font-size: 18px; color: #111; font-style: italic;">${esc(name)}</p>
              <p style="margin: 4px 0 0; font-size: 14px; color: #555;">${esc(title)}</p>
              <p style="margin: 4px 0 0; font-size: 13px; color: #888;">${esc(date)}</p>
            </div>
            <p style="margin: 20px 0 0; font-size: 12px; color: #aaa;">${approvalOnly ? "The signer approved the quote and selected the option shown. A services agreement is still needed before work begins." : "The signer confirmed they read and agreed to the scope, deliverables, and payment terms in the proposal."}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Sign error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
