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
			return Object({},state,{
				isFetching : true				
			});

		case RECEIVE_CASCADE_SELECT:
			let oState={};
			oState.select = {};
			oState.select = Object.assign({},action.select);
			oState.isFetching = false;
			console.log(oState);
			return oState;
		
		default : return state;
	}	
}