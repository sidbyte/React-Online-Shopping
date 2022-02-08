import "./Payment.css";

import Nav from "../Nav";
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [product] = React.useState({
    name: "Payment",
    price: 1000,
    description: "Cool product",
  });

  // await axios
  //     .post(" https://jw9zw.sse.codesandbox.io/checkout", { token, product })
  //     .then(() =>
  //       swal({
  //         title: "Order Placed successfully",
  //         text: "Continue Shopping",
  //         icon: "success",
  //         button: "Okay",
  //       })



  async function handleToken(token, addresses) {
    
    await axios
      .post(" https://jw9zw.sse.codesandbox.io/checkout", { token, product })
      .then((response) =>{ return console.log(response);}
      )
      .then(function () {
        // return navigate("/home");
        return(swal({
          title: "Order Placed successfully",
          text: "Continue Shopping",
          icon: "success",
          button: "Okay",
        })).then(()=>{navigate("/home")})
      });

      
  }
  return (
    <>
      <div className="paymentdiv">
        <Nav />

        <div className="inner">
          <StripeCheckout
            stripeKey="pk_test_51KPSSSSBZ5ze0yRRRhYKUOgsojuyOTD1mzqiDWaX8GrK96scJ4kD7BjLR3i8H6mdWaEAmqILUnSdk5IlAqVL9Njr00oNxq8iHe"
            token={handleToken}
            billingAddress
            shippingAddress
            amount={product.price * 100}
            name={product.name}
            currency="INR"
            style={{ marginTop: "250px", marginLeft: "550px" }}
          />

          {/* <button type="button" className="upibutton" > Pay With UPI </button> */}
        </div>
      </div>
    </>
  );
};

export default Payment;
