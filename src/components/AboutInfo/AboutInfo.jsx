// export default function Content() {
//     const [cartItems, setCartItems] = useState([]);

//     const appendToCart = (item, quantity = 1) => {
//         // нужно проверить, нет ли уже такого товара в корзине
//         const itemIndex = cartItems.findIndex(value => value.id === item.id);
//         if (itemIndex < 0) { // такого товара еще нет
//             const newItem = {
//                 ...item,
//                 quantity: quantity
//             };
//             setCartItems([...cartItems, newItem]);
//         } else { // такой товар уже есть
//             const newItem = {
//                 ...cartItems[itemIndex],
//                 quantity: cartItems[itemIndex].quantity + quantity
//             };
//             const newCart = cartItems.slice(); // копия массива cartItems
//             newCart.splice(itemIndex, 1, newItem);
//             setCartItems(newCart);
//         }
//     };

//     return (
//         <main className="container">
//             <CartIcon length={cartItems.length} />
//             <ShopList appendToCart={appendToCart} />
//         </main>
//     );
// }
export const AboutInfo = () => {
  return (
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
      voluptas sunt, impedit hic rem repellat animi quam eos quo ducimus
      laudantium aliquid sed harum reprehenderit asperiores quisquam odit
      nostrum delectus.
    </p>
  )
}
