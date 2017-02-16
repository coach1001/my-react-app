import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'
import FlashMessagesList from './components/flash/FlashMessagesList'
import { fetchTablesNoDispatch } from './actions/tablesData';
import { connect } from 'react-redux';

import parseTablesResponses from './utils/parseTablesResponses';
import Notifications from 'react-notify-toast';

class App extends Component {
	
	componentWillMount(){
						
	}

  render() {  	
    return (
      <div className="container-fluid">
         <NavigationBar/> 
          
        <FlashMessagesList />
             
        	{this.props.children}              
        
        <Notifications/>
      </div>
    );
  }
}

App.propTypes = {
	fetchTablesNoDispatch: React.PropTypes.func.isRequired,
	parseTablesResponses: React.PropTypes.func.isRequired,
}

export default connect(null,{fetchTablesNoDispatch: fetchTablesNoDispatch, parseTablesResponses: parseTablesResponses})(App);
