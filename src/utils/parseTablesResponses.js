export default function parseTablesResponses(responses){
	let tables = [];
	
		responses.map( (res) => {
			
			let tableData = {};
			tableData.columns = [];
			tableData.data = [];

			let tableName = res.config.headers.xtable;
			let method = res.config.method;
			let index = -1;
			
			tables.map( (table, index_) => {
				if(table.tableName === tableName){
					index = index_;
				}
				return table;
			});				

			if(index >=0){//Created
				
				if(method === 'get'){
					tables[index].data = res.data;
				}else if(method === 'options'){
					tables[index].columns = res.data.columns;
				}

			}else{//Not Created
				tableData.tableName = tableName;										
				if(method === 'get'){
					tableData.data = res.data;
				}else if(method === 'options'){
					tableData.columns = res.data.columns;
				}					
				tables.push(tableData);
			}
			return res;
		});

	return tables;
}