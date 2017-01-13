import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSelectsNoDispatch, parseCascadeReponses } from '../../actions/cascadeSelect';
import isEmpty from 'lodash/isEmpty';

class CascadeSelect extends Component {
  
  componentWillMount(){    
    this.setState( Object.assign({},this.state,{ data : {} } ) );    

    this.props.fetchSelectsNoDispatch(this.props.data).then( (responses) => {      
      const data = parseCascadeReponses(responses);
      if(this.props.selectedValue){
        data.selectedValue = this.props.selectedValue;
      }                       
      this.setState ( Object.assign({},this.state,{data} ));                  
    });  
  }
  
  componentWillReceiveProps(nextProps){              
    const oState = this.state;
    
    if(this.state.data.selectedValue !== nextProps.selectedValue){      
      oState.data.selectedValues = [];
      oState.data.selectedValue = nextProps.selectedValue;
      this.setState ( Object.assign({},this.state,oState ));
    }else{
      oState.data.selectedValues = [];
      this.setState ( Object.assign({},this.state,oState ));    
    }
  }
  
  onChange(e){
    e.preventDefault();
    
    const oState = this.state;
    const selectCount = oState.data.dataArray.length;
    let hasUpdated = false;
        
    for(let i = 0; i < selectCount ; i++){          
        
        if(hasUpdated){
          oState.data.selectedValues[i] = 0;
        }

       if(e.target.id === oState.data.dataArray[i].field){                  
    
        if( i === selectCount - 1 ){          
          oState.data.selectedValue = parseInt(e.target.value,10);
          oState.data.selectedValues = [];
          this.props.onChange(oState.data.selectedValue);          
        }else{
          oState.data.selectedValues[i] = parseInt(e.target.value,10);
          hasUpdated = true;
          oState.data.selectedValue = null;
        }            
      }                       
    }     
    this.setState( Object({},this.state,oState));
  }

  getSelects(selectedValue){          
      const select = this.state.data;           
      const selectCount = this.state.data.dataArray.length - 1;
      let selectsDivs = [];

      if(select.selectedValue){       
        select.selectedValues.splice(selectCount,0,select.selectedValue);        
        if(selectCount){          
          for(let i=selectCount;i >= 0;i--){
            if(i !== selectCount){

              let optionsCount = select.dataArray[i+1].options.length;              

              for(let j=0;j<optionsCount;j++){
                if(select.dataArray[i+1].options[j].value === select.selectedValues[0]){
                  select.selectedValues.unshift(select.dataArray[i+1].options[j].filter);
                  break;
                }
              }
            }            
          }
        }      
      }

      selectsDivs.push(select.dataArray.map( (dataRow, index, array) => {
         return <div className="form-group">         
            <label htmlFor={dataRow.field}>Select {dataRow.placeholder}</label>            
            <select className="form-control" id={dataRow.field} name={dataRow.field} onChange={this.onChange.bind(this)} value={select.selectedValues[index]}>            
              <option value="" >Choose {dataRow.placeholder}...</option>              
              {                           
                index === 0 ? dataRow.options.map( (option, index_, array_) => {              
                  return <option key={index_} value={option.value}>{option.label.toLowerCase().capitalize()}</option> }
                ) : 
                  dataRow.options.filter( (el) => {                               
                  if(el.filter === select.selectedValues[index - 1]){                 
                    return el;    
                  }else {
                    return null;
                  }

                }).map( (option, index_, array_) => {
                  return <option key={index_} value={option.value}>{option.label.toLowerCase().capitalize()}</option> 
                })
              }   
            </select>            
          </div>
      }));      
      return selectsDivs;    
  }
  
  render() {        
    if(!isEmpty(this.state.data)){
      const selects = this.getSelects(this.props.selectedValue);     
      return (
        <div>          
          {selects}
        </div>  
      );
    }else{
      return null;
    }    
  }
}

CascadeSelect.propTypes = {
  data : React.PropTypes.array.isRequired,
  fetchSelectsNoDispatch : React.PropTypes.func.isRequired,
  parseCascadeReponses : React.PropTypes.func.isRequired,  
  onChange: React.PropTypes.func.isRequired
}

export default connect(null,{ data : [], selectedValue : null , parseCascadeReponses, fetchSelectsNoDispatch , onChange : null })(CascadeSelect);