import { REQUEST_TABLES, RECEIVE_TABLES } from '../actions/types';

const initialState = {
	isFetching: false,
	tables: []
}

export default (state = initialState, action = {}) => {
	let oState = state;								
		
	switch(action.type){
		
		case REQUEST_TABLES:					
			return Object.assign({},state,{
				isFetching: true			
			});
		
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