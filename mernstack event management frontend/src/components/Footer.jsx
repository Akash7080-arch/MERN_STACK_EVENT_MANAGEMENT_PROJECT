import React, { useState } from "react";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("green");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignup = async () => {
    if (!isValidEmail(email)) {
      setMessage("❌ Please enter a valid email address.");
      setMessageColor("red");
      return;
    }

    try {
      const response = await axios.post(
        "https://mern-stack-event.onrender.com/api/v2/newsletter", // ✅ Correct endpoint
        { email },
        { withCredentials: true }
      );

      if (response.status === 200) {
        setMessage("✅ Signup successful! Please check your email.");
        setMessageColor("green");
        setEmail("");
      } else {
        setMessage("❌ Something went wrong. Try again.");
        setMessageColor("red");
      }
    } catch (error) {
      console.error("Email signup error:", error);
      setMessage("❌ Error sending email. Please try again later.");
      setMessageColor("red");
    }
  };

  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>KING's</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>Newsletter</label>
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
