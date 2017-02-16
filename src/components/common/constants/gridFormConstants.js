import * as STYLES from './styleConstants';


export const methods = [
	{
		code: 'A1',
		grid: [
			{td:[	{width:"5%", value:"A", rowSpan: 6, style: STYLES.LARGE_SECTION_HEADER.tr},
						{width:"39%", value:"DETERMINATION OF AGGREGATE GREATER THAN 19mm IN TOTAL SAMPLE", rowSpan: 4, style: STYLES.LARGE_SECTION_HEADER.tr},
						{width:"14%", value:"SIEVE SIZE (mm)", style: STYLES.LARGE_SECTION_HEADER.tr},
						{width:"14%", value:"MASS RETAINED (grams)", style: STYLES.LARGE_SECTION_HEADER.tr},
						{width:"14%", value:"PERCENTAGE RETAINED (%)", style: STYLES.LARGE_SECTION_HEADER.tr},
						{width:"14%", value:"PERCENTAGE PASSED (%)", style: STYLES.LARGE_SECTION_HEADER.tr}]},

			{td:[ {value:"63.0", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
			{td:[ {value:"53.0", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
			{td:[ {value:"37.5", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
			{td:[ {value:"MASS OF TOTAL SAMPLE (grams)", style: STYLES.LARGE_SECTION_HEADER_NB.tr},
						{value:"26.5", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
			{td:[ {isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{value:"19.0", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

			{td:[	{value:"B", rowSpan: 4, style: STYLES.LARGE_SECTION_HEADER.tr},
						{value:"DETERMINATION OF FRACTIONS BETWEEN -19mm AND +0.425mm SCREENS", rowSpan: 4, style: STYLES.LARGE_SECTION_HEADER.tr},
						{value:"13.2", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},			
						]},

			{td:[ {value:"4.75", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

			{td:[ {value:"2.00", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

			{td:[ {value:"-0.425", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

			{td:[	{value:"C", rowSpan: 3, style: STYLES.LARGE_SECTION_HEADER.tr},
						{value:"", rowSpan: 3, style: STYLES.LARGE_SECTION_HEADER.tr},
						{value:"0.075", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

			{td:[ {value:"0.075", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

			{td:[ {value:"TOTAL", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

		]
	}
]

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
export const TEST_FORM = [
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

	{	style: STYLES.LARGE_LABEL.tr, td:[
		{ value: 'Final Velocity', width: '50%', style: STYLES.LARGE_LABEL.td},
		{ width: '50%', isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'e'}] },
]
export const TEST_2 = [

	{td:[	{width:"5%", value:"A", rowSpan: 6, style: STYLES.LARGE_SECTION_HEADER.tr},
				{width:"39%", value:"DETERMINATION OF AGGREGATE GREATER THAN 19mm IN TOTAL SAMPLE", rowSpan: 4, style: STYLES.LARGE_SECTION_HEADER.tr},
				{width:"14%", value:"SIEVE SIZE (mm)", style: STYLES.LARGE_SECTION_HEADER.tr},
				{width:"14%", value:"MASS RETAINED (grams)", style: STYLES.LARGE_SECTION_HEADER.tr},
				{width:"14%", value:"PERCENTAGE RETAINED (%)", style: STYLES.LARGE_SECTION_HEADER.tr},
				{width:"14%", value:"PERCENTAGE PASSED (%)", style: STYLES.LARGE_SECTION_HEADER.tr}]},

	{td:[ {value:"63.0", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
	{td:[ {value:"53.0", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
	{td:[ {value:"37.5", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
	{td:[ {value:"MASS OF TOTAL SAMPLE (grams)", style: STYLES.LARGE_SECTION_HEADER_NB.tr},
				{value:"26.5", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
	{td:[ {isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{value:"19.0", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

	{td:[	{value:"B", rowSpan: 4, style: STYLES.LARGE_SECTION_HEADER.tr},
				{value:"DETERMINATION OF FRACTIONS BETWEEN -19mm AND +0.425mm SCREENS", rowSpan: 4, style: STYLES.LARGE_SECTION_HEADER.tr},
				{value:"13.2", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				
				]},

	{td:[ {value:"4.75", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

	{td:[ {value:"2.00", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

	{td:[ {value:"-0.425", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

	{td:[	{value:"C", rowSpan: 3, style: STYLES.LARGE_SECTION_HEADER.tr},
				{value:"", rowSpan: 3, style: STYLES.LARGE_SECTION_HEADER.tr},
				{value:"0.075", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

	{td:[ {value:"0.075", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

	{td:[ {value:"TOTAL", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
]