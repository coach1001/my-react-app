import React from 'react';
import * as FORMS_DATA from './constants/gridFormConstants';
import math from 'mathjs';
import { sendRow } from '../../actions/tablesData';

class GridForm extends React.Component {
  
  componentWillMount(){    
    const title = this.props.scopeData.data[0].form_name;
    const sample_number = this.props.scopeData.data[0].sample_identifier;
    
    this.parseInput(this.props);

    this.setState({
      scopeData: this.props.scopeData,
      title: title,
      sample_number: sample_number,    
    })

  }

  drawTable(){
    const formName = this.props.scopeData.data[0].form_name.replaceAll(' ','_').toUpperCase();
    const data = this.state.scopeData.data;
    const table = FORMS_DATA[formName];    
    
    table.map( (row, rI) => {
      row.td.map( (col, cI) => {        
        data.map( (d, dI) =>{
          if(d.token === col.scopeVariable){
            table[rI].td[cI].value = d.value ? d.value : 0;                      
          }
          return d;
        })
        return col;
      })
      return row;
    })

    return <div>
  <button className="hidden-print btn btn-lg btn-default btn-block" onClick={this.goBack.bind(this)}>Back</button>
    <h3 style={{textAlign:'center'}}>{this.state.sample_number} </h3>
    <h4 style={{textAlign:'center'}}>{this.state.title}</h4>
    <br/>

    <table className="table-bordered" width="100%">
              
              <tbody>
              {
                table.map( (tr, trIndex) =>
                  <tr key={trIndex} style={tr.style}>
                  {
                    tr.td.map( (td, tdIndex) =>
                      {
                       return !td.isInput ? <td key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>{td.value}</td> :
                       <td key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>
                       {
                        td.isCalculated ? <input  id={td.scopeVariable} onChange={this.onChange.bind(this)} type='number' value={td.value} readOnly className='form-control' style={td.style}/> : <input id={td.scopeVariable} onChange={this.onChange.bind(this)} value={td.value} type='number' className='form-control' style={td.style}/>
                       }                        
                       </td>
                      } 
                    )
                  }
                  </tr>
                )
              }
              </tbody>
           </table>  
           <br/>    
           <button className="hidden-print btn-block btn btn-lg btn-primary" onClick={this.CalculateAndSave.bind(this)}>Calculate and Save</button>
           </div>
  }
  
  goBack(){
    this.context.router.goBack();
  }

  saveData(oState){    
    
    console.log(oState.scopeData.data);

    oState.scopeData.data.map( (row, rI) => {      
      if(row.id && row.type !== 'constant'){
        
        sendRow(`sample_has_values?id=eq.${row.id}`,{value: row.value},'patch');
        
      }else if(row.type !== 'constant'){

        sendRow(`sample_has_values`,{          
          sample: row.sample_id,
          variable: row.variable_id,
          value: row.value
        },'post').then( (res) =>{          
          row.id = res.data.id;
        });

      }
      return row;
    })    
    this.setState(oState);
  }

  parseInput(oState){
    let scope = {};    

    oState.scopeData.data.map( (d) => {      
      try{        
        scope[d.token] = parseFloat(d.value,10).toFixed(2);
        if(isNaN(scope[d.token])){
          scope[d.token] = 0;
        }
      }catch(err){
        scope[d.token] = 0;
      }      
      return d;
    });    
    oState.scopeData.data.map ( (d) =>{      
      if(d.type === 'calculation'){
        try{
          scope[d.token]=math.eval(d.formula,scope).toFixed(2);                
        }catch(err){
          scope[d.token]= 0;                
        }        
      }      
      return d;
    });    

    oState.scopeData.data.map( (d,index)=>{      
      oState.scopeData.data[index].value = scope[d.token];
      return d;
    });        
    this.saveData(oState);
  }
  
  CalculateAndSave(e){
    e.preventDefault();
    const oState = this.state;
    this.parseInput(oState);        
  }

  onChange(e){
    e.preventDefault();    
    const oState = this.state;

    let index=0;
    let scopeData_ = {};
    

    this.state.scopeData.data.map( (d, index_) =>{
      if(e.target.id === d.token ){
        index = index_;
      }
      return d;
    });

    scopeData_ = this.state.scopeData.data[index];
    scopeData_.value = e.target.value;
    
    oState.scopeData.data[index] = scopeData_;
    this.setState(oState);

  }  
  render() {                          
      return <div> {this.props.scopeData ? this.drawTable() : null} </div>                    
  }
}

GridForm.propTypes = {
  scopeData: React.PropTypes.object,
  postRow: React.PropTypes.func,  
}

GridForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}


export default GridForm;