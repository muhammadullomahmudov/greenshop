import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import OurBlog from '../OurBlog/OurBlog'
import Footer from '../Footer/Footer'
import gul from '../../assets/Gul1.png'
import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.png'
import product4 from '../../assets/product4.png'
import './InformationShop.css'
import { Link } from 'react-router-dom'
const InformationShop = () => {
  const [count, setCount] = useState(1)
  function clickMinus() {
    setCount(count - 1)

  }
  function clickPlus() {
    setCount(count + 1)
  }
  return (
    <>
      <Header />
      <div className="container product-container">
        <div className="product-left">
          <div className="product-gallery">
            <img src={product1} className="gallery-item" />
            <img src={product2} className="gallery-item" />
            <img src={product3} className="gallery-item" />
            <img src={product4} className="gallery-item" />
          </div>
          <div className="product-main-image">
            <img src={gul} />
          </div>
        </div>

        <div className="product-right">
          <h1 className="product-title">Barberton Daisy</h1>
          <div className="product-rating">
            <p className="product-price">$119.00</p>
            <span className="stars">★★★★★</span>
            <span className="reviews">19 Customer Reviews</span>
          </div>
          <strong className="product-strong">Short Description:</strong>
          <p className="product-description">
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off <br /> the ground. The ceramic cylinder planters come with a wooden stand to help elevate <br /> your plants off the ground.
          </p>

          <div className="product-size">
            <p>Size:</p>
            <div className="size-options">
              <input className="size-inp visually-hidden" type="radio" name="radio" id="bir" />
              <label htmlFor='bir' className="size-btn">
                S
              </label>
              <input className="size-inp visually-hidden " type="radio" name="radio" id="ikki" />
              <label htmlFor='ikki' className="size-btn">M</label>
              <input className="size-inp visually-hidden " type="radio" name="radio" id="uch" />
              <label htmlFor='uch' className="size-btn">L</label>
              <input className="size-inp visually-hidden " type="radio" name="radio" id="tort" />
              <label htmlFor='tort' className="size-btn">XL</label>
            </div>
          </div>

          <div className="product-actions">
            <div className="quantity">
              <button onClick={clickMinus} className="quantity-btn minus">-</button>
              <p className="quantity-text">{count}</p>
              <button onClick={clickPlus} className="quantity-btn">+</button>
            </div>
            <button className="buy-now">BUY NOW</button>
            <Link to={"/cart"} className="add-to-cart nav-link">ADD TO CART</Link>
          </div>

          <div className="product-meta">
            <p>
              <strong>SKU:</strong> 1995751877966
            </p>
            <p>
              <strong>Categories:</strong> Potter Plants
            </p>
            <p>
              <strong>Tags:</strong> Home, Garden, Plants
            </p>
          </div>

          <div className="product-share">
            <p>Share this product:</p>
            <div className="share-icons">
              <img src="Facebook.png" alt="" />
              <img src="Twitter.png" alt="" />
              <img src="Linkedin.png" alt="" />
              <img src="Message.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container product-descprition-container">
        <h2 className="product-description-navlink">Product Description</h2>
        <p className="product-description-text">
          The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your <br /> plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus <br /> quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. <br />
          <br />
          Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, <br /> purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat <br /> vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod <br /> eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
        </p>
        <h3 className="product-description-title">Living Room:</h3>
        <p className="product-description-text">
          The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your <br /> plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <h3 className="product-description-title">Dining Room:</h3>
        <p className="product-description-text">
          The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every <br /> room of your home with houseplants and their restorative qualities will improve your life.
        </p>
        <h3 className="product-description-title">Office:</h3>
        <p className="product-description-text">
          The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your <br /> plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

      </div>
      <OurBlog />
      <Footer />
    </>
  )
}

export default InformationShop