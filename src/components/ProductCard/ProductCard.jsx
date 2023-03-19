import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CardHover, CardItem, Price, Title } from "./ProducCard.styled";
import { LinkButton } from "../DetailsCard/DetailsCard.styled";
import toast from "react-hot-toast";

export const ProductCard = ({ id, title, img, price, appendToCart }) => {
  const item = { id: id, title: title, price: price, img: img };

  const handleAppendToCart = (e) => {
    e.preventDefault();
    appendToCart(item);
    toast.success(`${title} added to product cart!`);
  };

  return (
    <>
      <CardHover>
        <CardItem>
          <LinkButton to={`/details/${id}`}>
            <Title>{title}</Title>
            <CardMedia component="img" image={img} alt={title} />
            <Price>$ {price}</Price>
          </LinkButton>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <IconButton aria-label="buy" onClick={handleAppendToCart}>
            <AddShoppingCartIcon />
          </IconButton>
        </CardItem>
      </CardHover>
    </>
  );
};
