import React, { useState, useEffect } from 'react';
import { CheckCircle, ChevronRight, ShoppingCart, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Asset imports (all your images)
import Photo1 from '../Assets/Appolo/photo1.jpeg';
import Photo2 from '../Assets/Appolo/photo2.jpeg';
import Photo3 from '../Assets/Appolo/photo3.jpeg';
import Photo4 from '../Assets/Appolo/photo4.jpg';

import ThreePiece1 from '../Assets/Suits/threepiece1.jpg';
import ThreePiece2 from '../Assets/Suits/threepiece2.jpg';
import ThreePiece3 from '../Assets/Suits/threepiece3.jpg';
import ThreePiece4 from '../Assets/Suits/threepiece4.jpg';
import ThreePiece5 from '../Assets/Suits/threepiece5.jpg';
import ThreePiece6 from '../Assets/Suits/threepiece6.jpg';
import ThreePiece7 from '../Assets/Suits/threepiece7.jpg';
import ThreePiece8 from '../Assets/Suits/threepiece8.jpg';
import ThreePiece9 from '../Assets/Suits/threepiece9.jpg';
import ThreePiece10 from '../Assets/Suits/threepiece10.jpg';
import ThreePiece11 from '../Assets/Suits/threepiece11.jpg';
import ThreePiece12 from '../Assets/Suits/threepiece12.jpg';
import ThreePiece14 from '../Assets/Suits/threepiece14.jpg';
import ThreePiece15 from '../Assets/Suits/threepiece15.jpg';
import ThreePiece16 from '../Assets/Suits/threepiece16.jpg';
import ThreePiece17 from '../Assets/Suits/threepiece17.jpg';
import ThreePiece18 from '../Assets/Suits/threepiece18.jpg';
import ThreePiece19 from '../Assets/Suits/threepiece19.jpg';
import ThreePiece20 from '../Assets/Suits/threepiece20.jpg';
import ThreePiece21 from '../Assets/Suits/threepiece21.jpg';
import ThreePiece22 from '../Assets/Suits/threepiece22.jpg';
import ThreePiece23 from '../Assets/Suits/threepiece23.jpg';
import ThreePiece24 from '../Assets/Suits/threepiece24.jpg';
import ThreePiece25 from '../Assets/Suits/threepiece25.jpg';
import ThreePiece26 from '../Assets/Suits/threepiece26.jpg';
import ThreePiece27 from '../Assets/Suits/threepiece27.jpg';
import ThreePiece28 from '../Assets/Suits/threepiece28.jpg';
import ThreePiece29 from '../Assets/Suits/threepiece29.jpg';
import ThreePiece30 from '../Assets/Suits/threepiece30.jpg';
import ThreePiece31 from '../Assets/Suits/threepiece31.jpg';
import ThreePiece33 from '../Assets/Suits/threepiece33.jpg';
import ThreePiece32 from '../Assets/Suits/threepiece32.jpg';
import DoubleBreast1 from '../Assets/Suits/doubleBreast1.jpg';
import DoubleBreast2 from '../Assets/Suits/doubleBreast2.jpg';

import TwoPiece1 from '../Assets/Suits/twopiece1.jpg';
import TwoPiece2 from '../Assets/Suits/twopiece2.jpg';
import TwoPiece3 from '../Assets/Suits/twopiece3.jpg';
import TwoPiece4 from '../Assets/Suits/twopiece4.jpg';
import TwoPiece5 from '../Assets/Suits/twopiece5.jpg';
import TwoPiece7 from '../Assets/Suits/twopiece7.jpg';
import TwoPiece8 from '../Assets/Suits/twopiece8.jpg';
import TwoPiece9 from '../Assets/Suits/twopiece9.jpg';

import Tuxedo1 from '../Assets/Suits/tuxedo1.jpg';
import Tuxedo2 from '../Assets/Suits/tuxedo2.jpg';
import Tuxedo3 from '../Assets/Suits/tuxedo3.jpg';
import Tuxedo4 from '../Assets/Suits/tuxedo4.jpg';
import Tuxedo5 from '../Assets/Suits/tuxedo5.jpg';
import Tuxedo6 from '../Assets/Suits/tuxedo6.jpg';
import Tuxedo7 from '../Assets/Suits/tuxedo7.jpg';
import Tuxedo8 from '../Assets/Suits/tuxedo8.jpg';

import Kaunda1 from '../Assets/Suits/Kaunda1.jpg';
import Kaunda2 from '../Assets/Suits/kaunda2.jpg';
import Kaunda3 from '../Assets/Suits/kaunda3.jpg';
import Kaunda4 from '../Assets/Suits/kaunda4.jpg';

import Official1 from '../Assets/Official/official1.jpg';
import Official2 from '../Assets/Official/official2.jpg';
import Official3 from '../Assets/Official/official3.jpg';
import Official4 from '../Assets/Official/official4.jpg';
import Official5 from '../Assets/Official/official5.jpg';
import Official6 from '../Assets/Official/official6.jpg';
import Official7 from '../Assets/Official/official7.jpg';
import Official8 from '../Assets/Official/official8.jpg';
import Official9 from '../Assets/Official/official9.jpg';
import Official10 from '../Assets/Official/official10.jpg';
import Official11 from '../Assets/Official/official11.jpg';
import Official12 from '../Assets/Official/official12.jpg';
import Official13 from '../Assets/Official/official13.jpg';
import Official14 from '../Assets/Official/official14.jpg';
import Official15 from '../Assets/Official/official15.jpg';
import Official16 from '../Assets/Official/official16.jpg';

import Jean1 from '../Assets/Jeans/jean1.jpeg';
import Jean2 from '../Assets/Jeans/jean2.jpeg';
import Jean3 from '../Assets/Jeans/jean3.jpeg';
import Jean4 from '../Assets/Jeans/jean4.jpg';
import Jean5 from '../Assets/Jeans/jean5.jpg';
import Jean6 from '../Assets/Jeans/jean6.jpg';
import Jean7 from '../Assets/Jeans/jean7.jpg';
import Jean8 from '../Assets/Jeans/jean8.jpg';
import Jean9 from '../Assets/Jeans/jean9.jpg';
import jean10 from '../Assets/Jeans/jean10.jpg';
import Jean11 from '../Assets/Jeans/jean11.jpg';
import Jean12 from '../Assets/Jeans/jean12.jpg';
import Jean13 from '../Assets/Jeans/jean13.jpg';
import Jean14 from '../Assets/Jeans/jean14.jpg';
import Jean15 from '../Assets/Jeans/jean15.jpg';
import Jean16 from '../Assets/Jeans/jean16.jpg';

import Jacket1 from '../Assets/Jackets/jacket1.jpg';
import Jacket2 from '../Assets/Jackets/jacket2.jpg';
import Jacket3 from '../Assets/Jackets/jacket3.jpg';
import Jacket4 from '../Assets/Jackets/jacket4.webp';

import Belt1 from '../Assets/Accessories/belt1.jpg';
import Belt2 from '../Assets/Accessories/belt2.jpg';
import Belt3 from '../Assets/Accessories/belt3.jpg';
import Belt4 from '../Assets/Accessories/belt4.jpg';
import Belt5 from '../Assets/Accessories/belt5.jpg';
import Belt6 from '../Assets/Accessories/belt6.jpg';
import Belt7 from '../Assets/Accessories/belt7.jpg';
import Belt8 from '../Assets/Accessories/belt8.jpg';

const Home = () => {
  const navigate = useNavigate();

  const [cartCount, setCartCount] = useState(0);
  const [selectedSizeForSuit, setSelectedSizeForSuit] = useState({});
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [sizeError, setSizeError] = useState({});
  const [showSizeAlert, setShowSizeAlert] = useState(false);
  const [recentlySelectedSize, setRecentlySelectedSize] = useState({});

  const Sizes = ['44', '46', '48', '50', '52', '54', '56', '58', '60'];

  // Utility: check if item requires size
  const requiresSize = (item) => {
    return item.category !== 'jeans' && item.category !== 'jacket' && item.category !== 'belt' && item.category !== 'shirt';
  };

  // Handle size selection
  const handleSizeSelection = (itemId, size) => {
    setSelectedSizeForSuit({ [itemId]: size });
    setSizeError(prev => ({ ...prev, [itemId]: false }));
    setRecentlySelectedSize(prev => ({ ...prev, [itemId]: true }));
    setTimeout(() => {
      setRecentlySelectedSize(prev => ({ ...prev, [itemId]: false }));
    }, 2000);
  };

  // Handle add to cart
  const handleAddToCart = (item, e) => {
    if (e) e.preventDefault();

    if (requiresSize(item) && !selectedSizeForSuit[item.id]) {
      setSizeError(prev => ({ ...prev, [item.id]: true }));
      setShowSizeAlert(true);
      setTimeout(() => setShowSizeAlert(false), 3000);
      // Remove error after 3 seconds
      setTimeout(() => {
        setSizeError(prev => {
          const newErr = { ...prev };
          delete newErr[item.id];
          return newErr;
        });
      }, 3000);
      return;
    }

    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      size: requiresSize(item) ? (selectedSizeForSuit[item.id] || 'Not Selected') : 'N/A',
      addedAt: new Date().toISOString(),
    };
    localStorage.setItem('cart', JSON.stringify([...storedCart, newItem]));
    window.dispatchEvent(new Event('storage'));
    alert(`${item.name} added to cart`);
    // Clear selection
    setSelectedSizeForSuit(prev => {
      const newState = { ...prev };
      delete newState[item.id];
      return newState;
    });
    setSizeError(prev => ({ ...prev, [item.id]: false }));
  };

  // Handle purchase
  const handlePurchaseClick = (item, e) => {
    if (e) e.preventDefault();

    if (requiresSize(item) && !selectedSizeForSuit[item.id]) {
      setSizeError(prev => ({ ...prev, [item.id]: true }));
      setShowSizeAlert(true);
      setTimeout(() => setShowSizeAlert(false), 3000);
      // Remove error after 3 seconds
      setTimeout(() => {
        setSizeError(prev => {
          const newErr = { ...prev };
          delete newErr[item.id];
          return newErr;
        });
      }, 3000);
      return;
    }

    const productData = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description || item.name,
      size: requiresSize(item) ? (selectedSizeForSuit[item.id] || 'Not Selected') : 'N/A',
    };
    navigate('/checkout', { state: { product: productData } });
    setSizeError(prev => ({ ...prev, [item.id]: false }));
  };

  // update cart count
  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(cart.length);
    };
    updateCart();
    window.addEventListener('storage', updateCart);
    return () => window.removeEventListener('storage', updateCart);
  },);

  // Data arrays for categories
  const threePieceSuits = [
    { id: 1, name: 'Executive Three-Piece Suit ⭐⭐⭐⭐⭐', image: Photo1, price: 13000, category: 'three-piece' },
    { id: 2, name: 'Elegance Three-Piece Suit ⭐⭐⭐⭐⭐', image: Photo2, price: 13000, category: 'three-piece' },
    { id: 3, name: 'Premium Three-Piece Suit ⭐⭐⭐⭐⭐', image: Photo3, price: 13000, category: 'three-piece' },
    { id: 4, name: 'Classic Pinstripe Ensemble ⭐⭐⭐⭐⭐', image: Photo4, price: 13000, category: 'three-piece' },
    { id: 5, name: 'Modern-Fit Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece1, price: 13000, category: 'three-piece' },
    { id: 6, name: 'Royal Navy Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece2, price: 13000, category: 'three-piece' },
    { id: 7, name: 'Luxury Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece3, price: 13000, category: 'three-piece' },
    { id: 8, name: 'Modern Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece4, price: 13000, category: 'three-piece' },
    { id: 9, name: 'Elite Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece5, price: 13000, category: 'three-piece' },
    { id: 10, name: 'Prestige Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece6, price: 13000, category: 'three-piece' },
    { id: 11, name: 'Imperial Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece7, price: 13000, category: 'three-piece' },
    { id: 12, name: 'LuxeLine Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece9, price: 13000, category: 'three-piece' },
    { id: 13, name: 'Sovereign Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece10, price: 13000, category: 'three-piece' },
    { id: 14, name: 'Heritage Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece11, price: 13000, category: 'three-piece' },
    { id: 15, name: 'Legacy Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece12, price: 13000, category: 'three-piece' },
    { id: 16, name: 'Opulence Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece14, price: 13000, category: 'three-piece' },
    { id: 17, name: 'Sophistication Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece15, price: 13000, category: 'three-piece' },
    { id: 18, name: 'Couture ClassicsThree-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece16, price: 13000, category: 'three-piece' },
    { id: 20, name: 'Dignity Collection Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece17, price: 13000, category: 'three-piece' },
    { id: 21, name: 'Vanguard Elite Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece18, price: 13000, category: 'three-piece' },
    { id: 22, name: 'Summit Suits Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece19, price: 13000, category: 'three-piece' },
    { id: 23, name: 'Executive Edge Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece33, price: 13000, category: 'three-piece' },
    { id: 24, name: 'Eminence Collection Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece21, price: 13000, category: 'three-piece' },
    { id: 25, name: 'Refined Royalty Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece22, price: 13000, category: 'three-piece' },
    { id: 26, name: 'Pinnacle Series Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece23, price: 13000, category: 'three-piece' },
    { id: 27, name: 'Urban Aristocrat Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece24, price: 13000, category: 'three-piece' },
    { id: 28, name: 'Noble AttireThree-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece25, price: 13000, category: 'three-piece' },
    { id: 29, name: 'Legacy Luxe Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece26, price: 13000, category: 'three-piece' },
    { id: 30, name: 'Signature Sovereign Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece27, price: 13000, category: 'three-piece' },
    { id: 31, name: 'Majesty Mode Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece28, price: 13000, category: 'three-piece' },
    { id: 32, name: 'Imperial Attire Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece29, price: 13000, category: 'three-piece' },
    { id: 33, name: 'Monarch Line Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece30, price: 13000, category: 'three-piece' },
    { id: 34, name: 'Crown & Confidence Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece31, price: 13000, category: 'three-piece' },
    { id: 35, name: 'Virtue Vogue Three-Piece Suit⭐⭐⭐⭐⭐', image: ThreePiece32, price: 13000, category: 'three-piece' },
    { id: 36, name: 'Premium Double Breast Suit⭐⭐⭐⭐⭐', image: DoubleBreast1, price: 13500, category: 'double-breast' },
    { id: 37, name: 'Elegant Double Breast Suit⭐⭐⭐⭐⭐', image: DoubleBreast2, price: 13500, category: 'double-breast' },
  ];

  const twoPieceSuits = [
    { id: 38, name: 'Executive Two-Piece Suit 💯', image: TwoPiece1, price: 11000, category: 'two-piece' },
    { id: 39, name: 'Modern Classic Two-Piece Suit💯', image: TwoPiece2, price: 11000, category: 'two-piece' },
    { id: 40, name: 'Premium Two-Piece Suit💯', image: TwoPiece3, price: 11000, category: 'two-piece' },
    { id: 41, name: 'Business Two-Piece Suit💯', image: TwoPiece4, price: 11000, category: 'two-piece' },
    { id: 42, name: 'Super Classic Two-Piece Suit💯', image: TwoPiece5, price: 11000, category: 'two-piece' },
    { id: 43, name: 'Modern Two-Piece Suit💯', image: TwoPiece7, price: 11000, category: 'two-piece' },
    { id: 44, name: 'Premium Two-Piece Suit💯', image: TwoPiece8, price: 11000, category: 'two-piece' },
    { id: 45, name: 'Elegant Two-Piece Suit💯', image: TwoPiece9, price: 11000, category: 'two-piece' },
  ];

  const tuxedoSuits = [
    { id: 46, name: 'Velvet Tuxedo Suit⭐⭐⭐⭐⭐', image: Tuxedo1, price: 15000, category: 'tuxedo' },
    { id: 47, name: 'Midnight Tuxedo Suit⭐⭐⭐⭐⭐', image: Tuxedo2, price: 15000, category: 'tuxedo' },
    { id: 48, name: 'Ensemble Tuxedo Suit⭐⭐⭐⭐⭐', image: Tuxedo3, price: 15000, category: 'tuxedo' },
    { id: 49, name: 'Classic Tuxedo Suit⭐⭐⭐⭐⭐', image: Tuxedo4, price: 15000, category: 'tuxedo' },
    { id: 50, name: 'Slim Tuxedo Suit⭐⭐⭐⭐⭐', image: Tuxedo5, price: 15000, category: 'tuxedo' },
    { id: 51, name: 'Designer Tuxedo Set⭐⭐⭐⭐⭐', image: Tuxedo6, price: 15000, category: 'tuxedo' },
    { id: 52, name: 'Royal Dinner Suit⭐⭐⭐⭐⭐', image: Tuxedo7, price: 15000, category: 'tuxedo' },
    { id: 53, name: 'Premium Tuxedo Suit⭐⭐⭐⭐⭐', image: Tuxedo8, price: 15000, category: 'tuxedo' },
  ];

  const kaundaSuits = [
    { id: 54, name: 'Classic Kaunda Suit⭐⭐⭐⭐⭐', image: Kaunda1, price: 14000, category: 'kaunda' },
    { id: 55, name: 'Royal Kaunda Suit⭐⭐⭐⭐⭐', image: Kaunda2, price: 14000, category: 'kaunda' },
    { id: 56, name: 'Modern Kaunda Suit⭐⭐⭐⭐⭐', image: Kaunda3, price: 14000, category: 'kaunda' },
    { id: 57, name: 'Elegant Kaunda Suit⭐⭐⭐⭐⭐', image: Kaunda4, price: 14000, category: 'kaunda' },
  ];

  const officialShirts = [
    { id: 58, name: 'Presidential Shirt⭐⭐⭐⭐⭐', price: 3000, description: '💥A Presidential Shirt perfect for formal African occasions.', category: 'Official Shirt', image: Official1 },
    { id: 59, name: 'Presidential Shirt⭐⭐⭐⭐⭐', price: 3000, description: '💥A Presidential Shirt perfect for formal African occasions.', category: 'Official Shirt', image: Official2 },
    { id: 60, name: 'Presidential Shirt⭐⭐⭐⭐⭐', price: 3000, description: '💥A Presidential Shirt perfect for formal African occasions.', category: 'Official Shirt', image: Official3 },
    { id: 61, name: 'Presidential Shirt⭐⭐⭐⭐⭐', price: 3000, description: '💥A Presidential Shirt perfect for formal African occasions.', category: 'Official Shirt', image: Official4 },
    { id: 62, name: 'French Cuff Shirt⭐⭐⭐⭐⭐', price: 1800, description: '💥Official Shirt perfect for formal African occasions.', category: 'Official Shirt', image: Official5 },
    { id: 63, name: 'Slim Fit Shirt⭐⭐⭐⭐⭐', price: 1800, description: '💥Official Shirt perfect for formal African occasions.', category: 'Official Shirt', image: Official6 },
    { id: 64, name: 'Double Cuff Shirt⭐⭐⭐⭐⭐', price: 1800, description: '💥Official Shirt perfect for formal African occasions.', category: 'Official Shirt', image: Official7 },
    { id: 65, name: 'Designer Collar Shirt⭐⭐⭐⭐⭐', price: 1800, description: '💥Official Shirt perfect for formal African occasions.', category: 'Official Shirt', image: Official8 },
    { id: 66, name: 'Executive Checkered Shirt⭐⭐⭐⭐⭐', price: 1800, description: '💥Official Shirt perfect for formal African occasions.', category: 'Official Shirt', image: Official9 },
    { id: 67, name: 'Silk Blend Formal⭐⭐⭐⭐⭐', price: 1800, description: '💥Official Shirt perfect for formal African occasions.', category: 'Official Shirt', image: Official10 },
    { id: 68, name: 'Premium Twill Shirt⭐⭐⭐⭐⭐', price: 1800, description: '💥Official Shirt perfect for formal African occasions.', category: 'Official Shirt', image: Official11 },
    { id: 69, name: 'Classic Spread Collar⭐⭐⭐⭐⭐', price: 1800, description: '💥Official Shirt perfect for formal African occasions.', category: 'Official Shirt', image: Official12},
    { id: 70, name: 'Luxury Official Shirt⭐⭐⭐⭐⭐', price: 1800, description: '💥Official Shirt perfect for formal African occasions.', category: 'Official Shirt', image: Official13},
    { id: 71, name: 'Sophistic Official Shirt⭐⭐⭐⭐⭐', price: 1800, description: '💥Official Shirt perfect for formal African occasions.', category: 'Official Shirt', image: Official14 },
    { id: 72, name: 'Classic Official Shirt⭐⭐⭐⭐⭐', price: 1800, description: '💥Official Shirt perfect for formal African occasions.', category: 'Official Shirt', image: Official15 },
    { id: 73, name: 'Exclusive Official Shirt⭐⭐⭐⭐⭐', price: 1800, description: '💥Official Shirt perfect for formal African occasions.', category: 'Official Shirt', image: Official16},
  ];

  const jeans = [
    { id: 74, name: 'Slim Fit jean 👖', image: Jean1, price: 2000, category: 'jeans' },
    { id: 75, name: 'Vintage Jean👖', image: Jean2, price: 2000, category: 'jeans' },
    { id: 76, name: 'Ripped Skinny Jean👖', image: Jean3, price: 2000, category: 'jeans' },
    { id: 77, name: 'Classic Straight Leg👖', image: Jean4, price: 2000, category: 'jeans' },
    { id: 78, name: 'High Super Jean👖', image: Jean5, price: 2000, category: 'jeans' },
    { id: 79, name: 'Black Stretch jean👖', image: Jean6, price: 2000, category: 'jeans' },
    { id: 80, name: 'Classic Jean👖', image: Jean7, price: 2000, category: 'jeans' },
    { id: 81, name: 'Tapered Cargo Jeans👖', image: Jean8, price: 2000, category: 'jeans' },
    { id: 82, name: '💯Flare Jeans👖', image: Jean9, price: 2000, category: 'jeans' },
    { id: 83, name: 'Selvedge Denim👖', image: jean10, price: 2000, category: 'jeans' },
    { id: 84, name: '💯 Super Jean👖', image: Jean11, price: 2000, category: 'jeans' },
    { id: 85, name: 'Stretch Skinny Fit👖', image: Jean12, price: 2000, category: 'jeans' },
    { id: 86, name: 'Mid Wash Denim Fit👖', image: Jean13, price: 2000, category: 'jeans' },
    { id: 87, name: 'Slim Fit Jogger👖', image: Jean14, price: 2000, category: 'jeans' },
    { id: 88, name: 'Premium Jeans👖', image: Jean15, price: 2000, category: 'jeans' },
    { id: 89, name: 'Dark Blue Jean👖', image: Jean16, price: 2000, category: 'jeans' },
  ];

  const leatherJackets = [
    { id: 90, name: '🔥Leather Jacket - Classic', image: Jacket1, price: 3500, category: 'jacket' },
    { id: 91, name: '🔥Leather Jacket - Premium', image: Jacket2, price: 3500, category: 'jacket' },
    { id: 92, name: '🔥Leather Jacket - Modern Fit', image: Jacket3, price: 3500, category: 'jacket' },
    { id: 93, name: '🔥Leather Jacket - Elegant Fit', image: Jacket4, price: 3500, category: 'jacket' },
  ];

  const belts = [
    { id: 94, name: '💯Premium Leather Belt', image: Belt1, price: 2000, category: 'belt' },
    { id: 95, name: '💯Premium Leather Belt', image: Belt2, price: 2000, category: 'belt' },
    { id: 96, name: '💯Premium Leather Belt', image: Belt3, price: 2000, category: 'belt' },
    { id: 97, name: '💯Premium Leather Belt', image: Belt4, price: 2000, category: 'belt' },
    { id: 98, name: '💯Premium Leather Belt', image: Belt5, price: 2000, category: 'belt' },
    { id: 99, name: '💯Premium Leather Belt', image: Belt6, price: 2000, category: 'belt' },
    { id: 100, name: '💯Stylish Brown Belt', image: Belt7, price: 2000, category: 'belt' },
    { id: 101, name: '💯Elegant Black Belt', image: Belt8, price: 2000, category: 'belt' },
  ];

  // Categories array for rendering
  const categories = [
    { title: 'Three-Piece Suits', items: threePieceSuits, link: '/suits/3piecesuits' },
    { title: 'Two-Piece Suits', items: twoPieceSuits, link: '/suits/2piecesuits' },
    { title: 'Tuxedo Dinner Suits', items: tuxedoSuits, link: '/suits/tuxedo' },
    { title: 'Kaunda Suits', items: kaundaSuits, link: '/suits/kaunda' },
    { title: 'Official Shirts', items: officialShirts, link: '/shirts/official' },
    { title: 'Jeans', items: jeans, link: '/jeans' },
    { title: 'Leather Jackets', items: leatherJackets, link: '/jackets/leather' },
    { title: 'Belts', items: belts, link: '/accessories/belt' },
  ];

  // Mouse hover handlers
  const handleMouseEnter = (id) => setHoveredItemId(id);
  const handleMouseLeave = () => setHoveredItemId(null);

  return (
    <section className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen overflow-x-hidden">
      {/* Size Alert */}
      {showSizeAlert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg flex items-center z-50 shadow-lg">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>Please select a size before proceeding!</span>
        </div>
      )}

      {/* Render categories and items */}
      {categories.map((category) => (
        <div key={category.title} className="mb-12">
          {/* Category Header */}
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg sm:text-xl p-4 sm:p-6 text-center font-bold rounded-xl mb-6 mt-16 mx-2 sm:mx-4 animate-pulse">
            <p>{category.title} – 🔥 Hurry Up!! 🚀 Limited Time Offers! 💯 Wool Fading Free</p>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-0">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Image container with zoom effect on hover */}
                <div className={`w-full bg-gray-100 p-4 flex items-center justify-center transition-all duration-300 ${hoveredItemId === item.id ? 'transform scale-105' : ''}`}>
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 sm:h-52 object-contain rounded-lg transition-all duration-300"
                      loading="lazy"
                    />
                  </Link>
                </div>

                {/* View more button on hover */}
                {hoveredItemId === item.id && (
                  <div className="absolute top-3 right-3">
                    <Link
                      to={category.link}
                      className="bg-blue-600 text-white py-1 px-3 text-xs sm:text-sm rounded-lg font-semibold hover:bg-blue-700 transition-all"
                    >
                      View More
                    </Link>
                  </div>
                )}

                {/* Item details */}
                <div className="p-4 text-center space-y-3">
                  <h3 className="text-base sm:text-lg font-bold line-clamp-2">{item.name}</h3>
                  <div className="flex justify-center">
                    <span className="text-blue-600 font-bold text-lg sm:text-xl">Ksh {item.price.toLocaleString()}</span>
                  </div>

                  {/* Size selection (if needed) */}
                  {requiresSize(item) && (
                    <div className="flex flex-col items-start space-y-2">
                      <span className={`text-sm font-medium ${sizeError[item.id] ? 'text-red-600' : 'text-gray-700'}`}>
                        {sizeError[item.id] ? 'Select Size (Required)' : 'Select Size'}
                      </span>
                      <div
                        className={`w-full overflow-x-auto pb-2 ${
                          sizeError[item.id] ? 'border border-red-500 rounded-lg p-1' : ''
                        }`}
                      >
                        <div className="flex space-x-2 min-w-max">
                          {Sizes.map((size) => (
                            <button
                              key={size}
                              onClick={(e) => {
                                e.preventDefault();
                                handleSizeSelection(item.id, size);
                              }}
                              className={`px-3 py-1 rounded border text-sm transition-all duration-300 ${
                                selectedSizeForSuit[item.id] === size
                                  ? recentlySelectedSize[item.id]
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-blue-100 text-blue-800 border-blue-300'
                                  : 'bg-white text-gray-600 border-gray-300'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Buttons: Purchase & Add to Cart */}
                  <div className="space-y-2 mt-3">
                    <button
                      onClick={(e) => handlePurchaseClick(item, e)}
                      className="w-full bg-green-700 hover:bg-green-800 text-white py-2 sm:py-3 rounded-lg font-semibold flex items-center justify-center gap-1 sm:gap-2 transition text-sm sm:text-base"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> Purchase
                    </button>
                    <button
                      onClick={(e) => handleAddToCart(item, e)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg font-semibold flex items-center justify-center gap-1 sm:gap-2 transition text-sm sm:text-base"
                    >
                      <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View more link */}
          <div className="flex justify-end mt-6 mb-8 px-2 sm:px-0">
            <Link to={category.link} className="text-lg sm:text-xl font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-2">
              <span>View More</span>
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Home;