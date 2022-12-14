import React, {  useContext } from 'react';
import CartProduct from '../pages/ProductCart/CartProduct';
import { CartContext } from "../pages/ProductCart/CartContext";
import "./modal.css"
import {RiEmotionUnhappyLine} from 'react-icons/ri'
const Modal = ({ open, onClose }) => {
    
    const cart = useContext(CartContext);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    if (!open) return null
    return (
        <div onClick={onClose} className="modal_overlay">
            <div onClick={(e) => {
                e.stopPropagation()
            }} className="modalContainer">
                <div className="modalRight">
                    <p onClick={onClose} className="modal_closeBtn">X</p>
                    <div className="modal_content">
                        {productsCount > 0 ?
                            <>
                                <p>Items in your cart:</p>
                                {cart.items.map((currentProduct, idx) => (
                                    <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                                ))}

                                <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                                <button variant="success">
                                    Purchase items!
                                </button>
                            </>
                            :
                            <h1>Your cart is empty <RiEmotionUnhappyLine/> !</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal