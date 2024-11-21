import React from 'react'
import instaImg1 from "../assets/Instagram-1.jpg"
import instaImg2 from "../assets/Instagram-2.jpg"
import instaImg3 from "../assets/Instagram-3.jpg"
import instaImg4 from "../assets/Instagram-4.jpg"
import instaImg5 from "../assets/Instagram-4.jpg"
import instaImg6 from "../assets/Instagram-4.jpg"

const Footer = () => {
  return (
    <>
      <footer className='section__container footer__container'>
        <div className="footer__col">
            <h4>Contact Info</h4>
            <span>
                <i className="ri-map-pin-2-fill"></i>
            </span>
            <p>
            <span>
                <i className='ri-mail-fill'>
                </i>
            FashionVogue.com
            </span></p>
            <p>+263 71366 2322</p>
            
        </div>
        <div className="footer__col">
            <h4>Company</h4>
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Work with us</a>
            <a href="/">Our Blogs</a>
            <a href="/">Tems and conditions</a>
        </div>
        <div className="footer__col">
            <h4>Usefull links</h4>
            <a href="/">Help</a>
            <a href="/">Track your order</a>
            <a href="/">Men</a>
            <a href="/">Women</a>
            <a href="/">Dresses</a>
        </div>
        <div className="footer__col">
            <h4>Instagram</h4>
            <div className="instagram__grid">
<img src={instaImg1} alt="" />
<img src={instaImg2} alt="" />
<img src={instaImg3} alt="" />
<img src={instaImg4} alt="" />
<img src={instaImg5} alt="" />
<img src={instaImg6} alt="" />
            </div>
        </div>
        <div className="footer__bar">
            Copyright @ 2024 Alicia
        </div>
      </footer>
    </>
  )
}

export default Footer
