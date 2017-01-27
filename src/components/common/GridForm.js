import React from 'react';
import * as FORMS_DATA from './constants/gridFormConstants';
import math from 'mathjs';
import { sendRow } from '../../actions/tablesData';

class GridForm extends React.Component {
  
  componentWillMount(){            
    this.setState({
      scopeData: this.props.scopeData,
    })

  }

  drawTable(){
    const formName = this.props.form.name.replaceAll(' ','_').toUpperCase();    
    const data = this.state.scopeData.data;
    //const table = FORMS_DATA[formName];    
    const table = FORMS_DATA['TEST_2'];

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
  <button className="hidden-print btn btn-lg btn-info" onClick={this.goBack.bind(this)}>Back</button>
    <br/><br/>
    <div className="table-bordered" style={{ padding: "15px" ,overflowY: "scroll", height:"70vh"}}>  
    <h2 style={{textAlign:'center'}}><strong>{this.props.form.name}</strong></h2>
    <h4 style={{textAlign:'center'}}>{this.props.sample.identifier} </h4>
    
    <br/>          
            <table className="table-bordered fixed" width="95%" >              
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
           </div>
           <br/>    
           
           <button className="hidden-print btn-block btn btn-lg btn-success" onClick={this.CalculateAndSave.bind(this)}>Calculate and Save</button>
          
    </div>
  }
  
  goBack(){
    this.context.router.goBack();
  }

  saveData(oState){    
        
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
      return <div> {this.state.scopeData ? this.drawTable() : null} </div>                    
  }
}

GridForm.propTypes = {
  scopeData: React.PropTypes.object.isRequired,
  form: React.PropTypes.object.isRequired,
  sample: React.PropTypes.object.isRequired,  
}

GridForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}


export default GridForm;