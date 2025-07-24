import React, { useState } from 'react';

const Cart = () => {
  const products = [
    { id: 1, name: '🍎 Apple', price: 30 },
    { id: 2, name: '🍌 Banana', price: 10 },
    { id: 3, name: '🥭 Mango', price: 50 },
    { id: 4, name: '🍊 Orange', price: 20 },
    { id: 5, name: '🍉 Watermelon', price: 40 },
  ];

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setIsCartOpen(true); // Open cart when item added
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="flex">
      {/* Main Products Area */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">🛒 Fruit Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">₹{product.price}</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg border-l transform ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            ✖
          </button>
        </div>
        <div className="p-4">
          {cart.length === 0 ? (
            <p className="text-gray-600">Cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-2 border-b pb-1"
                >
                  <div>
                    <p>
                      {item.name} x {item.quantity}
                    </p>
                    <p className="text-sm text-gray-500">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-4 font-bold">
                Total: ₹{getTotal()}
              </div>
              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Cart Button */}
      {!isCartOpen && cart.length > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700"
        >
          🛒 View Cart ({cart.length})
        </button>
      )}
    </div>
  );
};

export default Cart;
