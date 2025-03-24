import React, { useState } from "react";
import axios from "axios";

const InventoryForm = () => {
  const [item, setItem] = useState({ name: "", quantity: "", price: "" });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/inventory", item);
    setItem({ name: "", quantity: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Item Name" value={item.name} onChange={handleChange} required />
      <input type="number" name="quantity" placeholder="Quantity" value={item.quantity} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={item.price} onChange={handleChange} required />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default InventoryForm;
