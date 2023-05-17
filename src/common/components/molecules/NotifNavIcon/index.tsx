import React from 'react'
import { Avatar, Badge, Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import IconPopover from '../IconPopover'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function NotifNavIcon() {
  return (
    <>
        <IconPopover height='40px' alt='notif-icon' icon={<Badge badgeContent={3} color='primary' className='mr-1'><NotificationsNoneIcon /></Badge>}>
            <Box className='xs:w-[85vw] sm:w-80'>
                <Stack direction='row' justifyContent='space-between' alignItems='center' className='mb-3'>
                    <Typography variant='body2' className='text-gray-600 font-medium'>Notifications</Typography>
                    <Button variant='text' className='text-gray-600 hover:text-primary'>
                        <Typography variant='body2' className='capitalize text-xs'>Clear All</Typography>
                    </Button>
                </Stack>
                <Box className='-mx-4 h-[316px] overflow-y-auto'>
                    <List>
                        <ListItem disablePadding className='max-h-[70px]'>
                            <ListItemButton className='px-6'>
                                <ListItemAvatar>
                                    <Avatar alt='John Doe' src='/images/avatar/avatar-6.jpg' />
                                </ListItemAvatar>
                                <ListItemText primary='John Doe' secondary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' className='truncate'/>
                            </ListItemButton>
                        </ListItem>
                        <Divider light className='pb-0'/>
                        <ListItem disablePadding className='max-h-[70px]'>
                            <ListItemButton className='px-6'>
                                <ListItemAvatar>
                                    <Avatar alt='Alex Gryffin' src='/images/avatar/avatar-5.jpg' />
                                </ListItemAvatar>
                                <ListItemText primary='Alex Gryffin' secondary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' className='truncate'/>
                            </ListItemButton>
                        </ListItem>
                        <Divider light className='pb-0'/>
                        <ListItem disablePadding className='max-h-[70px]'>
                            <ListItemButton className='px-6'>
                                <ListItemAvatar>
                                    <Avatar alt='Gary Doe' src='/images/avatar/avatar-4.jpg' />
                                </ListItemAvatar>
                                <ListItemText primary='Gary Doe' secondary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' className='truncate'/>
                            </ListItemButton>
                        </ListItem>
                        <Divider light className='pb-0'/>
                        <ListItem disablePadding className='max-h-[70px]'>
                            <ListItemButton className='px-6'>
                                <ListItemAvatar>
                                    <Avatar alt='Sona Yong' src='/images/avatar/avatar-3.jpg' />
                                </ListItemAvatar>
                                <ListItemText primary='Sona Yong' secondary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' className='truncate'/>
                            </ListItemButton>
                        </ListItem>
                        <Divider light className='pb-0'/>
                        <ListItem disablePadding className='max-h-[70px]'>
                            <ListItemButton className='px-6'>
                                <ListItemAvatar>
                                    <Avatar alt='Samuel Ying' src='/images/avatar/avatar-2.jpg' />
                                </ListItemAvatar>
                                <ListItemText primary='Samuel Ying' secondary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' className='truncate'/>
                            </ListItemButton>
                        </ListItem>
                        <Divider light className='pb-0'/>
                        <ListItem disablePadding className='max-h-[70px]'>
                            <ListItemButton className='px-6'>
                                <ListItemAvatar>
                                    <Avatar alt='Rumanoff Bell' src='/images/avatar/avatar-1.jpg' />
                                </ListItemAvatar>
                                <ListItemText primary='Rumanoff Bell' secondary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' className='truncate'/>
                            </ListItemButton>
                        </ListItem>
                        <Divider light className='pb-0'/>
                    </List>
                </Box>
                <Button sx={{"&.MuiButtonBase-root:hover": { bgcolor: "transparent"}}} variant='text' className='text-primary text-sm capitalize mt-2 -mb-2' fullWidth disableRipple>View All</Button>
            </Box>
        </IconPopover>
    </>
  )
}
