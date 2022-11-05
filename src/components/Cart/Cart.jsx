import { CardMedia } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { styled } from '@mui/material/styles'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

export const Cart = ({ id, title, img, price, quantity, removeFromCart }) => {
  return (
    <>
      <StyledTableCell>
        <CardMedia
          component="img"
          image={img}
          alt={title}
          sx={{ maxWidth: 125 }}
        />
      </StyledTableCell>
      <StyledTableCell>{title}</StyledTableCell>
      <StyledTableCell>${price}</StyledTableCell>
      <StyledTableCell>{quantity}</StyledTableCell>
      <StyledTableCell>
        <button onClick={() => removeFromCart(id)}>delete</button>
      </StyledTableCell>
      <StyledTableCell>${price * quantity}</StyledTableCell>
    </>
  )
}
