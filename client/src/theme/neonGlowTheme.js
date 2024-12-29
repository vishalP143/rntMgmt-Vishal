// src/theme/neonGlow.js
import { createTheme } from '@mui/material/styles';

const neonGlowColors = {
  base: '#0d0f17', // Deep dark background
  surface: '#16191f', // Slightly lighter surface
  accent: '#00ffc6', // Neon aqua
  vibrantPink: '#ff007f', // Neon pink
  neonYellow: '#ffea00', // Neon yellow
  textPrimary: '#ffffff', // Bright white for primary text
  textSecondary: '#b3b3b3', // Muted gray for secondary text
  error: '#ff1744', // Bright red for errors
  warning: '#ff9100', // Bright orange for warnings
  success: '#00e676', // Neon green for success
  info: '#2979ff', // Vibrant blue for info
  overlay: '#212121', // Subtle overlays
};

const neonGlowTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: neonGlowColors.base,
      paper: neonGlowColors.surface,
    },
    primary: {
      main: neonGlowColors.accent,
    },
    secondary: {
      main: neonGlowColors.vibrantPink,
    },
    error: {
      main: neonGlowColors.error,
    },
    warning: {
      main: neonGlowColors.warning,
    },
    info: {
      main: neonGlowColors.info,
    },
    success: {
      main: neonGlowColors.success,
    },
    text: {
      primary: neonGlowColors.textPrimary,
      secondary: neonGlowColors.textSecondary,
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: '"Orbitron", sans-serif',
      fontSize: '3rem',
      fontWeight: 700,
      color: neonGlowColors.accent,
    },
    h2: {
      fontFamily: '"Orbitron", sans-serif',
      fontSize: '2.5rem',
      fontWeight: 700,
      color: neonGlowColors.vibrantPink,
    },
    body1: {
      fontSize: '1rem',
      color: neonGlowColors.textPrimary,
    },
    body2: {
      fontSize: '0.875rem',
      color: neonGlowColors.textSecondary,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: neonGlowColors.surface,
          borderBottom: `2px solid ${neonGlowColors.accent}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          fontWeight: 'bold',
          borderRadius: '8px',
          boxShadow: `0px 4px 10px ${neonGlowColors.accent}`,
          '&:hover': {
            boxShadow: `0px 6px 12px ${neonGlowColors.vibrantPink}`,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@300;400;500;700&display=swap');
        body {
          background: linear-gradient(180deg, #0d0f17 0%, #16191f 100%);
          color: ${neonGlowColors.textPrimary};
        }
      `,
    },
  },
});

export default neonGlowTheme;
