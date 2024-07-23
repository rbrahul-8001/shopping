import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {

  const { cart } = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      {
        cart.length > 0 ?
          (
            <div className='flex justify-between'>

              <div className='w-1/2'>
                {
                  cart.map((item, index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                  })
                }
              </div>

              <div className=''>

                <div>
                  <div className='font-semibold text-green-600 text-xl'>Your Cart</div>
                  <div className='font-semibold text-green-600 text-4xl'>SUMMARY</div>
                  <p>
                    <span>Total Items: {cart.length}</span>
                  </p>
                </div>

                <div>
                  <p>Total Amount: ${totalAmount}</p>
                  <button>
                    CheckOut Now
                  </button>
                </div>

              </div>

            </div>
          ) :
          (
            <div>
              <h1>Cart Empty</h1>
              <NavLink to="/">Shop Now</NavLink>
            </div >
          )
      }
    </div >
  )
}

export default Cart
