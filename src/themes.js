// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6f61', // Emoji-like orange
    },
    secondary: {
      main: '#4caf50', // Green for accents
    },
  },
  typography: {
    fontFamily: '"Comic Sans MS", cursive, sans-serif', // Fun font for emojis
  },
});

export default theme;