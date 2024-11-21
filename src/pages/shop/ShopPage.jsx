import React, { useState, useEffect } from 'react'
import Categories from '../home/Categories'
import ProductsData from '../../data/product.json'
import ProductCards from './ProductCards'
import ShopFiltering from './ShopFiltering'

const filters ={
    categories:['all','accessories','dress','jewellery','shoes'],
    colors:['all','blue','pink','black','white'],
    priceRanges:[
        {
          label:'Under $50', min:0, max:50
        },
        {
          label:' $50 - $100', min:50, max:100
        },
        {
          label:' $100 - $200', min:100, max:200
        },
        {
          label:'$200 and above', min:200, max:Infinity
        }
    ]}
const ShopPage = () => {
const [products,setProducts]=useState(ProductsData)
const [filtersState, setFiltersState]=useState({
    category:"all",
    color:"all",
    priceRange:""
})

// Move useEffect outside of applyFilters function
// useEffect(() => {
//     applyFilters();
// }, [filtersState]);

// filterinf functionss
const applyFilters=()=>{
let filteredProducts=ProductsData


// filter by category

if (filtersState.category && filtersState.category !== 'all') {
 filteredProducts=filteredProducts.filter(
    product=>product.category === filtersState.category
 )   
}


// filter by color
if(filtersState.color && filtersState.color !== 'all'){
    filteredProducts=filteredProducts.filter(product=>product.color === filtersState.color)

}

// filter by price range
if(filtersState.priceRange){
    const [minPrice,maxPrice] = filtersState.priceRange.split('-').map(Number);
filteredProducts=filteredProducts.filter(product=>product.price>=minPrice && product.price<=maxPrice)

    }
     setProducts(filteredProducts)
}

  useEffect(()=>{
   applyFilters()

},[  filtersState])

//clear filters
const clearFilters =()=>{
    setFiltersState({
        category:"all",
        color:"all",
        priceRange:""
    });
}

    
  return (
    <>
    <section className="section__container bg-primary-light flex flex-col">
<h2 className='section__header capitalize text-gradient-to-r from-blue-400 to-blue-700'>  Welcome to our Shop Page </h2>
<p className='section__subheader'>Discover our curated collection of fashion items</p>
    </section>
    
    <section className=' section__container  '>
    <div className="flex flex-col md:flex-row gap-6">
    {/* Left Section */}
    
    <div className="w-full md:w-1/4">
        {/* <h3 className="text-lg font-semibold">Shop Filtering</h3> */}
        <ShopFiltering 
        filters={filters} 
        filtersState={filtersState }
         setFiltersState={setFiltersState} 
         clearFilters={clearFilters}/>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-3/4 text-xl font-medium mb-4">
        <h3>Products Available: {products.length}</h3>
        <ProductCards products={products} />
    </div>
</div>
    </section>
    </>

    
  )
}

export default ShopPage
