import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI Consulting by Industry — Applied AI Works",
  description:
    "Applied AI Works helps HVAC, plumbing, landscaping, construction, cleaning, and auto repair businesses in West Michigan find where AI saves real time and money.",
};

const industries = [
  {
    name: "HVAC",
    href: "/industries/hvac",
    icon: "thermostat",
    description: "Save hours on scheduling, follow-ups, and estimates. Keep techs in the field, not buried in paperwork.",
  },
  {
    name: "Plumbing",
    href: "/industries/plumbing",
    icon: "plumbing",
    description: "Faster dispatch, automated service reminders, and AI-assisted quotes that go out the same day.",
  },
  {
    name: "Landscaping",
    href: "/industries/landscaping",
    icon: "yard",
    description: "Route optimization, seasonal proposal automation, and follow-up sequences that run while you're on the job.",
  },
  {
    name: "Construction",
    href: "/industries/construction",
    icon: "construction",
    description: "Project documentation, subcontractor communication, and bid follow-ups without the admin grind.",
  },
  {
    name: "Cleaning",
    href: "/industries/cleaning",
    icon: "cleaning_services",
    description: "Recurring client communication, review requests, and schedule management handled automatically.",
  },
  {
    name: "Auto Repair",
    href: "/industries/auto-repair",
    icon: "car_repair",
    description: "Customer follow-ups, service reminders, and parts research faster than your competition.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.appliedaiworks.com" },
          { name: "Industries", url: "https://www.appliedaiworks.com/industries" },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-xs font-medium text-on-surface-variant mb-8">
            <span className="material-symbols-outlined text-brand-orange" style={{ fontSize: "14px" }}>factory</span>
            Industries
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
            AI built for the trades, not tech companies
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
            AI tools designed for enterprise software don&apos;t map to a 12-person HVAC company or a landscaping crew. We work with service businesses specifically, so the advice is practical from the start.
          </p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6 flex flex-col hover:border-brand-orange/30 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-brand-orange/10 rounded-xl p-2.5">
                    <span
                      className="material-symbols-outlined text-brand-orange"
                      style={{ fontSize: "22px" }}
                    >
                      {industry.icon}
                    </span>
                  </div>
                  <h2 className="font-headline font-bold text-on-surface text-lg group-hover:text-brand-orange transition-colors">
                    {industry.name}
                  </h2>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed flex-1">
                  {industry.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs text-brand-orange font-semibold">
                  Learn more
                  <span className="material-symbols-outlined" style={{ fontSize: "12px" }}>arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure which one */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-8">
            <span className="material-symbols-outlined text-brand-orange mb-4 block" style={{ fontSize: "32px", fontVariationSettings: "'FILL' 1" }}>
              help
            </span>
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">
              Not sure if yours is on the list?
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              These six are where we have the most experience, but the approach works for most service businesses. If you run crews, have repeat customers, and spend time on admin work, there are probably hours to recover.
            </p>
            <Link
              href="/contact"
              className="kinetic-gradient text-white font-bold px-8 py-4 rounded-xl text-sm inline-flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform neural-glow"
            >
              Book a free discovery call
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Ready to find your hours?
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg">
            The AI Audit gives you a specific list of what to build and where to start. No generalities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-audit"
              className="kinetic-gradient text-white font-bold px-8 py-4 rounded-xl text-sm inline-flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform neural-glow"
            >
              Book Your AI Audit &mdash; $1,500
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link
              href="/contact"
              className="bg-surface-container-low border border-outline-variant/20 text-on-surface font-semibold px-8 py-4 rounded-xl text-sm inline-flex items-center justify-center gap-2 hover:border-brand-orange/40 transition-colors"
            >
              Start with a free call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
