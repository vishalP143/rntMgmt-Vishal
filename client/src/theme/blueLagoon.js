// src/theme/blueLagoon.js
import { createTheme } from '@mui/material/styles';

const blueLagoonColors = {
  base: '#002B36',
  surface: '#073642',
  overlay: '#586e75',
  muted: '#657b83',
  subtle: '#93a1a1',
  text: '#fdf6e3',
  primary: '#268bd2',  
  secondary: '#2aa198', 
  accent: '#b58900',    
  danger: '#dc322f',    
  success: '#859900',   
  info: '#6c71c4',      
  highlightLow: '#073642',
  highlightMed: '#586e75',
  highlightHigh: '#839496',
};

const blueLagoonTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: blueLagoonColors.base,
      paper: blueLagoonColors.surface,
    },
    primary: {
      main: blueLagoonColors.primary,
    },
    secondary: {
      main: blueLagoonColors.secondary,
    },
    error: {
      main: blueLagoonColors.danger,
    },
    warning: {
      main: blueLagoonColors.accent,
    },
    info: {
      main: blueLagoonColors.info,
    },
    success: {
      main: blueLagoonColors.success,
    },
    text: {
      primary: blueLagoonColors.text,
      secondary: blueLagoonColors.subtle,
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Merriweather", serif',
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: blueLagoonColors.surface,
          color: blueLagoonColors.text,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: blueLagoonColors.highlightMed,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&family=Merriweather:wght@400;700&display=swap');
        body {
          background-color: ${blueLagoonColors.base};
          color: ${blueLagoonColors.text};
        }
      `,
    },
  },
});

export default blueLagoonTheme;
