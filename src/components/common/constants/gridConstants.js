/*export const TEST : [      
	{ td: [ {value: 'LARGE', colSpan:4 } ] },
	{ td: [ {value: 'LARGE', colSpan:3 }, {value: 'Hi!', colSpan:1} ]},
	{ td: [ {value: 'LARGE', colSpan:2, rowSpan:2 }, {value: 'LARGE'}, {value: 'LARGE'} ]},
	{ td: [ {value: 'LARGE'}, {value: 'LARGE'}]},      
	{ style: { visibility : 'collapse'}, td: [ {value: 'LARGE'}, {value: 'LARGE'}, {value: 'LARGE'}, {value: 'LARGE'} ]}
]
*/
let fontSmall = {
	fontSize : '12px'
}
let fontSmall_ = {
	fontSize : '10px',
	//width: '7.1%'
}

let fontRotate = {
	fontSize : '10px',
  transform: 'rotate(-90deg)',
}

export const SIEVE_ANALYSIS = [
	{
		td: [
		{ value: '', colSpan:3 , style : fontSmall},
		{ value: 'SIEVE ANALYSIS', colSpan:10, style : fontSmall},
		{ value: 'SOIL MORTAR ANALYSIS', colSpan:3, style : fontSmall },
		{ value: 'ATTERBURG CONSTANTS', colSpan:3, style : fontSmall },
		]
	},
	{
		td: [
		{ value: 'SAMPLE NO.', rowSpan:3, style : fontSmall },
		{ value: 'DISTANCE (km)', rowSpan:3, style : fontSmall },
		{ value: 'DEPTH (mm)', rowSpan:3, style : fontSmall },
		{ value: 'PERCENTAGE BY MASS PASSING SIEVES', colSpan:10, style : fontSmall},
		{ value: 'SPAN', colSpan:2, style : fontSmall },
		{ value: 'MATERIAL < 0.075 mm', rowSpan:3, style : fontRotate },
		{ value: 'LIQUID LIMIT', rowSpan:3, style : fontRotate },
		{ value: 'PLASTICITY INDEX', rowSpan:3, style : fontRotate  },
		{ value: 'LINEAR SHRINKAGE', rowSpan:3, style : fontRotate  },
		]
	},
	{
		td: [

		{ value: '75.0 mm', rowSpan:2, style : fontSmall },
		{ value: '53.0 mm', rowSpan:2, style : fontSmall },
		{ value: '37.5 mm', rowSpan:2, style : fontSmall },
		{ value: '26.5 mm', rowSpan:2, style : fontSmall },
		{ value: '19.0 mm', rowSpan:2, style : fontSmall },
		{ value: '13.2 mm', rowSpan:2, style : fontSmall },
		{ value: '4.75 mm', rowSpan:2, style : fontSmall },
		{ value: '2.0 mm', rowSpan:2, style : fontSmall },
		{ value: '0.425 mm', rowSpan:2, style : fontSmall },
		{ value: '0.075 mm', rowSpan:2, style : fontSmall },
		{ value: 'COARSE', style : fontSmall },
		{ value: 'FINE', style : fontSmall },
		]
	},
	{
		td: [
		{ value: '<2.0 >0.425 mm', style : fontSmall },
		{ value: '<0.425 >0.075 mm', style : fontSmall },
		]
	},
	{
		td: [
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},
		{value : 'TEXT', style : fontSmall_},		
		]	
	}

]
