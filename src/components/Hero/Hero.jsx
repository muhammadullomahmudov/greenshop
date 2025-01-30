import React from 'react'
import './Hero.css'
import colored from '../../assets/colored.png'
import big from '../../assets/big.png'
import small from '../../assets/small.png'
const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero__inner">
                    <div className="hero-content">
                        <span className="hero-welcome">WELCOME TO REENSHOP</span>
                        <h1 className="hero-title">
                            LET'S MAKE A  BETTER <span className="highlight">PLANET</span>
                        </h1>
                        <p className="hero-description">
                            We are an online plant shop offering a wide range of cheap and trendy
                            plants. Use our plants to create a unique Urban Jungle. Order your
                            favorite plants!
                        </p>
                        <button className="shop-now">SHOP NOW</button>
                    </div>
                    <img src={colored} alt="colored img" className="colored" />
                    <div className="hero-images">
                        <img
                        width={135}
                        height={135}
                            src={small}
                            alt="Small Plant"
                            className="small-plant"
                        />
                        <img
                        width={518}
                        height={518}
                            src={big}
                            alt="Large Plant"
                            className="large-plant"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero