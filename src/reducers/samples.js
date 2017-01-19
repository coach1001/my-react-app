import { REQUEST_SAMPLES, RECEIVE_SAMPLES  } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
	isFetching: false,
	error: null,
	samples: [],
	noData: true
}

export default (state = initialState, action = {}) => {
	switch(action.type){
		
		case REQUEST_SAMPLES:					
			return Object.assign({},state,{
				isFetching: true			
			});
		
		case RECEIVE_SAMPLES:					
			return Object.assign({},state,{
				isFetching: false,
				samples: action.samples,
				noData: isEmpty(action.methods)
			});

		default: return state;
	}
}