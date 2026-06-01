import { Link, useNavigate } from "react-router-dom";
import "../CSS/AuthPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email").trim();
    const password = formData.get("password");
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {
      sessionStorage.setItem("loggedInUser", email);
      alert("Login Successful!");
      navigate("/");
      return;
    }

    alert("Invalid Email or Password.");
  };

  return (
    <main className="page auth-page login-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Login To Your Account</h1>
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p>
          New User? <Link to="/register">Register</Link>
        </p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </form>
    </main>
  );
}

export default LoginPage;
