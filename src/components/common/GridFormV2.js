import React from 'react';
import {methods} from './constants/gridFormConstants';
import math from 'mathjs';
import { sendRow } from '../../actions/tablesData';
import { fetchSampleMethod, updateSampleMethod } from '../../actions/sampleMethods';
import Confirm from 'react-confirm-bootstrap';
import Datetime from 'react-datetime';
import moment from 'moment';
/*import TeX from 'react-formula-beautifier';*/
//import { Line, VictoryArea, VictoryTooltip, VictoryLabel, VictoryChart, VictoryAxis } from 'victory';
import {Line} from 'react-chartjs-2';

class GridForm extends React.Component {
  
  componentWillMount(){                      
    const index = methods.findIndex( (element) => {    
    if(element.code === this.props.methodCode){
        return element;
      }else{
        return null;
      }
    });
    const hasGraph = methods[index].hasGraph; 
    const method = methods[index];
    const graph = methods[index].graph;

    const table = method.grid;
    const colLayout = method.colLayout;    
    let oScopeData = JSON.parse(JSON.stringify(this.props.scopeData));

    this.setState({
      oScopeData: oScopeData,
      scopeData: this.props.scopeData,
      table : table,
      method: method,
      sampleMethod: this.props.sampleMethod,
      colLayout: colLayout,
      hasGraph: hasGraph,
      graph: graph,
      
    })            
  }

  onChangeComplete(e){
    let oState = this.state;
    oState.sampleMethod.completed = !oState.sampleMethod.completed;
    this.setState(oState);
  }

  drawTable(){  

    let maxY = [];

    const graph = this.state.graph;
    const data = this.state.scopeData;    
    const table = this.state.table;    
    const col = this.state.colLayout;
    const em = this.props.empty;
    const eg = this.state.hasGraph;

    let tempMax;

    if(eg){

    graph.map( (g) => {
      tempMax=0;
      g.dataSets.map( (ds) => {
              ds.data.map( (dt) => {                 
                data.map( (sd) =>{          
                  if(sd.symbol === dt.sx ){
                    if(sd.value){
                     if(!em){
                      dt.x = sd.value;
                     }                     
                    }                 
                  }
                  if(sd.symbol === dt.sy){
                    if(sd.value){
                      if(!em){
                        dt.y = sd.value;  
                      }
                        
                      if(sd.value > tempMax)
                      {
                        tempMax=sd.value;
                      }
                    }            
                  }          
                  return sd;          
                })        
              return dt;        
              });        
              return ds;      
            });
      tempMax += g.addMaxY
      tempMax = Math.round(tempMax/g.stepSizeDiv)*g.stepSizeDiv;  
      maxY.push(tempMax);
      return g;
     })          
    }


    table.map( (row, rI) => {
      row.td.map( (col, cI) => {        
        data.map( (d, dI) =>{
          if(d.symbol === col.scopeVariable){              

                if(d.unit === 'string'){
                  table[rI].td[cI].value_string = d.value_string ? d.value_string : ( d.default_value ? d.default_value : '');  
                }else{
                  table[rI].td[cI].value = d.value ? d.value : ( d.default_value ? d.default_value : undefined);  
                }

              table[rI].td[cI].unit = d.unit ? d.unit : undefined;
              table[rI].td[cI].min = d.minimum ? d.minimum : undefined;
              table[rI].td[cI].max = d.maximum ? d.maximum : undefined;     
              table[rI].td[cI].step = d.step ? d.step : 0.01;
              table[rI].td[cI].type = d.input_type ? d.input_type : undefined;
          }
          return d;
        })
        return col;
      })
      return row;
    })
            
    return <div>
      {
        em ? null :
        <div className="input-group checkbox">     
          <label style={{fontSize: '1.3em', fontWeight:'normal'}}><input name="completed" type="checkbox" onChange={this.onChangeComplete.bind(this)} checked={this.state.sampleMethod.completed} />&nbsp;Completed</label>                                
          
        </div>    
      }
            <Confirm  onConfirm={this.clearValues.bind(this)} body="Are you sure you want to Clear Data?" confirmBSStyle='danger' confirmText="Confirm Clear" title="Clear Data">  
              <button className="btn btn-default hidden-print">Clear Values</button>
            </Confirm>
            <br className="hidden-print"/><br className="hidden-print"/>
            <table className="table-bordered fixed" width="100%" >              
              <colgroup>
                {
                  col.map( (c,i) => { return <col key={i} span={c.span} style={{width: c.width}}></col>} )                
                }               
              </colgroup>
              <tbody>
              {                                  
                           
                  table.map( (tr, trIndex) =>                                                          
                      <tr key={trIndex} style={tr.style}>
                      
                      {
                        tr.td.map( (td, tdIndex) =>
                          {
                           return !td.isVal ? <td key={tdIndex}  colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>{td.label}</td> :
                           <td key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>
                           <div className="avoid">
                           {
                            td.type === 'calc' ?                                                                                                                                                        
                                
                                (td.unit === 'datetime' ?                                  
                                  <Datetime ref={td.scopeVariable} utc={true} id={td.scopeVariable} inputProps={{disabled: true}}  timeFormat="HH:mm:ss" dateFormat={false} value={em ? '' : Math.floor(td.value)} />                                                                                                
                                
                                :
                                  <div className="input-group">
                                  <input ref={td.scopeVariable} id={td.scopeVariable} onChange={this.onChange.bind(this)}  step={td.step} type='number' value={em ? '' : td.value} readOnly className='form-control' style={td.style}/>                                                              
                                  <span className="input-group-addon">                                                                    
                                    <div style={{fontSize: '12px'}} dangerouslySetInnerHTML={{__html: td.unit}} />
                                  </span>
                                  </div>)                              
                                                                                                                            
                            :                  
                               
                                td.unit === 'string' ?                                
                                 <input ref={td.scopeVariable} id={td.scopeVariable} onChange={this.onChangeString.bind(this)} value={em ? '' : td.value_string} type='text' className='form-control' style={td.style}/>                                
                                : 
                                
                                  td.unit === 'datetime' ?                                                                        
                                  <Datetime ref={td.scopeVariable} utc={true} id={td.scopeVariable} timeFormat="HH:mm:ss" dateFormat="DD/MM/YYYY" onChange={this.onChangeTime.bind(this,td.scopeVariable)} value={em ? '' : Math.floor(td.value)} />
                                  :                                  
                                  <div className="input-group"><input ref={td.scopeVariable} id={td.scopeVariable} onChange={this.onChange.bind(this)} min={td.min} max={td.max} step={td.step} value={em ? '' : td.value} type='number' className='form-control' style={td.style}/><span className="input-group-addon"><div style={{fontSize: '12px'}} dangerouslySetInnerHTML={{__html: td.unit}} /></span></div>                                
                               
                           }                        
                           </div>
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
        
            {
              em ? null :
              <Confirm  onConfirm={this.CalculateAndSave.bind(this)} body="Are you sure you want to Save Data?" confirmBSStyle='primary' confirmText="Confirm Save" title="Save Method Data">  
                <button className="hidden-print btn-block btn btn-lg btn-success">Calculate and Save</button>            
              </Confirm>
            }         
            
            {
              
              graph.map( (g,i) => {
                return this.state.hasGraph ? <div><Line key={i} redraw={true} 
                  data={{ datasets: g.dataSets }}
                  options={{                                                   
                      scales: {                          
                          xAxes: [{
                              scaleLabel:{
                                display: true,
                                labelString: g.xLabel
                              },
                              type: g.scale.x,
                              position: 'bottom',
                              ticks: g.xAxis
                          }],

                          yAxes: [{                              
                              scaleLabel:{
                                display: true,
                                labelString: g.yLabel,
                              },
                              type: g.scale.y,                              
                              ticks: {                                  
                                max: maxY[i],                                                              
                                stepSize: Math.round((maxY[i]/g.divisor)/g.stepSizeDiv)*g.stepSizeDiv,
                                callback: g.yAxis.callback
                              }
                          }]

                      }
                  }}
               /><br/><br/></div> : null              
              })            
            }
                   
           </div>   
  }
  
  clearValues(){
    const oState = this.state;       

    oState.table.map( (row, rI) => {
      row.td.map( (col, cI) => {        
        oState.scopeData.map( (d, dI) =>{
          if(d.symbol === col.scopeVariable){
            this.refs[d.symbol].value=undefined;
            oState.table[rI].td[cI].value = 0.0;
            oState.table[rI].td[cI].value_string = '';
            oState.scopeData[dI].value = 0.0;
            oState.scopeData[dI].value_string = '';
          }
          return d;
        })
        return col;
      })
      return row;
    })
    
    this.saveData(oState);        
  }

  onChangeTime(symbol,e){
    const oState = this.state;    
    
    oState.scopeData.map( (d, index_) =>{
      if(symbol === d.symbol ){
        oState.scopeData[index_].value = e.valueOf();                
      }
      return d;
    });

    this.setState(oState);
  }

  goBack(){
    this.context.router.goBack();
  }

  saveData(oState){                
    
    oState.scopeData.map( (row, rI) => {          
  
      if(row.id && row.input_type !== 'constant'){        
        if(row.unit === 'string'){          
          if(row.value_string !== this.state.oScopeData[rI].value_string){
            
            sendRow(`sample_has_variables?id=eq.${row.id}`,{value_string: row.value_string},'patch');
          }          
        
        }else{
          if(row.value !== this.state.oScopeData[rI].value){
            
            sendRow(`sample_has_variables?id=eq.${row.id}`,{value: row.value},'patch');
          }
        }                      
      }else if(row.type !== 'constant'){
        if(row.unit === 'string'){
          
          sendRow('sample_has_variables',{sample: this.props.sampleId,variable: row.variable_id,value_string: row.value_string},'post').then( (res) =>{row.id = res.data.id;});        
        }else{          
          
          sendRow('sample_has_variables',{sample: this.props.sampleId,variable: row.variable_id,value: row.value},'post').then( (res) =>{row.id = res.data.id;} );
        }                
      }      
      return row;    
    })     
    sendRow(`sample_has_methods?id=eq.${this.state.sampleMethod.id}`,{completed: this.state.sampleMethod.completed},'patch')
        
    oState.oScopeData = JSON.parse(JSON.stringify(this.props.scopeData));
    this.setState(oState);
    
  }

  parseInput(oState){
    let scope = {};        
    
    oState.scopeData.map( (d) => {          
        if(d.unit !== 'string'){
          let round = d.step*10000;
          if(round){}else{ round = 100; }
          if(d.input_type === 'in'){
            try{        
                scope[d.symbol] = Math.round(parseFloat(d.value,10)*round)/round;
                if(isNaN(scope[d.symbol])){                
                  scope[d.symbol] = ( d.default_value ? d.default_value : 0);
                }
              }catch(err){
                scope[d.symbol] = ( d.default_value ? d.default_value : 0);
              }      
            }
          }
          else{
            scope[d.symbol] = d.value;
          }
      return d;    
    });    

    oState.scopeData.map ( (d) =>{      
      let round = d.step*10000;
      if(d.unit !== 'string'){      
       
        if(round){}else{ round = 100; }
        
        if(d.input_type === 'calc'){                
          try{        
            scope[d.symbol]=Math.round(math.eval(d.formula,scope)*round)/round;               
          }catch(err){                     
           console.log(err);
           scope[d.symbol] = ( d.default_value ? d.default_value : 0);
          }        
        }      
        
        if(isFinite(scope[d.symbol])){
        }else{        
          scope[d.symbol] = ( d.default_value ? d.default_value : 0);
        }

        if(isNaN(scope[d.symbol])){        
          scope[d.symbol] = ( d.default_value ? d.default_value : 0);
        }
      }

      return d;
    });    

    oState.scopeData.map( (d,index)=>{      
      oState.scopeData[index].value = scope[d.symbol];
      return d;
    });
    
    this.saveData(oState);
  }
  
  CalculateAndSave(e){    
    
    let oState = this.state;
    
    this.parseInput(oState);        
  }
  
  onChangeString(e){
    e.preventDefault();
    let oState = this.state;        
    
    oState.scopeData.map( (d, index_) =>{
      
      if(e.target.id === d.symbol ){
        oState.scopeData[index_].value_string = e.target.value;                       
      }
      return d;
    });
    
    this.setState(oState); 
  }

  onChange(e){
    e.preventDefault();    
    const oState = this.state;

    let index=0;
    let scopeData_ = {};
    
    this.state.scopeData.map( (d, index_) =>{
      if(e.target.id === d.symbol ){
        index = index_;
      }
      return d;
    });
    let round = this.state.scopeData[index].step*10000;
    
    if(round){}else{ round = 100; }
    scopeData_ = this.state.scopeData[index];
    scopeData_.value = Math.round(e.target.value*100)/100;        

    oState.scopeData[index] = scopeData_;
    this.setState(oState);
  }

  render() {                          
      return <div> 
      {this.state.scopeData ? this.drawTable() : null} 
    </div>                    
  }
}

GridForm.propTypes = {
  scopeData: React.PropTypes.array.isRequired,
  methodCode: React.PropTypes.string.isRequired,
  sampleId: React.PropTypes.number.isRequired,
  sampleMethod: React.PropTypes.object.isRequired,  
  empty: React.PropTypes.bool.isRequired,  
}

GridForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}


export default GridForm;