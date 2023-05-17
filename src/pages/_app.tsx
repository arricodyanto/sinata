import '@/styles/globals.css'
import '@/styles/generated.css'
import '@/styles/fileupload.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 310,
      sm: 360,
      md: 760,
      lg: 1200,
      xl: 1440,
    }
  },
  palette: {
    primary: {
      main: '#0ea5e9',
      light: '#38bdf8',
      dark: '#0284c7',
      contrastText: "#ffffff",
    },
    success: {
      main: '#22c55e',
      contrastText: "#ffffff",
    },
    error: {
      main: '#ef4444',
      contrastText: "#ffffff",
    }
  },
  typography: {
    fontFamily: "'IBM Plex Sans', sans-serif"
  }
})
theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  )
}
