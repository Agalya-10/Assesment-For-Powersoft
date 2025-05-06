import React from 'react';
import { Button as MUIButton } from '@mui/material';
const Button = ({ children, onClick, type = 'button', variant = 'contained', color = 'primary', ...props }) => {
  return (
    <MUIButton type={type} variant={variant}onClick={onClick}{...props}>{children}</MUIButton>
  );
};
export default Button;