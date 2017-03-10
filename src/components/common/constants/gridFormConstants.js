import * as STYLES from './styleConstants';
import { Chart } from 'react-chartjs-2';

export const methods = [
	{//'3001-AG2'
		code: '3001-AG2',		
		colLayout: [
			{span: 1, width:'10%'},
			{span: 1, width:'20%'},
			{span: 1, width:'20%'},
			{span: 1, width:'20%'},
			{span: 1, width:'10%'}, 
		],
		grid: [			
			{td:[
				{},
				{style: STYLES.LARGE_LABEL.c,label: "Sample"},
				{style: STYLES.LARGE_LABEL.c,label: "Least Dimension"},
				{style: STYLES.LARGE_LABEL.c,label: "Running Average Least Dimension"},					
				{},
			]},
			{	isArray: true, scopeVariable: 'sans_ag2_ld',
				
				td:[
						{isIcon: true, icon: 'minus',isVal:true},
						{style: STYLES.LARGE_LABEL.input,arrayVal: 'index',isVal:true, arrUnit: ''},
						{style: STYLES.LARGE_LABEL.input,arrayVal: 'value',isVal:true, arrUnit: 'mm', type: 'in_array'},
						{style: STYLES.LARGE_LABEL.input,arrayVal: 'average',isVal:true, arrUnit: 'mm'},
						{isIcon: true, icon: 'plus',isVal:true},
			]},
			{td: [
				{},
				{style: STYLES.LARGE_LABEL.tr, label: "Average Least Dimension"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'sans_ag2_ald'},				
			]},			
		],			
	},

	{//A17
		code: 'A17',
		colLayout: [
			{span: 1, width:'40%'},
			{span: 1, width:'20%'},
			{span: 1, width:'20%'},
			{span: 1, width:'20%'}, 
		],

		grid:[
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Number of Method Samples"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mcs_nop'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.c},
				{style: STYLES.LARGE_LABEL.c, label: "1"},
				{style: STYLES.LARGE_LABEL.c, label: "2"},
				{style: STYLES.LARGE_LABEL.c, label: "3"},							
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Pan Number"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mcs_pn1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mcs_pn2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mcs_pn3'},
			]},	
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Wet Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mcs_wm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mcs_wm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mcs_wm3'},
			]},	
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Dry Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mcs_dm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mcs_dm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mcs_dm3'},
			]},	
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Pan Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mcs_pm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mcs_pm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mcs_pm3'},
			]},	
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Moisture Content"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mcs_mcs1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mcs_mcs2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mcs_mcs3'},
			]},	

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Average Moisture Content"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mcs_avg'},

			]},	
		],		
	},//A17

	{//A16T
		code: 'A16T',
		colLayout: [
			{span: 1, width:'40%'},
			{span: 1, width:'20%'},
			{span: 1, width:'20%'},
			{span: 1, width:'20%'}, 
		],

		grid:[
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Number of ITS Methods"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'its_nos'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.c},
				{style: STYLES.LARGE_LABEL.c, label: "1"},
				{style: STYLES.LARGE_LABEL.c, label: "2"},
				{style: STYLES.LARGE_LABEL.c, label: "3"},							
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Maximum Load"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'its_mkn1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'its_mkn2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'its_mkn3'},
			]},	
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Indirect Tensile Strength"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'its_mkpa1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'its_mkpa2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'its_mkpa3'},
			]},	
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Average ITS"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'its_mkpaa'},

			]},	
		],		
	},//A16T

	{//A14
		code: 'A14',
		colLayout: [
			{span: 1, width:'40%'},
			{span: 1, width:'20%'},
			{span: 1, width:'20%'},
			{span: 1, width:'20%'}, 
		],

		grid:[
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Number of UCS Methods"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'ucs_nos'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.c},
				{style: STYLES.LARGE_LABEL.c, label: "1"},
				{style: STYLES.LARGE_LABEL.c, label: "2"},
				{style: STYLES.LARGE_LABEL.c, label: "3"},							
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Maximum Load"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'ucs_mkn1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'ucs_mkn2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'ucs_mkn3'},
			]},	
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Unconfined Compression Strength"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'ucs_mkpa1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'ucs_mkpa2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'ucs_mkpa3'},
			]},	
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Average UCS"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'ucs_mkpaa'},

			]},	
		],		
	},//A14

	{//A13T
		code: 'A13T',
		colLayout: [
			{span: 1, width:'40%'},
			{span: 1, width:'20%'},
			{span: 1, width:'20%'},
			{span: 1, width:'20%'}, 
		],

		grid:[
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Number of Sample Methods"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'rsc_nos'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.c},
				{style: STYLES.LARGE_LABEL.c, label: "1"},
				{style: STYLES.LARGE_LABEL.c, label: "2"},
				{style: STYLES.LARGE_LABEL.c, label: "3"},							
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Start Time"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'rsc_st1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'rsc_st2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'rsc_st3'},
			]},	
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Finish Time"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'rsc_ft1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'rsc_ft2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'rsc_ft3'},
			]},	
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Curing Time"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'rsc_ct1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'rsc_ct2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'rsc_ct3'},
			]},	
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Maximum Load"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'rsc_mkn1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'rsc_mkn2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'rsc_mkn3'},
			]},	
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Average Maximum Load"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'rsc_aml'},

			]},	
		],
	},

	{//A8
		code: 'A8',
		colLayout: [
			{span: 1, width:'25%'},
			{span: 1, width:'20%'},
			{span: 1, width:'20%'},
			{span: 1, width:'20%'}, 			
		],

		grid: [

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Maximum Dry Density"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mdd'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Optimum Moisture Content"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_omc'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Number of Pans"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_nop'},
			]},
			{td: [ 
				{style: STYLES.LARGE_LABEL.c},				
				{style: STYLES.LARGE_LABEL.c, label: "1"},
				{style: STYLES.LARGE_LABEL.c, label: "2"},
				{style: STYLES.LARGE_LABEL.c, label: "3"},
			]},

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Pan Number"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pn1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pn2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pn3'},
			]},					
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Initial Dry Mass Plus Pan"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_idmp1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_idmp2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_idmp3'},
			]},					
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Final Dry Mass Plus Pan"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_fdmp1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_fdmp2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_fdmp3'},
			]},					
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Mass Pan"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mp1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mp2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mp3'},
			]},					
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Moisture Content Hygro"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mch1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mch2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mch3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Average Moisture Content Hygro"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mcha'},
			]},					

			{td: [ 
				{style: STYLES.LARGE_LABEL.c},				
				{style: STYLES.LARGE_LABEL.c, label: "Modified AASHTO"},
				{style: STYLES.LARGE_LABEL.c, label: "Intermediate"},
				{style: STYLES.LARGE_LABEL.c, label: "Proctor"},
			]},
					
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Sample Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_sm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_sm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_sm3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Water Added"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_wa1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_wa2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_wa3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Mould Number"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mn1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mn2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mn3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Mould Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mm3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Mould Volume"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mv1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mv2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mv3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Mould Plus Wet Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mwm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mwm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mwm3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Wet Density"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_wd1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_wd2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_wd3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Estimated Dry Density"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_edd1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_edd2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_edd3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Pan Number"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pn1n'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pn2n'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pn3n'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Pan Wet Mass Plus Pan"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pwmp1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pwmp2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pwmp3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Pan Dry Mass Plus Pan"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pdmp1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pdmp2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pdmp3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Pan Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pm3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Actual Moisture Content"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_amc1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_amc2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_amc3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Actual Dry Density"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_add1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_add2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_add3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "% Compaction"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_mmx1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_imx1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pmx1'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Hydroscopic Moisture"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_hm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_hm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_hm3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Swell Initial Reading"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_si1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_si2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_si3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Swell Final Reading"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_sf1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_sf2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_sf3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Percentage Swell"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_ps1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_ps2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_ps3'},				
			]},		
			{td: [
				{style: STYLES.LARGE_LABEL.c,colSpan:4, label: "Penetration Data"},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "0.00 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_1_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_1_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_1_3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "0.635 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_2_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_2_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_2_3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "1.27 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_3_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_3_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_3_3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "1.905 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_4_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_4_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_4_3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "2.54 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_5_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_5_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_5_3'},				
			]},

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "3.175 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_6_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_6_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_6_3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "3.81 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_7_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_7_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_7_3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "4.445 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_8_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_8_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_8_3'},				
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "5.08 mm "},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_9_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_9_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_9_3'},				
			]},		
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "5.715 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_10_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_10_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_10_3'},				
			]},		

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "6.35 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_11_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_11_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_11_3'},				
			]},		

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "6.985 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_12_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_12_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_12_3'},				
			]},		

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "7.62 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_13_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_13_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_13_3'},				
			]},		

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "8.255 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_14_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_14_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_14_3'},				
			]},		

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "8.89 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_15_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_15_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_15_3'},				
			]},		

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "9.525 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_16_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_16_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_16_3'},				
			]},		

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "10.16 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_17_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_17_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_17_3'},				
			]},		

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "10.795 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_18_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_18_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_18_3'},				
			]},		
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "11.43 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_19_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_19_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_19_3'},				
			]},		
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "12.065 mm"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_20_1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_20_2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_pd_20_3'},				
			]},		

			{td: [
				{style: STYLES.LARGE_LABEL.thin, colSpan: 4},
			]},		

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Corrected kN (0.254 mm)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_ckn1_d1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_ckn2_d1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_ckn3_d1'},				
			]},		
			
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "CBR (0.254 mm)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_1_d1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_2_d1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_3_d1'},				
			]},		

			{td: [
				{style: STYLES.LARGE_LABEL.c, label: "% Compaction"},
				{style: STYLES.LARGE_LABEL.c,label: 'CBR'},
			]},		

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "90"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_at_90'},
			]},		

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "93"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_at_93'},
			]},		

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "95"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_at_95'},
			]},		

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "97"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_at_97'},
			]},		

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "98"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_at_98'},
			]},		

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "100"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'cbr_at_100'},
			]},		

		],

		hasGraph: true,
		graph:
		[//GRAPH ARRAY		
			{//GRAPH 1
				addMaxY: 1,
				roundOff: 1,								

				options: {
					//maintainAspectRatio: false,
					scales: {
						xAxes: [
							{
								scaleLabel:{display: true,labelString: 'Depth Penetration (mm)',},
								type:'linear',position: 'bottom',
								ticks:{
									stepSize: 0.635,
									minRotation: 90,
									callback: function(label,index,labels){																			
											return label.toFixed(3);																	
									}
								}
							}	
						],
						yAxes: [					
							{							
								scaleLabel:{display: true,labelString: 'Load (kN)'},
								type:'linear',
								ticks:{
									stepSize: 0.1,
									callback: function(label){
										if(label % 0.5 === 0){
											return label;
										}else{
											return '';
										}
									}
								},
							}
						]					
					},
				},		
				
				dataSets:[
					{ 				                          
		        label: 'CBR Curve (1)',                          
		        showLine: true,
		        pointRadius: 4,	        
		        pointBackgroundColor: 'red',                          
		        borderColor: 'red',
		        fill: false,
		        data: [
							{sy: 'cbr_pd_1_1', x:0},
							{sy: 'cbr_pd_2_1', x:0.635},
							{sy: 'cbr_pd_3_1', x:1.27},
							{sy: 'cbr_pd_4_1', x:1.905},
							{sy: 'cbr_pd_5_1', x:2.54},
							{sy: 'cbr_pd_6_1', x:3.175},
							{sy: 'cbr_pd_7_1', x:3.81},
							{sy: 'cbr_pd_8_1', x:4.445},
							{sy: 'cbr_pd_9_1', x:5.08},
							{sy: 'cbr_pd_10_1', x:5.715},
							{sy: 'cbr_pd_11_1', x:6.35},
							{sy: 'cbr_pd_12_1', x:6.985},
							{sy: 'cbr_pd_13_1', x:7.62},
							{sy: 'cbr_pd_14_1', x:8.255},
							{sy: 'cbr_pd_15_1', x:8.89},
							{sy: 'cbr_pd_16_1', x:9.525},
							{sy: 'cbr_pd_17_1', x:10.16},
							{sy: 'cbr_pd_18_1', x:10.795},
							{sy: 'cbr_pd_19_1', x:11.43},
							{sy: 'cbr_pd_20_1', x:12.065},
						]
					},
					{ 				                          
		        label: 'CBR Curve (2)',                          
		        showLine: true,
		        pointRadius: 4,	        
		        pointBackgroundColor: 'blue',                          
		        borderColor: 'blue',
		        fill: false,
		        data: [						
							{sy: 'cbr_pd_1_2', x:0},
							{sy: 'cbr_pd_2_2', x:0.635},
							{sy: 'cbr_pd_3_2', x:1.27},
							{sy: 'cbr_pd_4_2', x:1.905},
							{sy: 'cbr_pd_5_2', x:2.54},
							{sy: 'cbr_pd_6_2', x:3.175},
							{sy: 'cbr_pd_7_2', x:3.81},
							{sy: 'cbr_pd_8_2', x:4.445},
							{sy: 'cbr_pd_9_2', x:5.08},
							{sy: 'cbr_pd_10_2', x:5.715},
							{sy: 'cbr_pd_11_2', x:6.35},
							{sy: 'cbr_pd_12_2', x:6.985},
							{sy: 'cbr_pd_13_2', x:7.62},
							{sy: 'cbr_pd_14_2', x:8.255},
							{sy: 'cbr_pd_15_2', x:8.89},
							{sy: 'cbr_pd_16_2', x:9.525},
							{sy: 'cbr_pd_17_2', x:10.16},
							{sy: 'cbr_pd_18_2', x:10.795},
							{sy: 'cbr_pd_19_2', x:11.43},
							{sy: 'cbr_pd_20_2', x:12.065},
						]
					},
					{ 				                          
		        label: 'CBR Curve (3)',                          
		        showLine: true,
		        pointRadius: 4,	        
		        pointBackgroundColor: 'green',                          
		        borderColor: 'green',
		        fill: false,
		        data: [						
							{sy: 'cbr_pd_1_3', x:0},
							{sy: 'cbr_pd_2_3', x:0.635},
							{sy: 'cbr_pd_3_3', x:1.27},
							{sy: 'cbr_pd_4_3', x:1.905},
							{sy: 'cbr_pd_5_3', x:2.54},
							{sy: 'cbr_pd_6_3', x:3.175},
							{sy: 'cbr_pd_7_3', x:3.81},
							{sy: 'cbr_pd_8_3', x:4.445},
							{sy: 'cbr_pd_9_3', x:5.08},
							{sy: 'cbr_pd_10_3', x:5.715},
							{sy: 'cbr_pd_11_3', x:6.35},
							{sy: 'cbr_pd_12_3', x:6.985},
							{sy: 'cbr_pd_13_3', x:7.62},
							{sy: 'cbr_pd_14_3', x:8.255},
							{sy: 'cbr_pd_15_3', x:8.89},
							{sy: 'cbr_pd_16_3', x:9.525},
							{sy: 'cbr_pd_17_3', x:10.16},
							{sy: 'cbr_pd_18_3', x:10.795},
							{sy: 'cbr_pd_19_3', x:11.43},
							{sy: 'cbr_pd_20_3', x:12.065},
						]
					},					
				]		
			},//GRAPH 1
			{//GRAPH2
				addMaxY: 3,
				roundOff: 1,
				options: {
					
					hover: {
						animationDuration: 0
					},

					animation: {
						duration: 0,
						onComplete: function () {
						    
						    var ctx = this.chart.ctx;						     
						    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
						    ctx.fillStyle = this.chart.config.options.defaultFontColor;
						    ctx.textAlign = 'center';
						    ctx.textBaseline = 'bottom';
						    
						    this.data.datasets.forEach(function (dataset) {
						        for (var i = 0; i < dataset.data.length; i++) {
						            
						            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;						            
						            var string = '' 
						            try{
						            	string = `(${dataset.data[i].x.toFixed(0)}, ${dataset.data[i].y.toFixed(0)})`;
						            }catch(e){						            		
						            	string = '';
						            } 
						             
						            						            
												ctx.save();
												ctx.translate(model.x, model.y);
												ctx.rotate(-Math.PI/1.5 );

												ctx.textAlign = 'left';
												ctx.fillText(string , 10, 5);

												ctx.restore();
						        }
						    });
						}},

					scales: {
						xAxes: [
							{
								scaleLabel:{display: true,labelString: '% Compaction',},
								type:'linear',position: 'bottom',
								ticks:{
									stepSize: 1,
									minRotation: 90,
									callback: function(label,index,labels){
										return label.toFixed(2);						
									}
								}
							}	
						],
						yAxes: [					
							{							
								scaleLabel:{display: true,labelString: 'CBR'},
								type:'linear',
								ticks:{
								},
							}
						]					
					},
				},
				dataSets:[
					{ 				                          
		        label: 'CBR (2.54 mm)',                          
		        showLine: true,
		        pointRadius: 4,	        
		        pointBackgroundColor: 'red',                          
		        borderColor: 'red',
		        fill: false,
		        lineTension: 0,
		        data: [						
		        	{sx:'cbr_mmx1',sy: 'cbr_1_d1'},
		        	{sx:'cbr_imx1',sy: 'cbr_2_d1'},
		        	{sx:'cbr_pmx1',sy: 'cbr_3_d1'},
						]
					},
					
					{ 				                          
		        label: 'CBR (2.54 mm - Normalized)',                          
		        showLine: true,
		        pointRadius: 4,	        
		        fill: false,
		        isFormula: true,
		        lineTension: 0,
		        regression: 'linear',
		        xInputs: [
		        	{x:90,scopeVal:'cbr_at_90'},
		        	{x:93,scopeVal:'cbr_at_93'},
		        	{x:95,scopeVal:'cbr_at_95'},
		        	{x:97,scopeVal:'cbr_at_97'},
		        	{x:98,scopeVal:'cbr_at_98'},
		        	{x:100,scopeVal:'cbr_at_100'},
		        ],
		        data: [						
		        	{sx:'cbr_pmx1',sy: 'cbr_3_d1'},		        	
		        	{sx:'(cbr_mmx1+cbr_imx1)/2',sy: '(cbr_1_d1+cbr_2_d1)/2', isFormula:true, scopeVariables: ['cbr_mmx1','cbr_imx1','cbr_1_d1','cbr_2_d1'] }
						]
					}
				]	
			},//GRAPH2

		]//GRAPH ARRAY
	},//A8

	{//A7
		code: 'A7',
		hasGraph: true,
		colLayout:[
			{ span:1,  width: "30%"},
			{ span:1,  width: "14%"},
			{ span:1,  width: "14%"},
			{ span:1,  width: "14%"},
			{ span:1,  width: "14%"},
			{ span:1,  width: "14%"},
		],
		grid:[
			{td: [ 
				{style: STYLES.LARGE_LABEL.c, isVal:false,label: "Points"},				
				{style: STYLES.LARGE_LABEL.c, label: "1"},
				{style: STYLES.LARGE_LABEL.c, label: "2"},
				{style: STYLES.LARGE_LABEL.c, label: "3"},
				{style: STYLES.LARGE_LABEL.c, label: "4"},
				{style: STYLES.LARGE_LABEL.c, label: "5"},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Sample Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_sm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_sm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_sm3'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_sm4'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_sm5'},
			]},						
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Percentage Added"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pa1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pa2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pa3'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pa4'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pa5'},
			]},						
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Water Added"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_wa1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_wa2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_wa3'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_wa4'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_wa5'},
			]},						
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Mould Number"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mn1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mn2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mn3'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mn4'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mn5'},
			]},						
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Mould Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mm3'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mm4'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mm5'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Mould Volume"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mv1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mv2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mv3'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mv4'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mv5'},
			]},										
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Mould Plus Wet Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mwm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mwm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mwm3'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mwm4'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mwm5'},
			]},						
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Wet Density"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_wd1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_wd2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_wd3'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_wd4'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_wd5'},
			]},						
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Estimated Dry Density"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_edd1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_edd2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_edd3'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_edd4'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_edd5'},
			]},						
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Pan Number"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pn1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pn2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pn3'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pn4'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pn5'},
			]},						
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Pan Wet Mass Plus Plan"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pwmp1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pwmp2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pwmp3'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pwmp4'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pwmp5'},
			]},						
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Pan Dry Mass Plus Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pdmp1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pdmp2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pdmp3'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pdmp4'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pdmp5'},
			]},						
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Pan Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pm3'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pm4'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_pm5'},
			]},						
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Actual Moisture Content"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_amc1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_amc2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_amc3'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_amc4'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_amc5'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Actual Dry Density"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_add1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_add2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_add3'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_add4'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_add5'},
			]},												
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Hydroscopic Moisture"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_hm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_hm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_hm3'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_hm4'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_hm5'},
			]},

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Maximum Dry Density (Read from Graph)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_mdd'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Optimum Moisture Content (Read from Graph)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'mdd_omc'},
			]},												
		],

		graph:[{
			
			addMaxY: 100,
			roundOff: 100,						

			options: {				

				hover: {
					animationDuration: 0
				},

				onClick: function(e){
					const chartA = this.chartArea;
					const chartO = this;
										
					let px = e.layerX - chartA.left;
					if(px < 0){ px = 0; }
					
					let cWidthPx = chartA.right - chartA.left;
					let cHeightPx = chartA.bottom - chartA.top;
										
					let cWidthDt = chartO.scales['x-axis-0'].max - chartO.scales['x-axis-0'].min;
					let cHeightDt = chartO.scales['y-axis-0'].max - chartO.scales['y-axis-0'].min; 

					let py = cHeightPx - (e.layerY - chartA.top) ; 
					if(py < 0){ py = 0; }
					

					let dx = chartO.scales['x-axis-0'].min + px*(cWidthDt/cWidthPx);
					let dy = chartO.scales['y-axis-0'].min + py*(cHeightDt/cHeightPx);

					dx = Math.round(dx*10)/10;
					dy = Math.round(dy*10)/10;
					this.options.dataAddCallBack({x: dx, y: dy, pop:true});																			
				},

				animation: {
					duration: 500,
					onComplete: function () {
					    var ctx = this.chart.ctx;					     
					    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
					    ctx.fillStyle = this.chart.config.options.defaultFontColor;
					    ctx.textAlign = 'center';
					    ctx.textBaseline = 'bottom';
					    
					    this.data.datasets.forEach(function (dataset, di) {
					        for (var i = 0; i < dataset.data.length; i++) {					      			      					            
					            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;						            
					            var string = `(${dataset.data[i].x}, ${dataset.data[i].y})`;					            						            
					            
											ctx.save();
											ctx.translate(model.x, model.y);
											ctx.rotate(-Math.PI/2);

											ctx.textAlign = 'left';
											ctx.fillText(string , 10, 5);

											ctx.restore();
					        }
					    });
					}},

				scales: {
					xAxes: [
						{
							scaleLabel:{display: true,labelString: 'Moisture Content (%)',},
							type:'linear',position: 'bottom',
							ticks:{
								//min: 0,
								//max: 20,
								stepSize: 0.05,
								minRotation: 90,
								callback: function(label,index,labels){
									if(label % 1 === 0){
										return label.toFixed(1);
									}else{
										return '';
									}
								}								
							}
						}	
					],
					yAxes: [					
						{							
							scaleLabel:{display: true,labelString: 'Dry Density (kg/m^3)'},
							type:'linear',
							ticks:{
								stepSize: 10,
								callback: function(label,index,labels){
									if(label % 20 === 0){
										return label.toFixed(1);
									}else{
										return '';
									}
								}								
							},
						}
					]					
				},
			},	

			dataSets:[
				{ 				                          
	        label: 'Estimated Dry Density and Percentage Water Added',                          
	        showLine: false,
	        pointRadius: 3,	        
	        pointBackgroundColor: 'red',                          
	        borderColor: 'red',
	        fill: false,	        
          data: [						
						{ sx: 'mdd_pa1', sy: 'mdd_edd1'},
						{ sx: 'mdd_pa2', sy: 'mdd_edd2'},
						{ sx: 'mdd_pa3', sy: 'mdd_edd3'},
						{ sx: 'mdd_pa4', sy: 'mdd_edd4'},
						{ sx: 'mdd_pa5', sy: 'mdd_edd5'},
						{ sx: 'mdd_omc', sy: 'mdd_mdd', pop:true, toggleLine: true},										
					]
				},
				{ 				                          
	        label: 'Actual Dry Density and Actual Moisture Content',                          
	        showLine: false,
	        pointRadius: 3,	        
	        pointBackgroundColor: 'blue',                          
	        borderColor: 'blue',
	        fill: false,
          data: [						
						{ sx: 'mdd_amc1', sy: 'mdd_add1'},
						{ sx: 'mdd_amc2', sy: 'mdd_add2'},
						{ sx: 'mdd_amc3', sy: 'mdd_add3'},
						{ sx: 'mdd_amc4', sy: 'mdd_add4'},
						{ sx: 'mdd_amc5', sy: 'mdd_add5'},										
					]
				}
			]							
		}]
	},//A7

	{//A6
		code: 'A6',
		colLayout:[
			{ span:1,  width: "30%"},
			{ span:1,  width: "25%"},
			{ span:1,  width: "30%"},
			{ span:1,  width: "25%"},
		],
		grid:[
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Input Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'hd_im'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Temperature Before"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'hd_tmp1'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Reading (18 seconds)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'hd_18'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Reading (40 seconds)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'hd_40'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Temperature After"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'hd_tmp2'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Reading (3600 seconds)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'hd_3600'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Corrected Reading (18 seconds)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'hd_c18'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Corrected Reading (40 seconds)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'hd_c40'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Corrected Reading (3600 seconds)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'hd_c3600'},
			]},
		]
	},//A6

	{//A5
		code: 'A5',
		colLayout: [
			{ span:1,  width: "30%"},
			{ span:1,  width: "25%"},
			{ span:1,  width: "30%"},
			{ span:1,  width: "25%"},
		],
		grid:[
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Initial Sample Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'sm_ism'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Mass Retained"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'sm_mr10'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Percentage Retained (0.075 mm)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'sm_pr10'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Percentage Passing (0.075 mm)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'sm_pp10'},
			]},
			{td: [
		  	{style: STYLES.LARGE_LABEL.thin,colSpan: 2},
		  ]},		 	

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Fraction Coarse Sand (2.0 mm - 0.425 mm)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'sm_fcs'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Fraction Fine Sand (0.425 mm - 0.075 mm)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'sm_ffs'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Fraction ( < 0.075 mm)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'sm_fm'},
			]},
			{td: [
		  	{style: STYLES.LARGE_LABEL.thin,colSpan: 2},
		  ]},		 	
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Percentage Coarse Sand"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'sm_pcs'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Percentage Fine Sand"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'sm_pfs'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Percentage ( < 0.075 mm)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'sm_pfm'},
			]},		
		]
	},//A5

	{//A4
		code: 'A4',
		colLayout: [
			{ span:1,  width: "25%"},
			{ span:1,  width: "25%"},
			{ span:1,  width: "25%"},
			{ span:1,  width: "25%"},
		],
		grid: [
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Through Number"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'ls_tn'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Blows"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'ls_bl'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Linear Shrinkage"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'ls_ls'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Percentage Linear Shrinkage"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'ls_pls'},
			]},
		]	
	},//A4

	{//A3
		code: 'A3',
		colLayout: [
			{ span:1,  width: "25%"},
			{ span:1,  width: "25%"},
			{ span:1,  width: "25%"},
			{ span:1,  width: "25%"},
		],
		grid: [

			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, label: "Number of Points"},
				{style: STYLES.LARGE_LABEL.input, isVal:true, scopeVariable: 'pl_nop'}
			]},
			
			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false,label: ""},				
				{style: STYLES.LARGE_LABEL.c, label: "1"},
				{style: STYLES.LARGE_LABEL.c, label: "2"},
				{style: STYLES.LARGE_LABEL.c, label: "3"},
			]},

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Pan Number"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'pl_pn1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'pl_pn2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'pl_pn3'},
			]},

			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false,label: "Wet Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'pl_wm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'pl_wm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'pl_wm3'},
			]},
			
			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false,label: "Dry Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'pl_dm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'pl_dm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'pl_dm3'},
			]},

			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false,label: "Pan Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'pl_pm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'pl_pm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'pl_pm3'},
			]},

			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false,label: "Plasitc Limit"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'pl_pl1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'pl_pl2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'pl_pl3'},
			]},

			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false,label: "Average Plastic Limit"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'pl_avg'},								
			]},

			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false,label: "Plasticity Index"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'pl_pi'},								
			]},
		],
	},//A3

	{//A2
		code: 'A2',
		colLayout: [
			{ span:1,  width: "25%"},
			{ span:1,  width: "25%"},
			{ span:1,  width: "25%"},
			{ span:1,  width: "25%"},
		],
		grid: [

			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, label: "Number of Points"},
				{style: STYLES.LARGE_LABEL.input, isVal:true, scopeVariable: 'll_nop'}
			]},
			
			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false,label: ""},				
				{style: STYLES.LARGE_LABEL.c, label: "1"},
				{style: STYLES.LARGE_LABEL.c, label: "2"},
				{style: STYLES.LARGE_LABEL.c, label: "3"},
			]},

			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Pan Number"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_pn1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_pn2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_pn3'},
			]},

			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false,label: "Blows"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_bl1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_bl2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_bl3'},
			]},

			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false,label: "Wet Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_wm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_wm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_wm3'},
			]},
			
			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false,label: "Dry Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_dm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_dm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_dm3'},
			]},

			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false,label: "Pan Mass"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_pm1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_pm2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_pm3'},
			]},

			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false,label: "Liquid Limit"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_ll1'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_ll2'},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_ll3'},
			]},

			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false,label: "Average Liquid Limit"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_avg'},								
			]},
		],
	},//A2

	{//A1
		code: 'A1',
		colLayout: [
			{ span:1,  width: "20%"},
			{ span:1,  width: "20%"},
			{ span:1,  width: "20%"},
			{ span:1,  width: "20%"},
			{ span:1,  width: "20%"},		
		],
		grid: [
					
			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false,label: "Total Sample Mass"},
				{style: STYLES.LARGE_LABEL.input, isVal:true, scopeVariable: 'gr_tsm'}
			]},						
			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "Total Passing 19mm Sieve"},
				{style: STYLES.LARGE_LABEL.input, isVal:true, scopeVariable: 'gr_tp19'}
			]},			
			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false,label: "Riffled Mass ( < 19 mm)"},
				{style: STYLES.LARGE_LABEL.input, isVal:true, scopeVariable: 'gr_rfp19'}
			]},			
			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "Reduction factor"},
				{style: STYLES.LARGE_LABEL.input, isVal:true, scopeVariable: 'gr_rf'}
			]},			
			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "Initial Sieve (<0.425 mm)"},
				{style: STYLES.LARGE_LABEL.input, isVal:true, scopeVariable: 'gr_is'}
			]},			

			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "Washed (<0.425 mm)"},
				{style: STYLES.LARGE_LABEL.input, isVal:true, scopeVariable: 'gr_wa'}
			]},			
		  {td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "Final (<0.425 mm)"},
				{style: STYLES.LARGE_LABEL.input, isVal:true, scopeVariable: 'gr_fi'}
			]},				
			{td: [
				{label:'Sieve Arpeture Size',style: STYLES.LARGE_LABEL.c},
				{label:'Mass Retained',style: STYLES.LARGE_LABEL.c},				
				{label:'Percentage Retained',style: STYLES.LARGE_LABEL.c},
				{label:'Cumulative Percentage Passing',style: STYLES.LARGE_LABEL.c},
				
			]},
		  
		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "105 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr1"},		  	
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr1"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp1"},
		  	
		 	]},

		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "75 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr2"},		  	
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr2"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp2"},
				
		 	]},

		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "63 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr3"},		  	
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr3"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp3"},
		  	
		 	]},

		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "53 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr4"},		  	
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr4"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp4"},
		  	
		 	]},

		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "37.5 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr5"},		  	
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr5"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp5"},
		  
		 	]},

		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "26.5 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr6"},		  	
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr6"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp6"},
		  	
		 	]},
		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "19 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr7"},	  	
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr7"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp7"},		  
		 	]},
			{td: [
		  	{style: STYLES.LARGE_LABEL.thin,colSpan: 4},
		  ]},		 	
		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "13.2 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr8"},		  	
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr8"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp8"},
		  
		 	]},
		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "4.75 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr9"},		  	
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr9"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp9"},
		  
		 	]},
		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "2.0 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr10"},		  	
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr10"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp10"},
		  
		 	]},
		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "0.425 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr11"},		  	
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr11"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp11"},
		  
		 	]},
		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "< 0.425 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr12"},		  	
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr12"},
		  			  	
		 	]},		 							
		],
		hasGraph: true,
	
		graph:[{
				addMaxY: 40,
				roundOff: 1,

				options: {
					
					hover: {
						animationDuration: 0
					},
					
					animation: {
						duration: 0,
						onComplete: function () {
						    
						    var ctx = this.chart.ctx;						     
						    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
						    ctx.fillStyle = this.chart.config.options.defaultFontColor;
						    ctx.textAlign = 'center';
						    ctx.textBaseline = 'bottom';
						    
						    this.data.datasets.forEach(function (dataset) {
						        for (var i = 0; i < dataset.data.length; i++) {
						            
						            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;						            
						            var string = `(${dataset.data[i].x}, ${dataset.data[i].y})`;
						            						            
												ctx.save();
												ctx.translate(model.x, model.y);
												ctx.rotate(-Math.PI/2 );

												ctx.textAlign = 'left';
												ctx.fillText(string , 10, 5);

												ctx.restore();
						        }
						    });
						}},

					scales: {
						xAxes: [
							{
								scaleLabel:{display: true,labelString: 'Sieve Size (mm)',},
								type:'logarithmic',position: 'bottom',
								ticks:{									
									minRotation: 90,
									callback: function(label,index,labels){
										return label.toFixed(2);						
									}
								}
							}	
						],
						yAxes: [					
							{							
								scaleLabel:{display: true,labelString: 'Percentage Passing (%)'},
								type:'linear',
								ticks:{
								},
							}
						]					
					},
				},							
				

				dataSets:[				
				{ 				                          
	        label: 'Cummulative Percentage Passing',	            
	        showLine: true,
	        pointRadius: 4,	        
	        pointBackgroundColor: 'red',                          
	        borderColor: 'red',
	        lineTension: 0.2,
          data: [						
						{ sy: 'gr_cpp1', x: 105},
						{ sy: 'gr_cpp2', x: 75},
						{ sy: 'gr_cpp3', x: 63},
						{ sy: 'gr_cpp4', x: 53},
						{ sy: 'gr_cpp5', x: 37.5},
						{ sy: 'gr_cpp6', x: 26.5},
						{ sy: 'gr_cpp7', x: 19},
						{ sy: 'gr_cpp8', x: 13.2},										
						{ sy: 'gr_cpp9', x: 4.75},
						{ sy: 'gr_cpp10', x: 2.00},
						{ sy: 'gr_cpp11', x: 0.425},
						{ sy: 'sm_fm', x: 0.075},

					]
				}
			]							
		}]
	}//A1
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