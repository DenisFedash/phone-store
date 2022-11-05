import { ContainerLoader } from 'components/Loader/Loader.styled'
import { Load } from './Loader.styled'

export const Loader = () => {
  return (
    <ContainerLoader>
      <Load>Loading...</Load>
    </ContainerLoader>
  )
}
