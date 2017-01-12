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
		return axios.get(`/${view.table}?select=value:${view.value},display:${view.display},filter:${view.filter}`, { headers : {'xviewname' : view.name , 'xviewindex' : index } } );	
	}else{
		return axios.get(`/${view.table}?select=value:${view.value},display:${view.display}`, { headers : {'xviewname' : view.name , 'xviewindex' : index } } );	
	}
}

export function fetchSelects(views){			
	return dispatch => {		
		let requestPromises= [];

		dispatch(requestCascadeSelect());

		views.map ( (view , index) => {
			return requestPromises.push(fetchCascadeSelectView(view, index));
		});
			
		return axios.all(requestPromises).then((responses) => { 
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

			dispatch(receiveCascadeSelect(cascadeSelect));

		}).catch( (err) => {
				console.log(err);
		});
	}
}
