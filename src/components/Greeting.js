import React, { Component } from 'react';
//import { fetchGrids } from '../actions/gridData';
import { fetchSelects } from '../actions/cascadeSelect';
import { connect } from 'react-redux';

class Greetings extends Component {
  
  fetch(e){
  	e.preventDefault();    

     this.props.fetchSelects([
        { table: 'provinces', name: 'province', value: 'id', display: 'name'},
        { table: 'cities', name: 'city', value: 'id', display: 'name', filter: 'province'},
        { table: 'suburbs', name: 'suburb', value: 'id', display: 'name', filter: 'city'}   
    ]);
  }

  render() {

    return (
    	<div>
    		<button className="btn btn-primary" onClick={this.fetch.bind(this)} >Get Grids</button>    	
   			<h1>Greetings!</h1>
   		</div>	
    );
  }
}

Greetings.propTypes = {
	fetchSelects: React.PropTypes.func.isRequired
}



export default connect(null, { fetchSelects } )(Greetings);