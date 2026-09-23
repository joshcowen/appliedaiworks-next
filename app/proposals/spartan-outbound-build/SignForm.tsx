"use client";

import { useEffect, useState } from "react";

export default function SignForm() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [toolkit, setToolkit] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    );
  }, []);

  async function submit() {
    setError("");
    if (!name.trim()) return setError("Please enter your full name.");
    if (!agreed) return setError("Please check the agreement box to proceed.");
    setSending(true);
    try {
      const res = await fetch("/api/sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          proposal: "spartan-outbound-build",
          name: name.trim(),
          title: title.trim(),
          date,
          toolkit,
        }),
      });
      if (!res.ok) throw new Error("Server error");
      setDone(true);
    } catch {
      setSending(false);
      setError("Something went wrong. Please email josh@appliedaiworks.com directly.");
    }
  }

  return (
    <div className="signature-section">
      <div className="section-label">Sign to Get Started</div>
      <div className="signature-card">
        <h3>Agreement &amp; Authorization</h3>
        <p>
          By signing below, you authorize Applied AI Works to begin the outbound build described in
          this proposal. An invoice for half of the selected fee will be issued upon signing and is
          due at project kickoff. The remaining half is due at go-live.
        </p>

        <div className="agreement-summary">
          <strong>Scope:</strong> Outbound Client Acquisition Build, Phase 1 (managed IT services
          provider, North Carolina)
          <br />
          <strong>Deliverables:</strong> Account list, Microsoft 365 verification, email security
          checks and branded reports, contacts, sending infrastructure, CRM renewal tracking,
          trigger alerts, reporting dashboard
          <br />
          <strong>Core Build Fee:</strong> $21,200 total ($10,600 at kickoff, $10,600 at go-live),
          invoiced by Applied AI Works / Guide MKTG, LLC
          <br />
          <strong>Switching MSPs Toolkit (optional):</strong> $7,400 total ($3,700 at kickoff,
          $3,700 at go-live), included only if selected below
          <br />
          <strong>Platform and data costs:</strong> paid directly by the client to each platform
          <br />
          <strong>Payment:</strong> Check or ACH Transfer to Guide MKTG, LLC / 1800 92nd Ave,
          Zeeland, MI 49464
        </div>

        <div className="agree-row" style={{ marginTop: 0 }}>
          <input
            type="checkbox"
            id="sig-toolkit"
            checked={toolkit}
            onChange={(e) => setToolkit(e.target.checked)}
          />
          <label htmlFor="sig-toolkit">
            <strong>Include the Switching MSPs Toolkit (+$7,400).</strong> Leave unchecked to sign
            for the Core Build only.
          </label>
        </div>

        <div className="sig-fields">
          <div className="sig-field">
            <label>Full Name</label>
            <input
              type="text"
              id="sig-name"
              placeholder="Sign your name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={200}
            />
          </div>
          <div className="sig-field">
            <label>Title / Company</label>
            <input
              type="text"
              id="sig-title"
              placeholder="e.g. Director, Spartan Marketing"
              autoComplete="organization-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={200}
            />
          </div>
          <div className="sig-field">
            <label>Date</label>
            <input type="text" id="sig-date" readOnly value={date} />
          </div>
        </div>

        <div className="agree-row">
          <input
            type="checkbox"
            id="sig-agree"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label htmlFor="sig-agree">
            I have read and agree to the scope, deliverables, and payment terms outlined above. I
            understand that work begins after payment is received. This constitutes a binding
            agreement between myself and Applied AI Works / Guide MKTG, LLC.
          </label>
        </div>

        <button className="sig-submit" onClick={submit} disabled={sending || done}>
          {sending && !done ? "Sending..." : "Sign & Send Agreement"}
        </button>
        {error && (
          <div className="sig-error" style={{ display: "block" }}>
            {error}
          </div>
        )}
        {done && (
          <div className="sig-success" style={{ display: "block" }}>
            Your agreement has been received. Josh will be in touch within one business day to
            confirm and get the project started. Thank you!
          </div>
        )}

        <p className="sig-questions">
          Questions before signing? Email <a href="mailto:josh@appliedaiworks.com">josh@appliedaiworks.com</a>
        </p>
      </div>
    </div>
  );
}
