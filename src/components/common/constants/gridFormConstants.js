import * as STYLES from './styleConstants';


export const methods = [
	{
		code: 'A1',
		grid: [
			{td:[	{width:"5%", label:"A", rowSpan: 6, style: STYLES.LARGE_SECTION_HEADER.tr},
						{width:"39%", label:"DETERMINATION OF AGGREGATE GREATER THAN 19mm IN TOTAL SAMPLE", rowSpan: 4, style: STYLES.LARGE_SECTION_HEADER.tr},
						{width:"14%", label:"SIEVE SIZE (mm)", style: STYLES.LARGE_SECTION_HEADER.tr},
						{width:"14%", label:"MASS RETAINED (grams)", style: STYLES.LARGE_SECTION_HEADER.tr},
						{width:"14%", label:"PERCENTAGE RETAINED (%)", style: STYLES.LARGE_SECTION_HEADER.tr},
						{width:"14%", label:"PERCENTAGE PASSED (%)", style: STYLES.LARGE_SECTION_HEADER.tr}]},

			{td:[ {label:"63.0", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'gr_mr3' },
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input,scopeVariable: 'gr_pr3'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
			
			{td:[ {label:"53.0", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'gr_mr4'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input,scopeVariable:'gr_pr4'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
			
			{td:[ {label:"37.5", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'gr_mr5'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input,scopeVariable:'gr_pr5'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
			
			{td:[ {label:"MASS OF TOTAL SAMPLE (grams)", style: STYLES.LARGE_SECTION_HEADER_NB.tr},
						{label:"26.5", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'gr_mr6'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input,scopeVariable:'gr_pr6'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
			
			{td:[ {isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'gr_dm' },
						{label:"19.0", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'gr_mr7'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input,scopeVariable:'gr_pr7'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

			
			{td:[	{label:"B", rowSpan: 4, style: STYLES.LARGE_SECTION_HEADER.tr},
						{label:"DETERMINATION OF FRACTIONS BETWEEN -19mm AND +0.425mm SCREENS", rowSpan: 4, style: STYLES.LARGE_SECTION_HEADER.tr},
						{label:"13.2", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'gr_mr8'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input,scopeVariable:'gr_pr8'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},			
						]},

			{td:[ {label:"4.75", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'gr_mr9'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input,scopeVariable:'gr_pr9'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

			{td:[ 
						{label:"2.00", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'gr_mr10'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input,scopeVariable:'gr_pr10'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

			{td:[ 
						{label:"0.425", style: STYLES.LARGE_LABEL.c},
						{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'gr_mr11'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input,scopeVariable:'gr_pr11'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

			{td:[	{label:"C", rowSpan: 3, style: STYLES.LARGE_SECTION_HEADER.tr},
						{label:"", rowSpan: 3, style: STYLES.LARGE_SECTION_HEADER.tr},
						{label:"<0.425", style: STYLES.LARGE_LABEL.c},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'gr_mp_tot'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'gr_pr_total'},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},


			{td:[ {label:"TOTAL", style: STYLES.LARGE_LABEL.c},
						{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'gr_dm_calc'},]},

		]
	}
]

export const SIEVE_ANALYSIS = [
	{
		style: { fontSize: 14 },
		td: [
			{ label: '', colSpan: 3 , style: STYLES.CELL_NO_ROTATE },
			{ label: 'SIEVE ANALYSIS', colSpan: 10, style: STYLES.CELL_NO_ROTATE },
			{ label: 'SOIL MORTAR ANALYSIS', colSpan: 3, style: STYLES.CELL_NO_ROTATE },
			{ label: 'ATTERBURG CONSTANTS', colSpan: 3, style: STYLES.CELL_NO_ROTATE },
		]
	},
	{
		style: { fontSize : 10 },
		td: [
			{ label: 'SAMPLE NO.', rowSpan: 3, width: '20%', style: STYLES.CELL_NO_ROTATE },
			{ label: 'DISTANCE (km)', rowSpan: 3, width: '5%', style: STYLES.CELL_NO_ROTATE },
			{ label: 'DEPTH (mm)', rowSpan: 3, width: '5%', style: STYLES.CELL_NO_ROTATE },
			{ label: 'PERCENTAGE BY MASS PASSING SIEVES', colSpan: 10, style: STYLES.CELL_NO_ROTATE},
			{ label: 'SAND', colSpan: 2, style: STYLES.CELL_NO_ROTATE },
			{ label: 'MATERIAL <0.075 mm', rowSpan: 3, width: '5%', style: STYLES.CELL_ROTATE },
			{ label: 'LIQUID LIMIT', rowSpan: 3, width: '5%', style: STYLES.CELL_ROTATE, height: '120px' },
			{ label: 'PLASTICITY INDEX', rowSpan: 3, width: '5%', style: STYLES.CELL_ROTATE },
			{ label: 'LINEAR SHRINKAGE', rowSpan: 3, width: '5%', style: STYLES.CELL_ROTATE },
		]
	},
	{
		style: { fontSize : 10 },
		td: [
			{ label: '75.0 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ label: '53.0 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ label: '37.5 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ label: '26.5 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ label: '19.0 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ label: '13.2 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ label: '4.75 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ label: '2.0 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ label: '0.425 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ label: '0.075 mm', rowSpan: 2, width: '3%', style: STYLES.CELL_NO_ROTATE },
			{ label: 'COARSE', width: '10%', style: STYLES.CELL_NO_ROTATE },
			{ label: 'FINE', width: '10%', style: STYLES.CELL_NO_ROTATE },
		]
	},
	{
		style: { fontSize: 10 },
		td: [
			{ label: '<2.0 mm and >0.425 mm', style: STYLES.CELL_NO_ROTATE },
			{ label: '<0.425 and >0.075 mm', style: STYLES.CELL_NO_ROTATE },
		]
	},
]

export const OBJECT_FALLING_UNDER_GRAVITY = [
	{	style: STYLES.LARGE_SECTION_HEADER.tr , td: [{ label: 'Inputs', colSpan:2, style: STYLES.LARGE_SECTION_HEADER.td }] },

	{	style: STYLES.LARGE_LABEL.tr , td:[
		{ label: 'Time', width: '50%', style: STYLES.LARGE_LABEL.td},
		{ width: '50%', isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'b'} ]},

	{	style: STYLES.LARGE_LABEL.tr , td:[
		{ label: 'Initial Velocity', width: '50%', style: STYLES.LARGE_LABEL.td },
		{ width: '50%', isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'c'} ]},

	{ style: STYLES.LARGE_SECTION_HEADER.tr , td:[{ label: 'Calculations', colSpan:2, style: STYLES.LARGE_SECTION_HEADER.td }]	},

	{	style: STYLES.LARGE_LABEL.tr, td:[
		{ label: 'Final Velocity', width: '50%', style: STYLES.LARGE_LABEL.td},
		{ width: '50%', isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'd'}] },
]
export const TEST_FORM = [
	{	style: STYLES.LARGE_SECTION_HEADER.tr , td: [{ label: 'Inputs', colSpan:2, style: STYLES.LARGE_SECTION_HEADER.td }] },

	{	style: STYLES.LARGE_LABEL.tr , td:[
		{ label: 'Time', width: '50%', style: STYLES.LARGE_LABEL.td},
		{ width: '50%', isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'b'} ]},

	{	style: STYLES.LARGE_LABEL.tr , td:[
		{ label: 'Initial Velocity', width: '50%', style: STYLES.LARGE_LABEL.td },
		{ width: '50%', isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'c'} ]},

	{ style: STYLES.LARGE_SECTION_HEADER.tr , td:[{ label: 'Calculations', colSpan:2, style: STYLES.LARGE_SECTION_HEADER.td }]	},

	{	style: STYLES.LARGE_LABEL.tr, td:[
		{ label: 'Final Velocity', width: '50%', style: STYLES.LARGE_LABEL.td},
		{ width: '50%', isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'd'}] },

	{	style: STYLES.LARGE_LABEL.tr, td:[
		{ label: 'Final Velocity', width: '50%', style: STYLES.LARGE_LABEL.td},
		{ width: '50%', isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input, scopeVariable: 'e'}] },
]
export const TEST_2 = [

	{td:[	{width:"5%", label:"A", rowSpan: 6, style: STYLES.LARGE_SECTION_HEADER.tr},
				{width:"39%", label:"DETERMINATION OF AGGREGATE GREATER THAN 19mm IN TOTAL SAMPLE", rowSpan: 4, style: STYLES.LARGE_SECTION_HEADER.tr},
				{width:"14%", label:"SIEVE SIZE (mm)", style: STYLES.LARGE_SECTION_HEADER.tr},
				{width:"14%", label:"MASS RETAINED (grams)", style: STYLES.LARGE_SECTION_HEADER.tr},
				{width:"14%", label:"PERCENTAGE RETAINED (%)", style: STYLES.LARGE_SECTION_HEADER.tr},
				{width:"14%", label:"PERCENTAGE PASSED (%)", style: STYLES.LARGE_SECTION_HEADER.tr}]},

	{td:[ {label:"63.0", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
	{td:[ {label:"53.0", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
	{td:[ {label:"37.5", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
	{td:[ {label:"MASS OF TOTAL SAMPLE (grams)", style: STYLES.LARGE_SECTION_HEADER_NB.tr},
				{label:"26.5", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
	{td:[ {isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{label:"19.0", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

	{td:[	{label:"B", rowSpan: 4, style: STYLES.LARGE_SECTION_HEADER.tr},
				{label:"DETERMINATION OF FRACTIONS BETWEEN -19mm AND +0.425mm SCREENS", rowSpan: 4, style: STYLES.LARGE_SECTION_HEADER.tr},
				{label:"13.2", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				
				]},

	{td:[ {label:"4.75", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

	{td:[ {label:"2.00", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

	{td:[ {label:"-0.425", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

	{td:[	{label:"C", rowSpan: 3, style: STYLES.LARGE_SECTION_HEADER.tr},
				{label:"", rowSpan: 3, style: STYLES.LARGE_SECTION_HEADER.tr},
				{label:"0.075", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

	{td:[ {label:"0.075", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},
				{isInput: true, isCalculated: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},

	{td:[ {label:"TOTAL", style: STYLES.LARGE_LABEL.c},
				{isInput: true, type: 'number', style: STYLES.LARGE_LABEL.input},]},
]