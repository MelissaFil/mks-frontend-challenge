import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './CartSidebar.css';

interface CartSidebarProps {
  isOpen: boolean;
  toggleCart: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, toggleCart }) => {
  const cartContext = useContext(CartContext);
  if (!cartContext) return null;
  const { cartItems, incrementItem, decrementItem } = cartContext;
  const totalPrice = cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={toggleCart}>X</button>
      <h2>Carrinho de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <div className="quantity-control">
                <button onClick={() => decrementItem(item.id)}>-</button>
                <input
                  type="number"
                  value={item.quantity}
                  readOnly
                />
                <button onClick={() => incrementItem(item.id)}>+</button>
              </div>
              <p>R${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h3>Total: R${totalPrice.toFixed(2)}</h3>
        <button className="checkout-button">Finalizar Compra</button>
      </div>
    </div>
  );
};

export default CartSidebar;
