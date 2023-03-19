import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { About } from "./pages/About/About";
import { CartPage } from "./pages/CartPage/CartPage";
import { DetailsPage } from "./pages/DetailsPage/DetailsPage";
import { Favorites } from "./pages/Favorites/Favorites";
import { HomePage } from "./pages/HomePage/HomePage";
import { ListPage } from "./pages/ListPage/ListPage";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    // <Layout>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<ListPage />} />
        <Route path="details/:id/*" element={<DetailsPage />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Toaster />
    </>

    // </Layout>
  );
}

export default App;
