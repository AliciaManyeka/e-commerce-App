import React from 'react'
import DealsImage from "../../assets/card.png"

const DealsSection = () => {
  return (
    <section className="section__container deals__container">
    <div className='deals__image'>
        <img src={DealsImage}alt="" />
    </div>
    <div className='deals__content'>
<h5>Get up t 20% discount</h5>
<h4>Deals of th emonth</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum delectus nulla voluptates voluptatem cum similique, incidunt debitis aut laudantium quibusdam.</p>
<div className="deals__countdown flex-wrap ">
<div className="deals__countdown__card  bg-gradient-to-r from-blue-400 to-blue-700">
    <h4>14</h4>
    <p>Dats</p>
</div>
<div className="deals__countdown__card  bg-gradient-to-r from-blue-400 to-blue-700">
    <h4>28</h4>
    <p>DHours</p>
</div>
<div className="deals__countdown__card  bg-gradient-to-r from-blue-400 to-blue-700">
    <h4>15</h4>
    <p>mins</p>
</div>
<div className="deals__countdown__card  bg-gradient-to-r from-blue-400 to-blue-700">
    <h4>55</h4>
    <p>seconds</p>
</div>
</div>
    </div>
    </section>
  )
}

export default DealsSection