import React, { useEffect, useState } from "react";
import axios from "axios";
import InventoryItem from "./InventoryItem";

const InventoryList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get("http://localhost:5000/api/inventory");
      setItems(res.data);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Inventory List</h2>
      {items.map((item) => (
        <InventoryItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default InventoryList;
