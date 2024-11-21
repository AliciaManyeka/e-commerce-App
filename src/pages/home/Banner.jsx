import React from 'react'
import { Link } from 'react-router-dom'
import bannerImage from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__content z-30'> 
            <h4 className='uppercase'> Up to 20% Discount on</h4>
            <h1>Women's Fashion Specialists</h1>
            <p>Descover the latest trneds and express your uniqie style with our womens fashion website.E xplore a curated collection of clothing, accessories,and footware that caters to every taste and occassion</p>
            <button className='btn'><Link to="/shop">Explore now
            </Link></button>
        </div>
        <div className='header__image'>
            <img src={bannerImage} alt="" />
        </div>

    </div>
  )
}

export default Banner