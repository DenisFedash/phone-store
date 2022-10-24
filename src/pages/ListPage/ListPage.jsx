import { useEffect, useState } from 'react'
import { ProductCard } from '../../components/ProductCard/ProductCard'

import { FlexList } from './ListPage.styled'
import { storePhones } from '../../service/data'

export const ListPage = ({ appendToCart }) => {
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

  return (
    <>
      {products && (
        <FlexList>
          {products.map(({ id, title, price, img }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              img={img}
              appendToCart={appendToCart}
            />
          ))}
        </FlexList>
      )}
    </>
  )
}
