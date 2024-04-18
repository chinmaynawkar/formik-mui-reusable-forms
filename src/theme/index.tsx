import { Theme, createTheme, responsiveFontSizes } from '@mui/material';
import typography from './overrides/typography';
import palette from './overrides/palette';
import MuiOutlinedInput from './overrides/components/textField';
import MuiButton from './overrides/components/button';
import MuiCard from './overrides/components/card';
import MuiTabs from './overrides/components/tabs';
import MuiTab from './overrides/components/tab';
import MuiPaper from './overrides/components/paper';

const theme: Theme = createTheme({
  palette,
  typography,
  components: {
    MuiOutlinedInput,
    MuiButton,
    MuiCard,
    MuiTabs,
    MuiTab,
    MuiPaper,
  },
  spacing: 8,
});

export default responsiveFontSizes(theme);
