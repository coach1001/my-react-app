import { REQUEST_GRIDS, RECEIVE_GRIDS } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
	isFetching: false,
	error: null,
	grids: [],
	noData: true
}

export default (state = initialState, action = {}) => {
	switch(action.type){
		
		case REQUEST_GRIDS:					
			return Object.assign({},state,{
				isFetching: true			
			});
		
		case RECEIVE_GRIDS:					
			return Object.assign({},state,{
				isFetching: false,
				grids: action.grids,
				noData: isEmpty(action.grids)
			});

		default: return state;
	}
}