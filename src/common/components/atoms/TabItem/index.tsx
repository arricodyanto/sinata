import { createTheme, Tab, TabProps, ThemeProvider } from '@mui/material'
import React from 'react'

const customTheme = createTheme({
    components: {
        MuiTab: {
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx ({
                    '&:hover': {
                        opacity: 1
                    },
                    minHeight: 44,
                    textTransform: 'initial',
                    // [breakpoints.up('md')]: {
                    //   minWidth: 120
                    // }
                })
            }
        }
    }
})

export default function TabItem(props: TabProps) {
    const { ...tabProps } = props
  return (
    <ThemeProvider theme={customTheme}>
        <Tab disableRipple { ...tabProps } className='text-xs xs:w-[160px] xl:w-[180px]' />
    </ThemeProvider>
  )
}
