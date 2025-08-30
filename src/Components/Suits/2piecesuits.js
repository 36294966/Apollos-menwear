import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ShoppingCart, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';

import TwoPiece1 from '../../Assets/Suits/twopiece1.jpg';
import TwoPiece2 from '../../Assets/Suits/twopiece2.jpg';
import TwoPiece3 from '../../Assets/Suits/twopiece3.jpg';
import TwoPiece4 from '../../Assets/Suits/twopiece4.jpg';
import TwoPiece5 from '../../Assets/Suits/twopiece5.jpg';
import TwoPiece6 from '../../Assets/Suits/twopiece6.jpg';
import TwoPiece7 from '../../Assets/Suits/twopiece7.jpg';
import TwoPiece8 from '../../Assets/Suits/twopiece8.jpg';
import TwoPiece9 from '../../Assets/Suits/twopiece9.jpg';

const PaymentPopup = ({ item, selectedSize, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={onClose}>✕</button>
        <h2 className="text-xl font-bold mb-4">Payment for {item.name}</h2>
        <p>Size: {selectedSize}</p>
        {/* Your payment form or details go here */}
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const TwoPieceSuits = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedSuit, setSelectedSuit] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSizeForSuit, setSelectedSizeForSuit] = useState({});
  const [showSizeError, setShowSizeError] = useState(false);
  const [errorSuitId, setErrorSuitId] = useState(null);
  const [lastSelectedSuit, setLastSelectedSuit] = useState(null);
  const [sizeHighlight, setSizeHighlight] = useState(false);
  const timeoutRef = useRef(null);

  const twoPieceSuits = [
    { id: 38, name: 'Executive Two-Piece Suit⭐⭐⭐⭐⭐', price: 11000, description: 'A classic two-piece suit with a modern twist.', category: 'TwoPiece Suits', image: TwoPiece1 },
      { id: 39, name: 'Modern Classic Two-Piece Suit⭐⭐⭐⭐⭐', price: 11000, description: 'Modern Classic Two-Piece suit.', category: 'TwoPiece Suits', image: TwoPiece2 },
      { id: 40, name: 'Slim Two-Piece Suit⭐⭐⭐⭐⭐', price: 11000, description: 'Slim, modern two-piece.', category: 'TwoPiece Suits', image: TwoPiece3 },
      { id: 41, name: 'Heritage Two-Piece Suit⭐⭐⭐⭐⭐', price: 11000, description: 'Heritage two-piece design.', category: 'TwoPiece Suits', image: TwoPiece4 },
    { id: 42, name: '💯 Super Classic Two-Piece Suit⭐⭐⭐⭐⭐', price: 11000, description: '💯 Super Classic two-piece design.', category: 'TwoPiece Suits', image: TwoPiece5 },
    { id: 43, name: 'Modern Two Two-Piece Suit⭐⭐⭐⭐⭐', price: 11000, description: 'Modern two-piece design.', category: 'TwoPiece Suits', image: TwoPiece7 },
    { id: 44, name: 'Premium Two-Piece Suit⭐⭐⭐⭐⭐', price: 11000, description: 'Premium two-piece design.', category: 'TwoPiece Suits', image: TwoPiece8},
    { id: 45, name: 'Elegant Two-Piece Suit⭐⭐⭐⭐⭐', price: 11000, description: 'Elegant two-piece design.', category: 'TwoPiece Suits', image: TwoPiece9},
  ];

  const sizes = ['44', '46', '48', '50', '52', '54', '56', '58', '60'];

  // Effect to handle cart count
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(storedCart.length);
  }, []);

  const handleSizeSelection = (suitId, size) => {
    if (lastSelectedSuit && lastSelectedSuit !== suitId) {
      setSelectedSizeForSuit(prev => {
        const newState = { ...prev };
        delete newState[lastSelectedSuit];
        return { ...newState, [suitId]: size };
      });
    } else {
      setSelectedSizeForSuit(prev => ({ ...prev, [suitId]: size }));
    }
    setLastSelectedSuit(suitId);
    setErrorSuitId(null);
    setSizeHighlight(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setSelectedSizeForSuit(prev => {
        const newState = { ...prev };
        delete newState[suitId];
        return newState;
      });
      setLastSelectedSuit(null);
    }, 30000);
  };

  const handleAddToCart = (item) => {
    if (!selectedSizeForSuit[item.id]) {
      setErrorSuitId(item.id);
      setShowSizeError(true);
      setSizeHighlight(true);
      setTimeout(() => {
        setShowSizeError(false);
        setErrorSuitId(null);
        setSizeHighlight(false);
      }, 3000);
      return;
    }
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      ...item,
      size: selectedSizeForSuit[item.id],
      addedAt: new Date().toISOString(),
    };
    localStorage.setItem('cart', JSON.stringify([...storedCart, newItem]));
    window.dispatchEvent(new Event('storage'));
    alert(`${item.name} (Size: ${selectedSizeForSuit[item.id]}) added to cart`);
    setCartCount(storedCart.length + 1);
    // Reset size selection
    setSelectedSizeForSuit(prev => {
      const newState = { ...prev };
      delete newState[item.id];
      return newState;
    });
    setLastSelectedSuit(null);
  };

  const handlePurchase = (item) => {
    if (!selectedSizeForSuit[item.id]) {
      setErrorSuitId(item.id);
      setShowSizeError(true);
      setSizeHighlight(true);
      setTimeout(() => {
        setShowSizeError(false);
        setErrorSuitId(null);
        setSizeHighlight(false);
      }, 3000);
      return;
    }
    setSelectedSuit(item);
    setShowPayment(true);
    // Reset size after purchase
    setSelectedSizeForSuit(prev => {
      const newState = { ...prev };
      delete newState[item.id];
      return newState;
    });
    setLastSelectedSuit(null);
  };

  const cartTotal = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    return storedCart.reduce((sum, item) => sum + item.price, 0);
  };

  const handlePrevClick = (id) => {
    const sizeSelector = document.getElementById(`size-selector-${id}`);
    if (sizeSelector) sizeSelector.scrollBy({ left: -100, behavior: 'smooth' });
  };

  const handleNextClick = (id) => {
    const sizeSelector = document.getElementById(`size-selector-${id}`);
    if (sizeSelector) sizeSelector.scrollBy({ left: 100, behavior: 'smooth' });
  };

  // Navigate to product detail page
  const handleNavigateToProduct = (suitId) => {
    window.location.href = `/product/${suitId}`;
  };

  return (
    <section className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      {/* Blinking Banner */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-center text-xl font-bold p-6 rounded-xl mb-8 animate-pulse mt-24 mx-4">
        <p>Hurry up! Limited time offer! Get your premium two-piece suits today! 💯 super wool fading free</p>
      </div>

      {/* Size Error Popup */}
      {showSizeError && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          <span>Please select a size before proceeding!</span>
        </div>
      )}

      {/* Cart Button */}
      <div className="fixed top-16 right-4 z-40">
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
          <div className="bg-white w-80 max-h-[80vh] overflow-y-auto p-4 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setIsCartOpen(false)}
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <ShoppingCart className="w-6 h-6" />
              Your Cart ({cartCount})
            </h3>
            {cartCount === 0 ? (
              <p className="text-gray-600">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4">
                  {JSON.parse(localStorage.getItem('cart') || '[]').map((item, index) => (
                    <div key={index} className="pb-2 border-b flex justify-between items-center">
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
                          <p className="text-xs text-gray-500">Size: {item.size}</p>
                        </div>
                      </div>
                      <p className="text-sm font-bold">Ksh {item.price}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold">Ksh {(cartTotal() + 200).toLocaleString()}</span>
                  </div>
                  <button
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition"
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

      {/* List of suits */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {twoPieceSuits.map((suit) => (
          // Wrapper div for navigation
          <div
            key={suit.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative cursor-pointer"
            onClick={() => handleNavigateToProduct(suit.id)}
          >
            {/* Image container */}
            <div className="aspect-square bg-gray-100 p-5 flex items-center justify-center">
              <img
                src={suit.image}
                alt={suit.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            {/* Content */}
            <div className="p-5 text-center space-y-4" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-bold text-gray-900">{suit.name}</h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl text-blue-600 font-bold">Ksh {suit.price}</p>
              
              {/* Size Selector */}
              <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2">Select Size:</div>
              <div className="flex justify-center items-center mb-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevClick(suit.id);
                  }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 hover:text-gray-800"
                >
                  <ChevronLeft />
                </button>
                <div
                  id={`size-selector-${suit.id}`}
                  className={`size-selector flex gap-2 overflow-x-auto py-2 max-w-[180px] scrollbar-hide`}
                >
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSizeSelection(suit.id, size);
                      }}
                      className={`px-4 py-2 rounded-lg border-2 min-w-[44px] transition-all ${
                        selectedSizeForSuit[suit.id] === size
                          ? 'bg-blue-600 text-white border-blue-600'
                          : errorSuitId === suit.id && sizeHighlight
                          ? 'border-red-500 bg-red-50 animate-pulse'
                          : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextClick(suit.id);
                  }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 hover:text-gray-800"
                >
                  <ChevronRight />
                </button>
              </div>
              
              {/* Buttons */}
              <div className="space-y-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePurchase(suit);
                  }}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Purchase Now
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(suit);
                  }}
                  className="w-full bg-green-600 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPayment && (
        <PaymentPopup
          item={selectedSuit}
          selectedSize={selectedSizeForSuit[selectedSuit.id]}
          onClose={() => {
            setShowPayment(false);
            setSelectedSuit(null);
            setLastSelectedSuit(null);
          }}
        />
      )}
    </section>
  );
};

export default TwoPieceSuits;