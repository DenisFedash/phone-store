import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { CardHover, CardItem, Price, Title } from './ProducCard.styled'
import { LinkButton } from '../DetailsCard/DetailsCard.styled'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export const ProductCard = (products) => {
  const [cartItems, setCartItems] = useState([])
  const location = useLocation()
  const detailsId = location.pathname.split('/')

  const handleAddProduct = (products) => {
    const ProductExist = cartItems.find(
      (item) => item.id === Number(detailsId[2]),
    )
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === Number(detailsId[2])
            ? { ...ProductExist, count: ProductExist.count + 1 }
            : item,
        ),
      )
    } else {
      setCartItems([...cartItems, { ...products, count: 1 }])
    }
  }
  console.log(cartItems)
  return (
    <CardHover>
      <CardItem>
        <LinkButton to={`/details/${products.id}`}>
          <Title>{products.title}</Title>
          <CardMedia
            component="img"
            image={products.img}
            alt={products.title}
          />
          <Price>$ {products.price}</Price>
        </LinkButton>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="buy" onClick={() => handleAddProduct(products)}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardItem>
    </CardHover>
  )
}
