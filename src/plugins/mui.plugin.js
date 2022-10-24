import { createTheme } from '@mui/material/styles'

const Colors = {
  primary: '#FBFBFB',
  secondary: '#FFCC26',
  text: '#414141',
}

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    text: {
      main: Colors.text,
    },
  },
})

export default theme
