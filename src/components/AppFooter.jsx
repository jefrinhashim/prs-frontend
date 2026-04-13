export default function AppFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/70">
      <div className="shell grid gap-8 py-10 md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold tracking-[0.2em] uppercase text-slate-900">
            Polygenic RiskScore
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Modular genomic reports translated into clear, modern frontend experiences.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Reports
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Health</li>
            <li>Nutrition</li>
            <li>Physical Traits</li>
            <li>Sports</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Company
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Our science</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>info@polyriskscore.com</li>
            <li>Mon-Fri, 8am-6pm</li>
            <li>For informational use only</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
