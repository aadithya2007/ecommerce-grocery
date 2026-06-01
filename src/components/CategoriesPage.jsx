import CategoryCard from "./cards/CategoryCard";
import { categories } from "../data/storeData";
import "../CSS/CategoriesPage.css";

function CategoriesPage() {
  return (
    <main className="page categories-page">
      <section className="page-hero centered">
        <h1>Shop by Categories</h1>
        <p>
          Explore fresh groceries and daily essentials carefully selected for
          your family.
        </p>
      </section>

      <section className="categories-grid">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </section>
    </main>
  );
}

export default CategoriesPage;
