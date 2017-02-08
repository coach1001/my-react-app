import { RECEIVE_SAMPLE_METHODS, REQUEST_SAMPLE_METHODS } from '../actions/types';

const initialState = {
	isFetching: false,
	sampleMethods: [],	
}

export default (state = initialState, action = {}) => {										
	switch(action.type){
		
		case REQUEST_SAMPLE_METHODS:					
			return Object.assign({},state,{isFetching: true, sampleMethods: [] });

		case RECEIVE_SAMPLE_METHODS:									
			return Object.assign({},state,{isFetching: false, sampleMethods : action.sampleMethods});
				
		default: return state;
	}
}