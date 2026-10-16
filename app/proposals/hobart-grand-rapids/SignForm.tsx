"use client";

import { useEffect, useState } from "react";

const input =
  "w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface text-sm placeholder:text-on-surface-variant/60 focus:outline-none focus:border-brand-orange transition-colors";
const label = "block text-xs font-bold uppercase tracking-wide text-on-surface-variant mb-2";

const tiers = [
  { key: "foundation", name: "Foundation", price: "$24,500", half: "$12,250", rights: "license to use; Applied AI Works keeps ownership of the code" },
  { key: "complete", name: "Complete", price: "$44,500", half: "$22,250", rights: "license to use; Applied AI Works keeps ownership of the code" },
  { key: "ownership", name: "Complete + Ownership", price: "$89,500", half: "$44,750", rights: "Hobart GR owns the code, data, and accounts" },
];

export default function SignForm() {
  const [tier, setTier] = useState("complete");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDate(new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }));
  }, []);

  const selected = tiers.find((t) => t.key === tier) ?? tiers[1];

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
          proposal: "hobart-grand-rapids",
          tier,
          name: name.trim(),
          title: title.trim(),
          date,
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
    <div className="bg-surface-container-low border border-outline-variant/20 rounded-3xl p-8">
      <div className="text-xs font-bold text-brand-orange tracking-wide uppercase mb-3">
        Agreement &amp; authorization
      </div>
      <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
        Choose the option you want, then sign. An invoice for half of the selected fee is issued
        upon signing and is due at kickoff. The remaining half is due at go-live.
      </p>

      <fieldset className="mb-6">
        <legend className={label}>Option</legend>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {tiers.map((t) => (
            <label
              key={t.key}
              className={`cursor-pointer rounded-2xl border p-5 transition-colors ${
                tier === t.key
                  ? "border-brand-orange bg-surface-container-lowest"
                  : "border-outline-variant/20 hover:border-outline-variant/50"
              }`}
            >
              <input
                type="radio"
                name="tier"
                value={t.key}
                checked={tier === t.key}
                onChange={() => setTier(t.key)}
                className="sr-only"
              />
              <div className="text-sm font-bold text-on-surface mb-1">{t.name}</div>
              <div className="font-headline text-2xl font-bold text-brand-orange">{t.price}</div>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="bg-surface-container-lowest border-l-2 border-brand-orange rounded-r-xl p-5 mb-6 text-sm text-on-surface-variant leading-relaxed space-y-1">
        <p>
          <span className="text-on-surface font-medium">Scope:</span> Service Knowledge Search,
          Phase 1, for Hobart Sales and Service Grand Rapids
        </p>
        <p>
          <span className="text-on-surface font-medium">Selected option:</span> {selected.name},{" "}
          {selected.price} total ({selected.half} at kickoff, {selected.half} at go-live)
        </p>
        <p>
          <span className="text-on-surface font-medium">Rights:</span> {selected.rights}. Hobart GR
          always owns its service data.
        </p>
        <p>
          <span className="text-on-surface font-medium">Year 1 maintenance and support:</span>{" "}
          included in every option
        </p>
        <p>
          <span className="text-on-surface font-medium">Running costs:</span> Anthropic API usage
          and hosting are paid directly by Hobart Grand Rapids to each provider, with no markup
        </p>
        <p>
          <span className="text-on-surface font-medium">Payment:</span> Check or ACH, instructions
          on the invoice
        </p>
      </div>

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
            placeholder="e.g. General Manager, Hobart Grand Rapids"
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
          between myself and Applied AI Works.
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
