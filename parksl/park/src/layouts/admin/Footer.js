import React from "react";
import {Link} from 'react-router-dom'


const Footer = () => {

    return (
        <footer className="bg-dark text-white fixed-bottom">
    
    <div className="text-center p-3 ">
      © 2022 Copyright :
      <Link className="text-white" to="/">  Parking Portal</Link>
    </div>
   
  </footer>
    );

}

export default Footer;
