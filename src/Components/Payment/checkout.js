import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, MapPin, User, Phone, Mail, CreditCard, ShoppingCart, Trash2 } from 'lucide-react';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const topRef = useRef(null);
  
  // Get cart data from navigation state or use localStorage as fallback
  const cartItemsFromState = location.state?.cartItems || [];
  const totalFromState = location.state?.total || 0;
  const returnPath = location.state?.returnPath || '/';
  
  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
    country: 'Kenya',
    shippingArea: '',
    rememberInfo: false
  });

  // State for cart items and total
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  
  // State for shipping options
  const [shippingOptions, setShippingOptions] = useState([]);
  const [selectedShipping, setSelectedShipping] = useState(null);
  
  // State for validation errors
  const [errors, setErrors] = useState({});
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate cart total
  const calculateTotal = (items) => {
    return items.reduce((sum, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity) || 1;
      return sum + (price * quantity);
    }, 0);
  };

  // Update localStorage and dispatch event
  const updateCartStorage = (items) => {
    localStorage.setItem('cart', JSON.stringify(items));
    window.dispatchEvent(new Event('storage'));
  };

  // Remove item from cart
  const removeItemFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    
    const newTotal = calculateTotal(updatedCart);
    setCartTotal(newTotal);
    
    updateCartStorage(updatedCart);
  };

  // Update item quantity
  const updateItemQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
    
    const newTotal = calculateTotal(updatedCart);
    setCartTotal(newTotal);
    
    updateCartStorage(updatedCart);
  };

  // Load cart data and shipping options
  useEffect(() => {
    // Load cart items from state or localStorage
    if (cartItemsFromState.length > 0) {
      setCartItems(cartItemsFromState);
      setCartTotal(totalFromState);
    } else {
      // Fallback: Load from localStorage
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(storedCart);
      
      // Calculate total from stored cart
      const calculatedTotal = calculateTotal(storedCart);
      setCartTotal(calculatedTotal);
    }

    // Load shipping options
    const shippingData = [
      { area: 'Nairobi', cost: '300' },
      { area: 'Gatundu', cost: '350' },
      { area: 'Gilgil', cost: '350' },
      { area: 'Githunguri', cost: '350' },
      { area: 'Kangari', cost: '350' },
      { area: 'Kiambu', cost: '350' },
      { area: 'Kijabe', cost: '350' },
      { area: 'Kikuyu', cost: '350' },
      { area: 'Limuru', cost: '350' },
      { area: 'Naivasha', cost: '350' },
      { area: 'Ngong', cost: '350' },
      { area: 'Ongata Rongai', cost: '350' },
      { area: 'Athi River', cost: '360' },
      { area: 'Makuyu', cost: '360' },
      { area: 'Nakuru', cost: '360' },
      { area: 'Ruiru', cost: '360' },
      { area: 'Sabasaba', cost: '360' },
      { area: 'Thika', cost: '360' },
      { area: 'Juja', cost: '380' },
      { area: 'Engineer', cost: '400' },
      { area: 'Kagio', cost: '400' },
      { area: 'Kangundo', cost: '400' },
      { area: 'Karatina', cost: '400' },
      { area: 'Kerungoya', cost: '400' },
      { area: 'Kiganjo', cost: '410' },
      { area: 'Kutus', cost: '410' },
      { area: 'Mukurweni', cost: '400' },
      { area: 'Mwea', cost: '410' },
      { area: 'Chuka', cost: '420' },
      { area: 'Embu', cost: '420' },
      { area: 'Isinya', cost: '420' },
      { area: 'Kajiando', cost: '420' },
      { area: 'Kangema', cost: '420' },
      { area: 'Machakos', cost: '420' },
      { area: 'Matuu', cost: '420' },
      { area: 'Muranga', cost: '420' },
      { area: 'Murarandia', cost: '420' },
      { area: 'Narok', cost: '420' },
      { area: 'Nyeri', cost: '420' },
      { area: 'Runyenjes', cost: '420' },
      { area: 'Tala', cost: '420' },
      { area: 'Eldoret', cost: '450' },
      { area: 'Iten', cost: '450' },
      { area: 'Kitiui', cost: '450' },
      { area: 'Turbo', cost: '450' },
      { area: 'Makutano', cost: '460' },
      { area: 'Nkubu', cost: '460' },
      { area: 'Eldama Ravine', cost: '470' },
      { area: 'Chogoria', cost: '480' },
      { area: 'Kakamega', cost: '480' },
      { area: 'Kericho', cost: '480' },
      { area: 'Mbale', cost: '480' },
      { area: 'Meru', cost: '480' },
      { area: 'Molo', cost: '480' },
      { area: 'Njoro', cost: '480' },
      { area: 'Nyahururu', cost: '480' },
      { area: 'Olkalou', cost: '480' },
      { area: 'Sabatia', cost: '480' },
      { area: 'Sagana', cost: '480' },
      { area: 'Bomet', cost: '500' },
      { area: 'Kisii', cost: '500' },
      { area: 'Kisumu', cost: '500' },
      { area: 'Litein', cost: '500' },
      { area: 'Maseno', cost: '500' },
      { area: 'Masil', cost: '500' },
      { area: 'Nyamira', cost: '500' },
      { area: 'Sotik', cost: '500' },
      { area: 'Burnt Forest', cost: '520' },
      { area: 'Kitale', cost: '520' },
      { area: 'Nanyuki', cost: '520' },
      { area: 'Narumoru', cost: '520' },
      { area: 'Timau', cost: '520' },
      { area: 'Moi Bridge', cost: '530' },
      { area: 'Mwingi', cost: '550' },
      { area: 'Emali', cost: '580' },
      { area: 'Kabarnet', cost: '580' },
      { area: 'Kibwezi', cost: '580' },
      { area: 'Makindu', cost: '580' },
      { area: 'Sultan Hamud', cost: '580' },
      { area: 'Awendo', cost: '600' },
      { area: 'Bungoma', cost: '600' },
      { area: 'Chwele', cost: '600' },
      { area: 'Keroka', cost: '600' },
      { area: 'Kilgoris', cost: '600' },
      { area: 'Kimili', cost: '600' },
      { area: 'Lugari', cost: '600' },
      { area: 'Malaba', cost: '600' },
      { area: 'Migori', cost: '600' },
      { area: 'Mtito Andei', cost: '600' },
      { area: 'Mumias', cost: '600' },
      { area: 'Mwala', cost: '600' },
      { area: 'Ogembo', cost: '600' },
      { area: 'Oyugis', cost: '600' },
      { area: 'Rongo', cost: '600' },
      { area: 'Voi', cost: '600' },
      { area: 'Webuye', cost: '600' },
      { area: 'Wote', cost: '600' },
      { area: 'Kapsabet', cost: '620' },
      { area: 'Nandi Hills', cost: '620' },
      { area: 'Ahero', cost: '640' },
      { area: 'Bondo', cost: '640' },
      { area: 'Mariakani', cost: '640' },
      { area: 'Mombasa', cost: '640' },
      { area: 'Mtwapa', cost: '640' },
      { area: 'Isiolo', cost: '650' },
      { area: 'Maua', cost: '650' },
      { area: 'Siaya', cost: '650' },
      { area: 'Ugunja', cost: '650' },
      { area: 'Busia', cost: '660' },
      { area: 'Luanda', cost: '660' },
      { area: 'Muhoroni', cost: '660' },
      { area: 'Nambale', cost: '670' },
      { area: 'Oloitoktok', cost: '670' },
      { area: 'Baraton', cost: '700' },
      { area: 'Homabay', cost: '700' },
      { area: 'Nzoia', cost: '700' },
      { area: 'Mbita', cost: '720' },
      { area: 'Isebania', cost: '740' },
      { area: 'Kehancha', cost: '740' },
      { area: 'Garissa', cost: '750' },
      { area: 'Kendubay', cost: '750' },
      { area: 'Rechuonyo', cost: '750' },
      { area: 'Diani', cost: '770' },
      { area: 'Kapenguria', cost: '780' },
      { area: 'Kilifi', cost: '800' },
      { area: 'Malindi', cost: '840' },
      { area: 'Mwatate', cost: '840' },
      { area: 'Taveta', cost: '850' },
      { area: 'Watamu', cost: '850' },
      { area: 'Marsabit', cost: '950' },
      { area: 'Maralal', cost: '1100' },
      { area: 'Lamu', cost: '2050' },
      { area: 'Lodwar', cost: '2050' },
      { area: 'Lokichogio', cost: '2850' }
    ];
    
    setShippingOptions(shippingData);
    
    // Scroll to top when component mounts
    scrollToTop();
  }, [cartItemsFromState, totalFromState]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when field is filled
    if (value.trim() !== '') {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Handle shipping selection
  const handleShippingChange = (e) => {
    const selectedArea = e.target.value;
    const shipping = shippingOptions.find(option => option.area === selectedArea);
    setSelectedShipping(shipping);
    setFormData({
      ...formData,
      shippingArea: selectedArea
    });
    
    // Clear error when shipping is selected
    if (selectedArea) {
      setErrors({
        ...errors,
        shippingArea: ''
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (formData.phone.trim() && !/^0[0-9]{9}$/.test(formData.phone.trim())) newErrors.phone = 'Please enter a valid Kenyan phone number (e.g., 0712345678)';
    if (!formData.shippingArea) newErrors.shippingArea = 'Please select a shipping area';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Generate order receipt
  const generateReceipt = () => {
    const orderId = Math.random().toString(36).substring(2, 10).toUpperCase();
    
    const itemsList = cartItems.map(item => 
      `- ${item.name} (${item.size || 'No size'}) x${item.quantity || 1} - KES ${((item.price || 0) * (item.quantity || 1)).toLocaleString()}`
    ).join('\n  ');
    
    const receiptContent = `
      SIR APOLLO'S MENWEAR - ORDER CONFIRMATION
      ==========================================
      
      ORDER DETAILS:
      --------------
      Order ID: ${orderId}
      
      ITEMS:
      ------
      ${itemsList}
      
      Shipping Area: ${formData.shippingArea}
      Shipping Cost: KES ${shippingCost.toLocaleString()}
      Subtotal: KES ${cartTotal.toLocaleString()}
      Total: KES ${(cartTotal + shippingCost).toLocaleString()}
      
      CUSTOMER INFORMATION:
      --------------------
      Name: ${formData.firstName} ${formData.lastName}
      Address: ${formData.address}
      City: ${formData.city}
      Postal Code: ${formData.postalCode}
      Phone: ${formData.phone}
      Country: ${formData.country}
      
      PAYMENT DETAILS:
      ----------------
      Paybill: 542542
      Account: 378179
      
      Order Date: ${new Date().toLocaleString()}
      
      Thank you for your purchase!
    `;
    
    return { content: receiptContent, orderId };
  };

  // Download receipt
  const downloadReceipt = () => {
    const { content } = generateReceipt();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `sir_apollo_order_${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Clear cart function
  const clearCart = () => {
    localStorage.setItem('cart', JSON.stringify([]));
    // Dispatch storage event to update other components
    window.dispatchEvent(new Event('storage'));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        document.querySelector(`[name="${firstErrorField}"]`)?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
      return;
    }
    
    setIsProcessing(true);
    
    // Process the order
    const { orderId } = generateReceipt();
    const orderDetails = {
      items: cartItems,
      customer: formData,
      shipping: selectedShipping,
      subtotal: cartTotal,
      shippingCost,
      total: cartTotal + shippingCost,
      orderDate: new Date().toISOString(),
      orderId: orderId
    };
    
    setOrderDetails(orderDetails);
    
    // Simulate order processing
    setTimeout(() => {
      // Clear the cart
      clearCart();
      
      setOrderCompleted(true);
      
      // Save order to localStorage
      const orders = JSON.parse(localStorage.getItem('sirApolloOrders') || '[]');
      orders.push(orderDetails);
      localStorage.setItem('sirApolloOrders', JSON.stringify(orders));
      
      // Scroll to top after order completion
      setTimeout(() => {
        scrollToTop();
      }, 100);
      
      setIsProcessing(false);
    }, 2000);
  };

  // Return to previous page or homepage
  const handleReturn = () => {
    navigate(returnPath);
  };

  // Navigate to home
  const navigateToHome = () => {
    navigate('/');
  };

  // Navigate to cart
  const navigateToCart = () => {
    navigate('/cart');
  };

  // Calculate costs
  const shippingCost = selectedShipping ? parseInt(selectedShipping.cost) : 0;
  const total = cartTotal + shippingCost;

  // If order is completed, show confirmation
  if (orderCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-8 px-4">
        <div ref={topRef} className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-24">
          <div className="bg-gradient-to-r from-green-600 to-blue-700 py-8 px-8 text-center">
            <h1 className="text-4xl font-bold text-white">Order Confirmed!</h1>
            <p className="text-green-200 mt-2">Thank you for your purchase</p>
          </div>
          
          <div className="p-8">
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Order Details</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Items Ordered</h3>
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex items-start border-b pb-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-24 object-contain rounded-lg bg-gray-100 p-1 mr-4"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/80x96?text=Image+Not+Found';
                        }}
                      />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{item.name}</p>
                        {item.size && item.size !== 'Not Selected' && (
                          <p className="text-sm text-gray-600">Size: {item.size}</p>
                        )}
                        <p className="text-sm text-gray-600">Quantity: {item.quantity || 1}</p>
                        <p className="text-sm text-blue-600 font-medium">
                          KES {item.price ? parseFloat(item.price).toLocaleString('en-KE', { minimumFractionDigits: 2 }) : '0.00'} each
                        </p>
                        <p className="font-medium text-gray-800 mt-1">
                          KES {((item.price || 0) * (item.quantity || 1)).toLocaleString('en-KE', { minimumFractionDigits: 2 })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">KES {cartTotal.toLocaleString('en-KE', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">KES {shippingCost.toLocaleString('en-KE', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-green-700">
                      KES {total.toLocaleString('en-KE', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Shipping Information</h3>
              <p className="text-gray-700">{formData.firstName} {formData.lastName}</p>
              <p className="text-gray-700">{formData.address}</p>
              <p className="text-gray-700">{formData.city}, {formData.postalCode}</p>
              <p className="text-gray-700">{formData.phone}</p>
              <p className="text-gray-700">{formData.country}</p>
              <p className="text-gray-700 mt-2">Shipping to: {formData.shippingArea}</p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Instructions</h3>
              <p className="text-gray-700">
                Please complete your payment via M-Pesa using the following details:
              </p>
              <div className="mt-3 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-800">
                  <strong>Paybill:</strong> 542542<br />
                  <strong>Account:</strong> 378179<br />
                  <strong>Amount:</strong> KES {total.toLocaleString('en-KE', { minimumFractionDigits: 2 })}
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 flex-col sm:flex-row">
              <button
                onClick={downloadReceipt}
                className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium"
              >
                Download Receipt
              </button>
              <button
                onClick={handleReturn}
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 font-medium"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If cart is empty, show empty cart message
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6 pt-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center">
          <ShoppingCart className="mx-auto h-16 w-16 mb-6 text-gray-400" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Items in Cart</h2>
          <p className="text-gray-600 mb-6">Your cart is empty. Please add items before proceeding to checkout.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8 px-4">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <button
            onClick={navigateToHome}
            className="flex items-center text-blue-700 hover:text-blue-900 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            Back to Shop
          </button>
          
          <h1 className="text-xl font-bold text-gray-800">Sir Apollo's MenWear</h1>
          
          <button
            onClick={navigateToCart}
            className="flex items-center text-blue-700 hover:text-blue-900 font-medium"
          >
            <ShoppingCart className="h-5 w-5 mr-1" />
            Cart
          </button>
        </div>
      </div>
      
      <div ref={topRef} className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-24">
        {/* Header with blinking text */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-800 py-6 px-8 text-center">
          <h1 className="text-4xl font-bold text-white blink">Checkout</h1>
          <p className="text-blue-200 mt-2">Complete your purchase</p>
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Left side - Checkout form */}
          <div className="w-full md:w-2/3 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="0712345678"
                  pattern="0[0-9]{9}"
                  required
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                    }`}
                  required
                />
                {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.city ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code *</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.postalCode ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.postalCode && <p className="mt-1 text-sm text-red-600">{errors.postalCode}</p>}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Kenya">Kenya</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Area *</label>
                <select
                  name="shippingArea"
                  value={formData.shippingArea}
                  onChange={handleShippingChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.shippingArea ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                >
                  <option value="">Select your area</option>
                  {shippingOptions.map((option, index) => (
                    <option key={index} value={option.area}>
                      {option.area} - KES {option.cost}
                    </option>
                  ))}
                </select>
                {errors.shippingArea && <p className="mt-1 text-sm text-red-600">{errors.shippingArea}</p>}
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberInfo"
                  name="rememberInfo"
                  checked={formData.rememberInfo}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="rememberInfo" className="ml-2 block text-sm text-gray-700">
                  Save information for next time
                </label>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Details</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Paybill:</strong> 542542<br />
                    <strong>Account:</strong> 378179
                  </p>
                  <p className="text-xs text-blue-600 mt-2">Complete payment via M-Pesa then proceed to place order</p>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium"
                onClick={scrollToTop}
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Pay KES ${total.toLocaleString('en-KE', { minimumFractionDigits: 2 })}`}
              </button>
            </form>
          </div>
          
          {/* Right side - Order summary */}
          <div className="w-full md:w-1/3 bg-gray-50 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-start border-b pb-4 relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-20 object-contain rounded-lg bg-gray-100 p-1 mr-3"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/64x80?text=Image+Not+Found';
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
                    {item.size && item.size !== 'Not Selected' && (
                      <p className="text-xs text-gray-600">Size: {item.size}</p>
                    )}
                    
                    <div className="flex items-center mt-1">
                      <button 
                        onClick={() => updateItemQuantity(index, (item.quantity || 1) - 1)}
                        className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm"
                      >
                        -
                      </button>
                      <span className="mx-2 text-sm">{item.quantity || 1}</span>
                      <button 
                        onClick={() => updateItemQuantity(index, (item.quantity || 1) + 1)}
                        className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm"
                      >
                        +
                      </button>
                    </div>
                    
                    <p className="text-sm font-medium text-blue-700 mt-1">
                      KES {((item.price || 0) * (item.quantity || 1)).toLocaleString('en-KE', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => removeItemFromCart(index)}
                    className="absolute top-0 right-0 text-red-500 hover:text-red-700"
                    aria-label="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="space-y-4 border-t border-gray-200 pt-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">KES {cartTotal.toLocaleString('en-KE', { minimumFractionDigits: 2 })}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {selectedShipping ? `KES ${selectedShipping.cost}` : 'Select area'}
                </span>
              </div>
              
              <div className="flex justify-between pt-4 border-t border-gray-200">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-lg font-bold text-blue-700">
                  KES {total.toLocaleString('en-KE', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
            
            {selectedShipping && (
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700">
                  Shipping to {selectedShipping.area} will cost KES {selectedShipping.cost}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        .blink {
          animation: blink 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Checkout;