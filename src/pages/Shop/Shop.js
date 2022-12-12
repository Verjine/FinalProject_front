import React from "react";
import Menu from "../../components/menu";
import { BsCartPlus } from "react-icons/bs";
import {flower} from '../../api/flowers'
import Footer from "../../components/Footer";
import ProductCard from "../ProductCart/ProductCart";

const Shop = () => {
  return (
    <div className="shop">
      <div>
        <Menu />
      </div>
      <div className="flowers_container">
        {flower.map((element, id) => (
          <div className="flw_box" key={id}>
            <img src={element.imgUrl} alt="" />
            <h3> {element.title}</h3>
            <div className="flw_cart"> 
            <span>{element.price}$</span>
            {/* <button className='buy' variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</button> */}

            
             <BsCartPlus color=" #ff8f52" />
            
            </div>

          </div>
        ))}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Shop;
