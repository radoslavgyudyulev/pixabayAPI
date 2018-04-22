import React, { Component } from 'react';

// Custom componenets
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search'

// Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
       <div>
        <Navbar /> 
        <Search />
       </div>
      </MuiThemeProvider>
     
     
    );
  }
}

export default App;
