export const Cart = ({ title, img, price }) => {
  return (
    <>
      <h3>{title}</h3>
      <img src={img} alt={title} />
    </>
  )
}
