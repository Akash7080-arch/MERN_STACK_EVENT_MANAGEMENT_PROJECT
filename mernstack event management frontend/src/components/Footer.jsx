import React from "react";

const Footer = () => {
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
  style={{
    color: "white",
    backgroundColor: "black",
    border: "1px solid white",
    padding: "8px"
  }}
/>

<button
  style={{
    backgroundColor: "white",
    color: "black",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer"
  }}
>
  Signup
</button>

          </div>
          <p>Sign up with your email address to receice news and updates!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;