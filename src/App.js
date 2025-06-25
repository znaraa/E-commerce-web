import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductModal from './components/ProductModal';
import AuthModal from './components/AuthModal';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const [showContact, setShowContact] = useState(false);

  // Admin email/password
  const ADMIN_EMAIL = 'admin@digitalstore.mn';
  const ADMIN_PASS = 'admin123';

  // Products state (load from localStorage or fallback to default)
  const defaultProducts = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80' },
    { id: 2, name: 'Smart Watch', price: 199.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80' },
    { id: 3, name: 'Laptop', price: 999.99, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=300&q=80' },
    { id: 4, name: 'Smartphone', price: 699.99, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80' },
    { id: 5, name: 'Bluetooth Speaker', price: 79.99, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=300&q=80' },
    { id: 6, name: 'Gaming Console', price: 399.99, image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&w=300&q=80' },
    { id: 7, name: 'Tablet', price: 299.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80' },
    { id: 8, name: 'DSLR Camera', price: 549.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300&q=80' },
    { id: 9, name: 'VR Headset', price: 249.99, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80' },
    { id: 10, name: 'Portable Charger', price: 39.99, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80' },
  ];
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('products');
    return saved ? JSON.parse(saved) : defaultProducts;
  });

  const saveProducts = (prods) => {
    setProducts(prods);
    localStorage.setItem('products', JSON.stringify(prods));
  };

  const handleAddProduct = (product) => {
    const newProducts = [...products, product];
    saveProducts(newProducts);
  };

  const handleEditProduct = (edited) => {
    const newProducts = products.map(p => p.id === edited.id ? { ...p, ...edited } : p);
    saveProducts(newProducts);
  };

  const handleDeleteProduct = (id) => {
    const newProducts = products.filter(p => p.id !== id);
    saveProducts(newProducts);
  };

  const isAdmin = user && user.email === ADMIN_EMAIL;

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const updateRating = (productId, rating) => {
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, rating }
        : item
    ));
  };

  const handleRegister = (email, password) => {
    localStorage.setItem('user', JSON.stringify({ email, password }));
    setUser({ email });
    setShowAuth(false);
  };
  const handleLogin = (email, password) => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
      setUser({ email });
      setShowAuth(false);
      return true;
    }
    const saved = localStorage.getItem('user');
    if (saved) {
      const { email: savedEmail, password: savedPassword } = JSON.parse(saved);
      if (email === savedEmail && password === savedPassword) {
        setUser({ email });
        setShowAuth(false);
        return true;
      }
    }
    return false;
  };
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  const handleHome = () => {
    setShowCart(false);
    setShowModal(false);
  };
  const handleContact = () => setShowContact(true);

  // Build a map of productId -> rating from cart
  const productRatings = cart.reduce((acc, item) => {
    if (item.rating) acc[item.id] = item.rating;
    return acc;
  }, {});

  return (
    <div className="App">
      <Navbar 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        setShowCart={setShowCart}
        user={user}
        onLogin={() => { setAuthMode('login'); setShowAuth(true); }}
        onRegister={() => { setAuthMode('register'); setShowAuth(true); }}
        onLogout={handleLogout}
        onHome={handleHome}
        onContact={handleContact}
      />
      <main className="main-content">
        {isAdmin && (
          <AdminPanel onAddProduct={handleAddProduct} products={products} onEditProduct={handleEditProduct} onDeleteProduct={handleDeleteProduct} />
        )}
        {showCart ? (
          <Cart 
            cart={cart} 
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            updateRating={updateRating}
          />
        ) : (
          <ProductList 
            addToCart={addToCart} 
            onProductClick={(product) => { setSelectedProduct(product); setShowModal(true); }}
            productRatings={productRatings}
            onRateProduct={updateRating}
            products={products}
          />
        )}
        {showModal && selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setShowModal(false)} 
            addToCart={addToCart}
          />
        )}
      </main>
      <Footer />
      {showAuth && (
        <AuthModal 
          mode={authMode}
          onClose={() => setShowAuth(false)}
          onRegister={handleRegister}
          onLogin={handleLogin}
        />
      )}
      {showContact && (
        <ContactModal onClose={() => setShowContact(false)} />
      )}
    </div>
  );
}

export default App;
