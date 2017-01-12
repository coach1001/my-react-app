import { RECEIVE_CASCADE_SELECT, REQUEST_CASCADE_SELECT } from '../actions/types'

const initialState = {
	isFetching: false,	
	error: null,
	select: {},
	noData: true
}

export default ( state = initialState, action = {}) => {	
	switch(action.type){
		
		case REQUEST_CASCADE_SELECT: 
			return Object.assign({},state,{ isFecting:true })

		case RECEIVE_CASCADE_SELECT:
			return Object.assign({},state,{
				isFetching : false,
				select: action.select
			});
		
		default: return state;
	}	
}