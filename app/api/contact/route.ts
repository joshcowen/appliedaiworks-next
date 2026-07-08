import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, industry, description, bestTime, _honey, _loadedAt } = await req.json();

    // Honeypot check — bots fill this hidden field, humans don't
    if (_honey) {
      return NextResponse.json({ success: true });
    }

    // Timing check — legitimate users take more than 3 seconds to fill out a form
    if (_loadedAt && Date.now() - _loadedAt < 3000) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Applied AI Works" <${process.env.GMAIL_USER}>`,
      to: "josh@appliedaiworks.com",
      replyTo: email,
      subject: `New inquiry from ${name} — ${company || "No company listed"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #FF6B00; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 18px;">New Discovery Call Request</h2>
            <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 13px;">Applied AI Works — appliedaiworks.com</p>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #666; width: 130px;">Name</td>
                <td style="padding: 8px 0; font-size: 14px; color: #111; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #666;">Email</td>
                <td style="padding: 8px 0; font-size: 14px; color: #111;"><a href="mailto:${email}" style="color: #FF6B00;">${email}</a></td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #666;">Company</td>
                <td style="padding: 8px 0; font-size: 14px; color: #111;">${company}</td>
              </tr>` : ""}
              ${industry ? `
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #666;">Industry</td>
                <td style="padding: 8px 0; font-size: 14px; color: #111;">${industry}</td>
              </tr>` : ""}
              ${bestTime ? `
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #666;">Best time</td>
                <td style="padding: 8px 0; font-size: 14px; color: #111;">${bestTime}</td>
              </tr>` : ""}
            </table>
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e5e5;">
              <p style="font-size: 13px; color: #666; margin: 0 0 8px;">What they need help with:</p>
              <p style="font-size: 14px; color: #111; margin: 0; line-height: 1.6; background: white; padding: 12px 16px; border-radius: 6px; border: 1px solid #e5e5e5;">${description}</p>
            </div>
            <div style="margin-top: 20px;">
              <a href="mailto:${email}" style="display: inline-block; background: #FF6B00; color: white; font-weight: 600; font-size: 14px; padding: 10px 20px; border-radius: 6px; text-decoration: none;">Reply to ${name}</a>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
