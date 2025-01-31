import React from 'react'
import Card1 from '../../assets/card1.png'
import Card2 from '../../assets/card3.png'
import Card3 from '../../assets/card2.png'
import Card4 from '../../assets/card2.png'

const cards=[
    {
        id:1,
        imge:Card1,
        trend:"2024 Trend",
        title:"Womens casual"
    },
    {
        id:2,
        imge:Card2,
        trend:"2024 Trend",
        title:"Womens dress"
    },
    {
        id:3,
        imge:Card3,
        trend:"2024 Trend",
        title:"Womens formal"
    },
    // {
    //     id:4,
    //     imge:Card4,
    //     trend:"2024 Trend",
    //     title:"Womens dress"
    // },
    // {
    //     id:1,
    //     imge:Card1,
    //     trend:"2024 Trend",
    //     title:"Womens dress"
    // }
]
const HeroSection = () => {
  return (
    <section className="section__container hero__container">
        {
            cards.map((card)=>(
                <div key={card.id} className='hero__card'>
                    <img src={card.imge} alt="" />
                    <div className='hero__content'>
                        <p>{card.trend}</p>
                        <h4>{card.title}</h4>
                        <a href="#">Discover more</a>
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default HeroSection