import { Theme } from '@emotion/react';
import { ButtonClasses } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';

const styleOverrides: Partial<
  OverridesStyleRules<
    keyof ButtonClasses,
    'MuiButton',
    Omit<Theme, 'components'>
  >
> = {
  root: {
    textTransform: 'none',
    fontWeight: 400,
    fontSize: '17px',
    borderRadius: '100px',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
  },
};
const MuiButton = {
  styleOverrides,
};

export default MuiButton;
