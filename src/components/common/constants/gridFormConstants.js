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
{td:[	{width:"10%", value:"11", rowSpan: 7},
			{width:"40%", value:"12", rowSpan: 5},
			{width:"20%", value:"13"},
			{width:"20%", value:"14"},
			{width:"20%", value:"15"}]},

{td:[ {value:"21"},
			{value:"22"},
			{value:"23"}]},

{td:[ {value:"31"},
			{value:"32"},
			{value:"33"}]},

{td:[ {value:"41"},
			{value:"42"},
			{value:"43"}]},

{td:[ {value:"51"},
			{value:"52"},
			{value:"53"}]},

{td:[ {value:"61"},
			{value:"62"},
			{value:"63"},
			{value:"64"}]},

{td:[ {value:"71"},
			{value:"72"},
			{value:"73"},
			{value:"74"}]},

{td:[	{value:"81", rowSpan: 4},
			{value:"82", rowSpan: 4},
			{value:"83"},
			{value:"84"},
			{value:"85"}]},

{td:[ {value:"91"},
			{value:"92"},
			{value:"93"}]},

{td:[ {value:"10 1"},
			{value:"10 2"},
			{value:"10 3"}]},

{td:[ {value:"11 1"},
			{value:"11 2"},
			{value:"11 3"}]},

{td:[	{value:"12 1", rowSpan: 3},
			{value:"12 2", rowSpan: 3},
			{value:"12 3"},
			{value:"12 4"},
			{value:"12 5"}]},

{td:[ {value:"13 1"},
			{value:"13 2"}]},

{td:[ {value:"14 1"}]},
]