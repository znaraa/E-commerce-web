import React, { useState } from 'react';

const AuthModal = ({ mode, onClose, onRegister, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    if (mode === 'register') {
      onRegister(email, password);
    } else {
      const success = onLogin(email, password);
      if (!success) setError('Invalid email or password');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{maxWidth: 350}}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2 style={{marginBottom: '1rem'}}>{mode === 'register' ? 'Register' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{width: '100%', marginBottom: 10, padding: 8}}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{width: '100%', marginBottom: 10, padding: 8}}
          />
          {error && <div style={{color: 'red', marginBottom: 10}}>{error}</div>}
          <button type="submit" className="add-to-cart-btn" style={{width: '100%'}}>
            {mode === 'register' ? 'Register' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
