import "../../CSS/Cards.css";

function ProductCard({ product, simple = false }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      {!simple && <h3>{product.name}</h3>}
      {!simple && <p>{product.price}</p>}
      {!simple && <button type="button">Add to Cart</button>}
    </article>
  );
}

export default ProductCard;
