import React from 'react'
// import { useState } from 'react'
import ProductCards from './ProductCards'
import products from'../../data/product.json'
import { useState } from 'react'

const TrendinProducts = () => {
    const [visibleProducts, setVisibleProducts]=useState(6);
    const loadMoreProducts=()=>{
        setVisibleProducts(prevCount =>prevCount+4)
    }
  return (
    <section className='section__container product__container'>
        <h2 className='section__header'>Trending Products</h2>
        <p className='section__subheader mb-12'>Discover our trending fits :Elevate your style with our collection of trending clothes for she's</p>

        {/* products card  */}
        <ProductCards products={products.slice(0,visibleProducts)}/>

        {/* more products */}
        <div className="product__btn">
            {
                visibleProducts<products.length&&(
                   <button className='btn'onClick={loadMoreProducts}>Loard More</button> 
                )
            }
        </div>
    </section>
  )
}

export default TrendinProducts