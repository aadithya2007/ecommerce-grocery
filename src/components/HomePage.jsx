import { Link } from "react-router-dom";
import CategoryCard from "./cards/CategoryCard";
import ProductCard from "./cards/ProductCard";
import { categories, featuredProducts } from "../data/storeData";
import "../CSS/HomePage.css";

function HomePage() {
  return (
    <main className="page home-page">
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">100% Organic and Fresh</p>
          <h1>
            Fresh Groceries
            <br />
            Delivered to Your Doorstep
          </h1>
          <p>
            Handpicked farm fresh products delivered fast and safe to your
            home.
          </p>
          <div className="button-row">
            <Link className="primary-btn" to="/shop">
              Shop Now
            </Link>
            <Link className="secondary-btn" to="/categories">
              Explore Categories
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={categories[1].image} alt="Fresh vegetables" />
        </div>
      </section>

      <section className="section">
        <h2>Shop by Categories</h2>
        <div className="category-container">
          {categories.slice(0, 7).map((category) => (
            <CategoryCard key={category.name} category={category} compact />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Popular Products</h2>
        <div className="product-container">
          {featuredProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.name} product={product} simple />
          ))}
        </div>
      </section>

      <section className="offer-strip">
        <h2>Get up to 50% off on your first order</h2>
        <Link className="light-btn" to="/offers">
          Shop Now
        </Link>
      </section>
    </main>
  );
}

export default HomePage;
