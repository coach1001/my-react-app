import { combineReducers } from 'redux';
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import sampleSets from './reducers/sampleSets';
import samples from './reducers/samples';
import methods from './reducers/methods';
import variables from './reducers/variables';

import sampleMethods from './reducers/sampleMethods';
import sampleVariables from './reducers/sampleVariables';

export default combineReducers({
	restApi: '',
	adService: '',	
	flashMessages,
	auth,	
	sampleSets,
	samples,
	methods,
	variables,
	sampleMethods,
	sampleVariables,
})
