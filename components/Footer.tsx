import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/10 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="block mb-3">
              <Image
                src="/logo-reversed.png"
                alt="Applied AI Works"
                width={180}
                height={36}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
              AI consulting for service businesses and skilled trades in West Michigan. Practical tools. Real results. No technical background required.
            </p>
            <a href="mailto:josh@appliedaiworks.com" className="text-xs text-brand-orange hover:underline">
              josh@appliedaiworks.com
            </a>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/ai-audit" className="text-sm text-on-surface-variant hover:text-brand-orange transition-colors">AI Audit + Roadmap</Link></li>
              <li><Link href="/services" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">AI Training</Link></li>
              <li><Link href="/services" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">AI Implementation</Link></li>
              <li><Link href="/services" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Monthly AI Advisor</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface mb-4">Industries</h4>
            <ul className="space-y-3">
              <li><Link href="/industries/hvac" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">HVAC</Link></li>
              <li><Link href="/industries/plumbing" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Plumbing</Link></li>
              <li><Link href="/industries/landscaping" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Landscaping</Link></li>
              <li><Link href="/industries/construction" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Construction</Link></li>
              <li><Link href="/industries/cleaning" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Cleaning</Link></li>
              <li><Link href="/industries/auto-repair" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Auto Repair</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">About Josh</Link></li>
              <li><Link href="/contact" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Book a Free Call</Link></li>
              <li><Link href="/roi-calculator" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">ROI Calculator</Link></li>
              <li><Link href="/faq" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-outline-variant/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs text-on-surface-variant">&copy; 2026 Applied AI Works. All rights reserved.</span>
          <span className="text-xs text-on-surface-variant">West Michigan &middot; Serving service businesses statewide</span>
        </div>
      </div>
    </footer>
  );
}
