import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Shell from './Components/Shell/Shell'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
          <Shell />
      </MuiThemeProvider>
    );
  }
}


const theme = createMuiTheme({
  palette: {
    primary: { 
      main: "#fafafa"
    },
    secondary: {
      main: '#dd2c00'
    }
  },
  typography: {
    useNextVariants: true,
  },
});

export default App;
