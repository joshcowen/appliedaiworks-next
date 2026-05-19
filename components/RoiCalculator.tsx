"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
  valueColor?: string;
  onChange: (v: number) => void;
}

function Slider({ id, label, min, max, value, step, displayValue, valueColor = "text-brand-orange", onChange }: SliderProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) updateSliderFill(ref.current);
  }, [value]);

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <label className="text-sm font-medium text-on-surface" htmlFor={id}>{label}</label>
        <span className={`text-sm font-bold ${valueColor}`}>{displayValue}</span>
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

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(3);
  const [avgWage, setAvgWage] = useState(22);
  const [t1, setT1] = useState(5);
  const [t2, setT2] = useState(4);
  const [t3, setT3] = useState(3);
  const [t4, setT4] = useState(3);
  const [t5, setT5] = useState(2);

  const totalHrs = t1 + t2 + t3 + t4 + t5;
  const savedWk = totalHrs * 0.6;
  const savedYr = savedWk * 52;
  const dollarYr = savedYr * avgWage;
  const weeklyVal = savedWk * avgWage;
  const roiWeeks = weeklyVal > 0 ? 1500 / weeklyVal : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8">
        <h3 className="font-headline text-lg font-bold text-on-surface mb-8">Your Business</h3>
        <div className="space-y-6">
          <Slider
            id="teamSize"
            label="Team size"
            min={1} max={20} step={1}
            value={teamSize}
            displayValue={`${teamSize} ${teamSize === 1 ? "person" : "people"}`}
            onChange={setTeamSize}
          />
          <Slider
            id="avgWage"
            label="Average hourly wage"
            min={12} max={80} step={1}
            value={avgWage}
            displayValue={`$${avgWage}/hr`}
            onChange={setAvgWage}
          />
          <div className="border-t border-outline-variant/20 pt-6">
            <p className="text-[11px] text-on-surface-variant uppercase tracking-widest font-bold mb-4">Weekly hours spent on:</p>
            <div className="space-y-5">
              <Slider id="t1" label="Email &amp; customer communication" min={0} max={20} step={0.5} value={t1} displayValue={`${t1} hrs/wk`} valueColor="text-primary" onChange={setT1} />
              <Slider id="t2" label="Estimates &amp; quoting" min={0} max={20} step={0.5} value={t2} displayValue={`${t2} hrs/wk`} valueColor="text-primary" onChange={setT2} />
              <Slider id="t3" label="Scheduling &amp; follow-ups" min={0} max={20} step={0.5} value={t3} displayValue={`${t3} hrs/wk`} valueColor="text-primary" onChange={setT3} />
              <Slider id="t4" label="Reporting &amp; admin" min={0} max={20} step={0.5} value={t4} displayValue={`${t4} hrs/wk`} valueColor="text-primary" onChange={setT4} />
              <Slider id="t5" label="Content &amp; marketing" min={0} max={20} step={0.5} value={t5} displayValue={`${t5} hrs/wk`} valueColor="text-primary" onChange={setT5} />
            </div>
          </div>
        </div>
      </div>

      {/* Output */}
      <div className="bg-surface-container-low border border-brand-orange/20 rounded-3xl p-8 flex flex-col neural-glow">
        <h3 className="font-headline text-lg font-bold text-on-surface mb-8">Your AI Opportunity</h3>
        <div className="space-y-6 flex-1">
          <div className="bg-surface-container-highest rounded-2xl p-5">
            <div className="text-xs text-on-surface-variant uppercase tracking-widest mb-2">Hours per week saved</div>
            <div className="font-headline text-4xl font-bold text-brand-orange">{savedWk.toFixed(1)} hrs</div>
            <div className="text-xs text-on-surface-variant mt-1">Based on 60% AI automation rate</div>
          </div>
          <div className="bg-surface-container-highest rounded-2xl p-5">
            <div className="text-xs text-on-surface-variant uppercase tracking-widest mb-2">Hours per year saved</div>
            <div className="font-headline text-4xl font-bold text-on-surface">{Math.round(savedYr).toLocaleString()} hrs</div>
            <div className="text-xs text-on-surface-variant mt-1">Time you get back</div>
          </div>
          <div className="bg-surface-container-highest rounded-2xl p-5">
            <div className="text-xs text-on-surface-variant uppercase tracking-widest mb-2">Dollar value per year</div>
            <div className="font-headline text-4xl font-bold text-primary">${Math.round(dollarYr).toLocaleString()}</div>
            <div className="text-xs text-on-surface-variant mt-1">At your team&apos;s average wage</div>
          </div>
          <div className="bg-surface-container-highest rounded-2xl p-5">
            <div className="text-xs text-on-surface-variant uppercase tracking-widest mb-2">Weeks to ROI on the audit</div>
            <div className="font-headline text-4xl font-bold text-on-surface">
              {roiWeeks !== null ? `${roiWeeks.toFixed(1)} wks` : "—"}
            </div>
            <div className="text-xs text-on-surface-variant mt-1">$1,500 &divide; weekly value saved</div>
          </div>
        </div>
        <div className="mt-8">
          <Link
            href="/ai-audit"
            className="kinetic-gradient text-white font-bold px-6 py-4 rounded-xl text-sm flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform neural-glow"
          >
            Book Your AI Audit &mdash; $1,500
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
          <p className="text-center text-xs text-on-surface-variant mt-3">Free 30-min discovery call first. No commitment.</p>
        </div>
      </div>
    </div>
  );
}
