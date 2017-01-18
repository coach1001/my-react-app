let cellNoRotate = {
	padding: '5px',
	textAlign: 'center'
}

let cellRotate = {	
  transform: 'rotate(-90deg)',  
  textAlign: 'center'
}

export const SIEVE_ANALYSIS = [
	{
		style: { fontSize: 14 },
		td: [
			{ value: '', colSpan: 3 , style: cellNoRotate },
			{ value: 'SIEVE ANALYSIS', colSpan: 10, style: cellNoRotate },
			{ value: 'SOIL MORTAR ANALYSIS', colSpan: 3, style: cellNoRotate },
			{ value: 'ATTERBURG CONSTANTS', colSpan: 3, style: cellNoRotate },
		]
	},
	{
		style: { fontSize : 10 },
		td: [
			{ value: 'SAMPLE NO.', rowSpan: 3, width: '20%', style: cellNoRotate },
			{ value: 'DISTANCE (km)', rowSpan: 3, width: '5%', style: cellNoRotate },
			{ value: 'DEPTH (mm)', rowSpan: 3, width: '5%', style: cellNoRotate },
			{ value: 'PERCENTAGE BY MASS PASSING SIEVES', colSpan: 10, style: cellNoRotate},
			{ value: 'SAND', colSpan: 2, style: cellNoRotate },
			{ value: 'MATERIAL <0.075 mm', rowSpan: 3, width: '5%', style: cellRotate },
			{ value: 'LIQUID LIMIT', rowSpan: 3, width: '5%', style: cellRotate, height: '120px' },
			{ value: 'PLASTICITY INDEX', rowSpan: 3, width: '5%', style: cellRotate },
			{ value: 'LINEAR SHRINKAGE', rowSpan: 3, width: '5%', style: cellRotate },
		]
	},
	{
		style: { fontSize : 10 },
		td: [
			{ value: '75.0 mm', rowSpan: 2, width: '3%', style: cellNoRotate },
			{ value: '53.0 mm', rowSpan: 2, width: '3%', style: cellNoRotate },
			{ value: '37.5 mm', rowSpan: 2, width: '3%', style: cellNoRotate },
			{ value: '26.5 mm', rowSpan: 2, width: '3%', style: cellNoRotate },
			{ value: '19.0 mm', rowSpan: 2, width: '3%', style: cellNoRotate },
			{ value: '13.2 mm', rowSpan: 2, width: '3%', style: cellNoRotate },
			{ value: '4.75 mm', rowSpan: 2, width: '3%', style: cellNoRotate },
			{ value: '2.0 mm', rowSpan: 2, width: '3%', style: cellNoRotate },
			{ value: '0.425 mm', rowSpan: 2, width: '3%', style: cellNoRotate },
			{ value: '0.075 mm', rowSpan: 2, width: '3%', style: cellNoRotate },
			{ value: 'COARSE', width: '10%', style: cellNoRotate },
			{ value: 'FINE', width: '10%', style: cellNoRotate },
		]
	},
	{
		style: { fontSize: 10 },
		td: [
			{ value: '<2.0 mm and >0.425 mm', style: cellNoRotate },
			{ value: '<0.425 and >0.075 mm', style: cellNoRotate },
		]
	},
]
