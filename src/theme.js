import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#070B14',
      paper: '#111C2E',
    },
    primary: {
      light: '#E8B884',
      main: '#C88A4A',
      dark: '#8B5E2B',
      contrastText: '#070B14',
    },
    secondary: {
      main: '#00E5FF',
      dark: '#007BFF',
      contrastText: '#070B14',
    },
    text: {
      primary: '#ffffff',
      secondary: '#94a3b8', // Tailwind slate-400 equivalent for readable secondary text
    },
  },
  typography: {
    fontFamily: '"JetBrains Mono", monospace',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#111C2E',
          backgroundImage: 'none',
          boxShadow: '0px 20px 40px -12px rgba(0,0,0,0.8)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #C88A4A 0%, #E8B884 100%)',
          color: '#070B14',
          '&:hover': {
            background: 'linear-gradient(45deg, #E8B884 0%, #C88A4A 100%)',
          },
        },
      },
    },
  },
});

export default theme;