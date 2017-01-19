import { REQUEST_METHODS, RECEIVE_METHODS  } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
	isFetching: false,
	error: null,
	methods: [],
	noData: true
}

export default (state = initialState, action = {}) => {
	switch(action.type){
		
		case REQUEST_METHODS:					
			return Object.assign({},state,{
				isFetching: true			
			});
		
		case RECEIVE_METHODS:					
			return Object.assign({},state,{
				isFetching: false,
				methods: action.methods,
				noData: isEmpty(action.methods)
			});

		default: return state;
	}
}