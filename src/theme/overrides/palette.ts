import { Palette, Theme } from '@mui/material';

// override the default palette
interface ExtendedPalette extends Palette {
  dev: {
    debugBanner: string;
  };
  purple: {
    main: string;
  };
  sideBarColors: {
    backgroundColor: string;
    highlightColor: string;
    textColor: string;
  };
}

export interface ExtendedTheme extends Theme {
  palette: ExtendedPalette;
}

const greenColors = {
  50: '#eefae7',
  100: '#d4f3c4',
  200: '#b6ea9d',
  300: '#96e273',
  400: '#7ada4f',
  500: '#5dd327',
  600: '#4dc21e',
  700: '#31ae12',
  800: '#009901',
  900: '#007700',
};

const greyColors = {
  50: '#f9f9f9',
  100: '#f2f2f2',
  200: '#e9e9e9',
  300: '#d9d9d9',
  400: '#b5b5b5',
  500: '#959595',
  600: '#6d6d6d',
  700: '#5a5a5a',
  800: '#3b3b3b',
  900: '#1b1b1b',
};

const palette = {
  primary: {
    main: greenColors[500],
    contrastText: '#ffffff',
    ...greenColors,
  },
  secondary: {
    main: greyColors[100],
    ...greyColors,
  },
  background: {
    default: '#eeeeee',
  },
  common: {
    black: '#000000',
    white: '#ffffff',
  },
  dev: {
    debugBanner: '#ff000055',
  },
  purple: {
    main: '#828BF2',
  },
  sideBarColors: {
    backgroundColor: '#111111',
    highlightColor: '#1a1a1a',
    textColor: '#a3a3a3',
  },
  spacing: 8,
};

export default palette;
