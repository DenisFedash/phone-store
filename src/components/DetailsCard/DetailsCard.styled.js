import styled from '@emotion/styled'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'

export const Section = styled(Container)`
  text-align: center;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    text-align: left;
  }
`
export const Image = styled.div`
  flex-grow: 2;
`
export const Title = styled.h2`
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 96px;
`
export const NameText = styled.strong`
  margin-right: 5px;
`
export const Price = styled.p`
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  line-height: 92px;
`
export const Text = styled.p`
  margin-bottom: 10px;
  text-align: justify;
`
export const TitleSpec = styled.h3`
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 96px;
`

export const Table = styled.table`
  max-width: 70%;
  width: 70%;
  border-collapse: collapse;
  text-align: left;
`
export const Tr = styled.tr`
  border-bottom: 1px solid black;
  transition: 0.3s linear;
`
export const LinkButton = styled(Link)`
  text-decoration: none;
`
