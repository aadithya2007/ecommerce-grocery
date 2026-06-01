import { categories } from "../data/storeData";
import "../CSS/ContactPage.css";

const contactDetails = [
  ["Phone", "+91 98765 43210"],
  ["Email", "support@vegimart.com"],
  ["Address", "123 Green Street, Farm Valley, Chennai - 600001"],
  ["Working Hours", "Monday - Saturday, 8:00 AM - 9:00 PM"],
];

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thanks for contacting VegiMart. We will get back to you soon.");
    event.currentTarget.reset();
  };

  return (
    <main className="page contact-page">
      <section className="split-hero">
        <div className="hero-text">
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you. Get in touch with VegiMart for any
            questions, support, or feedback.
          </p>
        </div>
        <div className="hero-image">
          <img src={categories[5].image} alt="Fresh drinks" />
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          {contactDetails.map(([title, text]) => (
            <article className="info-box" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="contact-form">
          <h2>Send Message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Write your message..." rows="6" />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <section className="map-section centered">
        <h2>Our Location</h2>
        <div className="map-box">
          <p>123 Green Street, Farm Valley, Chennai - 600001</p>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
