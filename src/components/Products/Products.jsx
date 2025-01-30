import React from "react";
import "./Product.css";
import Product from "../Product/Product";
import Gul1 from '../../assets/Gul1.png'
import Gul2 from '../../assets/Gul2.png'
import Gul3 from '../../assets/Gul3.png'
import Gul4 from '../../assets/Gul4.png'
import Gul5 from '../../assets/Gul5.png'
import Gul6 from '../../assets/Gul6.png'
import Gul7 from '../../assets/Gul7.png'
import Gul8 from '../../assets/Gul8.png'
import supersale from '../../assets/super-sale.png'


const Products = () => {
  return (
      <div className="category">
 <div className="container product-container">
 <aside className="sidebar">
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li className="category-active">
                <p>
                House Plants
                </p>
                <p> (33)</p>
            </li>
            <li className="category-active">
                <p>
                Potter Plants
                </p>
                <p> (12)</p>
            </li>
            <li className="category-active">
                <p>
                Seeds
                </p>
                <p> (65)</p>
            </li>
            <li className="category-active">
                <p>
                Small Plants
                </p>
                <p> (39)</p>
            </li>
            <li className="category-active">
                <p>
                Big Plants
                </p>
                <p> (23)</p>
            </li>
            <li className="category-active">
                <p>
                Succulents
                </p>
                <p> (17)</p>
            </li>
            <li className="category-active">
                <p>
                Terrariums
                </p>
                <p> (6)</p>
            </li>
            <li className="category-active">
                <p>
                Gardening
                </p>
                <p> (23)</p>
            </li>
            <li className="category-active">
                <p>
                Accessories
                </p>
                <p> (18)</p>
            </li>
          </ul>
        </div>
        <div className="price-range">
          <h3>Price Range</h3>
          <div className="price-values">
            <span>Price: </span>
            <p>$59 - $1230</p>
          </div>
            <input type="range" className="range" /><br />
          <button>Filter</button>
        </div>
        <div className="size">
          <h3>Size</h3>
          <ul className="sizebox">
          <li className="category-active">
                <p>
                Small
                </p>
                <p> (119)</p>
            </li>
            <li className="category-active">
                <p>
                Medium
                </p>
                <p> (86)</p>
            </li>
            <li className="category-active">
                <p>
                Large
                </p>
                <p> (78)</p>
            </li>
          </ul>
          <img src={supersale} alt="super sale img" />
        </div>
      </aside>
      <main className="products">
      <Product name="Barberton Daisy" price={119} image={Gul1} />
          <Product name="Angel Wing Begonia" price={169} image={Gul2} />
          <Product name="African Violet" price={199} image={Gul3}  />
          <Product name="Beach Spider Lily" price={129} image={Gul4} />
          <Product name="Blushing Bromeliad" price={139} image={Gul5} />
          <Product name="Aluminum Plant" price={179} image={Gul6} />
          <Product name="Bird's Nest Fern" price={99} image={Gul7} />
          <Product name="Broadleaf Lady Palm" price={59} image={Gul8} />
          <Product name="African Violet" price={199} image={Gul3}  />
      </main>
 </div>
    </div>
  );
};



export default Products;