import React from 'react';


class GridForm extends React.Component {
  
  componentWillMount(){
    this.setState(Object.assign({},this.state,{      
      cols: 2,
      rows: 5,
      spans: [
        { colSpan: 1, rowSpan:2, posCol: 0, posRow: 4},
        { colSpan: 2, rowSpan:1, posCol: 0, posRow: 0}        
      ]      
    }));
  }

  drawTable(){
    const table = this.state;
    let tableObject = {};
    
    tableObject.grid = [];   

    for(let rowIndex=0;rowIndex<table.rows;rowIndex++){            
      let colCells = [];
      for(let colIndex=0;colIndex<table.cols;colIndex++){
        let rowSpan = 1;
        let colSpan = 1;
        
          for(let spanIndex=0; spanIndex < table.spans.length; spanIndex++){
            console.log(rowIndex,colIndex);

            if(table.spans[spanIndex].posCol === colIndex && table.spans[spanIndex].posRow === rowIndex){              
              rowSpan = table.spans[spanIndex].rowSpan;
              colSpan = table.spans[spanIndex].colSpan;               
            }
          }

          colCells.push({ posRow: rowIndex, posCol: colIndex, rowSpan: rowSpan, colSpan: colSpan });        
      }
      tableObject.grid.push(colCells);
    }
    console.log(tableObject);
    
    return (
        <table className="table table-bordered">  
          <tbody>
          {       
              tableObject.grid.map( ( rowsObj, rowIndex ) => 
              <tr key={rowIndex}>
              {
                rowsObj.map( (cellObj, cellIndex ) => <td key={cellIndex} rowSpan={cellObj.rowSpan} colSpan={cellObj.colSpan}>Blah Blah Blah</td>)
                
              }  
              </tr>              
            )
          }
          </tbody>
        </table>
      )
  }

  render() {  		  					  
      const grid = this.drawTable();
      return (        
        <div>
          <h1>Grid Form</h1>
          {grid}        	
        </div>
    );          
  }
}

export default GridForm;