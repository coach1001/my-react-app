import React from 'react';
import { methods } from './constants/gridFormConstants';
import math from 'mathjs';
import { sendRow } from '../../actions/tablesData';
import Confirm from 'react-confirm-bootstrap';
import Datetime from 'react-datetime';
import sortBy from 'lodash/sortBy';
import cloneDeep from 'lodash/cloneDeep';
import regression from 'regression';
import {Line} from 'react-chartjs-2';

/*function linearRegression(d){
  let data = cloneDeep(d);
  let dataT = [];
  
  console.log(d);

  data.map( (point) =>{
    let set = [];
    set.push(point.x);
    set.push(point.y);
    dataT.push(set);
  })
  

  var result = regression('linear',dataT);  
  return result;
}*/


class GridForm extends React.Component {
  
  constructor(props){
    super(props);
    this.dataAddCallBack = this.dataAddCallBack.bind(this);
  }

  componentWillMount(){
    let index=0;

    for(let i=0;i<methods.length;i++){
      if(methods[i].code === this.props.methodCode){
        index = i;
      }    
    }

    let method = cloneDeep(methods[index]);
    let oScopeData = cloneDeep(this.props.scopeData);
    let scopeData = cloneDeep(this.props.scopeData);
    let sampleMethod = cloneDeep(this.props.sampleMethod);

    this.setState({      
      dataAdded: true,
      oScopeData: oScopeData,
      scopeData: scopeData,
      method: method,
      sampleMethod: sampleMethod,            
      isEmpty: this.props.empty,          
      maxY: [],
      redraw: false,      
    })                
  }

  onChangeComplete(e){
    let sampleMethod = cloneDeep(this.state.sampleMethod);
    sampleMethod.completed = !sampleMethod.completed;
    this.setState({sampleMethod : sampleMethod});
  }
  

  drawTable(){  

    let method = cloneDeep(this.state.method);
    let scopeData = cloneDeep(this.state.scopeData);
    
    let tempMax = 0;
    let maxY = [];

    if(method.hasGraph && !this.props.empty){            
      method.graph.map((g) => {
        tempMax=0;        
        g.dataSets.map((ds) => {                
          ds.data.map((dt) => {                 
            
            scopeData.map((sd) =>{                                                  
              if(sd.symbol === dt.sx ){
                if(sd.value){
                  
                  if(dt.toggleLine){
                    ds.showLine = true;
                  }
                  if(dt.x !== sd.value){
                    dt.x = sd.value;
                  }
                }                                     
              }
              if(sd.symbol === dt.sy){
                if(sd.value){
                   if(dt.y !== sd.value){
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

            if(dt.y > tempMax){
              tempMax= dt.y;
            }

          return dt;                    
          });        
          return ds;      
        });
        tempMax += g.addMaxY
        tempMax = Math.round(tempMax/g.roundOff)*g.roundOff;          
        maxY.push(tempMax);
        return g;      
      })              
      method.graph[0].options.dataAddCallBack = this.dataAddCallBack;    
    }
    

    if(method.hasGraph){      
      method.graph.map( (g, gi) =>{
        g.dataSets.map( (ds, dsi) =>{        
          ds.data = sortBy(ds.data,'x');                        
          return ds;    
        })
        return g;
      });    
      
      method.graph.map( (g,gi) =>{
        g.options.scales.yAxes[0].ticks.max = maxY[gi];
        return g;
      });
      
      
      /*var eq = linearRegression(method.graph[0].dataSets[0].data);                  
      console.log(eq);
      var data = [];      
      method.graph[0].dataSets[0].data.map( (d) =>{
        let y = eq.equation[0]*d.x+eq.equation[1];
        data.push({x: d.x, y: y } );
        return d;
      });      
      method.graph[0].dataSets.push({fill:false,borderColor:'rgba(0,0,255,0.2)',data: data});*/
    }
      
    var arrayIndex = 0;

    method.grid.map( (row,rI)=>{
      if(row.isArray) arrayIndex = rI;
      return row;        
    })
    
    var valArray =  [];
    var rowObj = {};
    var tdArray = [];
    var newRows = [];
    var sum = 0;

    if(arrayIndex){
      
      rowObj = cloneDeep(method.grid[arrayIndex]);
      tdArray = cloneDeep(method.grid[arrayIndex].td);

      scopeData.map( (d) =>{
        if(d.symbol === rowObj.scopeVariable){
          valArray = d.value_string.split(',');            
          valArray = valArray.map( (val) =>{
            return parseFloat(val);
          })                                
        }
        return d;
      })                      
    
      valArray.map( (val,vI)=>{
        sum += val;
        
        var temp = cloneDeep(tdArray);
        var temptd = [];

        temp.map( (c,cI)=>{        
          c.isArrayVal = true;
          c.arrayIndex = vI;          
          if(c.arrayVal === 'index') c.value = vI+1;
          if(c.arrayVal === 'value') c.value = val;
          if(c.arrayVal === 'average') c.value = +(sum/(vI+1)).toFixed(1);
          return c;
        })
        temptd.push(temp);
        newRows.push({td: temp});
        return val;        
      });          
      method.grid.splice(arrayIndex,1);      
      newRows.map((row,rI)=>{
        method.grid.splice(arrayIndex+rI,0,row);
      })
    }
    console.log(method.grid);
                  
    method.grid.map( (row, rI) => {
      
      row.td.map( (col, cI) => {        
        scopeData.map( (d, dI) =>{          
          if(d.symbol === col.scopeVariable){              
              if(d.unit === 'string'){
                col.value_string = d.value_string ? d.value_string : ( d.default_value ? d.default_value : '');                  
              }else{
                col.value = d.value ? d.value : ( d.default_value ? d.default_value : undefined);  
              }
              col.unit = d.unit ? d.unit : undefined;
              col.min = d.minimum ? d.minimum : undefined;
              col.max = d.maximum ? d.maximum : undefined;     
              col.step = d.step ? d.step : 0.01;
              col.type = d.input_type ? d.input_type : undefined;
          }        
          return d;
        })
        return col;
      })
                  
      return row;
    })
    
    console.log(method.grid.length);  
    
    return <div>
      {
        this.props.empty ? null :
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
                  method.colLayout.map( (c,i) => { return <col key={i} span={c.span} style={{width: c.width}}></col>} )                
                }               
              </colgroup>
              <tbody>
              {                                  
                           
                  method.grid.map( (tr, trIndex) =>                                                          
                      <tr key={trIndex} style={tr.style}>
                      
                      {
                        tr.td.map( (td, tdIndex) =>
                          {
                           return !td.isVal ? <td key={tdIndex}  colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>{td.label}</td> :
                           <td key={tdIndex} colSpan={td.colSpan} height={td.height} rowSpan={td.rowSpan} width={td.width} style={td.style}>
                           <div className="avoid">
                           {                              
                              td.isArrayVal ? console.log(td)
                              :
                                td.type === 'calc' ?//IS CALC                                                                                                                                                      
                                    
                                    (td.unit === 'datetime' ? 
                                      <Datetime ref={td.scopeVariable} utc={true} id={td.scopeVariable} inputProps={{disabled: true}}  timeFormat="HH:mm:ss" dateFormat={false} value={this.props.empty ? '' : Math.floor(td.value)} />                                                                                                
                                    
                                    : 
                                      <div className="input-group">
                                      <input ref={td.scopeVariable} id={td.scopeVariable} onChange={this.onChange.bind(this)}  step={td.step} type='number' value={this.props.empty ? '' : td.value} readOnly className='form-control' style={td.style}/>                                                              
                                      <span className="input-group-addon">                                                                    
                                        <div style={{fontSize: '12px'}} dangerouslySetInnerHTML={{__html: td.unit}} />
                                      </span>
                                      </div>)                              
                                                                                                                                
                                ://IS NOT CALC                  
                                   
                                    td.unit === 'string' ? //IS STRING                              
                                     <input ref={td.scopeVariable} id={td.scopeVariable} onChange={this.onChangeString.bind(this)} value={this.props.empty ? '' : td.value_string} type='text' className='form-control' style={td.style}/>
                                    : //IS NOT STRING
                                    
                                      td.unit === 'datetime' ?                                                                        
                                      <Datetime ref={td.scopeVariable} utc={true} id={td.scopeVariable} timeFormat="HH:mm:ss" dateFormat="DD/MM/YYYY" onChange={this.onChangeTime.bind(this,td.scopeVariable)} value={this.props.empty ? '' : Math.floor(td.value)} />
                                      :                                  
                                      <div className="input-group"><input ref={td.scopeVariable} id={td.scopeVariable} onChange={this.onChange.bind(this)} min={td.min} max={td.max} step={td.step} value={this.props.empty ? '' : td.value} type='number' className='form-control' style={td.style}/><span className="input-group-addon"><div style={{fontSize: '12px'}} dangerouslySetInnerHTML={{__html: td.unit}} /></span></div>
                               
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
              this.props.empty ? null :
              <Confirm  onConfirm={this.CalculateAndSave.bind(this)} body="Are you sure you want to Save Data?" confirmBSStyle='primary' confirmText="Confirm Save" title="Save Method Data">  
                <button className="hidden-print btn-block btn btn-lg btn-success">Calculate and Save</button>            
              </Confirm>
            }         
            
            {
              method.hasGraph && !this.props.empty ? method.graph.map( (g,i) => {                                                            
                    return <Line key={i} height={'200mm'} ref={`chart_${i}`} data={{ datasets: g.dataSets }} options={g.options} />
                    
                  })
               : null               
            }                               
           </div>   
  }
  
  clearValues(){
    let method = cloneDeep(this.state.method.grid);      
    let scopeData = cloneDeep(this.state.scopeData);

    method.map( (row, rI) => {
      row.td.map( (col, cI) => {        
        scopeData.map( (d, dI) =>{
          if(d.symbol === col.scopeVariable){
            this.refs[d.symbol].value=undefined;
            col.value = 0.0;
            col.value_string = '';
            d.value = 0.0;
            d.value_string = '';
          }
          return d;
        })
        return col;
      })
      return row;
    })

    
    this.saveData(scopeData);        
  }

  onChangeTime(symbol,e){
    let scopeData = cloneDeep(this.state.scopeData);

    scopeData.map( (d, index_) =>{
      if(symbol === d.symbol ){
        d.value = e.valueOf();                
      }
      return d;
    });    
    this.setState({scopeData: scopeData});
  }

  goBack(){
    this.context.router.goBack();
  }

  dataAddCallBack(data){

    let method = cloneDeep(this.state.method);
        
    if(this.state.dataAdded){        
      method.graph[0].dataSets[0].data = method.graph[0].dataSets[0].data.filter( (d) => { 
        if(!d.pop){
          return d
        }else{
         return null;
        }
      })
      method.graph[0].dataSets[0].data.push({x: data.x, y: data.y, pop: data.pop});
      method.graph[0].dataSets[0].showLine  = true;      
    }     
    this.setState( {method: method} );
  }

  saveData(scopeData){                
    let oScopeData = cloneDeep(this.state.oScopeData);    
    let index=0;

    for(let i=0;i<methods.length;i++){
      if(methods[i].code === this.props.methodCode){
        index = i;
      }    
    }

    let method = cloneDeep(methods[index]);

    scopeData.map( (row, rI) => {          
    
      if(row.id && row.input_type !== 'constant'){        
        if(row.unit === 'string'){          
          if(row.value_string !== oScopeData[rI].value_string){
            
            sendRow(`sample_has_variables?id=eq.${row.id}`,{value_string: row.value_string},'patch');
          }          
        
        }else{
          if(row.value !== oScopeData[rI].value){
            
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
    this.setState({scopeData: scopeData,oScopeData: scopeData, method: method});
  }

  parseInput(){
    let scopeData = cloneDeep(this.state.scopeData);
    let scope = {};        
    
    scopeData.map( (d) => {        
        
        scope[d.symbol] = 0;

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
    

    scopeData.map ( (d) =>{      
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

    scopeData.map( (d,index)=>{      
      scopeData[index].value = scope[d.symbol];
      return d;
    });
    
    this.saveData(scopeData);
  }
  
  CalculateAndSave(){            
    
    this.parseInput();        
  }
  
  onChangeString(e){    
    e.preventDefault();
    let scopeData = cloneDeep(this.state.scopeData);
    

    scopeData.map( (d) =>{      
      if(e.target.id === d.symbol ){
        d.value_string = e.target.value;                                   
      }
      return d;
    });     
    this.setState({scopeData: scopeData}); 
  }

  onChange(e){
    e.preventDefault();    
    let scopeData = cloneDeep(this.state.scopeData);      
    scopeData.map( (d) =>{
      if(e.target.id === d.symbol ){
        let round = d.step*10000;
        if(!round) round=100;
        d.value = Math.round(e.target.value*100)/100;        
      }
      return d;
    });
    this.setState({scopeData: scopeData});    
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
  methods: React.PropTypes.array.isRequired,
}

GridForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default GridForm;
