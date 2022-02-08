import "./Admin.css"

import React, { useState } from "react";

import swal from "sweetalert";

const Admin = () => {
  const [product, setProduct] = useState({
    name: "",
    id: "",
    price: "",
    rating: "",
    image: "",
   
  });

  let name, value;

  const handleProduct = (event) => {
    name = event.target.name;
    value = event.target.value;

    setProduct({ ...product, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { name, id, price, rating, image } = product;

    if (name && id && price && rating && image) {
      const res = fetch(
        "https://reactproductdatabase-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            id,
            price,
            rating,
            image,
          }),
        }
      );

      if (res) {
        setProduct({
          name: "",
          id: "",
          price: "",
          rating: "",
          image: "",
          
        });
        swal({
          title:"Product Added Successfully",
          text:"",
          icon:"success",
          button:"Okay"
         } )
      } else {
        swal({
          title:"Please Add the product",
          text:"",
          icon:"error",
          button:"Okay"
         } )
      }
    } else {
      swal({
        title:"Please Add the Product",
        text:"",
        icon:"warning",
        button:"Okay"
       } )
    }
  };

  return (
    <>
    
                {/* right side contact form  */}
                <div className="containeradmin">
                  <div className="form12">
                <div className="ui form">
                
                  <form method="POST">
                    
                      <div className="field" >
                     
                      <label>Product Id</label>
                        <input
                          type="text"
                          name="id"
                          id=""
                         
                          placeholder="id"
                          value={product.id}
                          onChange={handleProduct}
                        />
                      </div>
                      <div className="field">
                        <label>Product Name</label>
                        <input
                          type="text"
                          name="name"
                          id=""
                          placeholder="name"
                          value={product.name}
                          onChange={handleProduct}
                        />
                      </div>
                     
                    
                    
                      <div className="field">
                      <label>Product Price</label>
                        <input
                          type="text"
                          name="price"
                          id=""
            
                          placeholder="price"
                          value={product.price}
                          onChange={handleProduct}
                        />
                      </div>
                      <div className="field">
                      <label>Product Rating</label>
                        <input
                          type="text"
                          name="rating"
                          id=""
                          placeholder="rating"
                          value={product.rating}
                          onChange={handleProduct}
                        />
                      </div>
                    
                    <div>
                      <div className="field" >
                      <label>Product Image</label>
                        <input
                          type="text"
                          name="image"
                          id=""
                          placeholder="image"
                          value={product.image}
                          onChange={handleProduct}
                        />
                      </div>
                    </div>

                  
                    <div className="ui divider"></div>

                    <button
                      type="submit"
                      className="fluid ui button"
                      style={{backgroundColor:"#DD4A48",width: "130px",margin: "auto",color:"white"}}
                     
                      onClick={submitData}>
                      Submit
                    </button>
                  </form>
                </div>
                </div>
                </div>
                
          
    </>
  );
};

export default Admin;