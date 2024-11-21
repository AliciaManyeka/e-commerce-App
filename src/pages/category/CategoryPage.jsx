import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import products from'../../data/product.json'
import ProductCards from '../shop/ProductCards';

const CategoryPage = () => {
 const {categoryName}=useParams();
 const [filteredProducts,setFilteredProducts]=useState([]);
 useEffect(()=>{
  const filtered = products.filter((product)=>product.category === categoryName.toLowerCase());

  setFilteredProducts(filtered);
 },[categoryName])

 useEffect(()=>{
  window.scrollTo(0,0)
 })
  return (
    <>
    <section className="section section__container bg-primary-light">
<h2 className='section__header uppercase'>{categoryName}</h2>
<p className='section__subheader'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus, perspiciatis dicta labore iusto voluptate sit sapiente velit commodi architecto.</p>
    </section>

    {/* products cards */}
    <div className='section__container grid-cols-4'>
      <ProductCards products={filteredProducts}/>
    </div>
    </>
  )
}

export default CategoryPage