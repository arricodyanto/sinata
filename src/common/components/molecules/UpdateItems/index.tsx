import React from 'react';
import { Stack } from '@mui/material';
import TimelineBottom from '@/common/components/atoms/TimelineBottom';
import TimelineUpdates from '@/common/components/atoms/TimelineUpdates';

export default function UpdateItems() {
  return (
    <> 
        <Stack direction='column-reverse'>
            <TimelineBottom />
            <TimelineUpdates date='12 Jan, 2023' version='v1.0.1'>
                <li>- Change header box image</li>
                <li>- Add public media file</li>
                <li>- Add navbar, hero</li>
            </TimelineUpdates> 
            <TimelineUpdates date='13 Jan, 2023' version='v1.0.2'>
                <li>- Styling mobile nav, hero, and paper</li>
            </TimelineUpdates> 
            <TimelineUpdates date='13 Jan, 2023' version='v1.0.3'>
                <li>- Center text paper</li>
                <li>- Update colors, scale</li>
            </TimelineUpdates>
            <TimelineUpdates date='14 Jan, 2023' version='v1.0.4'>
                <li>- Fix layout of the event calendar</li>
                <li>- Add carousel event card to landing page</li>
            </TimelineUpdates> 
            <TimelineUpdates date='17 Jan, 2023' version='v1.0.5'>
                <li>- Resize, add today&apos;s button to kalender agenda</li>
                <li>- Add calendar event under Kalendar Agenda, styling Agenda Terkini</li>
            </TimelineUpdates> 
            <TimelineUpdates date='18 Jan, 2023' version='v1.0.6'>
                <li>- Adding badge to date event on first month</li>
            </TimelineUpdates> 
            <TimelineUpdates date='19 Jan, 2023' version='v1.0.7'>
                <li>- Fix event filter by year</li>
                <li>- Update today&apos;s date</li>
                <li>- Add dynamic event mark on the calendar date</li>
            </TimelineUpdates> 
            <TimelineUpdates date='20 Jan, 2023' version='v1.0.8'>
                <li>- Adding footer component</li>
                <li>- Fix vh</li>
                <li>- Adding pengumuman system section, fix height of sign-in sign-up page</li>
            </TimelineUpdates> 
            <TimelineUpdates date='21 Jan, 2023' version='v1.1.0'>
                <li>- Add about pages</li>
            </TimelineUpdates> 
            <TimelineUpdates date='21 Jan, 2023' version='v1.1.1'>
                <li>- Add staff section</li>
            </TimelineUpdates> 
            <TimelineUpdates date='23 Jan, 2023' version='v1.1.2'>
                <li>- Rev link of contact</li>
                <li>- Add contact section, add new line to footer</li>
            </TimelineUpdates> 
            <TimelineUpdates date='24 Jan, 2023' version='v1.2.0'>
                <li>- Add events page, guidelines page</li>
            </TimelineUpdates> 
            <TimelineUpdates date='25 Jan, 2023' version='v1.2.0'>
                <li>- Add page title</li>
            </TimelineUpdates> 
            <TimelineUpdates date='26 Jan, 2023' version='v1.2.1'>
                <li>- Fix .json</li>
                <li>- Add calendar events, today&apos;s event, tomorrow&apos;s event to agenda page</li>
            </TimelineUpdates> 
            <TimelineUpdates date='26 Jan, 2023' version='v1.2.2'>
                <li>- Add all events to event page</li>
                <li>- Restyling event card</li>
                <li>- Add date, time, location to event cards</li>
                <li>- Fix eventcard</li>
                <li>- Fix allevent cards</li>
            </TimelineUpdates> 
            <TimelineUpdates date='27 Jan, 2023' version='v1.2.2'>
                <li>- Fix avatar publisher on event card</li>
            </TimelineUpdates> 
            <TimelineUpdates date='27 Jan, 2023' version='v1.3.0'>
                <li>- Add panduan page</li>
            </TimelineUpdates> 
            <TimelineUpdates date='27 Jan, 2023' version='v1.3.1'>
                <li>- Update the accordion</li>
                <li>- Add faqs accordion to panduan page</li>
                <li>- Reverse expand icon</li>
            </TimelineUpdates> 
            <TimelineUpdates date='27 Jan, 2023' version='v1.3.2'>
                <li>- Add onclick event on infographics</li>
            </TimelineUpdates> 
            <TimelineUpdates date='28 Jan, 2023' version='v1.3.3'>
                <li>- Add Updates Log to halaman beranda</li>
                <li>- Update content of Updates Log</li>
                <li>- Disable on hover Updates Log</li>
            </TimelineUpdates> 
            <TimelineUpdates date='29 Jan, 2023' version='v1.4.0'>
                <li>- Add user&apos;s dashboard pages</li>
            </TimelineUpdates> 
            <TimelineUpdates date='29 Jan, 2023' version='v1.4.1'>
                <li>- Add user dashboard appbar</li>
                <li>- Add IconDrawer to Dashboard Appnav</li>
            </TimelineUpdates> 
            <TimelineUpdates date='30 Jan, 2023' version='v1.4.2'>
                <li>- Remove IconDrawer and replace it with IconPopover</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='31 Jan, 2023' version='v1.4.2'>
                <li>- Add Avatar Nav Icon to dashboard</li>
                <li>- Add different search icon base on device</li>
                <li>- Add fullscreen button to dasboard appnav</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='1 Feb, 2023' version='v1.4.2'>
                <li>- Add Input Search (unused yet)</li>
                <li>- Update responsive breakpoints</li>
            </TimelineUpdates> 
            <TimelineUpdates date='2 Feb, 2023' version='v1.4.2'>
                <li>- Fix all container width</li>
                <li>- Fix Dashboard Appnav</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='3 Feb, 2023' version='v1.4.2'>
                <li>- Update Sidebar Drawer for desktop device</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='5 Feb, 2023' version='v1.4.2'>
                <li>- Fix Dashboard Appnav for mobile device</li>
                <li>- Add blur, transparent effect to Dashboard Appnav after scrolling</li>
                <li>- Add Footer Dashboard</li>
                <li>- Add Sidebar Drawer Menu for mobile device</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='6 Feb, 2023' version='v1.4.2'>
                <li>- Add List Menu to Dashboard Appnav either on desktop device or mobile device</li>
                <li>- Add Menu Item to List Menu </li>
                <li>- Update Menu Item to Nested List Menu </li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='7 Feb, 2023' version='v1.4.2'>
                <li>- Update Sidebar Drawer Menu in collapsed for desktop device</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='10 Feb, 2023' version='v1.4.2'>
                <li>- Fix several Sidebar Drawer Menu in collapsed for desktop device</li>
                <li>- Fix content Sidebar Drawer Menu in collapsed for desktop device with Array</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='15 Feb, 2023' version='v1.4.3'>
                <li>- Add breadcrumbs and header page to dashboard</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='16 Feb, 2023' version='v1.4.4'>
                <li>- Add service Flow Card to next section in dashboard</li>
                <li>- Update Line Graph in Flow Card</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='20 Feb, 2023' version='v1.4.4'>
                <li>- Update line graph color, data graph</li>
                <li>- Add Headline Flowcard and the summary</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='20 Feb, 2023' version='v1.4.5'>
                <li>- Add Layanan yang diajukan, Riwayat Layanan&apos;s section</li>
                <li>- Add Donut Chart to Layanan yang diajukan</li>
                <li>- Update responsiveness of Donut Chart to multiple devices</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='22 Feb, 2023' version='v1.4.5'>
                <li>- Add Riwayat Layanan Table Data</li>
                <li>- Fix Rensponsivenes Table Data on multiple devices</li>
                <li>- Add modal button to each table row</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='23 Feb, 2023' version='v1.4.5'>
                <li>- Add responsive editable form to modal box</li>
                <li>- Fix start state value of highlight days of calendar events (beranda page)</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='24 Feb, 2023' version='v1.4.6'>
                <li>- Add Agenda Terkini&apos;s section to Dashboard User</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='25 Feb, 2023' version='v1.5.0'>
                <li>- Add user&apos;s Riwayat Kegiatan Page</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='25 Feb, 2023' version='v1.5.1'>
                <li>- Add user&apos; Riwayat Kegiatan Table</li>
                <li>- Add Riwayat Kegiatan&apos;s Pagination Table</li>
                <li>- Activate Audiences&apos; Analytics to vercel with installing some package</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='27 Feb, 2023' version='v1.5.2'>
                <li>- Add login validation to Sign In page</li>
                <li>- Save Login Info to local storage</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='22 Maret, 2023' version='v1.6.0'>
                <li>- Add user&apos;s Tambah Kegiatan Page</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='22 Maret, 2023' version='v1.6.1'>
                <li>- Add breadcrumbs and header page to Tambah Kegiatan</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='23 Maret, 2023' version='v1.6.1'>
                <li>- Add Forms to Tambah Kegiatan Page</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='27 Maret, 2023' version='v1.6.1'>
                <li>- Add file upload forms</li>
                <li>- Update forms in Tambah Kegiatan Page</li>
                <li>- Add Guidline&apos;s Infographic to Tambah Kegiatan Page</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='28 Maret, 2023' version='v1.7.0'>
                <li>- Add Layanan Humas&apos; Page </li>
                <li>- Add Header Breadcrumbs to Layanan Humas&apos; Page</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='29 Maret, 2023' version='v1.7.1'>
                <li>- Add Tabs Component to Layanan Humas&apos; Page </li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='2 April, 2023' version='v1.7.1'>
                <li>- Fix responsiveness of the Tab Component to mobiles and tablets&apos; view</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='3 April, 2023' version='v1.7.2'>
                <li>- Add Pengajuan Layanan Peliputan&apos;s Form to Tab Peliputan</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='5 April, 2023' version='v1.7.2'>
                <li>- Update Judul Kegiatan form column to fetch data from local json</li>
                <li>- Fix value from form colum beneath it to fetch column Judul Kegiatan</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='6 April, 2023' version='v1.7.2'>
                <li>- Update the Datepicker and TimePicker to newer version</li>
                <li>- Fix the state value issue of both components above</li>
                <li>- Fix the Event Calendar&apos;s component</li>
                <li>- Add Guidline&apos;s Infographic to Layanan Peliputan&apos;s Tab</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='6 April, 2023' version='v1.7.3'>
                <li>- Add Pengajuan Layanan Konferensi Pers&apos; Form to next tab</li>
                <li>- Add file type validation to Surat Permohonan & Leaflet Kegiatan&apos;s columns</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='6 April, 2023' version='v1.7.4'>
                <li>- Add Pengajuan Layanan Pembaruan Informasi di Laman&apos; Form to next tab</li>
                <li>- Add file type validation to Surat Permohonan&apos;s columns</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='7 April, 2023' version='v1.8.0'>
                <li>- Add Layanan Publikasi&apos; Page </li>
                <li>- Add Header Breadcrumbs to Layanan Publikasi&apos; Page</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='7 April, 2023' version='v1.8.1'>
                <li>- Fix the Tabs Component to be responsive on mobile and tablet devices with scrollable button</li>
                <li>- Add Tabs Component to Layanan Publikasi&apos;s page</li>
                <li>- Add Pengajuan Layanan Live Streaming&apos; Form to first tab of Layanan Publikasi&apos;s Page</li>
                <li>- Add file type validation to Leaflet Kegiatan&apos;s columns</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='7 April, 2023' version='v1.8.2'>
                <li>- Add Pengajuan Layanan Publikasi Agenda UNS&apos; Form to next tab</li>
                <li>- Add file type validation to Leaflet Kegiatan&apos;s columns</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='7 April, 2023' version='v1.8.3'>
                <li>- Add Pengajuan Layanan Publikasi di Majalah UNS&apos; Form to next tab</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='7 April, 2023' version='v1.8.4'>
                <li>- Add Pengajuan Layanan Opini di Media&apos;s Form to next tab</li>
                <li>- Add file type validation to Surat Permohonan&apos;s & Foto Penulis&apos; columns</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='7 April, 2023' version='v1.9.0'>
                <li>- Add Layanan Media&apos; Page</li>
                <li>- Add Header Breadcrumbs to Layanan Media&apos; Page</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='7 April, 2023' version='v1.9.1'>
                <li>- Add Tabs Component to Layanan Media&apos;s page</li>
                <li>- Add Pengajuan Layanan Penayangan Konten di Videotron&apos; Form to first tab of Layanan Media&apos;s Page</li>
                <li>- Add file type validation to Bahan Publikasi&apos;s columns</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='7 April, 2023' version='v1.9.2'>
                <li>- Add Pengajuan Layanan Pemasangan Baliho&apos;s Form to next tab</li>
                <li>- Add file type validation to Bahan Publikasi&apos;s & Bukti Pembayaran&apos;s columns</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='8 April, 2023' version='v1.10.0'>
                <li>- Add Profil Akun&apos;s Page</li>
                <li>- Add Header Breadcrumbs to Profil Akun&apos;s Page</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='8 April, 2023' version='v1.10.1'>
                <li>- Add Profil Akun&apos;s section</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='9 April, 2023' version='v1.10.1'>
                <li>- Add Popup Modal on Ubah Kata Sandi Button</li>
                <li>- Fix TextfieldIcon & TextfieldPass components (Sign in & Sign up page)</li>
                <li>- Fix Biodata User with Table Component</li>
                <li>- Fix Responsiveness on aside Profil Akun</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='12 April, 2023' version='v1.10.2'>
                <li>- Add Tab Components to Profil Akun</li>
                <li>- Add Table Kegiatan & Table Ajuan to each tab panel</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='22 April, 2023' version='v2.0.0'>
                <li>- Structure Changes of the main system to move to the /src directory</li>
                <li>- Update Container Page width on mobile devices</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='24 April, 2023' version='v2.1.0'>
                <li>- Fix Dashboard User component to Dashboard Panel component</li>
                <li>- Add Dashboard Admin&apos;s Page to &apos;/admins/dashboard&apos; routes</li>
                <li>- Add content of the page to Dashboard Admin</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='24 April, 2023' version='v2.2.0'>
                <li>- Add Daftar Kegiatan&apos;s Page to Manajemen Kegiatan</li>
                <li>- Add content of the page to Daftar Kegiatan</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='24 April, 2023' version='v2.3.0'>
                <li>- Add Daftar Agenda Terpublikasi&apos;s Page to Manajemen Kegiatan</li>
                <li>- Add content of the page to Daftar Agenda Terpublikasi</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='25 April, 2023' version='v2.3.0'>
                <li>- Fix the All Events component to Event Card V2 component</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='26 April, 2023' version='v2.3.0'>
                <li>- Fix the Table Riwayat Components and try to fetching with fakeAPI</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='27 April, 2023' version='v2.3.0'>
                <li>- Fix the Tabel Kegiatan on admin&apos; dasboard with new Table Data component</li>
                <li>- Fix the Table Data component on it&apos;s height and table pagination</li>
                <li>- Add search table component and tambah kegiatan button to the Daftar Kegiatan & Daftar Agenda Terpublikasi&apos;s Page</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='3 Mei, 2023' version='v2.4.0'>
                <li>- Add the data of Manajemen Layanan Peliputan</li>
                <li>- Add modal component to Tabel Manajemen Peliputan</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='8 Mei, 2023' version='v2.4.0'>
                <li>- Fix the autocomplete of judul kegiatan at the manajemen peliputan&apos;s page</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='9 Mei, 2023' version='v2.4.0'>
                <li>- Add local json to sistem, prevent if live api from mockaroo.com reach limits</li>
                <li>- Fix the autocomplete kegiatan and autocomplete users column form</li>
                <li>- Add server-side api for accounts</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='10 Mei, 2023' version='v2.4.0'>
                <li>- Add skeleton component for table while fetching the data</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='10 Mei, 2023' version='v2.4.1'>
                <li>- Add Table Data Manajemen Konferensi Pers on next tab</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='10 Mei, 2023' version='v2.4.2'>
                <li>- Add Table Data Manajemen Pembaruan Informasi on next tab</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='11 Mei, 2023' version='v2.5.0'>
                <li>- Add Manajemen Publikasi Page</li>
                <li>- Add Table Data Manajemen Live Streaming on first tab</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='12 Mei, 2023' version='v2.5.1'>
                <li>- Add Table Data Manajemen Publikasi Agenda on next tab</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='12 Mei, 2023' version='v2.5.2'>
                <li>- Add Table Data Manajemen Publikasi di Majalah UNS on next tab</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='12 Mei, 2023' version='v2.5.3'>
                <li>- Add Table Data Manajemen Layanan Opini di Media on next tab</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='12 Mei, 2023' version='v2.6.0'>
                <li>- Add Manajemen Media Page</li>
                <li>- Add Table Data Manajemen Penayangan Konten di Videotron UNS on first tab</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='12 Mei, 2023' version='v2.6.1'>
                <li>- Add Table Data Manajemen Layanan Pemasangan Baliho on next tab</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='12 Mei, 2023' version='v2.7.0'>
                <li>- Add Manajemen Akun Page</li>
                <li>- Add Table Data Manajemen Akun Pengguna</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='12 Mei, 2023' version='v2.8.0'>
                <li>- Add Arsip Pers Page</li>
                <li>- Add Table Data Manajemen Arsip Pers</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='15 Mei, 2023' version='v2.8.0'>
                <li>- Add Popup Modal to Table Data Arsip Pers </li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='15 Mei, 2023' version='v2.9.0'>
                <li>- Add Arsip Desain Page</li>
                <li>- Add Table Data Manajemen Arsip Desain</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='16 Mei, 2023' version='v2.10.0'>
                <li>- Add Profil Akun Admin Page</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
            <TimelineUpdates date='17 Mei, 2023' version='v2.10.0'>
                <li>- Add Web Application name to hero section</li>
                <li>- Update Updates Log content </li>
            </TimelineUpdates>
        </Stack>
    </>
  )
}
