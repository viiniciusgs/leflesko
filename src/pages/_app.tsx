import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { WordProvider } from '../contexts/WordContext'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <WordProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </WordProvider>
    </ThemeProvider>
  )
}

export default MyApp
