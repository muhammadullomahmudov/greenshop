import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import kakos2 from '../../assets/kakos2.svg'
import kakos3 from '../../assets/kakos3.png'
import FooterTopMain from "../FooterTopMain/FooterTopMain";
const FooterCard = ({ icon, title, description }) => (
  <div className="footer-card">
    <div className="footer-card-icon">{icon}</div>
    <h3 className="footer-card-title">{title}</h3>
    <p className="footer-card-description">{description}</p>
  </div>
);

const Footer = () => {
  return (
    <footer className="footer">
<div className="container">
<div className="footer-top">
        <div className="footer-cards">
          <FooterCard
            icon={<img src={kakos2} className=  "fas fa-seedling" />}
            title="Garden Care"
            description="We are an online plant shop offering a wide range of cheap and trendy plants."
          />
          <FooterCard
            icon={<img src={kakos2} className="fas fa-heart" />}
            title="Plant Renovation"
            description="We are an online plant shop offering a wide range of cheap and trendy plants."
          />
          <FooterCard
            icon={<img src={kakos3} className="fas fa-water" />}
            title="Watering Garden"
            description="We are an online plant shop offering a wide range of cheap and trendy plants."
          />
        </div>
        <div className="footer-newsletter">
          <h4 className="newsletter-title">Would you like to join newsletters?</h4>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="newsletter-input"
            />
            <button className="newsletter-button">Join</button>
          </form>
          <p className="newsletter-text">
          We usually post offers and challenges in newsletter. We’re <br /> your online houseplant destination. We offer a wide range <br /> of houseplants and accessories shipped directly from our <br /> (green)house to yours! 
          </p>
        </div>
      </div>

<FooterTopMain/>
      <div className="footer-bottom">
        <div className="footer-info">
         <div className="footer-info-item">
            <h5 className="footer-info-title">My Account</h5>
            <ul className="footer-list">
              <li>My Account</li>
              <li>Our Stores</li>
              <li>Contact Us</li>
              <li>Career</li>
              <li>Specials</li>
            </ul>
          </div>
          <div className="footer-info-item">
            <h5 className="footer-info-title">Help & Guide</h5>
            <ul className="footer-list">
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Shipping & Delivery</li>
              <li>Product Policy</li>
              <li>How to Return</li>
            </ul>
          </div>
          <div className="footer-info-item">
            <h5 className="footer-info-title">Categories</h5>
            <ul className="footer-list">
              <li>House Plants</li>
              <li>Potter Plants</li>
              <li>Seeds</li>
              <li>Small Plants</li>
              <li>Accessories</li>
            </ul>
          </div>
         </div>
          <div className="footer-info-item">
            <h5 className="footer-info-title">Social Media</h5>
            <div className="footer-social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
            <p className="footer-payment-title">We accept</p>
            <div className="footer-payment-icons">
              <img src="image 16.png" alt="" />
            </div>
          </div>
        </div>
</div>
    </footer>
  );
};

export default Footer;