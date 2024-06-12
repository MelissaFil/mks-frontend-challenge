import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-info">
        <div className='name-price'>
          <h3 className="product-name">{name}</h3>
          <div className='price'>
              <span className="product-price">R${price}</span>
          </div>
        </div>       
        <p className="product-description">{description}</p>
        
      </div>
      <div className="product-bottom">
           
          <button className="product-button"><img src="shopping.png" alt="icone de compra" /> COMPRAR</button>
      </div>
    </div>
  );
};

export default ProductCard;