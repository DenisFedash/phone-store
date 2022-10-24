import { ProductCard } from '../ProductCard/ProductCard'
import { FlexList } from './ProductList.styled'

export const ProductList = ({ products }) => {
  return (
    <>
      <FlexList>
        {products.map(({ id, title, price, img }) => (
          <ProductCard key={id} id={id} title={title} price={price} img={img} />
        ))}
      </FlexList>
    </>
  )
}
