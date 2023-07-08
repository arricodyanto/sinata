import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface ButtonBasicProps {
  children?: React.ReactNode;
}

export default function ButtonBasic(props: ButtonBasicProps & Partial<ButtonProps>) {
  const {
    children,
    ...buttonProps
  } = props;
  return (
    <Button size='small' {...buttonProps} disableElevation className='rounded-md capitalize py-1 px-3'>{children}</Button>
  );
}
