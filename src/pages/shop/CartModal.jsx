import React from 'react'
import OrderSummary from './product/OrderSummary'
import { useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../../redux/features/cart/cartSlice'


const CartModal = ({ products, isOpen, onClose, }) => {
    const dispatch = useDispatch()

    // Save to localStorage whenever products change
    React.useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(products))
    }, [products])

    const handleQuantity = (type, id) => {
        const payload = { type, id }
        dispatch(updateQuantity(payload))
    }
        const handleRemove=(e,id)=>{
            e.preventDefault()
            dispatch(removeFromCart({id}))
        }

    return (
        <div className={`fixed z-[1000] inset-0 bg-black bg-opacity-80 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            style={{ transition: 'opacity 300ms' }}>

            <div className={`fixed right-0 top-0 md:w-2/5 w-full bg-white h-full overflow-y-auto transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
                <div className='p-4 mt-4'>
                    {/* Header */}
                    <div className='flex justify-between items-center mb-4'>
                        <h4 className='text-xl font-semibold'>Your Cart ({products.length} items)</h4>
                        <button
                            onClick={() => onClose()}
                            className='text-gray-600 hover:text-white bg-neutral-800 rounded-full' >
                            <i className="ri-close-line text-2xl"></i>
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="cart-items space-y-4">
                        {
                        products.length === 0 ? (
                            <div>Your cart is empty</div>
                        ) : (
                            products.map((item, index) => (
                                <div key={index} className='flex flex-col md:flex-row md:items-center md:justify-between shadow-md md
                                :p-5 p-2 mb-4 rounded'>
                                    {/* Product Info */}
                                    <div className='flex items-center space-x-4 w-full md:w-2/3'>
                                        <span className='px-2 py-1 bg-indigo-800 hover:bg-gradient-to-r from-blue-400 to-blue-700 rounded-full text-white text-sm'>
                                           
                                            0{index +1 }
                                        </span>
                                        <img src={item.image} alt='' className='size-12 object-cover rounded'/>
                                        <div>
                                            <h5 className='text-lg font-medium'>{item.name}</h5>
                                            <p className='text-gray-600 text-sm'>${Number(item.price).toFixed(2)}</p>
                                        </div>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className='flex  flex-row items-center space-x-4 w-full md:w-1/3 justify-end mt-4 md:mt-0'>
                                        <div className='flex items-center space-x-2'>
                        <button
                        onClick={() => handleQuantity('decrement', item._id)}
                        className='size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 hover:bg-gradient-to-r from-blue-400 to-blue-700 ml-8 hover:text-white transition-colors'>
                                                -
                                            </button>
                                            <span className='px-2 mx-1 text-center'>{item.quantity}</span>

                        <button
                onClick={() => handleQuantity('increment', item._id)}
                className='size-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gradient-to-r from-blue-400 to-blue-700 hover:text-white transition-colors'>+</button>
                                        </div>
                                        <button 
                                        onClick={(e)=>handleRemove(e,item._id)  }
                                        className='p-2 text-indigo-90 border border-r-[50] border-blue-100  hover:bg-gradient-to-r from-blue-400  rounded-full to-blue-700  transition-colors'>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))
                        )
                        }
                    </div>

                    {/* Order Summary */}
                    {
                    products.length > 0 && <OrderSummary />
                    }
                </div>
            </div>
        </div>
    )
}

export default CartModal