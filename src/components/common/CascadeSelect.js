import React, { Component } from 'react';

class CascadeSelect extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		select : {  			  		
  			selectedValues: [],
  			selectedValue: null,
  			dataArray: [  				
  				{  					
  						placeholder: 'Province',
  						field: 'province',
  						options: [
  							{ value: 1, display: 'Gauteng'},
  							{ value: 2, display: 'Western Cape'},
  							{ value: 3, display: 'Limpopo'}
  						]
  				},
  				{
  						placeholder: 'City',
  						field: 'city',  						
  						options: [
  						
  							{ value: 1, display: 'Pretoria', filter: 1 },
  							{ value: 2, display: 'Johannesburg', filter: 1 },  						
  						
  							{ value: 3, display: 'Cape Town', filter: 2 },
  							{ value: 4, display: 'Stellenbosch', filter: 2 },

  							{ value: 5, display: 'Polokwane', filter: 3}
  						]
  				},
  				{
  						placeholder: 'Suburb',
  						field: 'suburb',  						
  						options: [
  						
  							{ value: 1, display: 'Pretoria Gardens', filter: 1},
  							{	value: 2, display: 'Brooklyn', filter: 1},
  							{ value: 3, display: 'Eersterust', filter: 1},

  							{ value: 4, display: 'Soweto', filter: 2},
  							{ value: 5, display: 'Braamfontein', filter: 2},
  							{ value: 6, display: 'Fordsburg', filter: 2},
	 							{	value: 7, display: 'Sandton', filter: 2},

								{ value: 8, display: 'Botriver', filter: 3},
  							{ value: 9, display: 'Micthels Plain', filter: 3},
  						  						
								{ value: 10, display: 'Stellenbosch University', filter: 4}  						  						  						
  						]
  				}
  			]
  		}
  	}
  	this.onChange = this.onChange.bind(this);
  }

  onChange(e){
  	e.preventDefault();
  	let oState = this.state;
  	let hasUpdated = false;

  	for(var i = 0; i < this.state.select.dataArray.length; i++){  		
  		if(hasUpdated){
  			oState.select.selectedValues[i] = 0;
  		}
  		if(e.target.id === this.state.select.dataArray[i].field){  			
  			oState.select.selectedValues[i] = parseInt(e.target.value,10);  			  		  			  			
  			hasUpdated = true;
  		}  		
  	}
  	this.setState( Object({},this.state,oState));
  }

  getSelects(){
  	const select = this.state.select;  	
  	let selectsDivs = []

  	selectsDivs.push(select.dataArray.map( (dataRow, index, array) => {
  		 return	<div className="form-group">
  				<label htmlFor={dataRow.field}>Select {dataRow.placeholder}</label>
  				<select className="form-control" id={dataRow.field} onChange={this.onChange} value={select.selectedValues[index]}>  					
  					<option value="" >Choose {dataRow.placeholder}</option>
  					
  					{  							  					
  						index === 0 ? dataRow.options.map( (option, index_, array_) => {							
  							return <option key={index_} value={option.value}>{option.display}</option> }
  						) : 
  							dataRow.options.filter( (el) => {  							  							
  							if(el.filter === select.selectedValues[index - 1]){  								
  								return el;		
  							}else {
  								return null;
  							}

  						}).map( (option, index_, array_) => {
  							return <option key={index_} value={option.value}>{option.display}</option> 
  						})

  					}  	

  				</select>
				</div>					  		
  	}));
  	  	
  	return selectsDivs;
  }
  
  render() {
    
    const selects = this.getSelects();
    
    return (
    	<div>
   			{selects}
   		</div>	
    );
  }
}

export default CascadeSelect;