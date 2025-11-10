import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const fullName = "Okta Azhar Ramayansa";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150); 

  useEffect(() => {
    let timer;

    if (!isDeleting && text.length < fullName.length) {
      
      timer = setTimeout(() => {
        setText(fullName.substring(0, text.length + 1));
      }, speed);
    } else if (isDeleting && text.length > 0) {
      
      timer = setTimeout(() => {
        setText(fullName.substring(0, text.length - 1));
      }, 100);
    } else if (text.length === fullName.length && !isDeleting) {
      
      timer = setTimeout(() => setIsDeleting(true), 1000);
    } else if (text.length === 0 && isDeleting) {
      
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <div className="container">
      <div className="card">
        <img
          src={`${process.env.PUBLIC_URL}/profile.jpg`}
          alt="Okta Azhar"
          className="profile-img"
        />
        <h1 className="name">
          {text}
          <span className="cursor">|</span>
        </h1>
        <p className="status">💻 Mahasiswa | Palembang | Test Demo React 🚀</p>

        <div className="socials">
          <a href="https://github.com/OktaAzr22" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="">Email</a>
        </div>
      </div>
    </div>
  );
}

export default App;
