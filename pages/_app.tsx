import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import '../styles/typography.css'

const GlobalStyle = createGlobalStyle`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: "Nexa", Helvetica, Arial, Lucida, sans-serif;
    }
`

const theme = {
  colors: {
    base: "#000",
    orange: "#D4583B"
  },
  titleFont: "NeueMachina",
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
