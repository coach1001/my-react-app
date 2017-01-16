import  { RECEIVE_CASCADE_SELECT, REQUEST_CASCADE_SELECT } from './types';
import axios from 'axios';

export function requestCascadeSelect(){
	return {
		type: REQUEST_CASCADE_SELECT		
	}
}

export function receiveCascadeSelect(select){
		return {
			type: RECEIVE_CASCADE_SELECT,
			select: select
		}
}

function fetchCascadeSelectView(view, index){
	if(view.filter){		
		return axios.get(`http://localhost:3002/${view.table}?select=value:${view.value},label:${view.label},filter:${view.filter}`, { headers : {'xviewname' : view.name , 'xviewindex' : index } } );	
	}else{
		return axios.get(`http://localhost:3002/${view.table}?select=value:${view.value},label:${view.label}`, { headers : {'xviewname' : view.name , 'xviewindex' : index } } );	
	}
}

export function parseCascadeReponses(responses){
	let cascadeSelect = {}
	cascadeSelect.selectedValues = [];
	cascadeSelect.dataArray = [];
	cascadeSelect.selectedValue = null;			

	responses.map( (response, index ) => {												
  	let option_ = {};
		option_.options= [];

		let selectIndex = response.config.headers.xviewindex;
		let selectName = response.config.headers.xviewname;
		option_.placeholder = selectName[0].toUpperCase() + selectName.substring(1);
		option_.field = selectName;

		response.data.map( (option) =>{					
			option_.options.push(option);
			return option;
  	})
		
		cascadeSelect.dataArray[selectIndex] = option_;	
		
		return response;
	});
	return cascadeSelect;	
}

export function fetchSelectsNoDispatch(views){			
	return dispatch => {		
		let requestPromises= [];

		dispatch(requestCascadeSelect());

		views.map ( (view , index) => {
			return requestPromises.push(fetchCascadeSelectView(view, index));
		});
			
		return axios.all(requestPromises);		
	}
}

export function fetchSelects(views){			
	return dispatch => {		
		let requestPromises= [];

		dispatch(requestCascadeSelect());

		views.map ( (view , index) => {
			return requestPromises.push(fetchCascadeSelectView(view, index));
		});
			
		return axios.all(requestPromises).then( (responses) => { 								
			dispatch(receiveCascadeSelect(parseCascadeReponses(responses)));
		}).catch( (err) => {
			console.log(err);
		});
	}
}
