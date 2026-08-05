"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Assumptions behind the math. Conservative on purpose.
const RECOVERY_RATE = 0.1; // share of unworked bids the follow-up sequence brings back
const REACTIVATION_RATE = 0.02; // share of dormant customers who rebook off one campaign
const REACTIVATION_FEE = 0.15;
const MIN_MONTHLY_FEE = 1500; // below this, a free build doesn't pay for itself
const MIN_DORMANT_LIST = 1500;
const MIN_REACTIVATION_FEE = 1000; // a campaign is lighter than an integration, so a lower bar

const crmOptions = [
  { value: "servicetitan", label: "ServiceTitan", api: true },
  { value: "buildops", label: "BuildOps", api: true },
  { value: "jobber", label: "Jobber", api: true },
  { value: "housecallpro", label: "Housecall Pro", api: true },
  { value: "fieldedge", label: "FieldEdge", api: true },
  { value: "other-api", label: "Other software with an API", api: true },
  { value: "none", label: "Spreadsheets, QuickBooks only, or paper", api: false },
];

function tierFor(annualPipeline: number) {
  if (annualPipeline >= 15_000_000) return { pct: 0.05, label: "$15M+ pipeline" };
  if (annualPipeline >= 5_000_000) return { pct: 0.08, label: "$5M to $15M pipeline" };
  if (annualPipeline >= 2_000_000) return { pct: 0.12, label: "$2M to $5M pipeline" };
  return null;
}

const money = (n: number) => `$${Math.round(n).toLocaleString()}`;

function updateSliderFill(slider: HTMLInputElement) {
  const min = parseFloat(slider.min);
  const max = parseFloat(slider.max);
  const pct = ((parseFloat(slider.value) - min) / (max - min)) * 100;
  slider.style.background = `linear-gradient(to right, #FF6B00 0%, #FF9E5E ${pct}%, rgba(255,255,255,0.07) ${pct}%)`;
}

interface SliderProps {
  id: string;
  label: string;
  min: number;
  max: number;
  value: number;
  step: number;
  displayValue: string;
  onChange: (v: number) => void;
}

function Slider({ id, label, min, max, value, step, displayValue, onChange }: SliderProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) updateSliderFill(ref.current);
  }, [value]);

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <label className="text-sm font-medium text-on-surface" htmlFor={id}>{label}</label>
        <span className="text-sm font-bold text-brand-orange">{displayValue}</span>
      </div>
      <input
        ref={ref}
        type="range"
        id={id}
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={(e) => {
          onChange(parseFloat(e.target.value));
          if (ref.current) updateSliderFill(ref.current);
        }}
      />
    </div>
  );
}

interface ProgramCardProps {
  title: string;
  qualified: boolean;
  headline: string;
  headlineLabel: string;
  detail: string;
  blocker?: string;
}

function ProgramCard({ title, qualified, headline, headlineLabel, detail, blocker }: ProgramCardProps) {
  return (
    <div
      className={`rounded-2xl p-5 border ${
        qualified
          ? "bg-surface-container-highest border-brand-orange/30"
          : "bg-surface-container-highest border-outline-variant/10"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="font-headline font-bold text-on-surface text-sm">{title}</div>
        <span
          className={`shrink-0 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${
            qualified
              ? "bg-brand-orange/15 text-brand-orange"
              : "bg-outline-variant/10 text-on-surface-variant"
          }`}
        >
          {qualified ? "Qualifies" : "Not yet"}
        </span>
      </div>

      {qualified ? (
        <>
          <div className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">{headlineLabel}</div>
          <div className="font-headline text-3xl font-bold text-brand-orange mb-2">{headline}</div>
          <p className="text-xs text-on-surface-variant leading-relaxed">{detail}</p>
        </>
      ) : (
        <p className="text-xs text-on-surface-variant leading-relaxed">{blocker}</p>
      )}
    </div>
  );
}

export default function FitCalculator() {
  const [quotes, setQuotes] = useState(120);
  const [avgJob, setAvgJob] = useState(6000);
  const [darkPct, setDarkPct] = useState(30);
  const [dormant, setDormant] = useState(2000);
  const [rebookTicket, setRebookTicket] = useState(700);
  const [crm, setCrm] = useState("servicetitan");

  const hasApi = crmOptions.find((o) => o.value === crm)?.api ?? false;

  // Bid follow-up math
  const annualPipeline = quotes * 12 * avgJob;
  const tier = tierFor(annualPipeline);
  const darkBids = quotes * (darkPct / 100);
  const recoveredJobs = darkBids * RECOVERY_RATE;
  const monthlyRecovered = recoveredJobs * avgJob;
  const monthlyFee = tier ? monthlyRecovered * tier.pct : 0;
  const bidDripQualifies = tier !== null && monthlyFee >= MIN_MONTHLY_FEE && hasApi;

  // Reactivation math. No API needed, a customer list export is enough.
  // Priced off the rebook ticket, not the quote value. A dormant customer coming
  // back books a service call, which is a much smaller job than a full project.
  const reactivatedJobs = dormant * REACTIVATION_RATE;
  const reactivationRevenue = reactivatedJobs * rebookTicket;
  const reactivationFee = reactivationRevenue * REACTIVATION_FEE;
  const reactivationQualifies = dormant >= MIN_DORMANT_LIST && reactivationFee >= MIN_REACTIVATION_FEE;

  const qualifyCount = (bidDripQualifies ? 1 : 0) + (reactivationQualifies ? 1 : 0);

  const verdict =
    qualifyCount === 2
      ? { label: "Strong fit", tone: "good" as const }
      : qualifyCount === 1
      ? { label: "Fit for one program", tone: "good" as const }
      : { label: "Not a fit yet", tone: "none" as const };

  // Why bid drip failed, in priority order
  const bidBlocker = !tier
    ? `At ${quotes} quotes a month and ${money(avgJob)} per job, your quoted pipeline is about ${money(annualPipeline)} a year. Under $2M there isn't enough recovered revenue to cover a free build. A flat-fee project is the better route.`
    : !hasApi
    ? "Your volume works, but the follow-up sequence needs to read quote data automatically. Without software that has an API, we'd be doing manual exports, which defeats the purpose. Worth fixing, and the audit covers how."
    : `The math lands at about ${money(monthlyFee)} a month, under the ${money(MIN_MONTHLY_FEE)} it takes to justify absorbing the build cost. Close. Worth a conversation if your volume is growing.`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8">
        <h3 className="font-headline text-lg font-bold text-on-surface mb-8">Your Numbers</h3>
        <div className="space-y-6">
          <Slider
            id="quotes"
            label="Quotes or bids sent per month"
            min={0} max={500} step={5}
            value={quotes}
            displayValue={`${quotes}`}
            onChange={setQuotes}
          />
          <Slider
            id="avgJob"
            label="Average job value"
            min={500} max={30000} step={500}
            value={avgJob}
            displayValue={money(avgJob)}
            onChange={setAvgJob}
          />
          <Slider
            id="darkPct"
            label="Quotes that never get a follow-up"
            min={0} max={80} step={5}
            value={darkPct}
            displayValue={`${darkPct}%`}
            onChange={setDarkPct}
          />
          <Slider
            id="dormant"
            label="Past customers who haven't booked in 12+ months"
            min={0} max={10000} step={100}
            value={dormant}
            displayValue={dormant.toLocaleString()}
            onChange={setDormant}
          />
          <Slider
            id="rebookTicket"
            label="Typical ticket when an old customer comes back"
            min={150} max={5000} step={50}
            value={rebookTicket}
            displayValue={money(rebookTicket)}
            onChange={setRebookTicket}
          />

          <div className="border-t border-outline-variant/20 pt-6">
            <label className="block text-sm font-medium text-on-surface mb-3" htmlFor="crm">
              Where your customer and quote data lives
            </label>
            <select
              id="crm"
              value={crm}
              onChange={(e) => setCrm(e.target.value)}
              className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-brand-orange/60 transition-colors appearance-none"
            >
              {crmOptions.map((o) => (
                <option key={o.value} value={o.value} className="bg-surface-container">{o.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Output */}
      <div className="bg-surface-container-low border border-brand-orange/20 rounded-3xl p-8 flex flex-col neural-glow">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-headline text-lg font-bold text-on-surface">Your Result</h3>
          <span
            className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${
              verdict.tone === "good"
                ? "bg-brand-orange/15 text-brand-orange"
                : "bg-outline-variant/10 text-on-surface-variant"
            }`}
          >
            {verdict.label}
          </span>
        </div>

        <div className="space-y-4 flex-1">
          <ProgramCard
            title="Bid follow-up sequence"
            qualified={bidDripQualifies}
            headlineLabel="Recovered revenue per month"
            headline={money(monthlyRecovered)}
            detail={`About ${recoveredJobs.toFixed(1)} jobs a month that would have gone cold. You keep ${money(monthlyRecovered - monthlyFee)}. My share is ${money(monthlyFee)} at ${tier ? Math.round(tier.pct * 100) : 0}%${tier ? ` (${tier.label})` : ""}.`}
            blocker={bidBlocker}
          />

          <ProgramCard
            title="Database reactivation campaign"
            qualified={reactivationQualifies}
            headlineLabel="Recovered revenue, first 90 days"
            headline={money(reactivationRevenue)}
            detail={`About ${Math.round(reactivatedJobs)} dormant customers back on the schedule. You keep ${money(reactivationRevenue - reactivationFee)}. My share is ${money(reactivationFee)} at 15%.`}
            blocker={
              dormant < MIN_DORMANT_LIST
                ? `A campaign needs at least ${MIN_DORMANT_LIST.toLocaleString()} dormant customers to be worth building. You have ${dormant.toLocaleString()}. This one doesn't need an API, so it's usually the easiest place to start once the list is big enough.`
                : `${dormant.toLocaleString()} dormant customers at a ${money(rebookTicket)} ticket works out to about ${money(reactivationRevenue)} recovered, which leaves my share under ${money(MIN_REACTIVATION_FEE)}. Not quite enough to cover building it. A bigger list or a higher average ticket tips this one over.`
            }
          />

          <p className="text-[11px] text-on-surface-variant leading-relaxed pt-1">
            Estimates, not promises. Assumes {Math.round(RECOVERY_RATE * 100)}% of unworked bids get recovered and {Math.round(REACTIVATION_RATE * 100)}% of dormant customers rebook. We verify both against your real numbers before anything gets built.
          </p>
        </div>

        <div className="mt-8">
          {qualifyCount > 0 ? (
            <>
              <Link
                href="/contact"
                className="kinetic-gradient text-white font-bold px-6 py-4 rounded-xl text-sm flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform neural-glow"
              >
                Book a Free Call
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <p className="text-center text-xs text-on-surface-variant mt-3">
                30 minutes. We check these numbers against your actual data.
              </p>
            </>
          ) : (
            <>
              <div className="bg-surface-container-highest rounded-2xl p-5 mb-4">
                <div className="font-headline font-bold text-on-surface text-sm mb-2">Start with the audit instead</div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Your volume isn&apos;t there for a performance deal yet, and I&apos;d rather tell you that than build something neither of us makes money on. The $1,500 audit finds where AI actually saves you time right now, and it comes with a roadmap you can act on whether or not you hire me for the build.
                </p>
              </div>
              <Link
                href="/ai-audit"
                className="kinetic-gradient text-white font-bold px-6 py-4 rounded-xl text-sm flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform neural-glow"
              >
                See the $1,500 AI Audit
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <p className="text-center text-xs text-on-surface-variant mt-3">Free 30-min discovery call first. No commitment.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
