import React, { Component } from 'react';
import { fetchGrids } from '../actions/gridData';
import { connect } from 'react-redux';

class Greetings extends Component {
  fetch(e){
  	e.preventDefault();
  	this.props.fetchGrids(
  		[
  			{ name : 'users' },
  			{ name : 'test'  }  			
  		]
  	)
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
	fetchGrids: React.PropTypes.func.isRequired
}

export default connect(null, { fetchGrids } )(Greetings);