import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartModal from '../pages/shop/CartModal'

const Navbar = () => {
  const { products, selectedItems } = useSelector((state) => state.cart);
  const [isCartOpen, setisCartOpen] = useState(false);
  
  const handleCartToggle = () => {
    setisCartOpen(!isCartOpen);
  }

  return (
    <header className='fixed-nav-bar w-nav '>
      <nav className='max-w-screen-2xl mx-auto px- flex justify-between items-center'>
        <ul className='nav__links links'>
            
               <li className='link'><Link to='/'>Home</Link> </li>
               <li className='link'><Link to='/shop'>Shop</Link> </li>
               <li className='link'> <Link to='/pages'>Pages</Link> </li>
              <li className='link'> <Link to='/contact'>Contact</Link> </li>
              
            
         </ul>

         {/* log */}
         <div className='nav__logo'>
            <Link to='/'>Fashion Vogue </Link>
         </div>
         {/* navicons */}
         <div className="nav__icons relative">
            <span>
                <Link to="/search"> 
                     <i className="ri-search-line"></i>
            </Link>
            </span>
            <span>
                <button onClick={handleCartToggle} className='hover:text-primary'>
                  <i className ="ri-shopping-bag-line"></i>  
                  <sup className='absolute right-[45px] top-[-4px] w-4 text-center leading-4 bg-primary text-white aspect-square rounded-full text-[8px]'>
                    {selectedItems}
                  </sup>
                </button>

               </span>
         
         <span>
            <Link to="/login">
            <i className="ri-user-line"></i></Link>
            </span></div>
      </nav>

      {
        isCartOpen && <CartModal products={products}isOpen={isCartOpen} onClose={handleCartToggle}/>
      }

    </header>
  )
}

export default Navbar