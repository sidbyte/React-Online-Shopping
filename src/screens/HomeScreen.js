import "./HomeScreen.css";

import {useEffect, useState} from 'react';

import ProductCard from "../Components/ProductCard";
import axios from 'axios';

// import products from "../data";

// import {apidata} from '../Practice/Practices.jsx';


const HomeScreen = () => {

  const [products, setProducts] = useState("");

  

  useEffect(() => {
    
    axios.get("https://reactproductdatabase-default-rtdb.firebaseio.com/userDataRecords.json")
    .then((response)=>{
        const data = Object.values(response.data);
        setProducts(data)
        // console.log(dataa)   
    })
    .catch((errors)=>{console.log(errors)})

    
  }, []);
  

  return (
    <div className='products__wrapper'>
      {products?products.map((product) => (
        <ProductCard key={product.id} product={product} />
      )):null}
    </div>
  );
};

export default HomeScreen;

