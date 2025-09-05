import React, { useState, useEffect } from 'react';
import { CheckCircle, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import jacket images
import Leather1 from '../../Assets/Jackets/jacket1.jpg';
import Leather2 from '../../Assets/Jackets/jacket2.jpg';
import Leather3 from '../../Assets/Jackets/jacket3.jpg';
import Leather4 from '../../Assets/Jackets/jacket4.webp';

const LeatherJackets = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const updateCart = () => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(storedCart.length);
    };

    updateCart();
    window.addEventListener('storage', updateCart);
    return () => window.removeEventListener('storage', updateCart);
  }, []);

  const leathers = [
    {
      id: 90,
      name: 'Leather Jacket - Classic ⭐⭐⭐⭐⭐',
      image: Leather1,
      price: 3500,
      description: 'Premium quality classic leather jacket with a timeless design. Made from genuine leather for durability and style.'
    },
    {
      id: 91,
      name: 'Leather Jacket - Premium ⭐⭐⭐⭐⭐',
      image: Leather2,
      price: 3500,
      description: 'High-end premium leather jacket with superior craftsmanship. Features a sleek design perfect for any occasion.'
    },
    {
      id: 92,
      name: 'Leather Jacket - Modern Fit ⭐⭐⭐⭐⭐',
      image: Leather3,
      price: 3500,
      description: 'Contemporary modern fit leather jacket with a slim silhouette. Combines style and comfort for the fashion-forward individual.'
    },
    {
      id: 93,
      name: 'Leather Jacket - Elegant Fit ⭐⭐⭐⭐⭐',
      image: Leather4,
      price: 3500,
      description: 'Elegant leather jacket with a sophisticated design. Perfect for those who appreciate refined style and quality materials.'
    },
  ];

  const handleAddToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      addedAt: new Date().toISOString(),
    };
    const updatedCart = [...storedCart, newItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('storage'));
    alert(`${item.name} added to cart`);
  };

  const handlePurchase = (item) => {
    // Prepare product data to pass to checkout
    const productData = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description
    };
    
    // Navigate to checkout page with product data
    navigate('/checkout', { state: { product: productData } });
  };

  const cartTotal = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    return storedCart.reduce((sum, item) => sum + item.price, 0);
  };

  const handleProductClick = (item) => {
    navigate(`/product/${item.id}`);
  };

  return (
    <section className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      {/* Cart Button */}
      <div className="fixed top-16 right-5 z-40">
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition"
        >
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white w-80 max-h-[80vh] overflow-y-auto p-5 rounded-lg shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
              onClick={() => setIsCartOpen(false)}
            >
              ✕
            </button>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ShoppingCart className="w-6 h-6" />
              Your Cart ({cartCount})
            </h3>
            {cartCount === 0 ? (
              <p className="text-gray-600">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4">
                  {JSON.parse(localStorage.getItem('cart') || '[]').map((item, index) => (
                    <div key={index} className="pb-3 border-b flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{item.name}</p>
                          <p className="text-xs text-gray-500">
                            Added: {new Date(item.addedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-bold">Ksh {item.price.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="font-semibold">Subtotal:</span>
                    <span className="font-bold">Ksh {cartTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="font-semibold">Shipping:</span>
                    <span className="font-bold">Ksh 200</span>
                  </div>
                  <div className="flex justify-between mb-3 text-base">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold">Ksh {(cartTotal() + 200).toLocaleString()}</span>
                  </div>
                  <button
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition text-sm"
                    onClick={() => {
                      alert('Proceed to checkout');
                      setIsCartOpen(false);
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Fixed Advertisement Card */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold text-center text-xl sm:text-2xl p-6 rounded-xl mb-8 animate-pulse mt-24 mx-4">
        <p>Hurry up! Limited time offer! Get your premium leather jackets today!</p>
      </div>

      {/* Leather Jackets Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {leathers.map((leather) => (
          <div
            key={leather.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            onClick={() => handleProductClick(leather)}
          >
            <div className="h-64 sm:h-80 w-full bg-gray-100 p-4 flex items-center justify-center">
              <img
                src={leather.image}
                alt={leather.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 text-center space-y-4" onClick={(e) => e.stopPropagation()}>
              <h3 
                className="text-lg sm:text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer"
                onClick={() => handleProductClick(leather)}
              >
                {leather.name}
              </h3>
              <p className="text-sm sm:text-lg font-bold text-blue-600">Ksh {leather.price.toLocaleString()}</p>
              <button
                onClick={() => handlePurchase(leather)}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <CheckCircle className="w-5 h-5" />
                Purchase Now
              </button>
              <button
                onClick={() => handleAddToCart(leather)}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeatherJackets;
