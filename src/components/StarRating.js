import React from 'react';

const StarRating = ({ rating, onRate }) => {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{ color: star <= rating ? '#FFD700' : '#ccc', fontSize: '1.3rem', cursor: onRate ? 'pointer' : 'default' }}
          onClick={onRate ? () => onRate(star) : undefined}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
