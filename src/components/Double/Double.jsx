import React from "react";
import "./Double.css";
import kosa from '../../assets/Kosa.png'
import kosa2 from '../../assets/kosa2.png'

const Double = () => {
  return (
<div className="promo-section">
  <div className="promo">
    <img src={kosa} alt="Summer Cactus & Succulents" />
    <div className="promo-content">
      <h3>SUMMER CACTUS & SUCCULENTS</h3>
      <p>
        We are an online plant shop offering a wide range of cheap and trendy plants.
      </p>
      <button className="explore-more">Explore More →</button>
    </div>
  </div>

  <div className="promo">
    <img src={kosa2} alt="Styling Trends & Much More" />
    <div className="promo-content">
      <h3>STYLING TRENDS & MUCH MORE</h3>
      <p>
        We are an online plant shop offering a wide range of cheap and trendy plants.
      </p>
      <button className="explore-more">Explore More →</button>
    </div>
  </div>
</div>

  );
};

export default Double;
