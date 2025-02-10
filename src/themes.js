// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6f61',
    },
    secondary: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  },
});

export default theme;
