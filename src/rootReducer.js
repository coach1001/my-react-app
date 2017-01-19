import { combineReducers } from 'redux';
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import gridData from './reducers/gridData';
import cascadeSelect from './reducers/cascadeSelect';
import methods from './reducers/methods';
import samples from './reducers/samples';
import tablesData from './reducers/tablesData';

export default combineReducers({
	flashMessages,
	auth,
	gridData,
	cascadeSelect,
	methods,
	samples,
	tablesData,
})
