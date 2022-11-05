import { ContainerLoader } from '../../components/Loader/Loader.styled'
import { LinkError, TitleError } from './PageNotFound.styled'

export const PageNotFound = () => {
  return (
    <ContainerLoader>
      <TitleError>
        404 Page not found! Please follow to{' '}
        <LinkError to="/">Home Page</LinkError>
      </TitleError>
    </ContainerLoader>
  )
}
