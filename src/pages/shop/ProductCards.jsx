import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { addToCart } from '../../redux/features/cart/cartSlice'

const ProductCards = ({products}) => {
    const dispatch = useDispatch();
    const [showPopup, setShowPopup] = useState(false);
    const [popupProduct, setPopupProduct] = useState(null);

    const handleAddToCart = (product) => {
        console.log('Adding product:', product);
        dispatch(addToCart(product));
        
        // Store full product object for popup
        setPopupProduct(product);
        setShowPopup(true);

        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    }

    return (
        <>
            {/* Updated popup without ratings */}
            {showPopup && popupProduct && (
                <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-400 to-blue-700 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-fade-in-out">
                    <div className="flex items-center gap-3">
                        <img 
                            src={popupProduct.image} 
                            alt={popupProduct.name} 
                            className="w-10 h-10 object-cover rounded"
                        />
                        <div>
                            <p className="text-sm font-medium">{popupProduct.name}</p>
                            <p className="text-xs">${popupProduct.price}</p>
                        </div>
                        <i className="ri-check-line text-sm ml-2"></i>
                    </div>
                </div>
            )}

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 p-4'>
                {products.map((product,index) => (
                    <div key={index} className='product__card'>
                        <div className='relative aspect-[4/3]'>
                            <Link to={`/shop/${product._id}`}>
                                <img 
                                    src={product.image} 
                                    alt="incoming images wait due to unstable wifi" 
                                    className='max-h-[200px] md:h-64 w-full object-cover hover:scale-110 transition-all duration-300'
                                />
                            </Link>
                            <div className='hover:block absolute top-3 right-3'>
                                <button 
                                    className="relative"
                                    onClick={(e)=>{
                                        e.stopPropagation();
                                        handleAddToCart(product)
                                    }}
                                >
                                    <i className='ri-shopping-cart-line bg-[#5f38ed] text-white hover:bg-gradient-to-r from-blue-400 to-blue-700 rounded p-1'/>
                                </button>
                            </div>
                        </div>

                        <div className='product__card__content'>
                            <p>{product.name}</p>
                            <p>${product.price} {product.oldPrice ? <s>${product.oldPrice}</s> : null}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductCards