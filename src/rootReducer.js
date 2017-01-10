import { combineReducers } from 'redux';
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import gridData from './reducers/gridData';

export default combineReducers({
	flashMessages,
	auth,
	gridData	
})
