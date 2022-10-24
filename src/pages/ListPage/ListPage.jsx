import { useEffect, useState } from 'react'
import { ProductList } from '../../components/ProductList/ProductList'
import { storePhones } from '../../service/data'

export const ListPage = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const productsArray = []
    storePhones.map(({ id, title, img, price }) => {
      const product = {
        id,
        title,
        img,
        price,
      }
      return productsArray.push(product)
    })
    setProducts(productsArray)
  }, [])
  return <>{products && <ProductList products={products} />}</>
}
