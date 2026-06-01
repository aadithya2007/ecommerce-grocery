import dairy from "../Images/dairy.png";
import drink from "../Images/drink.png";
import fruits from "../Images/fruits.png";
import pulses from "../Images/pulses.png";
import snack from "../Images/snack.png";
import selfcare from "../Images/sselfcare.png";
import vegetables from "../Images/vegetables.png";

export const categories = [
  { name: "Fresh Fruits", image: fruits },
  { name: "Vegetables", image: vegetables },
  { name: "Dairy Products", image: dairy },
  { name: "Rice & Grains", image: pulses },
  { name: "Snacks", image: snack },
  { name: "Beverages", image: drink },
  { name: "Self Care", image: selfcare },
  { name: "Daily Essentials", image: pulses },
];

export const featuredProducts = [
  { name: "Fresh Apples", price: "Rs. 120 / kg", image: fruits },
  { name: "Bananas", price: "Rs. 60 / dozen", image: fruits },
  { name: "Tomatoes", price: "Rs. 40 / kg", image: vegetables },
  { name: "Potatoes", price: "Rs. 35 / kg", image: vegetables },
  { name: "Fresh Milk", price: "Rs. 55 / litre", image: dairy },
  { name: "Healthy Snacks", price: "Rs. 80", image: snack },
];

export const offers = [
  {
    title: "50% OFF",
    text: "On your first order above Rs. 999",
    action: "Claim Offer",
  },
  {
    title: "Buy 1 Get 1",
    text: "Fresh fruits collection",
    action: "Shop Now",
  },
  {
    title: "30% OFF",
    text: "Dairy products",
    action: "Grab Deal",
  },
  {
    title: "Free Delivery",
    text: "Orders above Rs. 500",
    action: "Order Now",
  },
];

export const faqs = [
  {
    question: "How does VegiMart deliver fresh groceries?",
    answer:
      "VegiMart sources fresh vegetables, fruits, and daily essentials directly from trusted local farms and suppliers. Every order is packed carefully to maintain freshness and quality during transportation.",
  },
  {
    question: "What areas does VegiMart deliver to?",
    answer:
      "VegiMart currently delivers to selected cities and nearby regions. Customers can enter their location or PIN code to check delivery availability.",
  },
  {
    question: "How can I place an order on VegiMart?",
    answer:
      "Browse products, add items to your cart, and confirm checkout from your account. Order updates are sent during processing, packing, and delivery.",
  },
];
