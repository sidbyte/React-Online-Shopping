import "./index.css";

import App from "./App";
import CartState from "./context/cart/CartState";
// import Practices from "./Practice/Admin";
import React from "react";
import ReactDOM from "react-dom";

// import Showdata from "./Practice/Showdata";

ReactDOM.render(
  <React.StrictMode>
    <CartState>
      <App />
    </CartState>

    {/* <Practices/>
    <Showdata/> */}
  </React.StrictMode>,
  document.getElementById("root")
);


