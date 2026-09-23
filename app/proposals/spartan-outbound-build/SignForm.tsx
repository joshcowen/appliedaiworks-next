"use client";

import { useEffect, useState } from "react";

const input =
  "w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface text-sm placeholder:text-on-surface-variant/60 focus:outline-none focus:border-brand-orange transition-colors";
const label = "block text-xs font-bold uppercase tracking-wide text-on-surface-variant mb-2";

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
    setDate(new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }));
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
      setError("Something went wrong. Please use the email link above to reach Josh directly.");
    }
  }

  return (
    <div className="bg-surface-container-low border border-brand-orange/30 rounded-3xl p-8 md:p-10 neural-glow">
      <div className="text-xs font-bold text-brand-orange tracking-wide uppercase mb-3">
        Agreement &amp; authorization
      </div>
      <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
        By signing below, you authorize Applied AI Works to begin the outbound build described in
        this proposal. An invoice for half of the selected fee will be issued upon signing and is due
        at project kickoff. The remaining half is due at go-live.
      </p>

      <div className="bg-surface-container-lowest border-l-2 border-brand-orange rounded-r-xl p-5 mb-6 text-sm text-on-surface-variant leading-relaxed space-y-1">
        <p>
          <span className="text-on-surface font-medium">Scope:</span> Outbound Client Acquisition
          Build, Phase 1 (managed IT services provider, North Carolina)
        </p>
        <p>
          <span className="text-on-surface font-medium">Deliverables:</span> Account list, Microsoft
          365 verification, email security checks and branded reports, contacts, sending
          infrastructure, CRM renewal tracking, trigger alerts, reporting dashboard
        </p>
        <p>
          <span className="text-on-surface font-medium">Core build fee:</span> $21,200 total
          ($10,600 at kickoff, $10,600 at go-live), invoiced by Applied AI Works / Guide MKTG, LLC
        </p>
        <p>
          <span className="text-on-surface font-medium">Switching MSPs Toolkit (optional):</span>{" "}
          $7,400 total ($3,700 at kickoff, $3,700 at go-live), included only if selected below
        </p>
        <p>
          <span className="text-on-surface font-medium">Platform and data costs:</span> paid
          directly by the client to each platform
        </p>
        <p>
          <span className="text-on-surface font-medium">Payment:</span> Check or ACH transfer to
          Guide MKTG, LLC / 1800 92nd Ave, Zeeland, MI 49464
        </p>
      </div>

      <label className="flex items-start gap-3 mb-8 cursor-pointer">
        <input
          type="checkbox"
          checked={toolkit}
          onChange={(e) => setToolkit(e.target.checked)}
          className="mt-1 h-4 w-4 accent-[#FF6B00]"
        />
        <span className="text-sm text-on-surface-variant leading-relaxed">
          <span className="text-on-surface font-medium">Include the Switching MSPs Toolkit (+$7,400).</span>{" "}
          Leave unchecked to sign for the core build only.
        </span>
      </label>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_200px] gap-4 mb-6">
        <div>
          <label className={label} htmlFor="sig-name">Full name</label>
          <input
            id="sig-name"
            type="text"
            className={input}
            placeholder="Sign your name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={200}
          />
        </div>
        <div>
          <label className={label} htmlFor="sig-title">Title / company</label>
          <input
            id="sig-title"
            type="text"
            className={input}
            placeholder="e.g. Director, Spartan Marketing"
            autoComplete="organization-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={200}
          />
        </div>
        <div>
          <label className={label} htmlFor="sig-date">Date</label>
          <input id="sig-date" type="text" className={`${input} opacity-70`} readOnly value={date} />
        </div>
      </div>

      <label className="flex items-start gap-3 mb-8 cursor-pointer">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 h-4 w-4 accent-[#FF6B00]"
        />
        <span className="text-sm text-on-surface-variant leading-relaxed">
          I have read and agree to the scope, deliverables, and payment terms outlined above. I
          understand that work begins after payment is received. This constitutes a binding agreement
          between myself and Applied AI Works / Guide MKTG, LLC.
        </span>
      </label>

      <button
        onClick={submit}
        disabled={sending || done}
        className="kinetic-gradient text-white font-bold px-8 py-4 rounded-xl text-sm inline-flex items-center gap-2 hover:scale-[1.01] transition-transform disabled:opacity-50 disabled:hover:scale-100"
      >
        {sending && !done ? "Sending..." : "Sign & Send Agreement"}
      </button>

      {error && <p className="text-sm font-medium text-red-400 mt-4">{error}</p>}
      {done && (
        <div className="mt-6 bg-surface-container-lowest border border-green-500/40 rounded-xl p-5 text-sm text-green-400 font-medium">
          Your agreement has been received. Josh will be in touch within one business day to confirm
          and get the project started. Thank you!
        </div>
      )}
    </div>
  );
}
