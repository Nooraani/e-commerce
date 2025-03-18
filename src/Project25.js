import React, { useState, useEffect } from "react";

const App1 = () => {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });
  const [newItem, setNewItem] = useState({ title: "", image: "", price: "", brand: "" });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (newItem.title && newItem.image && newItem.price) {
      setItems([...items, newItem]);
      setNewItem({ title: "", image: "", price: "", brand: "" });
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 text-gray-900">
      <h1 className="text-3xl font-bold text-center">Fashion Wishlist</h1>
      <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 mb-2 border"
          value={newItem.title}
          onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-2 mb-2 border"
          value={newItem.image}
          onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          className="w-full p-2 mb-2 border"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Brand (Optional)"
          className="w-full p-2 mb-2 border"
          value={newItem.brand}
          onChange={(e) => setNewItem({ ...newItem, brand: e.target.value })}
        />
        <button
          onClick={addItem}
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Add Item
        </button>
      </div>

      <div className="max-w-md mx-auto mt-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-center p-4 mb-2 bg-white shadow-md rounded-lg">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
            <div className="ml-4 flex-1">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600">${item.price} - {item.brand}</p>
            </div>
            <button
              onClick={() => deleteItem(index)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App1;
