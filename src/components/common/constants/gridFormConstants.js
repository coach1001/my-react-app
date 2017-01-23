import * as STYLES from './styleConstants';


export const SIEVE_ANALYSIS = [
	{
		style: { fontSize: 14 },
		td: [
			{ value: '', colSpan: 3 , style: STYLES.CELL_NO_ROTATE },
			{ value: 'SIEVE ANALYSIS', colSpan: 10, style: STYLES.CELL_NO_ROTATE },
			{ value: 'SOIL MORTAR ANALYSIS', colSpan: 3, style: STYLES.CELL_NO_ROTATE },
			{ value: 'ATTERBURG CONSTANTS', colSpan: 3, style: STYLES.CELL_NO_ROTATE },
		]
	},
	{
		style: { fontSize : 10 },
		td: [
			{ value: 'SAMPLE NO.', rowSpan: 3, width: '20%', style: STYLES.CELL_NO_ROTATE },
			{ value: 'DISTANCE (km)', rowSpan: 3, width: '5%', style: STYLES.CELL_NO_ROTATE },
			{ value: 'DEPTH (mm)', rowSpan: 3, width: '5%', style: STYLES.CELL_NO_ROTATE },
			{ value: 'PERCENTAGE BY MASS PASSING SIEVES', colSpan: 10, style: STYLES.CELL_NO_ROTATE},
			{ value: 'SAND', colSpan: 2, style: STYLES.CELL_NO_ROTATE },
			{ value: 'MATERIAL <0.075 mm', rowSpan: 3, width: '5%', style: STYLES.CELL_ROTATE },
			{ value: 'LIQUID LIMIT', rowSpan: 3, width: '5%', style: STYLES.CELL_ROTATE, height: '120px' },
			{ value: 'PLASTICITY INDEX', rowSpan: 3, width: '5%', style: STYLES.CELL_ROTATE },
			{ value: 'LINEAR SHRINKAGE', rowSpan: 3, width: '5%', style: STYLES.CELL_ROTATE },
		]
	},
	{
		style: { fontSize : 10 },
		td: [
			{ value: '75.0 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ value: '53.0 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ value: '37.5 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ value: '26.5 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ value: '19.0 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ value: '13.2 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ value: '4.75 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ value: '2.0 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ value: '0.425 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ value: '0.075 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ value: 'COARSE', width: '10%', style: STYLES.CELL_NO_ROTATE },
			{ value: 'FINE', width: '10%', style: STYLES.CELL_NO_ROTATE },
		]
	},
	{
		style: { fontSize: 10 },
		td: [
			{ value: '<2.0 mm and >0.425 mm', style: STYLES.CELL_NO_ROTATE },
			{ value: '<0.425 and >0.075 mm', style: STYLES.CELL_NO_ROTATE },
		]
	},
]

export const OBJECT_FALLING_UNDER_GRAVITY = [
	{	style: STYLES.LARGE_SECTION_HEADER.tr , td: [{ value: 'Inputs', colSpan:2, style: STYLES.LARGE_SECTION_HEADER.td }] },

	{	style: STYLES.LARGE_LABEL.tr , td:[
		{ value: 'Time', width: '50%', style: STYLES.LARGE_LABEL.td},
		{ width: '50%', isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'b'} ]},

	{	style: STYLES.LARGE_LABEL.tr , td:[
		{ value: 'Initial Velocity', width: '50%', style: STYLES.LARGE_LABEL.td },
		{ width: '50%', isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'c'} ]},

	{ style: STYLES.LARGE_SECTION_HEADER.tr , td:[{ value: 'Calculations', colSpan:2, style: STYLES.LARGE_SECTION_HEADER.td }]	},

	{	style: STYLES.LARGE_LABEL.tr, td:[
		{ value: 'Final Velocity', width: '50%', style: STYLES.LARGE_LABEL.td},
		{ width: '50%', isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'd'}] },
]
