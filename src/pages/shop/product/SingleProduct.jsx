import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import image from'../../../assets.Anfora.jpeg'
import image from "../../../assets/Anfora.jpeg"
import product from '../../../data/product.json'
import RatingStars from '../../../components/RatingStars';

const SingleProduct = () => {


    const{id}=useParams();
    console.log(id)
return (
    <> 
     <section className="section section__container bg-primary-light">
                <h2 className="section__header uppercase">Single Product Page</h2>
               <div className="section_subheader space-x-10 items-center flex  justify-center">
                <span className="hover:text-primary"><Link to='/'>Home</Link>
                <i className='ri-arrow-right-s-line'></i> 
                </span>
                <span className="hover:text-primary"><Link to='/shop'>Shop</Link>
                <i className='ri-arrow-right-s-line'></i>
                </span>
                <span className='hover:text-primary'>Product name</span>
               </div>
            </section>
            

            <section className="section__container mt-8">
                <div className="flex flex-col items-center md:flex-row gap-8">
                {/* productimage */}
                <div className='md:w-1/2 w-full flex  justify-center'>
                <img src={image} alt="" className='rounded  h-[60vh] w-auto items-center'  />

                </div>

                <div className="md:w-1/2 w-full">
                <h3 className='text-2xl font-semibold mb:4'>{product.name} Dress</h3>
                <p className='text-xl text-[#5f38ed] mb-4'>$100  <s>$130</s></p>
                <p className='text-gray-800'>This is product description</p>


                {/* additional product infor */}
                <p><strong>Category</strong> accessories</p>
                <p><strong>Category</strong> black</p>
                <div className=' flex gap-1 items-center'>
                    <strong>Rating:</strong> 
                    <RatingStars rating={'3'}/>
                </div>
                <button className='mt-6 px-6 py-3 bg-[#5f38ed] rounded-md'>add to cart</button>
                </div>

                </div>

            </section>

            {/* Display reviews */}
            <section className="section__container mt-8">
                Reviews Here
            </section>
    </>
  )
}

export default SingleProduct