import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='top'>
          <div className='item'>
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrival</span>
          </div>
          <div className='item'>
          <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>  
            <span>Cookies</span>
          </div>
          <div className='item'>
          <h1>About US</h1>
            <span>
              lorem ipsum dolor sit amet, conlorem i
              lorem ipsum dolor sit lorem ipsum dolor
              lorem ipsum dolor sit lorem ipsum dolor
              lorem ipsum dolor sit lorem ipsum dolor
            </span>
          </div>
          <div className='item'>
          <h1>Contact US</h1>
            <span>
              lorem ipsum dolor sit amet, conlorem i
              lorem ipsum dolor sit lorem ipsum dolor
              lorem ipsum dolor sit lorem ipsum dolor
              lorem ipsum dolor sit lorem ipsum dolor
            </span>
          </div>
        </div>
        <div className='bottom'>
          <div className='left'>
            <span className='logo'>Himanshu Jha</span>
            <span className='copyright'>
              © Copyright 2023. All Rights Reserved
            </span>
          </div>
          <div className='right'>
            <img src='/img/payment.png'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
