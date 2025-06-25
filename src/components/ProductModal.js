import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose, addToCart }) => {
  if (!product) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img src={product.image} alt={product.name} className="modal-image" />
        <h2>{product.name}</h2>
        <p className="modal-price">${product.price.toFixed(2)}</p>
        {product.description && <p className="modal-description">{product.description}</p>}
        <button className="add-to-cart-btn" onClick={() => { addToCart(product); onClose(); }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
