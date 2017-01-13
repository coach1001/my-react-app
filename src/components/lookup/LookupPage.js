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
        	<div className="row">
        		<div className="col-md-4">
        		<button className="btn btn-primary" onClick={this.onClick.bind(this)}>Reset Selected Value</button>
        		</div>
        	</div>
        	<br></br>
        	<div className="col-md-4">
        	<CascadeSelect data={CASCADE_DATA_LOCATION_PROVINCE} selectedValue={this.state.value} onChange={this.onChange.bind(this)} />                        					        	
        	</div>
        	<div className="col-md-12">
        		<GridForm />
        	</div>
        	<div className="col-md-2">
        		<Datetime timeFormat="HH:mm" dateFormat="YYYY-MM-DD" defaultValue={new Date()}/>
        	</div>
        	
        	<div className="col-md-2">
        		<Datetime timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={new Date()}/>
        	</div>

        	<div className="col-md-2">
        		<Datetime timeFormat="HH:mm" dateFormat={false} defaultValue={new Date()}/>
        	</div>

        	
        </div>
    );          
  }
}

export default connect(null,{ })(LookupPage); 