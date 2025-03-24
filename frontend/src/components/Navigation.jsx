// Nav.jsx
import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const Navigation = () => {
    return (
        <nav style={{ display: "flex", gap: "20px", padding: "10px"}}>
            <Link to="/">Inventory</Link>
            <Link to="/add">Add Item</Link>
        </nav>
    );
};

export default Navigation;