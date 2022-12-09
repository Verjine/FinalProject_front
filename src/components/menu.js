import React from "react";
import { Link } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";

const menu = () => {
  return (
    <>
      <div className="navbar">
        <h1 > <Link to  = "/" className="shop" >  <span>Flower</span>Shop</Link></h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <div className="icons">
          
           <Link to = "/register"> <BsPersonFill size="25px" color="FF8F52" />{" "}</Link>
          
          <Link to="">
            <BsCart2 size="25px" color="FF8F52" />{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default menu;
