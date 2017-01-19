import { REQUEST_TABLE, RECEIVE_TABLE, REQUEST_TABLES, RECEIVE_TABLES } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
	isFetching: false,
	tables: []
}

export default (state = initialState, action = {}) => {
	let oState = state;								
		
	switch(action.type){
		
		case REQUEST_TABLE:					
			return Object.assign({},state,{
				isFetching: true			
			});
		
		case REQUEST_TABLES:					
			return Object.assign({},state,{
				isFetching: true			
			});
		
		case RECEIVE_TABLE:	
			let index = -1;
			
			oState.tables.map( (table, index_) =>{
				if(table.name === action.tableData.tableName ){
					index = index_;
				}
				return table;			
			})
			
			if(index >= 0){				
				oState.tables[index].data = action.tableData.tableData;				
				oState.tables[index].columns = action.tableData.tableColumns;			
				oState.tables[index].noData = isEmpty(action.tableData.tableData);											
			}else {				
				let table = {};
				table.data = [];
				table.columns = [];
				table.name = action.tableData.tableName;
				table.data = action.tableData.tableData;
				table.columns = action.tableData.tableColumns;				
				oState.tables.push(table);								
			}			
			oState.isFetching = false;
			return Object.assign({},state,oState);		
		
		case RECEIVE_TABLES:						
			const tables = action.tableDataArray;						
			tables.map( (table, tableIndex) =>{				
		
				let tableFound = false;			
				let oTableIndex = null;
				
				oState.tables.map ( (oTable, oTableIndex_) =>{
		
					if(table.tableName === oTable.tableName){
						tableFound = true;
						oTableIndex = oTableIndex_;
					}
					return oTable;
				});
		
				if(tableFound){
					oState.tables[oTableIndex] = table;
				}else{
					oState.tables.push(table);
				}		
				return table;		
			});

			
			oState.isFetching = false;
			return Object.assign({},state,oState);		
		
		default: return state;
	}
}