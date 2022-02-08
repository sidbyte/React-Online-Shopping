import "./Nav.css";

import CartContext from "../context/cart/CartContext";
import Swal from 'sweetalert2';
import { auth } from "./Signup/firebase-config";
import {signOut} from 'firebase/auth';
import { useContext } from "react";
import {useNavigate} from 'react-router-dom';

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext);
  
  const navigate = useNavigate();

  const handleLogout=()=>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout !'
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
        signOut(auth);
          navigate("/");
      }
    })

  }

  return (
    <nav>
      <div className="nav__left">
        <div className="input__wrapper">
          <input type="text" placeholder="Search here" />
          <i className="fas fa-search" />
        </div>
      </div>

      <div className="nav__middle" style={{ textAlign: "center" }}>
        <p style={{ textAlign: "center", marginLeft: "198px" }}>
          <strong>Team 6 Shopping Center</strong>
        </p>
      </div>

      <div className="navmenu" style={{display:"flex"}}>
        <button
          className="navbutton"
          style={{
            marginLeft: "5px",
            border: "black",
            color: "white",
            borderRadius: "8px",
            backgroundColor: "black",
            cursor: "pointer",
          }}
          onClick={()=>navigate("/home")}
        >
          Home
        </button>
        <button
         style={{
          marginLeft: "20px",
          border: "black",
          color: "white",
          borderRadius: "8px",
          backgroundColor: "black",
          cursor: "pointer",
        }}
        >
        Contact
        </button>
        
        <p style={{marginLeft:"20px"}}>
        <button style={{fontSize: "14px",
            border: "black",
            color: "white",
            backgroundColor: "black",
            textAlign: "center",cursor:"pointer",display:"flex"}} onClick={handleLogout}> Logout&nbsp;<i className="fas fa-sign-out-alt" style={{marginTop:"2px"}}></i>
        </button>
        </p>
      </div>

 
 
 
      <div className="nav__right">
        <div className="cart__icon">
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            onClick={showHideCart}
            style={{ textAlign: "center" }}
          />
          {cartItems.length > 0 && (
            <div className="item__count">
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
