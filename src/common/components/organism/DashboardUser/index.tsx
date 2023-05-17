import React from 'react'
import { Box, IconButton, Toolbar, Typography, Stack, Divider, List, Collapse, ListItemText, Popover } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import AppnavMenu from '../AppnavMenu';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Image from 'next/image';
import Link from 'next/link';
import FooterDashboard from '../FooterDashboard';
import DrawerMobile from '@/common/components/atoms/DrawerMobile';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { TListNavMenuProps } from '@/common/types/list-nav-menu';

type TDashboardUserProps = {
    children: React.ReactNode;
}

function ElevationScroll(props: any) {
    const { children } = props
  
    const trigger = useScrollTrigger({
      disableHysteresis: true, 
      threshold: 100, 
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0  
    });
  }

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(0)} + 1px)`,
  [theme.breakpoints.up('md')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  // zIndex: theme.zIndex.drawer + 1,
  // zIndex: theme.zIndex.drawer,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    // whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

// Menu Item Nested
// interface ListItemProps {
//   id: number;
//   subheader: string;
//   title: string;
//   icon: React.ReactNode;
//   link: string;
//   divider: React.ReactNode;
//   subItem: {
//     id: number;
//     subtitle: string;
//     link: string;
//   }[]
// }
const getCustomsOptions = ():TListNavMenuProps[] => {
  return [
    {
      id: 1,
      subheader: '',
      title: 'Dashboard',
      icon: <HomeOutlinedIcon sx={{ color: '#9ca3af'}} fontSize='small'/>,
      link: '/users/dashboard',
      divider: <Divider light className='border-gray-600 mx-5 mb-4' />,
      subItem: [],
    },
    {
      id: 2,
      subheader: 'Layanan',
      title: 'Riwayat',
      icon: <DateRangeOutlinedIcon sx={{ color: '#9ca3af' }} fontSize='small' />,
      link: '',
      divider: null,
      subItem: [
        {
          id: 1,
          subtitle: 'Riwayat Kegiatan',
          link: '/users/riwayat-kegiatan',
        },
        {
          id: 2,
          subtitle: 'Tambah Kegiatan',
          link: '/users/tambah-kegiatan',
        },
      ],
    },
    {
      id: 3,
      subheader: '',
      title: 'Ajukan Layanan',
      icon: <Inventory2OutlinedIcon sx={{ color: '#9ca3af' }} fontSize='small' />,
      link: '',
      divider: <Divider light className='border-gray-600 mx-5 mb-4' />,
      subItem: [
        {
          id: 1,
          subtitle: 'Layanan Hubungan Masyarakat',
          link: '/users/layanan-humas',
        },
        {
          id: 2,
          subtitle: 'Layanan Publikasi',
          link: '/users/layanan-publikasi',
        },
        {
          id: 3,
          subtitle: 'Layanan Media',
          link: '/users/layanan-media',
        }
      ],
    },
    {
      id: 4,
      subheader: 'Akun',
      title: 'Profil Akun',
      icon: <PersonOutlinedIcon sx={{ color: '#9ca3af'}} fontSize='small'/>,
      link: '/users/profile',
      divider: null,
      subItem: [],
    },
    {
      id: 5,
      subheader: '',
      title: 'Sign Out',
      icon: <LogoutOutlinedIcon sx={{ color: '#9ca3af'}} fontSize='small'/>,
      link: '/sign-in',
      divider: null,
      subItem: [],
    },
  ]
}

export default function DashboardUser(props: any) {
  const { children } = props

  // Elevate Scroll Trigger
  const trigger = useScrollTrigger({
      disableHysteresis: true, 
      threshold: 0,
  })

  // Desktop Drawer
  const [windowWidth, setWindowWidth] = React.useState(760)
  React.useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize);
    if(windowWidth < 760) {
        setOpen(false)
    } else {
        setOpen(true)
    }
  }, [windowWidth])
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
      setOpen(true);
  }

  const handleDrawerClose = () => {
      setOpen(false);
  }

  // Popover Menu on Collapsed
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [currentPopover, setCurrentPopover] = React.useState<null | TListNavMenuProps>(null);
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>, popover: TListNavMenuProps) => {
    setAnchorEl(event.currentTarget);
    setCurrentPopover(popover);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
    setCurrentPopover(null);
  };
  const openPopover = Boolean(anchorEl);
  
  // Menu List
  const [openMenu, setOpenMenu] = React.useState({} as { [key: number]: boolean })
  const items = getCustomsOptions()
  const handleClick = (id:any) => {
    setOpenMenu((prevState) => ({ ...prevState, [id]: !prevState[id] }))
  }
  const listMenu = (
    <>
        {items.map((item, index) => {
            return(
              <>
              <List component='nav' key={index} disablePadding subheader={
                <Typography variant='overline' sx={{ display: open && item.subheader.length != 0 ? {xs: 'none', md: 'block'} : {xs: 'block', md: 'none'} }} className='font-bold text-[#9ca3af] px-5'>{item.subheader}</Typography>
              }
              >
                <ListItem sx={{ display: 'block', paddingY: index == 0 ? 1 : 0, paddingX: 0 }} className='text-[#9ca3af] transition-all ease-in-out'>
                  <Link href={item.link}>
                    <ListItemButton onClick={() => handleClick(item.id)} onMouseOver={!open? (e) => handlePopoverOpen(e, item) : undefined} onMouseDown={handlePopoverClose} sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} className='xs:pl-7 md:pl-5 hover:brightness-[1.6]'>
                      <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : {xs: 2, md: 'auto'}, justifyContent: 'center', }}>
                        {item.icon}
                      </ListItemIcon>
                      <Typography variant='body2' className='text-gray-400 w-full' sx={{ display: open ? {xs: 'none', md: 'block'} : {xs: 'block', md: 'none'} }}>{item.title}</Typography>
                      { item.subItem.length != 0 ? openMenu[item.id] ? <ExpandMore sx={{ color: '#9ca3af', display: open ? {xs: 'none', md: 'block'} : {xs: 'block', md: 'none'}}} fontSize='small' /> : <ChevronRightIcon sx={{ color: '#9ca3af', display: open ? {xs: 'none', md: 'block'} : {xs: 'block', md: 'none'}}} fontSize='small' /> : null}
                      {/* {openMenu[item.id] ? <ExpandMore sx={{ color: '#9ca3af', display: open ? {xs: 'none', md: 'block'} : {xs: 'block', md: 'none'}}} fontSize='small' /> : <ChevronRightIcon sx={{ color: '#9ca3af', display: open ? {xs: 'none', md: 'block'} : {xs: 'block', md: 'none'}}} fontSize='small' />} */}
                    </ListItemButton>
                    <Collapse in={openMenu[item.id]} timeout={500} unmountOnExit sx={{ display: open ? {xs: 'none', md: 'block'} : {xs: 'block', md: 'none'}}}>
                      <List disablePadding className=''>
                        {item.subItem.map((subitem) => {
                          return(
                            <>
                              <Link href={subitem.link}>
                                <ListItemButton className='hover:brightness-[1.6]'>
                                  <Typography variant='body2' className='text-gray-400 xs:pl-12 md:pl-10'>{subitem.subtitle}</Typography>
                                </ListItemButton>
                              </Link>
                            </>
                          )
                        })}
                      </List>
                    </Collapse>
                  </Link>
                </ListItem>
                {item.divider != null ? <Divider light sx={{ paddingTop: index == 2 ? 1 : 0 }} className='border-gray-600 mx-5 mb-4' /> : null}
                <Popover open={openPopover} anchorEl={anchorEl} sx={{ pointerEvents: 'none', display: open? 'none' : {xs: 'none', md: 'block'} }} anchorOrigin={{vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }} PaperProps={{sx: { borderRadius: 0, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'}}}>
                  {currentPopover ? <>
                    <Box sx={{ pointerEvents: 'auto', width: 200}} onMouseLeave={handlePopoverClose}>
                      <Box className='bg-[#323742]'>
                        <ListItemButton className='text-gray-400 hover:text-light py-4'>
                          <Typography variant='body2'>{currentPopover.title}</Typography>
                        </ListItemButton>
                      </Box>
                      <>
                        {currentPopover.subItem.map((subitem) => {
                          return(
                            <>
                              {currentPopover.subItem.length != 0 ? 
                                <Box key={subitem.id} className='bg-white mt-2'>
                                  <ListItemButton className='text-gray-400 hover:text-primary py-3 pl-5'>
                                    <Typography variant='body2'>{subitem.subtitle}</Typography>
                                  </ListItemButton>
                                </Box>
                              : null}
                              
                            </>
                          )
                        })}
                      </>
                    </Box>
                  </> : null}
                </Popover>
              </List>
              </>
            )
        })}
    </>
  )

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <ElevationScroll>
          <AppBar position="fixed" open={open} className={trigger ? 'backdrop-blur-[5px] bg-white/80 shadow-sm' : 'bg-white'}>
            <Toolbar className='pl-0'>
              <Stack direction='row' justifyContent='space-between' alignItems='center' className='w-full'>
                <Stack className='transition-all duration-2000 ease-in-out' direction='row' alignItems='center' spacing={1}>
                  <Stack className='bg-[#323742] w-16 h-16 xs:flex md:hidden' justifyContent='center' alignItems='center'>
                    <Link href='/users/dashboard'>
                      <Image src='/images/logo-sm.png' width={30} height={30} alt='logo' className=''/> 
                    </Link>
                  </Stack>
                  <IconButton aria-label="open drawer" className={!open? 'translate-x-16 transition-all duration-200 ease-in-out rotate-90 text-primary xs:hidden md:flex' : 'hover:text-primary  xs:hidden md:flex'} onClick={!open? handleDrawerOpen : handleDrawerClose} edge="start">
                    <MenuIcon />
                  </IconButton>
                  <DrawerMobile listMenu={listMenu}/>
                </Stack>
                <Stack direction='row' alignItems='center'>
                    <AppnavMenu />
                </Stack>
              </Stack>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Drawer variant="permanent" open={open} PaperProps={{ sx: { backgroundColor: '#323742', color: '#9ca3af', display: {xs: 'none', md: 'block'} }}}>
          <DrawerHeader>
              {
                !open? 
                <Link href='/users/dashboard'>
                  <Image src='/images/logo-sm.png' width={30} height={30} alt='logo' className=''/> 
                </Link>
                : 
                <Link href='/users/dashboard'>
                  <Image src='/images/logo-color.png' width={90} height={30} alt='logo' className=''/>
                </Link>
              }
          </DrawerHeader>
          <Divider className='border-gray-700' />
            {listMenu}
        </Drawer>
        <Box component="main" className='pt-3 min-w-0 xs:px-4 sm:px-7 min-h-screen w-screen'>
          <DrawerHeader />
          {children}
          <FooterDashboard />
        </Box>
      </Box>
    </>
  )
}
