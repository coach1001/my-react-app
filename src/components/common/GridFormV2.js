import React from 'react';
import {methods} from './constants/gridFormConstants';
import math from 'mathjs';
import { sendRow } from '../../actions/tablesData';
import { fetchSampleMethod, updateSampleMethod } from '../../actions/sampleMethods';
import Confirm from 'react-confirm-bootstrap';
import Datetime from 'react-datetime';
import moment from 'moment';
/*import TeX from 'react-formula-beautifier';*/
import { VictoryArea, VictoryLabel, VictoryChart, VictoryAxis } from 'victory';

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
      
      const data1 = [
        {x:0,y:0},
        {x:10,y:10},
        {x:20,y:20},
        {x:30,y:30},
        {x:40,y:40},
        {x:50,y:50},
        {x:60,y:60},
        {x:70,y:70},
        {x:80,y:80},
        {x:90,y:90},
        {x:100,y:100},

      ];

      let labels = [1 ,
2 ,
3 ,
4 ,
5 ,
6 ,
7 ,
8 ,
9 ,
10  ,
11  ,
12  ,
13  ,
14  ,
15  ,
16  ,
17  ,
18  ,
19  ,
20  ,
21  ,
22  ,
23  ,
24  ,
25  ,
26  ,
27  ,
28  ,
29  ,
30  ,
31  ,
32  ,
33  ,
34  ,
35  ,
36  ,
37  ,
38  ,
39  ,
40  ,
41  ,
42  ,
43  ,
44  ,
45  ,
46  ,
47  ,
48  ,
49  ,
50  ,
51  ,
52  ,
53  ,
54  ,
55  ,
56  ,
57  ,
58  ,
59  ,
60  ,
61  ,
62  ,
63  ,
64  ,
65  ,
66  ,
67  ,
68  ,
69  ,
70  ,
71  ,
72  ,
73  ,
74  ,
75  ,
76  ,
77  ,
78  ,
79  ,
80  ,
81  ,
82  ,
83  ,
84  ,
85  ,
86  ,
87  ,
88  ,
89  ,
90  ,
91  ,
92  ,
93  ,
94  ,
95  ,
96  ,
97  ,
98  ,
99  ,
100 
];
      
      let stylex = {
        tickLabels: { fontSize: 4,  writingMode: 'tb', textAnchor: 'start' }, 
        grid: {stroke: 'lightgrey'},            
        axisLabel: {fontSize: 6},
        ticks: {stroke: "grey"}
      };

      let styley = {
        tickLabels: { fontSize: 4}, 
        grid: {stroke: 'lightgrey'},        
        axisLabel: {fontSize: 6},
        ticks: {stroke: "grey"}
      };
      
      let line = {
        data: {
          fill: "limegreen", opacity: 0.5, strokeWidth: 1, stroke: 'darkgreen'          
        }
      }      

      //data1.map( (point) => {
      //  labels.push(point.x)
      //  return point;
      //});

    const data = this.state.scopeData;    
    const table = this.state.table;    
    const col = this.state.colLayout;
    const em = this.props.empty;
    const eg = this.state.hasGraph;

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
                                  <Datetime utc={true} id={td.scopeVariable} inputProps={{disabled: true}}  timeFormat="HH:mm:ss" dateFormat={false} value={em ? '' : Math.floor(td.value)} />                                                                                                
                                
                                :
                                  <div className="input-group">
                                  <input  id={td.scopeVariable} onChange={this.onChange.bind(this)}  step={td.step} type='number' value={em ? '' : td.value} readOnly className='form-control' style={td.style}/>                                                              
                                  <span className="input-group-addon">                                                                    
                                    <div style={{fontSize: '12px'}} dangerouslySetInnerHTML={{__html: td.unit}} />
                                  </span>
                                  </div>)                              
                                                                                                                            
                            :                  
                               
                                td.unit === 'string' ?                                
                                 <input id={td.scopeVariable} onChange={this.onChangeString.bind(this)} value={em ? '' : td.value_string} type='text' className='form-control' style={td.style}/>                                
                                : 
                                
                                  td.unit === 'datetime' ?                                                                        
                                  <Datetime utc={true} id={td.scopeVariable} timeFormat="HH:mm:ss" dateFormat="DD/MM/YYYY" onChange={this.onChangeTime.bind(this,td.scopeVariable)} value={em ? '' : Math.floor(td.value)} />
                                  :                                  
                                  <div className="input-group"><input id={td.scopeVariable} onChange={this.onChange.bind(this)} min={td.min} max={td.max} step={td.step} value={em ? '' : td.value} type='number' className='form-control' style={td.style}/><span className="input-group-addon"><div style={{fontSize: '12px'}} dangerouslySetInnerHTML={{__html: td.unit}} /></span></div>                                
                               
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
             this.state.hasGraph ?
            <VictoryChart>
              
              <VictoryAxis label="Sieve Sizes" tickValues={labels} style={stylex} tickLabelComponent={<VictoryLabel dy={-1.5}/>}
              axisLabelComponent={<VictoryLabel dy={1.2}/>}
              tickFormat={ (tick) =>{
                return `${tick} %`;
              }} />

              <VictoryAxis label="Percentage Passing" dependentAxis style={styley} tickFormat={ (tick) =>{return `${tick}%`;}}
                tickLabelComponent={<VictoryLabel dx={9} />}
                axisLabelComponent={<VictoryLabel dy={-0.5}/>}
              />
              <VictoryArea data={data1} interpolation='basis' style={line} />                
            </VictoryChart> 
              : null
            }

           </div>   
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
          //console.log(row.value_string,this.state.oScopeData[rI].value_string);
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
          sendRow('sample_has_variables',{sample: this.props.sampleId,variable: row.variable_id,value: row.value},'post').then( (res) =>{row.id = res.data.id;});
        }                
      }      
      return row;    
    })     
    sendRow(`sample_has_methods?id=eq.${this.state.sampleMethod.id}`,{completed: this.state.sampleMethod.completed},'patch');
    
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