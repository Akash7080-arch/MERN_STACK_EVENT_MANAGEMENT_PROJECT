import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("green");

  const isValidEmail = (email) => {
    // Simple regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignup = () => {
    if (!isValidEmail(email)) {
      setMessage("❌ Please enter a valid email address.");
      setMessageColor("red");
      return;
    }

    // Simulate a signup request (replace with real API call if needed)
    setTimeout(() => {
      setMessage("✅ Signup successful! Thank you for signup.");
      setMessageColor("green");
      setEmail(""); // Clear input after signup
    }, 1000);
  };

  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>KING's</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                color: "white",
                backgroundColor: "black",
                border: "1px solid white",
                padding: "8px",
              }}
            />
            <button
              onClick={handleSignup}
              style={{
                backgroundColor: "white",
                color: "black",
                border: "none",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              Signup
            </button>
          </div>
          <p>Sign up with your email address to receive news and updates!</p>
          {message && (
            <p style={{ color: messageColor, fontWeight: "bold" }}>{message}</p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
