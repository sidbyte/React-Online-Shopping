import "./CartItem.css";

import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "₹" };
  return (
    <li className='CartItem__item'>
      <img src={item.image} alt='' />
      <div>
        {item.name} {formatCurrency(`${item.price}`, opts)}
        {/* &nbsp;
        
        <button style={{cursor:"pointer"}}><i class="fas fa-minus" ></i></button>
      
        &nbsp;
        <button style={{cursor:"pointer"}}><i class="fas fa-plus"></i></button> */}
  
      </div>
      <button className='CartItem__button' onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;
