import { CartList } from "../../components/CartList/CartList";
import { useNavigate, useLocation } from "react-router-dom";
import { Container } from "@mui/system";
import { Button } from "@mui/material";

export const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const onGoBack = () => navigate(location?.state?.from ?? "/");
  return (
    <>
      <Container>
        <Button variant="contained" onClick={onGoBack}>
          To Store
        </Button>
        <CartList />
      </Container>
    </>
  );
};
