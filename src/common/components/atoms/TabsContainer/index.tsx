import React from 'react'
import { Box, createTheme, Tab, Tabs, TabsProps, ThemeProvider } from '@mui/material'

interface TabsContainerProps {
  value?: number
  children?: React.ReactNode
}

const customTheme = createTheme({
  components:{
    MuiTabs:{
      styleOverrides:{
        root: ({ theme }) => theme.unstable_sx ({
          backgroundColor: '#f3f4f6',
          borderRadius: 3,
          minHeight: 44,
          '& .Mui-selected': {
            color: '#0ea5e8'
          }
        }),
        flexContainer: {
          display: 'inline-flex',
          position: 'relative',
          zIndex: 1,
        },
        indicator: {
          top: 3,
          bottom: 3,
          right: 3,
          height: 'auto',
          background: 'none',
          '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 4,
            right: 4,
            bottom: 0,
            borderRadius: 8,
            backgroundColor: '#fff',
            color: 'red',
            boxShadow: '0 4px 12px 0 rgba(0,0,0,0.16)',
          },
        },
        scrollButtons: ({ theme }) => theme.unstable_sx({
          [theme.breakpoints.up('lg')]: {
            display: 'none',
          },
          '&.Mui-disabled': {
            width: 0,
        },
        overflow: 'hidden',
        transition: 'width 0.5s',
        })
      }
    }
  }
})

export default function TabsContainer(props: TabsProps) {
    const { 
      value,
      children,
      ...tabsProps
    } = props
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Box className='xs:w-full lg:w-fit'>
          <Tabs value={value} variant='scrollable' scrollButtons allowScrollButtonsMobile { ...tabsProps }>
            {children}
          </Tabs>
        </Box>
      </ThemeProvider>
    </>
  )
}
