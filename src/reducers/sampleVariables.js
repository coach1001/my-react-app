import { RECEIVE_SAMPLE_VARIABLES, REQUEST_SAMPLE_VARIABLES } from '../actions/types';

const initialState = {
	isFetching: false,
	sampleVariables: [],	
}

export default (state = initialState, action = {}) => {										
	switch(action.type){
		
		case REQUEST_SAMPLE_VARIABLES:					
			return Object.assign({},state,{isFetching: true, sampleVariables: [] });

		case RECEIVE_SAMPLE_VARIABLES:									
			return Object.assign({},state,{isFetching: false, sampleVariables: action.sampleVariables});
				
		default: return state;
	}
}