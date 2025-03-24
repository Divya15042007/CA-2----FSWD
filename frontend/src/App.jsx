import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import InventoryForm from "./components/InventoryForm";
import InventoryList from "./components/InventoryList";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<InventoryList />} />
        <Route path="/add" element={<InventoryForm />} />
      </Routes>
    </Router>
  );
};

export default App;
