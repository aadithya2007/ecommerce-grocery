import ProductCard from "./cards/ProductCard";
import { featuredProducts } from "../data/storeData";
import "../CSS/ShopPage.css";

function ShopPage() {
  return (
    <main className="page shop-page">
      <section className="page-hero centered">
        <h1>Fresh Products</h1>
        <p>Choose from our wide range of farm-fresh groceries.</p>
      </section>

      <section className="product-grid">
        {featuredProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </section>
    </main>
  );
}

export default ShopPage;
