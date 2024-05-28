import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className="footer-content-header">
                        <img src={assets.logo} alt='Logo' />
                    </div>
                    <p>Discover the finest selection of culinary delights, 
                        crafted with passion and precision. From savory starters to decadent desserts,
                        our offerings are designed to tantalize your taste buds and satisfy every craving. 
                        Indulge in a dining experience that brings together flavor, quality, and convenience, 
                        all delivered to your doorstep</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt='Facebook' />
                        <img src={assets.twitter_icon} alt='Twitter' />
                        <img src={assets.linkedin_icon} alt='LinkedIn' />
                    </div>
                </div>
                <div className="footer-content-center">
                    <div className="footer-content-header">
                        <h2>COMPANY</h2>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <div className="footer-content-header">
                        <h2>GET IN TOUCH</h2>
                    </div>
                    <ul>
                        <li>+398-797-379-33</li>
                        <li>contact@just_eat.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 © Just_Eat.com - All Right Reserved.</p>
        </div>
    );
}

export default Footer;
