import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { FlexList } from "./Content.styled";
import { storePhones } from "../../service/data";
import { Header } from "../Header/Header";

export const Content = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    let cartItems = localStorage.getItem("cartItems");
    return cartItems ? JSON.parse(cartItems) : [];
  });

  const quantityCart = cartItems;

  useEffect(() => {
    const productsArray = [];
    storePhones.map(({ id, title, img, price, count }) => {
      const product = {
        id,
        title,
        img,
        price,
        count,
      };
      return productsArray.push(product);
    });
    setProducts(productsArray);
  }, []);

  const appendToCart = (product) => {
    let newCart = [...cartItems];
    let itemInCart = newCart.find((item) => product.title === item.title);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCartItems(newCart);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      {products && (
        <>
          <FlexList>
            {products.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                img={item.img}
                appendToCart={appendToCart}
              />
            ))}
          </FlexList>
        </>
      )}
    </>
  );
};
