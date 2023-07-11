import FullscreenButton from '@/common/components/atoms/FullscreenButton';
import AvatarNavIcon from '@/common/components/molecules/AvatarNavIcon';
import NotifNavIcon from '@/common/components/molecules/NotifNavIcon';
import SearchNavIcon from '@/common/components/molecules/SearchNavIcon';
import React from 'react';

export default function AppnavMenu() {
  return (
    <>
      <SearchNavIcon />
      <FullscreenButton />
      {/* <NotifNavIcon /> */}
      <AvatarNavIcon />
      {/* <InputSearch /> */}
    </>
  );
}
