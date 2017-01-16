import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'
import FlashMessagesList from './components/flash/FlashMessagesList'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavigationBar />
        <FlashMessagesList />
      
        <div className="container-fluid">
        	{this.props.children}
        </div>	
      
      </div>
    );
  }
}

export default App;
