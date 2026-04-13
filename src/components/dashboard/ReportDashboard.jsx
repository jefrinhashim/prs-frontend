import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function badgeTone(level) {
  const tones = {
    "Very High": "bg-rose-500/15 text-rose-700 ring-rose-200",
    High: "bg-orange-500/15 text-orange-700 ring-orange-200",
    Moderate: "bg-amber-500/15 text-amber-700 ring-amber-200",
    Low: "bg-emerald-500/15 text-emerald-700 ring-emerald-200",
    "Very Low": "bg-sky-500/15 text-sky-700 ring-sky-200",
  };

  return tones[level] ?? "bg-slate-100 text-slate-700 ring-slate-200";
}

function fillTone(level) {
  const tones = {
    "Very High": "bg-rose-500",
    High: "bg-orange-400",
    Moderate: "bg-amber-400",
    Low: "bg-emerald-400",
    "Very Low": "bg-sky-400",
  };

  return tones[level] ?? "bg-slate-300";
}

function ancestryRiskDot(level) {
  const tones = {
    "Very High": "bg-rose-500",
    High: "bg-orange-400",
    Moderate: "bg-amber-400",
    Low: "bg-emerald-400",
    "Very Low": "bg-violet-500",
  };

  return tones[level] ?? "bg-slate-400";
}

export default function ReportDashboard({ config }) {
  const [activeView, setActiveView] = useState(config.views[0].key);
  const [expandedRisk, setExpandedRisk] = useState(config.risks[0]?.title ?? "");
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const currentView =
    config.views.find((view) => view.key === activeView) ?? config.views[0];

  const filteredTraits = useMemo(() => {
    return currentView.traits.filter((trait) => {
      const matchesFilter = filter === "All" || trait.level === filter;
      const matchesQuery = trait.name.toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [currentView, filter, query]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(248,215,218,0.45),_transparent_24%),linear-gradient(180deg,#fffaf6_0%,#f5f2ee_48%,#edf4f5_100%)]">
      <div className="shell grid gap-6 py-6 lg:grid-cols-[290px_minmax(0,1fr)]">
        <aside className="glass-card h-fit bg-slate-950/92 p-6 text-white">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-[1.3rem] bg-white/10 text-lg font-semibold">
              p
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">Report</p>
              <h1 className="text-xl font-semibold">{config.reportName}</h1>
            </div>
          </div>

          <div className="mt-8 rounded-[1.75rem] bg-white/10 p-4 ring-1 ring-white/10">
            <p className="text-sm text-white/60">{config.user}</p>
            <p className="mt-1 text-lg font-semibold">{config.userTag}</p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Search traits, switch category layouts, and explore recommendations from one modular dashboard shell.
            </p>
          </div>

          <label className="mt-6 block">
            <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-white/45">
              Search traits
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search this report"
              className="w-full rounded-[1.2rem] border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
            />
          </label>

          <nav className="mt-8 space-y-2">
            {config.views.map((view) => (
              <button
                key={view.key}
                type="button"
                onClick={() => setActiveView(view.key)}
                className={`flex w-full items-center justify-between rounded-[1.2rem] px-4 py-3 text-left text-sm transition ${
                  activeView === view.key
                    ? "bg-white text-slate-950"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                <span>{view.title}</span>
                <span className="text-xs opacity-60">{view.traits.length}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 flex gap-2">
            <Link to="/profile" className="rounded-full bg-white/10 px-4 py-2 text-sm">
              Profile
            </Link>
            <Link to="/categories" className="rounded-full bg-white/10 px-4 py-2 text-sm">
              Categories
            </Link>
          </div>
        </aside>

        <main className="space-y-4">
          <div className="glass-card flex flex-col gap-4 p-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">{currentView.title}</p>
              <h2 className="mt-1 text-3xl font-semibold tracking-tight">{currentView.intro}</h2>
            </div>
            <select
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              className="rounded-[1.1rem] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
            >
              {["All", "Very High", "High", "Moderate", "Low", "Very Low"].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {config.summary.map((item) => (
              <article key={item.title} className="glass-card p-5">
                <div className="rounded-[1.6rem] bg-slate-950 p-5 text-white">
                  <p className="text-sm text-white/60">{item.title}</p>
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <span className="text-4xl font-semibold">{item.value}</span>
                    <span className={`h-4 w-14 rounded-full ${item.tone}`} />
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600">{item.note}</p>
              </article>
            ))}
          </section>

          <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
            <article className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="section-kicker">Priority risks</p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight">Top categories to watch</h3>
                </div>
                <span className="text-sm text-slate-500">{config.risks.length} active callouts</span>
              </div>
              <div className="mt-6 space-y-4">
                {config.risks.map((risk) => {
                  const open = expandedRisk === risk.title;
                  return (
                    <div key={risk.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50/90 p-4">
                      <button
                        type="button"
                        onClick={() => setExpandedRisk(open ? "" : risk.title)}
                        className="flex w-full items-center justify-between gap-4 text-left"
                      >
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h4 className="text-lg font-semibold">{risk.title}</h4>
                            <span className={`pill ${badgeTone(risk.level)}`}>{risk.level}</span>
                          </div>
                          <p className="mt-1 text-sm text-slate-500">PRS {risk.prs}</p>
                        </div>
                        <span className="text-xl text-slate-400">{open ? "-" : "+"}</span>
                      </button>
                      {open && (
                        <div className="pt-4">
                          <div className="flex flex-wrap gap-2">
                            {risk.tags.map((tag) => (
                              <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <p className="mt-4 text-sm leading-6 text-slate-600">{risk.description}</p>
                          <p className="mt-4 text-sm font-medium text-slate-800">
                            {risk.category} - {risk.action}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </article>

            <article className="squircle bg-slate-950 p-6 text-white shadow-card">
              <p className="section-kicker !text-white/45">Snapshot</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight">Overall report score</h3>
              <div className="mt-6 flex items-end gap-3">
                <span className="text-6xl font-semibold leading-none">{config.score}</span>
                <span className="pb-2 text-white/55">/100 {config.scoreLabel}</span>
              </div>
              <div className="mt-8 space-y-4">
                {config.summary.map((item) => (
                  <div key={item.title}>
                    <div className="mb-2 flex items-center justify-between text-sm text-white/70">
                      <span>{item.title}</span>
                      <span>{item.value}</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10">
                      <div className={`h-3 rounded-full ${item.tone}`} style={{ width: item.value }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="glass-card p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-kicker">Category layout</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight">{currentView.title} traits</h3>
              </div>
              <p className="text-sm text-slate-500">{filteredTraits.length} visible cards</p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {filteredTraits.map((trait) => (
                <article key={trait.name} className="rounded-[1.8rem] border border-slate-200 bg-slate-50/80 p-5 transition hover:-translate-y-0.5 hover:shadow-float">
                  <div className="mb-4 h-2 overflow-hidden rounded-full bg-slate-200">
                    <div className={`h-full rounded-full ${fillTone(trait.level)}`} style={{ width: trait.width }} />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-lg font-semibold leading-tight">{trait.name}</h4>
                    <span className={`pill whitespace-nowrap ${badgeTone(trait.level)}`}>{trait.level}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{trait.description}</p>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white/85">
                    <div className="grid grid-cols-[0.95fr_1.15fr] border-b border-slate-200 bg-slate-100/80 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      <div className="border-r border-slate-200 px-3 py-2">Ancestry</div>
                      <div className="px-3 py-2">Genetic Risk</div>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {(trait.ancestryProfile ?? []).map((entry) => (
                        <div key={`${trait.name}-${entry.ancestry}`} className="grid grid-cols-[0.95fr_1.15fr] text-sm text-slate-700">
                          <div className="border-r border-slate-200 px-3 py-2">{entry.ancestry}</div>
                          <div className="flex items-center justify-between gap-3 px-3 py-2">
                            <span>{entry.risk}</span>
                            <span className={`h-3.5 w-3.5 rounded-full ${ancestryRiskDot(entry.risk)}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                    <span>PRS {trait.prs}</span>
                    <span>{trait.percentile}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
            <article className="glass-card p-6">
              <p className="section-kicker">Distribution</p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight">Risk mix across this report</h3>
              <div className="mt-8 flex items-center justify-center">
                <div className="grid h-56 w-56 place-items-center rounded-full bg-[conic-gradient(#fb7185_0_18%,#fb923c_18%_39%,#fbbf24_39%_58%,#4ade80_58%_79%,#38bdf8_79%_100%)] p-6 shadow-inner">
                  <div className="grid h-full w-full place-items-center rounded-full bg-white text-center">
                    <div>
                      <p className="text-4xl font-semibold">34+</p>
                      <p className="text-sm text-slate-500">traits reviewed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  ["Very High", "18%", "bg-rose-500"],
                  ["High", "21%", "bg-orange-400"],
                  ["Moderate", "20%", "bg-amber-400"],
                  ["Low", "19%", "bg-emerald-400"],
                  ["Very Low", "22%", "bg-sky-400"],
                ].map(([label, value, swatch]) => (
                  <div key={label} className="flex items-center justify-between rounded-[1.25rem] bg-slate-50 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className={`h-3 w-3 rounded-full ${swatch}`} />
                      <span className="text-sm font-medium text-slate-700">{label}</span>
                    </div>
                    <span className="text-sm text-slate-500">{value}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="squircle bg-[linear-gradient(135deg,#14213d_0%,#233b68_46%,#f8efe4_160%)] p-6 text-white shadow-card">
              <p className="section-kicker !text-white/45">Recommendations</p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight">Best next actions</h3>
              <div className="mt-6 space-y-4">
                {config.recommendations.map((item) => (
                  <div key={item.title} className="rounded-[1.75rem] bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur-sm">
                    <span className="pill bg-white/90 text-slate-900 ring-white/30">{item.priority}</span>
                    <h4 className="mt-3 text-lg font-semibold">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-white/72">{item.body}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
