import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'
import FlashMessagesList from './components/flash/FlashMessagesList'
import { fetchTablesNoDispatch } from './actions/tablesData';
import { connect } from 'react-redux';
/*import find from 'lodash/find';*/
import parseTablesResponses from './utils/parseTablesResponses';

class App extends Component {
	
	componentWillMount(){
						
	}

  render() {  	
    return (
      <div className="container-fluid">
         <NavigationBar/>
        <FlashMessagesList />      
        	{this.props.children}              
      </div>
    );
  }
}

App.propTypes = {
	fetchTablesNoDispatch: React.PropTypes.func.isRequired,
	parseTablesResponses: React.PropTypes.func.isRequired,
}

export default connect(null,{fetchTablesNoDispatch: fetchTablesNoDispatch, parseTablesResponses: parseTablesResponses})(App);
