import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import { CartPage } from './pages/CartPage/CartPage'
import { DetailsPage } from './pages/DetailsPage/DetailsPage'
import { ListPage } from './pages/ListPage/ListPage'

function App() {
  return (
    // <Layout>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/details/:id/*" element={<DetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>

    // </Layout>
  )
}

export default App
