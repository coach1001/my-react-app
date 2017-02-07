import { REQUEST_SAMPLES, RECEIVE_SAMPLES, REQUEST_SAMPLE, RECEIVE_SAMPLE } from '../actions/types';

const initialState = {
	isFetching: false,
	samples: [],
	sample: {}
}

export default (state = initialState, action = {}) => {										
	switch(action.type){
		
		case REQUEST_SAMPLES:					
			return Object.assign({},state,{isFetching: true, samples: [] });

		case RECEIVE_SAMPLES:									
			return Object.assign({},state,{isFetching: false, samples : action.samples});
			
		case REQUEST_SAMPLE:					
			return Object.assign({},state,{isFetching: true, sample: {} });
		
		case RECEIVE_SAMPLE:									
			return Object.assign({},state,{isFetching: false, sample : action.sample});
	
		default: return state;
	}
}