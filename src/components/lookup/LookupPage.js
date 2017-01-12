import React from 'react';
import CascadeSelect from '../common/CascadeSelect';
import GridForm from '../common/GridForm';
import { CASCADE_DATA_LOCATION_CITY } from '../common/constants/constants';
import { connect } from 'react-redux';


class LookupPage extends React.Component {

	onClick(e){
		this.setState(Object.assign({},this.state,{value:100}));
	}
	
	componentWillMount(){	
		this.setState(Object.assign({},this.state,{value:100}));
	}
  
  onChange(value){
  	this.setState(Object.assign({},this.state,{value:value}));
  }

  render() {  		  					  
      return (        
        <div>        	
         	 
          <button className="btn btn-default" onClick={this.onClick.bind(this)}>Reset Selected Value</button>
        	<CascadeSelect data={CASCADE_DATA_LOCATION_CITY} selectedValue={this.state.value} onChange={this.onChange.bind(this)} />                        
        	<GridForm />
        </div>
    );          
  }
}

export default connect(null,{ })(LookupPage); 