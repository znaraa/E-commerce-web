import React from 'react';
import StarRating from './StarRating';

const ProductList = ({ addToCart, onProductClick, productRatings, onRateProduct, products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card" onClick={() => onProductClick && onProductClick(product)} style={{cursor: 'pointer'}}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <div className="product-info">
            <h3 className="product-title">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <StarRating 
              rating={productRatings[product.id] || 0} 
              onRate={star => { onRateProduct && onRateProduct(product.id, star); }}
            />
            <button
              className="add-to-cart-btn"
              onClick={e => { e.stopPropagation(); addToCart(product); }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
