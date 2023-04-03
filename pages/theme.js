import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    0: '#fff',
    1: '#000000',
    900: '#024fc9',
    800: '#146af5',
    700: '#2977f2',
    600: '#337df2',
    500: '#4287f5'
  }
}

const fonts = {
  body: 'Trebuchet MS',
  heading: 'Trebuchet MS',
  mono: 'Trebuchet MS'
}

const fontsSizes = {
  size: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  } 
}

const fontWeights = {
    normal: 400,
    medium: 500,
    bold: 700,
}

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: '#061318'
      }
    })
  },
  fonts,
  fontsSizes,
  fontWeights,
  colors,
})

export default theme