import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <h2>🌐 Demo chuyển trang với React Router</h2>

        {/* Menu chuyển trang */}
        <nav style={{ marginBottom: 20 }}>
          <Link to="/" style={{ marginRight: 10 }}>🏠 Home</Link>
          <Link to="/about" style={{ marginRight: 10 }}>ℹ️ About</Link>
          <Link to="/contact">📞 Contact</Link>
        </nav>

        {/* Routes để bật/tắt component theo URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h3>Đây là trang Home 🏡</h3>;
}

function About() {
  return <h3>Đây là trang About ℹ️</h3>;
}

function Contact() {
  return <h3>Đây là trang Contact ☎️</h3>;
}

export default App;
