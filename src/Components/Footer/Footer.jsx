import "./Footer.css";

import {Link} from 'react-router-dom';
import React from 'react';

const ContactUs = () => {
  return (<>


<footer>
   <div className="content">

     <div className="left box">
       <div className="upper">
         <div className="topic">ABOUT US</div>
         <p>This website was made by some members of Capgemini aka TEAM-6,
             they created this website for their project after getting good reponse
             they worked on the website more and later they launched
             the website in the market and now its asia one of the best shopping website.
         </p>
       </div>

       <div className="lower" style={{marginTop:"49px"}}>
         <div className="topic">CONTACT US</div>
         <div className="phone" style={{marginTop:"10px"}}>
           <Link to="#"><i className="fas fa-phone-volume"></i>+91-96234 66397</Link>
         </div>
         <div className="email">
         <a href="mailto:admin@website.com?subject=Hello how are you"><i className="fas fa-envelope"></i>Sidbyte@gmail.com</a>
         </div>
       </div>

     </div>
     <div className="middle box">
       <div className="topic">OUR SERVICE</div>
       <div><Link to="#">Sale All the Season</Link></div>
       <div><Link to="#">Contactless Delivery</Link></div>
       <div><Link to="#">Vast Product Variety</Link></div>
       <div><Link to="#">Multiple Payment Options</Link></div>
       <div><Link to="#">Return Policy</Link></div>
       <div><Link to="#">Customer Service 24*7</Link></div>
       <div><Link to="#">Quick Delivery</Link></div>
     </div>

     <div className="right box">
       <div className="topic">CONNECT WITH US</div>
       <form action="#">
         
         <div className="media-icons">
           <Link to="#"><i className="fab fa-facebook-f"></i></Link>
           <Link to="#"><i className="fab fa-instagram"></i></Link>
           <Link to="#"><i className="fab fa-twitter"></i></Link>
           <Link to="#"><i className="fab fa-youtube"></i></Link>
           <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
         </div>
       </form>
     </div>
   </div>

   <div className="bottom">
     <p>Copyright ©️ 2022 <Link to="">Team-6</Link> All rights reserved</p>
   </div>
 </footer>


  </>);
};

export default ContactUs;
