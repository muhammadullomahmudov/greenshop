import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";


const Product = ({ name, price, image, }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
        <div className="product-icons">
         <Link to={"/shop"}>
         <FaShoppingCart />
         </Link>

          <FcLike />
          <CiSearch />
        </div>
      </div>
      <h4>{name}</h4>
      <p>${price}.00</p>
    </div>
  );
};

export default Product;


