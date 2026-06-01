import { Link } from "react-router-dom";
import { offers } from "../data/storeData";
import "../CSS/OffersPage.css";

function OffersPage() {
  return (
    <main className="page offers-page">
      <section className="page-hero centered">
        <h1>Special Offers</h1>
        <p>Save more on your favorite groceries.</p>
      </section>

      <section className="offer-container">
        {offers.map((offer) => (
          <article className="offer-card" key={offer.title}>
            <h2>{offer.title}</h2>
            <p>{offer.text}</p>
            <Link className="light-btn" to="/shop">
              {offer.action}
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default OffersPage;
