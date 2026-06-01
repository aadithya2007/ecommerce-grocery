import { Link } from "react-router-dom";
import { categories, faqs } from "../data/storeData";
import "../CSS/FaqPage.css";

function FaqPage() {
  return (
    <main className="page faq-page">
      <section className="split-hero">
        <div className="hero-text">
          <h1>VegiMart FAQ</h1>
          <p>Frequently asked questions about our grocery service.</p>
          <Link className="primary-btn" to="/shop">
            Shop Fresh
          </Link>
        </div>
        <div className="hero-image">
          <img src={categories[1].image} alt="Fresh vegetables" />
        </div>
      </section>

      <section className="faq-list">
        {faqs.map((faq) => (
          <details className="faq-item" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>
    </main>
  );
}

export default FaqPage;
