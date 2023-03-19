import { CardMedia } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import toast from "react-hot-toast";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ArrowBtn, Input } from "./Cart.styled";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const Cart = ({
  id,
  title,
  img,
  price,
  quantity,
  removeFromCart,
  increase,
  decrease,
  changeValue,
}) => {
  const handleRemoveFromCart = (e) => {
    e.preventDefault();
    removeFromCart(id);
    toast.success(`${title} removed from product cart!`);
  };

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
      <StyledTableCell>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            verticalAlign: "middle",
          }}
        >
          <div>
            <Input
              type="number"
              min="1"
              max="100"
              value={quantity}
              onChange={(e) => changeValue(id, +e.target.value)}
            />
          </div>
          <div>
            <ArrowBtn type="button" onClick={() => increase(id)}>
              <KeyboardArrowUpIcon fontSize="small" />
            </ArrowBtn>
            <div>
              <ArrowBtn type="button" onClick={() => decrease(id)}>
                <KeyboardArrowDownIcon fontSize="small" />
              </ArrowBtn>
            </div>
          </div>
        </div>
      </StyledTableCell>
      <StyledTableCell>
        <button onClick={handleRemoveFromCart}>delete</button>
      </StyledTableCell>
      <StyledTableCell>${price * quantity}</StyledTableCell>
    </>
  );
};
