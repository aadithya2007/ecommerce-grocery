import { Link, useNavigate } from "react-router-dom";
import "../CSS/AuthPage.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

function RegisterPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email").trim();
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (localStorage.getItem("email") === email) {
      alert("Email already registered.");
      return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <main className="page auth-page register-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Create Your Account</h1>
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </main>
  );
}

export default RegisterPage;
