import { Link } from 'react-router-dom'
import { CartList } from '../../components/CartList/CartList'

export const CartPage = () => {
  return (
    <>
      <Link to="/">
        <button>Back</button>
      </Link>
      <CartList />
    </>
  )
}
