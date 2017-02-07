import { REQUEST_SAMPLE_SETS, RECEIVE_SAMPLE_SETS, REQUEST_SAMPLE_SET, RECEIVE_SAMPLE_SET } from '../actions/types';

const initialState = {
	isFetching: false,
	sampleSets: [],
	sampleSet: {}
}

export default (state = initialState, action = {}) => {										
	switch(action.type){
		
		case REQUEST_SAMPLE_SETS:					
			return Object.assign({},state,{isFetching: true, sampleSets: [] });

		case RECEIVE_SAMPLE_SETS:									
			return Object.assign({},state,{isFetching: false, sampleSets : action.sampleSets});
			
		case REQUEST_SAMPLE_SET:					
			return Object.assign({},state,{isFetching: true, sampleSet: {} });
		
		case RECEIVE_SAMPLE_SET:									
			return Object.assign({},state,{isFetching: false, sampleSet : action.sampleSet});
	
		default: return state;
	}
}