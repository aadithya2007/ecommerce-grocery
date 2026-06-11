import ProductCard from "./cards/ProductCard";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { apiRequest } from "../api";
import "../CSS/ShopPage.css";

function ShopPage() {
  const { categoryId } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    async function loadProducts() {
      const params = [];
      if (categoryId) params.push(`category=${categoryId}`);
      const searchTerm = new URLSearchParams(location.search).get("search");
      if (searchTerm) params.push(`search=${encodeURIComponent(searchTerm)}`);

      const path = "/products" + (params.length ? `?${params.join("&")}` : "");

      // Fetch products and categories in parallel. Use categories to resolve the
      // selected category name (more reliable than using the first product).
      const [data, allCategories] = await Promise.all([
        apiRequest(path),
        apiRequest('/categories'),
      ]);

      setProducts(data);

      if (categoryId) {
        const cat = allCategories.find((c) => c.id === categoryId || c._id === categoryId);
        setCategoryName(cat?.name || "");
      } else {
        setCategoryName("");
      }
    }

    loadProducts().catch(() => {
      setProducts([]);
      setCategoryName("");
    });
  }, [categoryId, location.search]);

  return (
    <main className="page shop-page">
      <section className="page-hero centered">
        <h1>{categoryName || "Fresh Products"}</h1>
        <p>Choose from our wide range of farm-fresh groceries.</p>
      </section>

      <section className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
        {products.length === 0 && <p>No products found.</p>}
      </section>
    </main>
  );
}

export default ShopPage;
