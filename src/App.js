import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import EditorPage from './pages/EditorPage';

import './App.css';

const customTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: 56,
          borderBottom: '1px solid #eee',
          boxShadow: 'none',
        },
      },
    },
  },
  palette: {
    background: {
      light: '#ffffff',
      main: '#f8f9fa',
      dark: '#c5c6c7',
      contrastText: '#000',
    },
    blueForAndroid: {
      light: '#6ccfff',
      main: '#229ee6',
      dark: '#0070b3',
      contrastText: '#000',
    },
    blueForIos: {
      light: '#6aa4ff',
      main: '#0076ff',
      dark: '#004ccb',
      contrastText: '#000',
    },
    lightRed: {
      light: '#ff9aa5',
      main: '#fd6776',
      dark: '#c5334b',
      contrastText: '#000',
    },
    title: {
      light: '#8995a2',
      main: '#5c6773',
      dark: '#323d48',
      contrastText: '#fff',
    },
    text: {
      light: '#a1aab3',
      main: '#a1aab3',
      dark: '#727b83',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={ customTheme }>
      <div>
        <EditorPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
