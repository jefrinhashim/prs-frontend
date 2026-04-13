import { useMemo, useState } from "react";

const summaryCards = [
  {
    title: "Allergies",
    value: "55%",
    note: "1 high-priority trait",
    tone: "from-emerald-300 to-emerald-500",
  },
  {
    title: "Dermatological",
    value: "82%",
    note: "2 very-high risks",
    tone: "from-rose-300 to-orange-400",
  },
  {
    title: "Aesthetics",
    value: "48%",
    note: "hydration is protective",
    tone: "from-amber-200 to-yellow-400",
  },
  {
    title: "Markers",
    value: "63%",
    note: "KLK7 elevated",
    tone: "from-sky-300 to-cyan-500",
  },
];

const riskCategories = [
  {
    id: "skin-cancer",
    title: "Skin Cancer Risk",
    level: "Very High",
    prs: "2.47",
    category: "Dermatological",
    action: "Annual dermatology screening required",
    description:
      "MC1R, PTCH1, and TP53 variants elevate non-melanoma skin cancer susceptibility and justify aggressive UV protection.",
    tags: ["MC1R variant", "PTCH1", "TP53"],
  },
  {
    id: "inflammatory-skin",
    title: "Inflammatory Skin",
    level: "High",
    prs: "1.94",
    category: "Dermatological",
    action: "Fragrance-free products",
    description:
      "Psoriasis and rosacea-linked variants support a calming routine focused on barrier repair and trigger reduction.",
    tags: ["HLA-C*06:02", "IL-23 pathway"],
  },
  {
    id: "skin-aesthetics",
    title: "Skin Aesthetics",
    level: "Moderate",
    prs: "1.33",
    category: "Aesthetics",
    action: "Retinoid-friendly profile",
    description:
      "Aging-related risk is moderate, but hydration and elasticity markers provide meaningful protective balance.",
    tags: ["Collagen", "Elastin+"],
  },
];

const viewMeta = {
  overview: {
    title: "Overview",
    subtitle: "Genetic skin health summary",
  },
  allergies: {
    title: "Allergies",
    subtitle: "Sensitivity and immune-response traits",
  },
  dermatological: {
    title: "Dermatological",
    subtitle: "Disease predispositions and inflammatory risk",
  },
  aesthetics: {
    title: "Aesthetics",
    subtitle: "Visible skin quality and aging traits",
  },
  markers: {
    title: "Markers",
    subtitle: "Barrier, hydration, and biomarker set points",
  },
};

const ancestryGroups = [
  "African",
  "American",
  "East Asian",
  "European",
  "South Asian",
];

function buildAncestryProfile(risks) {
  return ancestryGroups.map((ancestry, index) => ({
    ancestry,
    risk: risks[index],
  }));
}

const traits = [
  {
    id: "eczema",
    name: "Eczema Risk",
    view: "allergies",
    level: "High",
    prs: "1.76",
    percentile: "79th percentile",
    width: "72%",
    description:
      "Barrier and immune signaling variants point to elevated eczema susceptibility, especially during climate swings.",
    ancestryProfile: buildAncestryProfile([
      "Low",
      "Moderate",
      "Low",
      "High",
      "Moderate",
    ]),
  },
  {
    id: "mosquito",
    name: "Mosquito Bite Sensitivity",
    view: "allergies",
    level: "Moderate",
    prs: "1.18",
    percentile: "61st percentile",
    width: "51%",
    description:
      "Histamine-response genetics indicate a moderate tendency toward exaggerated bite inflammation and itchiness.",
    ancestryProfile: buildAncestryProfile([
      "Very Low",
      "Low",
      "Moderate",
      "Moderate",
      "Low",
    ]),
  },
  {
    id: "skin-cancer",
    name: "Non-Melanoma Skin Cancer",
    view: "dermatological",
    level: "Very High",
    prs: "2.47",
    percentile: "96th percentile",
    width: "92%",
    description:
      "UV damage-repair variants significantly increase risk, making consistent screening and high-SPF protection important.",
    ancestryProfile: buildAncestryProfile([
      "Low",
      "Moderate",
      "Low",
      "Very High",
      "Moderate",
    ]),
  },
  {
    id: "hidradenitis",
    name: "Hidradenitis Suppurativa",
    view: "dermatological",
    level: "High",
    prs: "1.72",
    percentile: "78th percentile",
    width: "66%",
    description:
      "Inflammatory pathway variants suggest elevated chronic follicular inflammation risk.",
    ancestryProfile: buildAncestryProfile([
      "Moderate",
      "Low",
      "Low",
      "High",
      "Moderate",
    ]),
  },
  {
    id: "sunburn",
    name: "Sunburn Sensitivity",
    view: "aesthetics",
    level: "High",
    prs: "1.96",
    percentile: "86th percentile",
    width: "76%",
    description:
      "Melanin and MC1R-linked variants predict stronger erythema response after UV exposure.",
    ancestryProfile: buildAncestryProfile([
      "Low",
      "Moderate",
      "Very Low",
      "Very High",
      "Low",
    ]),
  },
  {
    id: "hydration",
    name: "Skin Hydration",
    view: "aesthetics",
    level: "Very Low",
    prs: "0.45",
    percentile: "13th percentile",
    width: "14%",
    description:
      "Aquaporin and moisture-retention genes are favorable, supporting strong baseline hydration.",
    ancestryProfile: buildAncestryProfile([
      "High",
      "Moderate",
      "Low",
      "Very Low",
      "Moderate",
    ]),
  },
  {
    id: "kallikrein",
    name: "Kallikrein-7 Levels",
    view: "markers",
    level: "High",
    prs: "1.82",
    percentile: "83rd percentile",
    width: "70%",
    description:
      "Elevated KLK7 activity can weaken the skin barrier and increase sensitivity if not managed carefully.",
    ancestryProfile: buildAncestryProfile([
      "Moderate",
      "Low",
      "Moderate",
      "High",
      "Low",
    ]),
  },
  {
    id: "ceramide",
    name: "Ceramide Levels",
    view: "markers",
    level: "Very Low",
    prs: "0.41",
    percentile: "10th percentile",
    width: "11%",
    description:
      "Your ceramide synthesis profile is strongly protective and supports excellent barrier resilience.",
    ancestryProfile: buildAncestryProfile([
      "High",
      "Moderate",
      "Low",
      "Very Low",
      "Low",
    ]),
  },
];

const recommendations = [
  {
    title: "Sun Protection Protocol",
    priority: "Critical Priority",
    tone: "bg-rose-50 text-rose-700 ring-rose-200",
    body:
      "Your cancer and sunburn scores make rigorous daily photoprotection the highest-leverage intervention.",
  },
  {
    title: "Annual Dermatology Screening",
    priority: "High Priority",
    tone: "bg-orange-50 text-orange-700 ring-orange-200",
    body:
      "Use annual full-body exams and mole tracking to detect changes earlier and reduce downstream risk.",
  },
  {
    title: "Barrier-First Skincare",
    priority: "Moderate Priority",
    tone: "bg-amber-50 text-amber-700 ring-amber-200",
    body:
      "A calming routine with niacinamide, ceramides, and fragrance-free formulas fits your inflammatory profile well.",
  },
];

function levelClasses(level) {
  const tones = {
    "Very High": "bg-rose-500/15 text-rose-700 ring-rose-200",
    High: "bg-orange-500/15 text-orange-700 ring-orange-200",
    Moderate: "bg-amber-500/15 text-amber-700 ring-amber-200",
    Low: "bg-emerald-500/15 text-emerald-700 ring-emerald-200",
    "Very Low": "bg-sky-500/15 text-sky-700 ring-sky-200",
  };

  return tones[level] ?? "bg-slate-100 text-slate-700 ring-slate-200";
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

export default function PrsDashboard() {
  const [activeView, setActiveView] = useState("overview");
  const [expandedRisk, setExpandedRisk] = useState("skin-cancer");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const visibleTraits = useMemo(() => {
    const viewTraits =
      activeView === "overview"
        ? traits
        : traits.filter((trait) => trait.view === activeView);

    return viewTraits.filter((trait) => {
      const matchesSearch = trait.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());
      const matchesFilter =
        selectedFilter === "All" || trait.level === selectedFilter;

      return matchesSearch && matchesFilter;
    });
  }, [activeView, search, selectedFilter]);

  const meta = viewMeta[activeView];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(248,215,218,0.55),_transparent_28%),linear-gradient(180deg,#fffaf6_0%,#f7f3ee_45%,#eef4f5_100%)] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <aside
          className={`fixed inset-y-4 left-4 z-40 w-[280px] rounded-[2rem] border border-white/70 bg-slate-950/90 p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl transition-transform duration-300 lg:static lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-[120%]"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-[1.35rem] bg-white/10 text-lg font-semibold">
                p
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                  Genomic Report
                </p>
                <h1 className="text-xl font-semibold tracking-tight">prs</h1>
              </div>
            </div>
            <button
              type="button"
              className="rounded-full bg-white/10 px-3 py-1 text-sm lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              Close
            </button>
          </div>

          <div className="mt-8 rounded-[1.75rem] bg-white/8 p-4 ring-1 ring-white/10">
            <p className="text-sm text-white/60">Alex Laurent</p>
            <p className="mt-1 text-lg font-semibold">DG-2024-0847</p>
            <p className="mt-3 text-sm text-white/70">
              34 traits analyzed across allergies, disease risk, aesthetics,
              and biomarker set points.
            </p>
          </div>

          <label className="mt-6 block">
            <span className="mb-2 block text-xs uppercase tracking-[0.28em] text-white/45">
              Search traits
            </span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Try skin cancer or hydration"
              className="w-full rounded-[1.25rem] border border-white/10 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
            />
          </label>

          <nav className="mt-8 space-y-2">
            {Object.entries(viewMeta).map(([key, item]) => (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setActiveView(key);
                  setSidebarOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-[1.25rem] px-4 py-3 text-left text-sm transition ${
                  activeView === key
                    ? "bg-white text-slate-950"
                    : "bg-white/5 text-white/72 hover:bg-white/10"
                }`}
              >
                <span>{item.title}</span>
                <span className="text-xs opacity-60">
                  {key === "overview"
                    ? "34"
                    : traits.filter((trait) => trait.view === key).length}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        <div className="flex-1">
          <div className="mb-4 flex items-center justify-between rounded-[2rem] border border-white/70 bg-white/75 px-5 py-4 shadow-[0_16px_40px_rgba(148,163,184,0.16)] backdrop-blur-xl">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
                {meta.title}
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                {meta.subtitle}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="rounded-[1.1rem] border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                Menu
              </button>
              <select
                value={selectedFilter}
                onChange={(event) => setSelectedFilter(event.target.value)}
                className="rounded-[1.1rem] border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 outline-none"
              >
                {["All", "Very High", "High", "Moderate", "Low", "Very Low"].map(
                  (level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ),
                )}
              </select>
            </div>
          </div>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {activeView === "overview" ? (
              <article className="md:col-span-2 xl:col-span-2 rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(51,65,85,0.92))] p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.22)]">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-white/45">
                      Overview summary
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                      Your report is led by dermatological and allergy risk.
                    </h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80">
                    34 traits analyzed
                  </div>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
                  The strongest signals in this profile are concentrated in inflammatory skin disease, UV-related damage,
                  and immune reactivity. Barrier-supportive care, strict sun protection, and early dermatologist follow-up
                  are the biggest high-impact actions from this overview.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">Highest focus</p>
                    <p className="mt-2 text-base font-medium text-white">Dermatological</p>
                    <p className="mt-1 text-sm text-white/65">2 very-high risks need active prevention.</p>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">Immediate habit</p>
                    <p className="mt-2 text-base font-medium text-white">UV and barrier care</p>
                    <p className="mt-1 text-sm text-white/65">Daily SPF and low-irritation skincare should lead the plan.</p>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">Clinical follow-up</p>
                    <p className="mt-2 text-base font-medium text-white">Annual review</p>
                    <p className="mt-1 text-sm text-white/65">Use the report as a guide for earlier skin screening.</p>
                  </div>
                </div>
              </article>
            ) : null}
            {summaryCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-[0_18px_50px_rgba(148,163,184,0.14)] backdrop-blur-xl"
              >
                <div
                  className={`mb-5 h-24 rounded-[1.6rem] bg-gradient-to-br ${card.tone} p-4 text-slate-950 shadow-inner`}
                >
                  <p className="text-sm font-medium/none">{card.title}</p>
                  <p className="mt-5 text-3xl font-semibold tracking-tight">
                    {card.value}
                  </p>
                </div>
                <p className="text-sm text-slate-600">{card.note}</p>
              </article>
            ))}
          </section>

          <section className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-[2.2rem] border border-white/80 bg-white/80 p-6 shadow-[0_18px_50px_rgba(148,163,184,0.14)] backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Priority risks
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                    Your risk categories
                  </h3>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                  onClick={() => setActiveView("dermatological")}
                >
                  See all
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {riskCategories.map((item) => {
                  const open = expandedRisk === item.id;
                  return (
                    <div
                      key={item.id}
                      className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50/80 p-4"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedRisk(open ? "" : item.id)
                        }
                        className="flex w-full items-center justify-between gap-4 text-left"
                      >
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h4 className="text-lg font-semibold">
                              {item.title}
                            </h4>
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${levelClasses(
                                item.level,
                              )}`}
                            >
                              {item.level}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-slate-500">
                            PRS {item.prs}
                          </p>
                        </div>
                        <span className="text-xl text-slate-400">
                          {open ? "-" : "+"}
                        </span>
                      </button>

                      {open && (
                        <div className="pt-4">
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <p className="mt-4 text-sm leading-6 text-slate-600">
                            {item.description}
                          </p>
                          <p className="mt-4 text-sm font-medium text-slate-800">
                            {item.category} - {item.action}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </article>

            <article className="rounded-[2.2rem] border border-white/80 bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.22)]">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                Snapshot
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                Overall genetic skin risk
              </h3>
              <div className="mt-6 flex items-end gap-3">
                <span className="text-6xl font-semibold leading-none">74</span>
                <span className="pb-2 text-white/55">/100 Moderate risk</span>
              </div>

              <div className="mt-8 space-y-4">
                {summaryCards.map((card) => (
                  <div key={card.title}>
                    <div className="mb-2 flex items-center justify-between text-sm text-white/70">
                      <span>{card.title}</span>
                      <span>{card.value}</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${card.tone}`}
                        style={{ width: card.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="mt-4 rounded-[2.2rem] border border-white/80 bg-white/80 p-6 shadow-[0_18px_50px_rgba(148,163,184,0.14)] backdrop-blur-xl">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Trait library
                </p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                  {activeView === "overview"
                    ? "All trait cards"
                    : `${meta.title} traits`}
                </h3>
              </div>
              <p className="text-sm text-slate-500">
                {visibleTraits.length} matching traits
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {visibleTraits.map((trait) => (
                <article
                  key={trait.id}
                  className="rounded-[1.85rem] border border-slate-200/80 bg-slate-50/80 p-5 transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(148,163,184,0.15)]"
                >
                  <div className="mb-4 h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className={`h-full rounded-full ${
                        trait.level === "Very High"
                          ? "bg-rose-500"
                          : trait.level === "High"
                            ? "bg-orange-400"
                            : trait.level === "Moderate"
                              ? "bg-amber-400"
                              : trait.level === "Low"
                                ? "bg-emerald-400"
                                : "bg-sky-400"
                      }`}
                      style={{ width: trait.width }}
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-lg font-semibold leading-tight">
                      {trait.name}
                    </h4>
                    <span
                      className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ring-1 ${levelClasses(
                        trait.level,
                      )}`}
                    >
                      {trait.level}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {trait.description}
                  </p>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white/85">
                    <div className="grid grid-cols-[0.95fr_1.15fr] border-b border-slate-200 bg-slate-100/80 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      <div className="border-r border-slate-200 px-3 py-2">
                        Ancestry
                      </div>
                      <div className="px-3 py-2">Genetic Risk</div>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {trait.ancestryProfile.map((entry) => (
                        <div
                          key={`${trait.id}-${entry.ancestry}`}
                          className="grid grid-cols-[0.95fr_1.15fr] text-sm text-slate-700"
                        >
                          <div className="border-r border-slate-200 px-3 py-2">
                            {entry.ancestry}
                          </div>
                          <div className="flex items-center justify-between gap-3 px-3 py-2">
                            <span>{entry.risk}</span>
                            <span
                              className={`h-3.5 w-3.5 rounded-full ${ancestryRiskDot(
                                entry.risk,
                              )}`}
                            />
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

          <section className="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="rounded-[2.2rem] border border-white/80 bg-white/80 p-6 shadow-[0_18px_50px_rgba(148,163,184,0.14)] backdrop-blur-xl">
              <p className="text-sm font-medium text-slate-500">
                Distribution
              </p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                Risk mix across all traits
              </h3>
              <div className="mt-8 flex items-center justify-center">
                <div className="grid h-56 w-56 place-items-center rounded-full bg-[conic-gradient(#fb7185_0_18%,#fb923c_18%_37%,#fbbf24_37%_58%,#4ade80_58%_79%,#38bdf8_79%_100%)] p-6 shadow-inner">
                  <div className="grid h-full w-full place-items-center rounded-full bg-white text-center">
                    <div>
                      <p className="text-4xl font-semibold tracking-tight">34</p>
                      <p className="text-sm text-slate-500">traits scored</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  ["Very High", "18%", "bg-rose-500"],
                  ["High", "19%", "bg-orange-400"],
                  ["Moderate", "21%", "bg-amber-400"],
                  ["Low", "21%", "bg-emerald-400"],
                  ["Very Low", "21%", "bg-sky-400"],
                ].map(([label, value, swatch]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-[1.25rem] bg-slate-50 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`h-3 w-3 rounded-full ${swatch}`} />
                      <span className="text-sm font-medium text-slate-700">
                        {label}
                      </span>
                    </div>
                    <span className="text-sm text-slate-500">{value}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2.2rem] border border-slate-200 bg-[linear-gradient(135deg,#14213d_0%,#233b68_46%,#f8efe4_160%)] p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.22)]">
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                Recommendations
              </p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                Best next actions for this profile
              </h3>

              <div className="mt-6 space-y-4">
                {recommendations.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur-sm"
                  >
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${item.tone}`}
                    >
                      {item.priority}
                    </span>
                    <h4 className="mt-3 text-lg font-semibold">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-white/72">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}



