import { CardMedia } from '@mui/material'

export const Cart = ({ title, img, price }) => {
  return (
    <>
      <h2>{title}</h2>
      <CardMedia
        component="img"
        image={img}
        alt={title}
        sx={{ maxWidth: 448 }}
      />
      <p>{price}</p>
    </>
  )
}
