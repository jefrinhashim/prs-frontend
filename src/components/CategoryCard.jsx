import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={category.href}
      className={`group glass-card flex min-h-[280px] flex-col justify-between overflow-hidden bg-gradient-to-br ${category.accent} p-6 transition hover:-translate-y-1 hover:shadow-card`}
    >
      <div className="h-28 w-28 rounded-[2rem] bg-white/70 shadow-inner" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          {category.subtitle}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
          {category.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {category.description}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between text-sm font-semibold text-slate-800">
        <span>Open module</span>
        <span className="transition group-hover:translate-x-1">?</span>
      </div>
    </Link>
  );
}
