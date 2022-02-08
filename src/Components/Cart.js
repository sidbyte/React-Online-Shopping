import "./Cart.css";

import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";
// import { Link } from "react-router-dom";
import formatCurrency from "format-currency";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom';

// import payment from './Payment';





const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "₹" };

  const navigate =useNavigate();

  const handlepayment=()=>{
    navigate("/payment");
  }

  return (
    <>
      {showCart && (
        <div className='cart__wrapper'>
          
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCart}
            ></i>
          </div>
         
          <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item.id}  item={item} />
                  
                  

                ))}
                 &nbsp;
        
              </ul>
            )}
          </div>
          
          <div className='Cart__cartTotal'>
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5}}>
              {formatCurrency(
                cartItems.reduce((amount, item) => parseInt(item.price) + amount, 0),
                opts
              )}
            </div>
          </div>

          <div className="text-center" style={{display: "flex" ,justifyContent:"center",  alignItems: "center"}}>
          <button type="button" onClick={handlepayment} className="ProductCard__button" >Click to proceed</button>
          </div>

        </div>
      )}
    </>
  );
};

export default Cart;
