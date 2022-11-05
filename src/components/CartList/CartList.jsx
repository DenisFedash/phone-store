import { useState } from 'react'
import { Cart } from '../Cart/Cart'

export const CartList = () => {
  const phones = JSON.parse(localStorage.getItem('cartItems')) || []
  const cost = phones.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return phones.length ? (
    <div>
      {phones.map((item) => (
        <Cart key={item.id} {...item} />
      ))}
      <div>
        <h3>Total</h3>
        <p>{cost}</p>
        <p>USD</p>
      </div>
    </div>
  ) : (
    <p>Your Cart is empty</p>
  )
}
