import { combineReducers } from 'redux';
import auth from './reducers/auth';
import sampleSets from './reducers/sampleSets';
import samples from './reducers/samples';
import methods from './reducers/methods';
import sampleMethods from './reducers/sampleMethods';
import sampleVariables from './reducers/sampleVariables';
import loader from './reducers/loader';

export default combineReducers({
	loader,	
	auth,	
	sampleSets,
	samples,
	methods,	
	sampleMethods,
	sampleVariables,
})
