import { combineReducers } from 'redux';
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import cascadeSelect from './reducers/cascadeSelect';
import tablesData from './reducers/tablesData';
import rowData from './reducers/rowData';

export default combineReducers({
	flashMessages,
	auth,	
	cascadeSelect,
	tablesData,
	rowData,	
})
