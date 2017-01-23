import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'
import FlashMessagesList from './components/flash/FlashMessagesList'
import { fetchTablesNoDispatch } from './actions/tablesData';
import { connect } from 'react-redux';
import find from 'lodash/find';
import parseTablesResponses from './utils/parseTablesResponses';

class App extends Component {
	componentWillMount(){
		
		
		this.setState({
			showNavBar : false
		})
		
		this.props.fetchTablesNoDispatch(['input_forms']).then( (responses) =>{			
			let tables = [];
			let input_forms = {}
			
			tables = parseTablesResponses(responses);
			input_forms = find(tables, {tableName: 'input_forms'});

			this.setState({
				showNavBar: true,
				inputForms: input_forms.data
			})
		}).catch( (e) => {
			console.log(e);
		})
	}

  render() {  	
    return (
      <div className="container-fluid">
         { this.state.showNavBar ? <NavigationBar inputForms={this.state.inputForms} /> : null}
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
