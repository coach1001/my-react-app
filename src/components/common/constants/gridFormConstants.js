import * as STYLES from './styleConstants';


export const methods = [
	{
		code: 'A7',
		colLayout:[
			{ span:1,  width: "25%"},
			{ span:1,  width: "15%"},
			{ span:1,  width: "15%"},
			{ span:1,  width: "15%"},
			{ span:1,  width: "15%"},
			{ span:1,  width: "15%"},
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
				{style: STYLES.LARGE_LABEL.tr, label: "Mould Plush Wet Mass"},
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
		]
	},

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
				{style: STYLES.LARGE_LABEL.tr, label: "Fraction Coarse Sand (0.075 mm)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'sm_fcs'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Fraction Fine Sand"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'sm_ffs'},
			]},
			{td: [
				{style: STYLES.LARGE_LABEL.tr, label: "Fraction (0.075 mm)"},
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'sm_fm'},
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
				{style: STYLES.LARGE_LABEL.tr, label: "Percentage (0.075 mm)"},
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
				{style: STYLES.LARGE_LABEL.input,isVal:true,scopeVariable: 'll_wm3'},
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
				{style: STYLES.LARGE_LABEL.tr, isVal:false,label: "Riffled Fraction Passing 19mm Sieve"},
				{style: STYLES.LARGE_LABEL.input, isVal:true, scopeVariable: 'gr_rfp19'}
			]},			
			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "Reduction factor"},
				{style: STYLES.LARGE_LABEL.input, isVal:true, scopeVariable: 'gr_rf'}
			]},			

			{td: [ 
				{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "Dry Mass"},
				{style: STYLES.LARGE_LABEL.input, isVal:true, scopeVariable: 'gr_dm'}
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
				{label:'Mass Reduced',style: STYLES.LARGE_LABEL.c},
				{label:'Percentage Retained',style: STYLES.LARGE_LABEL.c},
				{label:'Cumulative Percentage Passing',style: STYLES.LARGE_LABEL.c},
			]},
		  
		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "105 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr1"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr1r"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr1"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp1"},
		 	]},

		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "75 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr2"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr2r"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr2"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp2"},
		 	]},

		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "63 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr3"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr3r"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr3"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp3"},
		 	]},

		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "53 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr4"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr4r"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr4"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp4"},
		 	]},

		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "37.5 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr5"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr5r"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr5"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp5"},
		 	]},

		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "26.5 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr6"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr6r"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr6"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp6"},
		 	]},
		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "19 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr7"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr7r"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr7"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp7"},
		 	]},
		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "13.2 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr8"},
		  	{style: STYLES.LARGE_LABEL.input},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr8"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp8"},
		 	]},
		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "4.75 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr9"},
		  	{style: STYLES.LARGE_LABEL.input},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr9"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp9"},
		 	]},
		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "2.0 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr10"},
		  	{style: STYLES.LARGE_LABEL.input},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr10"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp10"},
		 	]},
		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "0.425 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mr11"},
		  	{style: STYLES.LARGE_LABEL.input},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr11"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_cpp11"},
		 	]},
		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "< 0.425 mm"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_mp_tot"},
		  	{style: STYLES.LARGE_LABEL.input},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_pr_total"},
		  	{style: STYLES.LARGE_LABEL.input},
		 	]},
		  {td: [
		  	{style: STYLES.LARGE_LABEL.tr},		  	
		  	{style: STYLES.LARGE_LABEL.tr, isVal:false, label: "Dry Mass Calculated"},
		  	{style: STYLES.LARGE_LABEL.input, isVal:true,scopeVariable: "gr_dm_calc"},
		  	{style: STYLES.LARGE_LABEL.input},
		  	{style: STYLES.LARGE_LABEL.input},
		 	]},												
		]
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