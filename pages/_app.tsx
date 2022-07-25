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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
