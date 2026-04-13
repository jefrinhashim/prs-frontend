import AppFooter from "../components/AppFooter";
import AppNavbar from "../components/AppNavbar";
import CategoryCard from "../components/CategoryCard";
import { categories } from "../data/appData";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fbf7f2_0%,#f4f0eb_55%,#edf3f4_100%)]">
      <AppNavbar />
      <section className="shell py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Report coverage</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950">
            Explore every category layout
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            The old multi-page frontend is now organized into reusable React pages with shared navigation and modular report shells.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </div>
      </section>
      <AppFooter />
    </div>
  );
}
