import { RECEIVE_SAMPLE_METHODS, REQUEST_SAMPLE_METHODS,RECEIVE_SAMPLE_METHOD, REQUEST_SAMPLE_METHOD } from '../actions/types';

const initialState = {
	isFetching: false,
	sampleMethods: [],
	sampleMethod: {}	
}

export default (state = initialState, action = {}) => {										
	switch(action.type){
		
		case REQUEST_SAMPLE_METHODS:					
			return Object.assign({},state,{isFetching: true, sampleMethods: [] });

		case RECEIVE_SAMPLE_METHODS:									
			return Object.assign({},state,{isFetching: false, sampleMethods : action.sampleMethods});

		case REQUEST_SAMPLE_METHOD:					
			return Object.assign({},state,{isFetching: true, sampleMethod: {} });

		case RECEIVE_SAMPLE_METHOD:									
			return Object.assign({},state,{isFetching: false, sampleMethod : action.sampleMethod});

				
		default: return state;
	}
}