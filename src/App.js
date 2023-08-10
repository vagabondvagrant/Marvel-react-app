import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/MainPage";
import { Marvel } from "./Components/Marvel";
import "./styles.css";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      {" "}
      {/* Wrap everything within a single parent element */}
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path=":id" element={<Marvel />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
