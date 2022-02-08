import "./PageNotFound.css";

import React from 'react'
import {useNavigate} from 'react-router-dom';

const PageNotFound = () => {

    const navigate = useNavigate();

    const handleError = () =>{
        navigate("/home");
    }

    return (
        <div className="wrapper" >
           
            <button className="abc" onClick={handleError}>Click</button>
                
           
        </div >
    )
}

export default PageNotFound