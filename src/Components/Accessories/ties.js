import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ShoppingCart, ArrowLeft } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';

// Import tie images
import Tie1 from '../../Assets/Ties/tie1.jpg';
import Tie2 from '../../Assets/Ties/tie2.jpg';
import Tie3 from '../../Assets/Ties/tie3.jpg';
import Tie4 from '../../Assets/Ties/tie4.jpg';
import Tie5 from '../../Assets/Ties/tie5.jpg';
import Tie6 from '../../Assets/Ties/tie6.jpg';
import Tie7 from '../../Assets/Ties/tie7.jpg';
import Tie8 from '../../Assets/Ties/tie8.jpg';
import Tie9 from '../../Assets/Ties/tie9.jpg';
import Tie10 from '../../Assets/Ties/tie10.jpg';
import Tie11 from '../../Assets/Ties/tie11.jpg';
import Tie12 from '../../Assets/Ties/tie12.jpg';

const PaymentPopup = ({ onClose, item }) => {
  const paybillNumber = '542542';
  const accountNumber = '378179';
  const [amount, setAmount] = useState(item?.price || '');
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
    link.download = 'tie_payment.txt';
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
            {/* Payment info */}
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
                  <span className="font-mono text-green-600 font-bold">Ksh {item?.price}</span>
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

const Ties = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'detail'
  const { id } = useParams();
  const navigate = useNavigate();

  // All tie items
  const tiesItems = [
    { 
      id: 108, 
      name: '🔥Silk Business Tie', 
      image: Tie1, 
      price: 800,
      description: '🌟 Premium quality silk business tie with elegant finish for formal occasions.',
      category: 'Ties'
    },
    { 
      id: 109, 
      name: '🔥Patterned Formal Tie', 
      image: Tie2, 
      price: 800,
      description: '🌟 Stylish patterned formal tie perfect for business attire and special events.',
      category: 'Ties'
    },
    { 
      id: 110, 
      name: '🔥Classic Windsor Tie', 
      image: Tie3, 
      price: 800,
      description: '🌟 Classic Windsor tie with timeless design for sophisticated looks.',
      category: 'Ties'
    },
    { 
      id: 111, 
      name: '🔥Executive Striped Tie', 
      image: Tie4, 
      price: 800,
      description: '🌟 Executive striped tie for professional and corporate settings.',
      category: 'Ties'
    },
    { 
      id: 112, 
      name: '🔥Luxury Silk Tie', 
      image: Tie5, 
      price: 800,
      description: '🌟 Luxury silk tie with premium finish for high-profile events.',
      category: 'Ties'
    },
    { 
      id: 113, 
      name: '🔥Modern Tie', 
      image: Tie6, 
      price: 800,
      description: '🌟 Modern design tie with contemporary patterns and styles.',
      category: 'Ties'
    },
    { 
      id: 114, 
      name: '🔥Bold Color Tie', 
      image: Tie7, 
      price: 800,
      description: '🌟 Bold color tie to make a statement with your outfit.',
      category: 'Ties'
    },
    { 
      id: 115, 
      name: '🔥Knit Tie', 
      image: Tie8, 
      price: 800,
      description: '🌟 Comfortable knit tie for a casual yet sophisticated look.',
      category: 'Ties'
    },
    { 
      id: 116, 
      name: '🔥Designer Tie', 
      image: Tie9, 
      price: 800,
      description: '🌟 Designer tie with unique patterns and premium materials.',
      category: 'Ties'
    },
    { 
      id: 117, 
      name: '🔥Glamorous Tie', 
      image: Tie10, 
      price: 800,
      description: '🌟 Glamorous tie for special occasions and evening events.',
      category: 'Ties'
    },
    { 
      id: 118, 
      name: '🔥Classic Necktie', 
      image: Tie11, 
      price: 800,
      description: '🌟 Classic necktie that never goes out of style.',
      category: 'Ties'
    },
    { 
      id: 119, 
      name: '🔥Formal Tie', 
      image: Tie12, 
      price: 800,
      description: '🌟 Formal tie perfect for weddings, ceremonies, and official events.',
      category: 'Ties'
    },
  ];

  // Set selected item based on URL parameter
  useEffect(() => {
    if (id) {
      const itemId = parseInt(id);
      const item = tiesItems.find(tie => tie.id === itemId);
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
    navigate('/ties');
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
        price: parseFloat(item.price),
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

  // Get similar ties (excluding current item)
  const getSimilarTies = () => {
    if (!selectedItem) return tiesItems.slice(0, 8);
    
    // Filter out the current item and get other ties
    const filtered = tiesItems.filter(tie => tie.id !== selectedItem.id);
    
    // If we have less than 8 ties, return all available
    if (filtered.length <= 8) return filtered;
    
    // Shuffle array and get first 8 items
    const shuffled = [...filtered];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 8);
  };

  // Detail view for a single product
  const renderDetailView = () => {
    if (!selectedItem) return null;
    
    const similarTies = getSimilarTies();
    
    return (
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <button 
          onClick={handleBackToList}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Ties Collection
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
            <p className="text-xl text-blue-600 font-bold">Ksh {selectedItem.price}</p>
            <p className="text-gray-700">{selectedItem.description}</p>
            
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
        
        {/* Users may also like section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Users may also like</h3>
          {similarTies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarTies.map((tie) => (
                <div 
                  key={tie.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                  onClick={() => handleItemClick(tie)}
                >
                  <div className="h-48 bg-gray-100 p-4 flex items-center justify-center">
                    <img
                      src={tie.image}
                      alt={tie.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-semibold text-gray-800 truncate">{tie.name}</h4>
                    <p className="text-blue-600 font-bold">Ksh {tie.price}</p>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">{tie.description}</p>
                    <div className="mt-3 space-y-2">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handlePurchase(tie);
                        }}
                        className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded text-sm font-semibold"
                      >
                        Buy Now
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleAddToCart(tie);
                        }}
                        className={`w-full py-2 rounded text-sm font-semibold flex items-center justify-center gap-1 ${
                          isItemInCart(tie.id) 
                            ? 'bg-green-700 text-white hover:bg-green-800' 
                            : 'bg-green-600 text-white hover:bg-green-700'
                        }`}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {isItemInCart(tie.id) ? 'In Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No similar ties found.</p>
          )}
        </div>
      </div>
    );
  };

  // Grid view showing all ties
  const renderGridView = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {tiesItems.map((tie) => (
          <article
            key={tie.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Link to={`/product/${tie.id}`}>
              <div className="h-48 sm:h-60 md:h-72 bg-gray-100 p-4 flex items-center justify-center cursor-pointer">
                <img
                  src={tie.image}
                  alt={tie.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </Link>
            
            <div className="p-5 text-center space-y-4">
              <Link to={`/product/${tie.id}`}>
                <h3 className="text-xl sm:text-lg font-bold text-gray-800 cursor-pointer hover:text-blue-600">
                  {tie.name}
                </h3>
              </Link>
              
              <p className="text-blue-600 font-bold text-xl">Ksh {tie.price}</p>
              
              <p className="text-sm text-gray-600 line-clamp-2">{tie.description}</p>
              
              <div className="space-y-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handlePurchase(tie);
                  }}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 sm:py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <CheckCircle className="w-5 h-5" />
                  Purchase Now
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(tie);
                  }}
                  className={`w-full py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base ${
                    isItemInCart(tie.id) 
                      ? 'bg-green-700 text-white hover:bg-green-800' 
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {isItemInCart(tie.id) ? 'In Cart' : 'Add to Cart'}
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
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl">Hurry up! Limited time. 💯 Super wool fading free. Get your premium tie collection today!</p>
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

export default Ties;