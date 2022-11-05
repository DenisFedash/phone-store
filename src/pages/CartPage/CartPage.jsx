import { Link } from 'react-router-dom'
import { CartList } from '../../components/CartList/CartList'
import { useNavigate, useLocation } from 'react-router-dom'

export const CartPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const onGoBack = () => navigate(location?.state?.from ?? '/')
  return (
    <>
      <button onClick={onGoBack}>Back</button>

      <CartList />
    </>
  )
}
