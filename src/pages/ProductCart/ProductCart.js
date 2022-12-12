import { CartContext } from "../ProductCart/CartContext";
import { useContext } from "react";

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  return (
    <div className="box_list">
      <div className="image_wrapper">
        <img src={product.imgUrl} alt="img" />
      </div>
      <div className="box_info">
        <h3>{product.title}</h3>
        <div className="price">
          <span>Price {product.price}$</span>

          <button
            className="buy"
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
