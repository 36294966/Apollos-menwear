import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ShoppingCart, ArrowLeft } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';

// Import socks images
import Socks1 from '../../Assets/Accessories/socks1.jpg';
import Socks2 from '../../Assets/Accessories/socks2.jpg';
import Socks3 from '../../Assets/Accessories/socks3.jpg';

// Import recommended product images
import Belt1 from '../../Assets/Accessories/belt1.jpg';
import Official1 from '../../Assets/Official/official1.jpg';
import Jean1 from '../../Assets/Jeans/jean1.jpeg';
import Jacket1 from '../../Assets/Jackets/jacket1.jpg';

const PaymentPopup = ({ onClose, item }) => {
  const paybillNumber = '542542';
  const accountNumber = '378179';
  const [amount, setAmount] = useState(item?.price?.replace('Ksh ', '') || '');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleDownload = () => {
    const content = `
Payment Details
---------------
Item: ${item?.name}
Paybill Number: ${paybillNumber}
Account Number: ${accountNumber}
Amount: Ksh ${amount || '[Enter amount here]'}
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'socks_payment.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setPaymentSuccess(true);
    setTimeout(() => {
      setPaymentSuccess(false);
      onClose();
    }, 1500);
  };

  const handleClose = () => {
    setPaymentSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-6 sm:p-8 rounded-2xl w-[95%] max-w-md space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          {paymentSuccess ? (
            <>
              <CheckCircle className="w-6 h-6 text-green-500" />
              Payment Verified!
            </>
          ) : (
            'Payment Details'
          )}
        </h2>

        {!paymentSuccess ? (
          <>
            {/* Payment info styled similar to official.js */}
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-gray-50 p-3 sm:p-4 rounded-lg">
                <span className="font-medium text-sm sm:text-base">Paybill:</span>
                <span className="font-mono text-blue-600 font-bold">{paybillNumber}</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 sm:p-4 rounded-lg">
                <span className="font-medium text-sm sm:text-base">Account:</span>
                <span className="font-mono text-blue-600 font-bold">{accountNumber}</span>
              </div>
              <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm sm:text-base">Price:</span>
                  <span className="font-mono text-green-600 font-bold">Ksh {item?.price.replace('Ksh ', '')}</span>
                </div>
              </div>
              <input
                type="number"
                placeholder="Enter amount (Ksh)"
                className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            {/* Buttons */}
            <div className="flex gap-3 sm:gap-4 mt-4">
              <button
                onClick={handleDownload}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                PAY NOW
              </button>
              <button
                onClick={handleClose}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-black py-2 sm:py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <XCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                Close
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-green-600">
            <p>Receipt downloaded successfully</p>
            <p className="text-sm sm:text-base mt-2">Closing automatically...</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Socks = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'detail'
  const { id } = useParams();
  const navigate = useNavigate();

  // All socks items
  const socksItems = [
    { 
      id: 105, 
      name: '🔥Cotton Socks', 
      image: Socks1, 
      price: 'Ksh 300',
      description: '🌟 Premium quality cotton socks with excellent breathability and comfort for all-day wear.',
      category: 'Socks'
    },
    { 
      id: 106, 
      name: '🔥Formal Dress Sock', 
      image: Socks2, 
      price: 'Ksh 300',
      description: '🌟 Elegant formal dress socks perfect for business attire and special occasions.',
      category: 'Socks'
    },
    { 
      id: 107, 
      name: '🔥Colorful Crew Socks', 
      image: Socks3, 
      price: 'Ksh 300',
      description: '🌟 Vibrant and stylish crew socks that add a pop of color to any outfit while providing comfort.',
      category: 'Socks'
    },
  ];

  // Products that users might like (first two are socks, then other items)
  const recommendedProducts = [
    { 
      id: 106, 
      name: '🔥Formal Dress Sock', 
      price: 'Ksh 300', 
      description: '🌟 Elegant formal dress socks perfect for business attire.', 
      category: 'Socks', 
      image: Socks2
    },
    { 
      id: 107, 
      name: '🔥Colorful Crew Socks', 
      price: 'Ksh 300', 
      description: '🌟 Vibrant and stylish crew socks for any outfit.', 
      category: 'Socks', 
      image: Socks3
    },
    { 
      id: 94, 
      name: '🔥Premium Leather Belt', 
      price: 'Ksh 2,000', 
      description: '🌟 High-quality leather belt with adjustable fit and sturdy buckle.', 
      category: 'Belt', 
      image: Belt1
    },
    { 
      id: 58, 
      name: 'Presidential Shirt', 
      price: 'Ksh 3,000', 
      description: '💥Elegant presidential shirt perfect for formal occasions.', 
      category: 'Official Shirt', 
      image: Official1
    },
  ];

  // Users may also like products (different from recommended products)
  const usersAlsoLike = [
    { 
      id: 108, 
      name: '🔥Athletic Sports Socks', 
      price: 'Ksh 350', 
      description: '🌟 Comfortable sports socks with extra cushioning for athletic activities.', 
      category: 'Socks', 
      image: Socks1
    },
    { 
      id: 109, 
      name: '🔥Ankle Socks Pack', 
      price: 'Ksh 400', 
      description: '🌟 Pack of 3 comfortable ankle socks perfect for casual wear.', 
      category: 'Socks', 
      image: Socks2
    },
    { 
      id: 95, 
      name: '🔥Classic Brown Belt', 
      price: 'Ksh 1,800', 
      description: '🌟 Classic brown leather belt that matches with any outfit.', 
      category: 'Belt', 
      image: Belt1
    },
    { 
      id: 59, 
      name: 'Business Casual Shirt', 
      price: 'Ksh 2,500', 
      description: '💥Perfect business casual shirt for office wear.', 
      category: 'Official Shirt', 
      image: Official1
    },
  ];

  // Set selected item based on URL parameter
  useEffect(() => {
    if (id) {
      const itemId = parseInt(id);
      const item = socksItems.find(sock => sock.id === itemId) || 
                   recommendedProducts.find(product => product.id === itemId) ||
                   usersAlsoLike.find(product => product.id === itemId);
      if (item) {
        setSelectedItem(item);
        setViewMode('detail');
        window.scrollTo(0, 0);
      }
    }
  }, [id]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setViewMode('detail');
    navigate(`/product/${item.id}`);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedItem(null);
    setViewMode('grid');
    navigate('/socks');
    window.scrollTo(0, 0);
  };

  const handlePurchase = (item, e = null) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedItem(item);
    setShowPayment(true);
  };

  const handleAddToCart = (item, e = null) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = storedCart.findIndex(cartItem => cartItem.id === item.id);
    
    let newCart;
    if (existingItemIndex >= 0) {
      // Item already in cart, update quantity
      newCart = [...storedCart];
      newCart[existingItemIndex].quantity = (newCart[existingItemIndex].quantity || 1) + 1;
    } else {
      // Item not in cart, add new item
      const newItem = {
        ...item,
        quantity: 1,
        price: parseFloat(item.price.replace('Ksh ', '').replace(',', '')),
      };
      newCart = [...storedCart, newItem];
    }
    
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.dispatchEvent(new Event('storage'));
    
    alert(`${item.name} ${existingItemIndex >= 0 ? 'quantity updated in' : 'added to'} cart`);
  };

  // Check if item is in cart
  const isItemInCart = (itemId) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return storedCart.some(item => item.id === itemId);
  };

  // Detail view for a single product
  const renderDetailView = () => {
    if (!selectedItem) return null;
    
    return (
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <button 
          onClick={handleBackToList}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Socks Collection
        </button>
        
        {/* Product ID display */}
        <div className="bg-blue-100 p-3 rounded-lg mb-6">
          <p className="text-blue-800 font-mono text-sm">
            <span className="font-semibold">Product ID:</span> {selectedItem.id}
          </p>
          <p className="text-blue-800 font-mono text-sm">
            <span className="font-semibold">URL:</span> {window.location.href}
          </p>
        </div>
        
        {/* Product detail */}
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full max-h-96 object-contain rounded-lg"
            />
          </div>
          
          <div className="w-full md:w-1/2 p-6 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">{selectedItem.name}</h2>
            <p className="text-xl text-blue-600 font-bold">{selectedItem.price}</p>
            <p className="text-gray-700">{selectedItem.description}</p>
            
            {/* Users may also like section */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Users may also like:</h3>
              <div className="grid grid-cols-2 gap-3">
                {usersAlsoLike.slice(0, 4).map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-gray-50 p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition"
                    onClick={() => handleItemClick(product)}
                  >
                    <div className="h-16 bg-white p-1 flex items-center justify-center mb-1">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full object-contain"
                      />
                    </div>
                    <p className="text-xs font-medium text-gray-800 truncate">{product.name}</p>
                    <p className="text-xs text-blue-600 font-bold">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="space-y-3 pt-4">
              <button
                onClick={(e) => handlePurchase(selectedItem, e)}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Purchase Now
              </button>
              <button
                onClick={(e) => handleAddToCart(selectedItem, e)}
                className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                  isItemInCart(selectedItem.id) 
                    ? 'bg-green-700 text-white hover:bg-green-800' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {isItemInCart(selectedItem.id) ? 'In Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
        
        {/* Recommended products */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">You Might Also Like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                onClick={() => handleItemClick(product)}
              >
                <div className="h-48 bg-gray-100 p-4 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-gray-800 truncate">{product.name}</h4>
                  <p className="text-blue-600 font-bold">{product.price}</p>
                  <div className="mt-3 space-y-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handlePurchase(product);
                      }}
                      className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded text-sm font-semibold"
                    >
                      Buy Now
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className={`w-full py-2 rounded text-sm font-semibold flex items-center justify-center gap-1 ${
                        isItemInCart(product.id) 
                          ? 'bg-green-700 text-white hover:bg-green-800' 
                          : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {isItemInCart(product.id) ? 'In Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Grid view showing all socks
  const renderGridView = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-12">
        {socksItems.map((sock) => (
          <article
            key={sock.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Link to={`/product/${sock.id}`}>
              <div className="h-48 sm:h-60 md:h-72 bg-gray-100 p-4 flex items-center justify-center cursor-pointer">
                <img
                  src={sock.image}
                  alt={sock.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </Link>
            
            <div className="p-5 text-center space-y-4">
              <Link to={`/product/${sock.id}`}>
                <h3 className="text-xl sm:text-lg font-bold text-gray-800 cursor-pointer hover:text-blue-600">
                  {sock.name}
                </h3>
              </Link>
              
              <p className="text-blue-600 font-bold text-xl">{sock.price}</p>
              
              <p className="text-sm text-gray-600 line-clamp-2">{sock.description}</p>
              
              <div className="space-y-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handlePurchase(sock);
                  }}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 sm:py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <CheckCircle className="w-5 h-5" />
                  Purchase Now
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(sock);
                  }}
                  className={`w-full py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base ${
                    isItemInCart(sock.id) 
                      ? 'bg-green-700 text-white hover:bg-green-800' 
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {isItemInCart(sock.id) ? 'In Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    );
  };

  return (
    <section className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      {/* Fixed Advertisement Card */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-black text-center text-2xl font-bold p-6 rounded-xl mb-8 animate-pulse mt-24 mx-4">
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl">Hurry up! Limited time. 💯 Super wool fading free. Get your premium socks collection today!</p>
      </div>

      {/* Payment Popup */}
      {showPayment && (
        <PaymentPopup
          onClose={() => {
            setShowPayment(false);
            setSelectedItem(null);
          }}
          item={selectedItem}
        />
      )}

      {/* Page content */}
      {viewMode === 'detail' && selectedItem ? renderDetailView() : renderGridView()}
    </section>
  );
};

export default Socks;