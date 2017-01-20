import React, {Component} from 'react';

export default class MultiSelect extends Component {

	componentWillMount(){
		let options = [
			{value: 0, label: 'Zero' },
			{value: 3, label: 'Three' },
			{value: 4, label: 'Four' },
		];

		let selected = [
			{value: 1, label: 'One' },
			{value: 2, label: 'Two' },
		];

		this.setState({
			options: options,			
			selected: selected,			
			oOptions: options,
			oSelected: selected			
		});
	}

	onClick(item,e){
		e.preventDefault();		
		const oState = this.state;
						
		if(item.type === 'selection'){
			oState.selected.splice(item.index,1);
			oState.options.push(item);
		}else if(item.type === 'option') {
			oState.options.splice(item.index,1);
			oState.selected.push(item);					
		}

		this.setState(oState);
	}

  render() {    
    const {options, selected} = this.state;    

    return (
    	<div className="container-fluid">    		
    		<div className="row col-md-offset-2">	    		
	    		<div className="col-md-4">
		    		
						<div className="panel panel-default">
						  <div className="panel-heading">
						    <h3 className="panel-title">Available Forms</h3>
						  </div>
						  <div className="panel-body" style={{ maxHeight: '300px', minHeight: '300px', overflowY:'scroll'}}>						    
				    		<ul className="list-group">
				    			{
				    				options.map ( (select, index) => { 
				    				select.type='option'
				    				select.index=index
				    					return <li key={index} onClick={this.onClick.bind(this,select)} className="list-group-item">{select.label}</li> })
				    			}
								</ul>
						  </div>
						</div>
	    		
	    		</div>	

	    		<div className="col-md-4">
						<div className="panel panel-default">
						  <div className="panel-heading">
						    <h3 className="panel-title">Forms Selected</h3>
						  </div>
						  <div className="panel-body" style={{ maxHeight: '300px', minHeight: '300px', overflowY:'scroll'}}>						    
				    		<ul className="list-group">
				    		<ul className="list-group">
				    			{
				    				selected.map ( (select, index) => {
				    					select.type ='selection'
				    					select.index=index
				    					return <li key={index} onClick={this.onClick.bind(this,select)} className="list-group-item">{select.label}</li> })
				    			}
								</ul>
								</ul>
						  </div>
						</div>	    		
	    		</div>    		

    		</div>    	
    	</div>
    );
  }
}
