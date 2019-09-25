import logo from '../../../dot.svg';

export const TABLE_HEADER = { backgroundColor : 'red', color : 'white', textAlign : 'center', fontSize: '1.5em'};

export const CELL_NO_ROTATE = {
	padding: '5px',
	textAlign: 'center'
}

export const CELL_ROTATE = {	
  transform: 'rotate(-90deg)',  
  textAlign: 'center'
}
//2332
export const LARGE_SECTION_HEADER = {
	tr:{
		textAlign: 'center',
		backgroundColor: '#9f9f9f',
		color: '#1f1f1f',
		fontWeight: 'bold'	
	},
	
	td: {
		fontSize: '22px',
		padding: '10px',
	}
}

export const LARGE_LABEL = {
	thin:{
		textAlign: 'center',	
		padding: '2px',
		fontSize: '14px',
		//height: '39px',
		height: '5px',
		color: 'white',
		backgroundColor: '#31708f'
	},
	tr:{
		fontSize: '14px',
		textAlign: 'right',	
		padding: '2px',
		color: 'white',
		backgroundColor: '#31708f',
		height: '28px',
	},
	c:{
		textAlign: 'center',	
		padding: '2px',
		fontSize: '14px',		
		height: '28px',
		color: 'white',
		backgroundColor: '#31708f'
	},
	ctitle:{
		textAlign: 'center',	
		padding: '2px',
		fontSize: '18px',		
		height: '28px',
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: '#31708f'
	},	
	logo: {
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundImage: `url("${logo}")`, 
		height: 'auto',
		maxWidth: '100%'
	},
	ci:{
		textAlign: 'center',	
		padding: '2px',
		fontSize: '14px',
		fontStyle: 'italic',
		height: '28px',
		color: 'white',
		backgroundColor: '#31708f'
	},	
	td : {
		fontSize: '14px',
		padding: '2px',
		height: '28px',		
	},
	input: {		
		textAlign: 'left',
		fontSize: '14px',
		padding: '2px',
		width: '100%'	,
		height: '28px',
	},
	rlcb: {
		textAlign: 'center',	
		padding: '2px',
		fontSize: '10px',
		height: '22px',
		color: 'black',
		fontWeight: 'bold'
	},
	rllb: {
		textAlign: 'left',	
		padding: '2px',
		fontSize: '10px',
		height: '22px',
		color: 'black',
		fontWeight: 'bold'
	},
	rlc: {
		textAlign: 'center',	
		padding: '2px',
		fontSize: '10px',
		height: '22px',
		color: 'black',
	},
	rlr: {
		textAlign: 'right',	
		padding: '2px',
		fontSize: '10px',
		height: '22px',
		color: 'black',
	},
	rll: {
		textAlign: 'left',	
		padding: '2px',
		fontSize: '10px',
		height: '22px',
		color: 'black',
	},
	rlls: {
		textAlign: 'left',	
		padding: '2px',
		fontSize: '8px',
		height: '22px',
		color: 'black',
		fontWeight: 'bold'
	},
	rllb: {
		textAlign: 'left',	
		padding: '2px',
		fontSize: '10px',
		height: '22px',
		color: 'black',
		fontWeight: 'bold'
	},
	rlci: {
		textAlign: 'center',	
		padding: '2px',
		fontSize: '10px',
		height: '22px',
		color: 'black',
		fontStyle: 'italic'
	}
}

export const LARGE_SECTION_HEADER_NB = {
	tr:{
		textAlign: 'center',				
	},
	
	td: {
		fontSize: '22px',
		padding: '10px',
	}
}

export const testData = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	options: {
		legend: {
			display: false
		},
		responsive: true,
		maintainAspectRatio: false,
		animation: {
			duration: 0
		}
	},
	datasets: [
	  {
		label: 'My First dataset',
		fill: false,
		lineTension: 0.1,
		backgroundColor: 'rgba(75,192,192,0.4)',
		borderColor: 'rgba(75,192,192,1)',
		borderCapStyle: 'butt',
		borderDash: [],
		borderDashOffset: 0.0,
		borderJoinStyle: 'miter',
		pointBorderColor: 'rgba(75,192,192,1)',
		pointBackgroundColor: '#fff',
		pointBorderWidth: 1,
		pointHoverRadius: 5,
		pointHoverBackgroundColor: 'rgba(75,192,192,1)',
		pointHoverBorderColor: 'rgba(220,220,220,1)',
		pointHoverBorderWidth: 2,
		pointRadius: 1,
		pointHitRadius: 10,
		data: [65, 59, 80, 81, 56, 55, 40]
	  }
	]
  };