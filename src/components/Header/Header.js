import React from "react";
import './Header.css';
import Ham from '../../assets/ham.png'

const Header = ({hamClick}) => {
  return (
    <div className="header">
     <h2 className="heading">Application Heading</h2>
     <img src={Ham} className="ham" onClick={hamClick} />
    </div>
  );
};

export default Header;
