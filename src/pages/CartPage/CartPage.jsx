import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartList } from '../../components/CartList/CartList'
import { ListPage } from '../ListPage/ListPage'

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([])
  const appendToCart = (item, quantity = 1) => {
    const itemIndex = cartItems.findIndex((value) => value.id === item.id)
    if (itemIndex < 0) {
      const newItem = { ...item, quantity: quantity }
      setCartItems([...cartItems, newItem])
    } else {
      const newItem = {
        ...cartItems[itemIndex],
        quantity: cartItems[itemIndex.quantity + quantity],
      }
      const newCart = cartItems.slice()
      newCart.splice(itemIndex, 1, newItem)
      setCartItems(newCart)
    }
  }

  return (
    <>
      <Link to="/">
        <button>Back</button>
      </Link>
      {/* <ListPage appendToCart={appendToCart} /> */}
      <CartList items={cartItems} />
    </>
  )
}
