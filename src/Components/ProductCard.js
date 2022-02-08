import "./ProductCard.css";

import CartContext from "../context/cart/CartContext";
import Rating from "./Rating";
import formatCurrency from "format-currency";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "₹" };
  return (
    <div className='productCard__wrapper'>
      
      <div>
        <img className='productCard__img' src={product.image} alt='' />
        <h4>{product.name}</h4>
        <div className='ProductCard__price'>
          <h5>{formatCurrency(`${product.price}`, opts)}</h5>
        </div>
        <div className='ProductCard__Rateing'>
          <Rating
            value={product.rating}
            text={`${product.rating} Rating`}
          />
        </div>
        <button
          className='ProductCard__button'
          onClick={() => addToCart(product)}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
