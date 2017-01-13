import React from 'react';
import CascadeSelect from '../common/CascadeSelect';
import GridForm from '../common/GridForm';
import { CASCADE_DATA_LOCATION_PROVINCE } from '../common/constants/constants';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';


class LookupPage extends React.Component {

	onClick(e){
		this.setState(Object.assign({},this.state,{value:4}));
	}
	
	componentWillMount(){	
		this.setState(Object.assign({},this.state,{value:4}));
	}
  
  onChange(value){
  	this.setState(Object.assign({},this.state,{value:value}));
  }

  render() {  		  					  
      return (        
        <div>        	         	          
        	
        	<button className="btn btn-default" onClick={this.onClick.bind(this)}>Reset Selected Value</button>
        	
        	<CascadeSelect data={CASCADE_DATA_LOCATION_PROVINCE} selectedValue={this.state.value} onChange={this.onChange.bind(this)} />                        					        	
        	<GridForm />
        	<div className="col-md-2 nopadding">
        		<Datetime />
        	</div>

        	
        </div>
    );          
  }
}

export default connect(null,{ })(LookupPage); 