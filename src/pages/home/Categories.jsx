import React from 'react'
import category1 from '../../assets/category1.png'
import category2 from '../../assets/category2.png'
import category3 from '../../assets/category3.png'
import category4 from '../../assets/category4.png'
import category5 from '../../assets/category5.png'
import { Link } from 'react-router-dom'

const Categories = () => {
    const  categories=[
        {
            name:'Accessories',
            path: 'accessories',
            image:category5
        },
        {
            name:'Dress',
            path: 'dress',
            image:category1
        },
        {
            name:'Jewellery',
            path: 'jewellery',
            image:category3
        },
       
        {
            name:'Shoes',
            path: 'shoes',
            image:category2
        }
    ]
  return (
    <>
    <div className="product__grid">
        {
            categories.map((category)=>(
                <Link key={category.name} to={`/categories/${category.path}`} className='categories__card'>
                    <img src={category.image}alt={category.name} />
                    <h4>{category.name}</h4>
                </Link>
            ))
        }
    </div>
    </>
  )
}

export default Categories