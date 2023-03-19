import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Total, TotalSum, TotalTitle } from "./CartList.styled";
import { Cart } from "../Cart/Cart";
import { useEffect, useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const CartList = () => {
  const [shopCart, setShopCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  });

  const cost = shopCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const removeFromCart = (id) => {
    const cartItems = shopCart.filter((item) => item.id !== id);
    setShopCart(cartItems);
    delete cartItems[id];
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const increase = (id) => {
    setShopCart((shopCart) => {
      return shopCart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
    });
  };

  const decrease = (id) => {
    setShopCart((shopCart) => {
      return shopCart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1 > 1 ? product.quantity - 1 : 1,
          };
        }
        return product;
      });
    });
  };

  const changeValue = (id, value) => {
    setShopCart((shopCart) => {
      return shopCart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: value,
          };
        }
        return product;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(shopCart));
  }, [shopCart]);

  return shopCart.length ? (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Price(g)</StyledTableCell>
              <StyledTableCell>Quantity</StyledTableCell>
              <StyledTableCell>Remove</StyledTableCell>
              <StyledTableCell>Total</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shopCart.map((item) => (
              <StyledTableRow key={item.id}>
                <Cart
                  {...item}
                  removeFromCart={removeFromCart}
                  increase={increase}
                  decrease={decrease}
                  changeValue={changeValue}
                />
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Total>
        <TotalTitle>Total:</TotalTitle>
        <TotalSum>{cost}$</TotalSum>
      </Total>
    </>
  ) : (
    <p>Your cart is empty</p>
  );
};
