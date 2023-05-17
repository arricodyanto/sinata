import React from 'react'
import { Box, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import IconPopover from '../IconPopover'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TextfieldSearch from '../../atoms/TextfieldSearch';
import { fontSize } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9ca3af',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    fontSize: '13px',
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '16ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export default function SearchNavIcon() {
  return (
    <>
        <Box sx={{display: {xs:'block', md: 'none'}}}>
            <IconPopover alt='Search' height='40px' icon={<SearchOutlinedIcon />}>
                <Box className='xs:w-[85vw] md:w-52'>
                    <TextfieldSearch />
                </Box>
            </IconPopover>
        </Box>
        <Box sx={{display: {xs: 'none', md: 'block'}}}>
            <Search className='bg-gray-100 mr-4'>
                <SearchIconWrapper>
                <SearchOutlinedIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    className='text-gray-600'
                />
            </Search>
        </Box>
    </>
  )
}
