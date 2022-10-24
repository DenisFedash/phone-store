import { Link } from 'react-router-dom'

export const Cart = ({ products }) => {
  return (
    <>
      <Link to="/">
        <button>Back</button>
      </Link>
      <h1>{products.title}</h1>
    </>
  )
}
