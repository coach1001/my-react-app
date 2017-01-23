import { REQUEST_ROW, RECEIVE_ROW} from '../actions/types';

const initialState = {
	isFetching: true,
	entities: []
}

export default (state = initialState, action = {}) => {
	let oState = state;								
		
	switch(action.type){
		
		case REQUEST_ROW:					
			return Object.assign({},state,{
				isFetching: true			
			});
		
		case RECEIVE_ROW:						
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