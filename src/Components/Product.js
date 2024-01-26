// Product.js
import React, { useCallback } from 'react';
import '../Styles/Product.css';

const Product = React.memo(({ name, image, description, onClick, isSelected }) => {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <div className={`product ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
      <img src={image} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
});

export default Product;
