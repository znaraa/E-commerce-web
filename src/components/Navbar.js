import React from 'react';

const Navbar = ({ cartCount, setShowCart, user, onLogin, onRegister, onLogout, onHome }) => {
  return (
    <nav className="navbar">
      <h1 style={{ cursor: 'pointer' }} onClick={onHome}>Digital Store</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className="cart-button" onClick={() => setShowCart(prev => !prev)}>
          🛒 Cart ({cartCount})
        </button>
        {user ? (
          <>
            <span style={{ color: 'white' }}>{user.email}</span>
            <button className="cart-button" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <button className="cart-button" onClick={onLogin}>Login</button>
            <button className="cart-button" onClick={onRegister}>Register</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
