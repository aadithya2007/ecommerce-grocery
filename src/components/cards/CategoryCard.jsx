import "../../CSS/Cards.css";

function CategoryCard({ category, compact = false }) {
  return (
    <article className={compact ? "category-card compact" : "category-card"}>
      <img src={category.image} alt={category.name} />
      <h3>{category.name}</h3>
    </article>
  );
}

export default CategoryCard;
