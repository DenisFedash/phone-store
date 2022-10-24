import styled from '@emotion/styled'
import Card from '@mui/material/Card'
import { Link } from 'react-router-dom'
export const CardItem = styled(Card)`
  width: 262px;
  height: 350px;
  margin: 15px;
`
export const Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  text-align: center;
  padding: 5px 0 25px 0;
`
export const Price = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;

  text-align: center;
  padding-top: 15px;
`
export const LinkCard = styled(Link)`
  text-decoration: none;
`
export const CardHover = styled.div`
  &:hover,
  &:focus {
    transform: scale(1.03);

    transition-duration: 250ms;
  }
`
