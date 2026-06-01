import "../../CSS/Cards.css";

function InfoCard({ title, text, image }) {
  return (
    <article className="info-card">
      {image && <img src={image} alt="" />}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default InfoCard;
