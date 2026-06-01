import { Link } from "react-router-dom";
import "../CSS/AuthPage.css";

function ForgotPasswordPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Password reset link sent to your email address.");
    event.currentTarget.reset();
  };

  return (
    <main className="page auth-page forgot-password-page">
      <form className="auth-card forgot-card" onSubmit={handleSubmit}>
        <h1>Forgot Password?</h1>
        <p>
          Enter your registered email address below. We will send you a password
          reset link.
        </p>
        <input
          name="email"
          type="email"
          placeholder="Enter your Email Address"
          required
        />
        <button type="submit">Send Reset Link</button>
        <Link to="/login">Back to Login</Link>
      </form>
    </main>
  );
}

export default ForgotPasswordPage;
