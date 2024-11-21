import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../../redux/features/cart/cartSlice';

const OrderSummary = () => {
  const dispatch = useDispatch();
  // const products = useSelector((store) => st.cart.products);
  const {
    products = [],
    selectedItems = 0,
    totalPrice = 0,
    tax = 0,
    taxRate = 0.05,
    grandTotal = 0
  } = useSelector((state) => state.cart) || {};

  const formatPrice = (value) => (Number(value) || 0).toFixed(2);
  const  handleClearCart = () => {
    dispatch(clearCart())
   }
  
  return (
    <div className='bg-primary-light text-base mt-5 rounded'>
      <div className="px-6 py-4 space-y-5">
        <h2 className='text-2xl font-bold text-text-dark'>Order Summary</h2>
        <p className='text-text-dark mt-2'>Selected Items: {selectedItems || 0}</p>
        <p>Total Price: ${formatPrice(totalPrice)}</p>
        <p>Tax ({(taxRate * 100)}%): ${formatPrice(tax)}</p>
        <h3 className='font-bold'>Grand Total: ${formatPrice(grandTotal)}</h3>

        <div className='mt-4'>
          <h4 className='text-lg font-semibold'>Items in Cart:</h4>
          {products.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className='space-y-2'>
              {products.map((product, index) => (
                <li key={product._id || index} className='flex justify-between items-center'>
                  <span>{product.name} (x{product.quantity})</span>
                  <span>${formatPrice(product.price * product.quantity)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
        onClick={(e)=>{
          e.stopPropagation()
          handleClearCart()
        }}
        className='flex flex-col space-y-3 mt-4'>
          <button className='w-full py-2 px-4 rounded bg-gray-200 hover: hover:text-white transition-colors flex items-center justify-center'>
            <span className='mr-2'>Clear Cart</span>
            <i className='ri-delete-bin-7-line'></i>
          </button>

          <button className='w-full py-2 px-4 rounded bg-indigo-900 text-white hover:bg-indigo-700 transition-colors flex items-center justify-center'>
            <span className='mr-2'>Proceed to Checkout</span>
            <i className='ri-bank-card-line'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary