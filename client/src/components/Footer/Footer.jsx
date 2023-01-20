import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrival</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt aspernatur vel labore, aliquid asperiores quia? Cupiditate error veniam autem debitis? Ad animi dolores et perspiciatis reprehenderit aut debitis, ex velit!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Vamsistore</span>
          <span className="copyright">&copy; Copyright 2023.All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment" />
        </div>
      </div>

    </div>
  )
}

export default Footer