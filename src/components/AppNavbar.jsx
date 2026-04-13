import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Categories", to: "/categories" },
];

export default function AppNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-stone-50/85 backdrop-blur-xl">
      <div className="shell flex items-center justify-between py-4">
        <Link to="/" className="text-lg font-semibold tracking-[0.2em] text-slate-900 uppercase">
          Polygenic <span className="text-rose-500">RiskScore</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? "text-slate-950" : "text-slate-500 hover:text-slate-900"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
