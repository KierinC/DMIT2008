import '../styles/globals.css'

import '@fontsource/itim'

import { ThemeProvider } from '@mui/material'
import {theme} from '../utils/theme/config.js'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp