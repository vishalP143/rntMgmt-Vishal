import { createTheme } from '@mui/material/styles';

const neonGlowColors = {
  base: '#0d0f17', // Deep dark background for dark mode
  surface: '#16191f', // Slightly lighter surface for dark mode
  accent: '#00ffc6', // Neon aqua accent color
  vibrantPink: '#ff007f', // Neon pink
  neonYellow: '#ffea00', // Neon yellow
  textPrimary: '#ffffff', // Bright white for text
  textSecondary: '#b3b3b3', // Muted gray for secondary text
  error: '#ff1744', // Bright red for errors
  warning: '#ff9100', // Bright orange for warnings
  success: '#00e676', // Neon green for success
  info: '#2979ff', // Vibrant blue for info
  overlay: '#212121', // Subtle overlay color for dark mode
  lightBase: '#f5f5f5', // Light background for light mode
  lightSurface: '#ffffff', // Light surface for light mode
  lightTextPrimary: '#000000', // Dark text for light mode
  lightTextSecondary: '#757575', // Muted gray text for light mode
  lightAccent: '#6200ea', // Purple accent for light mode
};

const darkTheme = createTheme({
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
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@300;400;500;700&display=swap');
        body {
          background: linear-gradient(180deg, ${neonGlowColors.base} 0%, ${neonGlowColors.surface} 100%);
          color: ${neonGlowColors.textPrimary};
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `,
    },
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
          color: neonGlowColors.textPrimary,
          backgroundColor: neonGlowColors.accent,
          boxShadow: `0px 4px 8px ${neonGlowColors.accent}`, // Softer shadow
          '&:hover': {
            backgroundColor: neonGlowColors.vibrantPink,
            boxShadow: `0px 4px 10px ${neonGlowColors.vibrantPink}`, // Softer hover shadow
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: neonGlowColors.surface,
          boxShadow: `0px 4px 8px ${neonGlowColors.overlay}`,
          border: `1px solid ${neonGlowColors.accent}`,
        },
      },
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: neonGlowColors.lightBase,
      paper: neonGlowColors.lightSurface,
    },
    primary: {
      main: neonGlowColors.lightAccent,
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
      primary: neonGlowColors.lightTextPrimary,
      secondary: neonGlowColors.lightTextSecondary,
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: '"Orbitron", sans-serif',
      fontSize: '3rem',
      fontWeight: 700,
      color: neonGlowColors.lightAccent,
    },
    h2: {
      fontFamily: '"Orbitron", sans-serif',
      fontSize: '2.5rem',
      fontWeight: 700,
      color: neonGlowColors.vibrantPink,
    },
    body1: {
      fontSize: '1rem',
      color: neonGlowColors.lightTextPrimary,
    },
    body2: {
      fontSize: '0.875rem',
      color: neonGlowColors.lightTextSecondary,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@300;400;500;700&display=swap');
        body {
          background: ${neonGlowColors.lightBase};
          color: ${neonGlowColors.lightTextPrimary};
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `,
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: neonGlowColors.lightSurface,
          borderBottom: `2px solid ${neonGlowColors.lightAccent}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          fontWeight: 'bold',
          borderRadius: '8px',
          color: neonGlowColors.lightTextPrimary,
          backgroundColor: neonGlowColors.lightAccent,
          boxShadow: `0px 4px 8px ${neonGlowColors.lightAccent}`,
          '&:hover': {
            backgroundColor: neonGlowColors.vibrantPink,
            boxShadow: `0px 4px 10px ${neonGlowColors.vibrantPink}`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: neonGlowColors.lightSurface,
          boxShadow: `0px 4px 8px ${neonGlowColors.overlay}`,
          border: `1px solid ${neonGlowColors.lightAccent}`,
        },
      },
    },
  },
});

export { darkTheme, lightTheme };
