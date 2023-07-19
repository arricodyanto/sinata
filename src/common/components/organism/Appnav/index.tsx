import ContainerPage from '@/common/components/atoms/ContainerPage';
import { getAccountFromPayload, getPayloadData } from '@/common/utils/decryptToken';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import { AppBar, Box, Button, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, Stack, Toolbar, Typography } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ElevationScroll(props: any) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true, //Whether or not there is a little delay when the user is scrolling.
    threshold: 100, //0 means trigger the event listener as soon as the user starts scrolling.
    //Default to 100 which means scrolling further down before the even listener triggers. It controls how far the user has to start scrolling to trigger the effect. 
  });
  return React.cloneElement(children, {
    elevation: trigger ? 0 : 0  //0 means flat i.e. elevation of zero. 4 means elevation of 4 to show the floating state.
  });
}

type Anchor = 'left';

export default function Appnav(props: any) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const [drawer, setDrawer] = React.useState({ left: false });
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        setDrawer({ ...drawer, [anchor]: open });
      };

  const payload = getAccountFromPayload();

  return (
    <>
      <ElevationScroll>
        <AppBar elevation={0} sx={{ backgroundColor: trigger ? "primary" : "transparent", boxShadow: trigger ? 3 : 0 }} className='transition-all duration-500 ease-in-out'>
          <Toolbar sx={{ height: { xs: 70, md: 80, lg: 70 } }}>
            <ContainerPage disableGutters>
              <Grid container spacing={1} alignItems='center' className='relative'>
                <Grid item xs={2} sx={{ display: { xs: 'flex', md: 'none' } }}>
                  {(['left'] as const).map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button variant='outlined' className='w-[10px]' onClick={toggleDrawer(anchor, true)} sx={{ color: trigger ? 'white' : 'primary', borderColor: 'secondary' }}><MenuIcon /></Button>
                      <Drawer anchor={anchor} open={drawer[anchor]} onClose={toggleDrawer(anchor, false)} PaperProps={{ sx: { backgroundColor: '#323742' } }}>
                        <Box className='pt-4 text-light' sx={{ width: 240 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
                          <Typography variant='h6' className='' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 18 }}>SINATA</Typography>
                          <Divider className='pt-5 border-gray-600' />
                          <List>
                            <ListItem>
                              <Link href='/'>
                                <ListItemButton className='w-[210px]'>
                                  <ListItemIcon>
                                    <HomeOutlinedIcon sx={{ color: '#f3f4f6' }} />
                                  </ListItemIcon>
                                  <Typography variant='body1'>Beranda</Typography>
                                </ListItemButton>
                              </Link>
                            </ListItem>
                            <ListItem>
                              <Link href='/about'>
                                <ListItemButton className='w-[210px]'>
                                  <ListItemIcon>
                                    <InfoOutlinedIcon sx={{ color: '#f3f4f6' }} />
                                  </ListItemIcon>
                                  <Typography variant='body1'>Tentang</Typography>
                                </ListItemButton>
                              </Link>
                            </ListItem>
                            <ListItem>
                              <Link href='/events'>
                                <ListItemButton className='w-[210px]'>
                                  <ListItemIcon>
                                    <EventOutlinedIcon sx={{ color: '#f3f4f6' }} />
                                  </ListItemIcon>
                                  <Typography variant='body1'>Agenda</Typography>
                                </ListItemButton>
                              </Link>
                            </ListItem>
                            <ListItem>
                              <Link href='/guidelines'>
                                <ListItemButton className='w-[210px]'>
                                  <ListItemIcon>
                                    <NoteAltOutlinedIcon sx={{ color: '#f3f4f6' }} />
                                  </ListItemIcon>
                                  <Typography variant='body1'>Panduan</Typography>
                                </ListItemButton>
                              </Link>
                            </ListItem>
                            <ListItem>
                              <Link href={!payload?.account.role ? '/sign-in' : payload?.account.role !== 'User' ? '/admins/dashboard' : '/users/dashboard'}>
                                <ListItemButton className='w-[210px]'>
                                  <ListItemIcon>
                                    {!payload?.account.role ? (
                                      <LoginOutlinedIcon sx={{ color: '#f3f4f6' }} />
                                    ) : (
                                      <DashboardOutlinedIcon sx={{ color: '#f3f4f6' }} />
                                    )}
                                  </ListItemIcon>
                                  <Typography variant='body1'>{!payload?.account.role ? 'Sign in' : 'Dashboard'}</Typography>
                                </ListItemButton>
                              </Link>
                            </ListItem>
                          </List>
                        </Box>
                      </Drawer>
                    </React.Fragment>
                  ))}
                </Grid>
                <Grid item xs={8} sx={{ display: { xs: 'flex', md: 'none' } }} className='justify-center'>
                  <Link href='/'>
                    <Image src={trigger ? '/images/logo-light.png' : '/images/logo-color.png'} width={100} height={35} alt="Site's Logo" />
                  </Link>
                </Grid>
                <Grid item sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <Link href='/'>
                    <Image src={trigger ? '/images/logo-light.png' : '/images/logo-color.png'} width={100} height={35} alt="Site's Logo" />
                  </Link>
                </Grid>
                <Grid item className='absolute flex right-0'>
                  <Stack spacing={2} direction='row' sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Link href='/' className='text-light'>
                      <Typography variant='body1' className='hover:brightness-90 hover:text-underline underline-offset-8'>Beranda</Typography>
                    </Link>
                    <Link href='/about' className='text-light'>
                      <Typography variant='body1' className='hover:brightness-90 hover:text-underline underline-offset-8'>Tentang</Typography>
                    </Link>
                    <Link href='/events' className='text-light'>
                      <Typography variant='body1' className='hover:brightness-90 hover:text-underline underline-offset-8'>Agenda</Typography>
                    </Link>
                    <Link href='/guidelines' className='text-light'>
                      <Typography variant='body1' className='hover:brightness-90 hover:text-underline underline-offset-8'>Panduan</Typography>
                    </Link>
                    <Link href={!payload?.account.role ? '/sign-in' : payload?.account.role !== 'User' ? '/admins/dashboard' : '/users/dashboard'} className='text-light' passHref>
                      <Typography variant='body1' className='hover:brightness-90 hover:text-underline underline-offset-8'>{!payload?.account.role ? 'Sign in' : 'Dashboard'}</Typography>
                    </Link>
                  </Stack>
                </Grid>
              </Grid>
            </ContainerPage>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
