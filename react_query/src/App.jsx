import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Posts from "./pages/Posts";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
