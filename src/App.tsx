import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import UserPage from "./pages/user";

function App() {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </Router>
      </body>
    </html>
  );
}

export default App;
