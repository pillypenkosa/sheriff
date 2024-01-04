const arrListSheriffFabulyType = [

	{ id: 'all' 				, title: 'Категорії (всі)' 				, },

	{ id: 'pdr_postanova' 		, title: 'Постанови ПДР' 				, },
	{ id: 'pdr_protokol' 		, title: 'Протоколи ПДР ' 				, },

	{ id: 'move' 				, title: 'Рух ТЗ' 						, },
	{ id: 'stop' 				, title: 'Зупинка/стоянка ТЗ' 			, },
	{ id: 'disrepair' 			, title: 'Несправності ТЗ' 				, },
	{ id: 'light' 				, title: 'Світлові прилади ТЗ' 			, },
	{ id: 'traffic_light' 		, title: 'Світлофори / регулювальник' 	, },
	{ id: 'sign' 				, title: 'Знаки' 						, },
	{ id: 'emergency' 			, title: 'Аварійна ситуація' 			, },
	{ id: 'doc' 				, title: 'Документи' 					, },
	
	//{ id: 'evacuation' 			, title: 'Евакуація' 				, },

	{ id: 'kupap_a121_p1' 		, title: 'КУпАП ст. 121 ч. 1' 			, },
	{ id: 'kupap_a121_p2' 		, title: 'КУпАП ст. 121 ч. 2' 			, },
	{ id: 'kupap_a121_p5' 		, title: 'КУпАП ст. 121 ч. 5' 			, },


	{ id: 'kupap_a121_p10' 		, title: 'КУпАП ст. 121 ч. 10' 			, },
	



	{ id: 'kupap_a121_3_p1' 	, title: 'КУпАП ст. 121-3 ч. 1' 		, },
	{ id: 'kupap_a122_p1' 		, title: 'КУпАП ст. 122 ч. 1' 			, },
	{ id: 'kupap_a122_p2' 		, title: 'КУпАП ст. 122 ч. 2' 			, },
	{ id: 'kupap_a122_p3' 		, title: 'КУпАП ст. 122 ч. 3' 			, },
	{ id: 'kupap_a122_p4' 		, title: 'КУпАП ст. 122 ч. 4' 			, },
	{ id: 'kupap_a122_p5' 		, title: 'КУпАП ст. 122 ч. 5' 			, },
	{ id: 'kupap_a122_p6' 		, title: 'КУпАП ст. 122 ч. 6' 			, },


	//{ id: 'kupap_a123_p1' 		, title: 'КУпАП ст. 123 ч. 1' 		, },
	{ id: 'kupap_a126_p1' 		, title: 'КУпАП ст. 126 ч. 1' 			, },
	{ id: 'kupap_a126_p2' 		, title: 'КУпАП ст. 126 ч. 2' 			, },
	{ id: 'kupap_a126_p4' 		, title: 'КУпАП ст. 126 ч. 4' 			, },
	{ id: 'kupap_a127_p1' 		, title: 'КУпАП ст. 127 ч. 1' 			, },

	{ id: 'kupap_a130' 			, title: 'КУпАП ст. 130' 				, },
	//{ id: 'kupap_a130_p1' 		, title: 'КУпАП ст. 130 ч. 1' 		, },
	
	{ id: 'gb' 					, title: 'ГБ' 							,  },
	//{ id: 'gb_postanova' 		, title: 'Постанови ГБ' 				, },
	//{ id: 'gb_protokol' 		, title: 'Протоколи ГБ ' 				, },






	//{ id: 'kupap_a175_1_p1' 	, title: 'КУпАП ст. 175-1 ч. 1' 		, },
	//{ id: 'kupap_a178_p1' 	, title: 'КУпАП ст. 178 ч. 1' 			, },
	//{ id: 'speed' 			, title: 'Швидкість' 					, },
	//{ id: 'pedestrian' 		, title: 'Пішоходи' 					, },
];





let objListSheriffFabulyType = {};
arrListSheriffFabulyType.forEach( k => {
	objListSheriffFabulyType[ k.id ] = k;
});





const objSheriffdictionary = {

	intro 			: '16.05.2023 р. о 12:00 в м. Харків, вул. Сумська, біля буд. 38а',
	citizen 		: 'гр.',
	pedestrian 		: 'пішохід',
	driver 			: 'водій',
	driver2 		: 'водію',
	name 			: 'Прізвищев Ім\'ян Побатькович',
	name2 			: 'Кумов\'яненко Сусід Дружбанович',
	dbirth 			: '13.04.1990 р.н.',
 	acting 			: 'керуючи',
	acted 			: 'керував',
	car 			: 'транспортним засобом «Daewoo Lanos» д.н.з. АХ 1234 АВ',
	moto 			: '<span class="marker">[ --мотоциклом; --мопедом; ]</span> «Honda» д.н.з. АХ 1234 АВ',

	alco_symptom 	: 'з ознаками алкогольного сп\'яніння <span class="marker">[ --запах алкоголю з порожнини рота; --порушення координації рухів; --порушення мови; --виражене тремтіння пальців рук; --різка зміна забарвлення шкірного покриву обличчя; --поведінка, що не відповідає обстановці; ]</span>',
	alco_state  	: 'в стані алкогольного сп’яніння',
	



	alco_analyzer 		: '<span class="marker">«Drager Alcotest 6810» № 1234</span>',
	alco_ppm 			: '<span class="marker">0.36</span> &#8240; проміле',
	
	alco_inspection1 	: ', який у присутності двох свідків проводився на місці зупинки ТЗ за допомогою газоаналізатора ',
	alco_inspection2 	: ' та результати якого становлять ',




	//alco_confirm 		: ', що підтверджується тестом  ',

	alco_doc_n 			: '<span class="marker">№ 123 від 28.11.2023 р</span>.',


	transfer_control 	: 'передав керування ',



	//smoke175 		: 'чим порушив ст.13 ЗУ \"Про заходи щодо попередження та зменшення вживання тютюнових виробів і їх шкідливого впливу на здоров\'я населення\"',
	//booze178 		: 'чим порушив ст.15-2 ЗУ \"Про державне регулювання виробництва і обігу спирту етилового, спиртових дистилятів, алкогольних напоїв, тютюнових виробів, рідин, що використовуються в електронних сигаретах, та пального\"',

};












const arrListSheriffFabuly = [




// ПДР Постанови
// --- 121.1 ----------------------------------------------------------------------------------------------------------------------------

{ 
	id 		: 'fabula_kupap_a121_p1_pdr_c31_a1', 
	img 	: 'glass_crack', 
	kupap 	: 'kupap_a121_p1',
	pdr 	: 'pdr_c31_a1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acted', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'на вітровому склі якого є <span class="marker">[ --сколи, --тріщини, ]</span> в зоні роботи склоочисників,', ],
	},
	descr 	: 'ТРІЩИНА СКЛА',
	hash 	: { pdr_postanova: 1, kupap_a121_p1: 1, move: 1, disrepair: 1, },
	edit 	: '19.11.2023',
},
{ 
	id 		: 'fabula_kupap_a121_p1_pdr_c31_a4_p3_i3', 
	img		: 'light_left_no', 
	kupap 	: 'kupap_a121_p1',
	pdr 	: 'pdr_c31_a4_p3_i3',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acted', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'на якому не горіла лампа лівої фари в режимі ближнього світла,', ],
	},
	descr 	: 'ЛІВА ФАРА', 
	hash 	: { pdr_postanova: 1, kupap_a121_p1: 1, move: 1, light: 1, disrepair: 1, }, 
	edit 	: '19.11.2023',
},
{ 
	id 		: 'fabula_kupap_a121_p1_pdr_c31_a4_p7_i1', 
	img		: 'mirror', 
	kupap 	: 'kupap_a121_p1',
	pdr 	: 'pdr_c31_a4_p7_i1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acted', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'на якому було відсутнє дзеркало заднього виду з правого боку,', ],
	},
	descr 	: 'ДЗЕРКАЛО', 
	hash 	: { pdr_postanova: 1, kupap_a121_p1: 1, move: 1, disrepair: 1, }, 
	edit 	: '20.11.2023',
},
{ 
	id 		: 'fabula_kupap_a121_p1_pdr_c31_a4_p7_i7', 
	img 	: 'mudguard', 
	kupap 	: 'kupap_a121_p1',
	pdr 	: 'pdr_c31_a4_p7_i7',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acted', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'який має задній привід та на якому був відсутній задній <span class="marker">[ --лівий; --правий; ]</span> бризковик,', ],
	},
	descr 	: 'БРИЗКОВИКИ',
	hash 	: { pdr_postanova: 1, kupap_a121_p1: 1, move: 1, disrepair: 1, },
	edit 	: '20.11.2023',
},
{ 
	id 		: 'fabula_kupap_a121_p1_pdr_c31_a6_p2', 
	img 	: 'light_back', 
	kupap 	: 'kupap_a121_p1',
	pdr 	: 'pdr_c31_a6_p2',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acted', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'на якому не горіли задні габаритні ліхтарі в темну пору доби,', ],
	},
	descr 	: 'ЗАДНІ ГАБАРИТИ',
	hash 	: { pdr_postanova: 1, kupap_a121_p1: 1, move: 1, disrepair: 1, light: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a121_p1_pdr_c31_a6_p3', 
	img 	: 'wiper', 
	kupap 	: 'kupap_a121_p1',
	pdr 	: 'pdr_c31_a6_p3',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acted', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'на якому не працював склоочисник з боку розміщення керма під час <span class="marker">[ --дощу; --снігопаду ]</span>,', ],
	},
	descr 	: 'ДВІРНИКИ',
	hash 	: { pdr_postanova: 1, kupap_a121_p1: 1, move: 1, disrepair: 1, },
	edit 	: '21.11.2023',
},





// --- 121.2 ----------------------------------------------------------------------------------------------------------------------------

{ 
	id 		: 'fabula_kupap_a121_p2_pdr_c31_a4_p3_i3', 
	img 	: 'minibus', 
	kupap 	: 'kupap_a121_p2',
	pdr 	: 'pdr_c31_a4_p3_i3',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acted', 'car', ],
		wrap: [ '$1', ],
		fabula: [ ', який використовується для надання послуг з перевезення пасажирів та на якому не горіла лампа лівої фари в режимі ближнього світла в темну пору доби,', ],
	},
	descr 	: 'ЛІВА ФАРА,  МАРШРУТНІ ТЗ',
	hash 	: { pdr_postanova: 1, kupap_a121_p2: 1, move: 1, light: 1, disrepair: 1, },
	edit 	: '21.11.2023',
},





// --- 121.5 ----------------------------------------------------------------------------------------------------------------------------

{ 
	id 		: 'fabula_kupap_a121_p5_pdr_c2_a3_p3', 
	img 	: 'belt', 
	kupap 	: 'kupap_a121_p5',
	pdr 	: 'pdr_c2_a3_p3',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'під час руху не був пристебнутий ременем безпеки,', ],
	},
	descr 	: 'РЕМІНЬ',
	hash 	: { pdr_postanova: 1, kupap_a121_p5: 1, move: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a121_p5_pdr_c2_a3_p4', 
	img 	: 'helmet', 
	kupap 	: 'kupap_a121_p5',
	pdr 	: 'pdr_c2_a3_p4',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'moto', ],
		wrap: [ '$1', ],
		fabula: [ 'під час руху не був в мотошоломі,', ],
	},
	descr 	: 'ШОЛОМ',
	hash 	: { pdr_postanova: 1, kupap_a121_p5: 1, move: 1, },
	edit 	: '21.11.2023',
},





// --- 121.10 ---------------------------------------------------------------------------------------------------------------------------

{ 
	id 		: 'fabula_kupap_a121_p10_pdr_c21_a11_p2', 
	img 	: 'children', 
	kupap 	: 'kupap_a121_p10',
	pdr 	: 'pdr_c21_a11_p2',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'перевозив дитину, зріст якої менше 150 см, без використання дитячої утримуючої системи', ],
	},
	descr 	: 'ДІТИ',
	hash 	: { pdr_postanova: 1, kupap_a121_p10: 1, move: 1, },
	edit 	: '10.12.2023',
},





// --- 121-3 ----------------------------------------------------------------------------------------------------------------------------


{ 
	id 		: 'fabula_kupap_a121_3_p1_pdr_c2_a9_p3_mud', 
	img 	: 'dnz_mud', 
	kupap 	: 'kupap_a121_3_p1',
	pdr 	: 'pdr_c2_a9_p3',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acted', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'з забрудненим номерним знаком, що не дає змоги чітко визначити символи знака з відстані 20 м,', ],
	},
	descr 	: 'БРУДНИЙ НОМЕР',
	hash 	: { pdr_postanova: 1, kupap_a121_3_p1: 1, move: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a121_3_p1_pdr_c2_a9_p3_light_no', 
	img 	: 'dnz_light_no', 
	kupap 	: 'kupap_a121_3_p1',
	pdr 	: 'pdr_c2_a9_p3',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acted', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'з неосвітленим номерним знаком <span class="marker">[ --у темну пору доби; --в умовах недостатньої видимості; ]</span>,', ],
	},
	descr 	: 'НЕОСВІТЛЕНИЙ НОМЕР',
	hash 	: { pdr_postanova: 1, kupap_a121_3_p1: 1, move: 1, },
	edit 	: '21.11.2023',
},





// --- 122.1 ----------------------------------------------------------------------------------------------------------------------------

{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c8_a4_p2_sign_2_2', 
	img 	: 'sign_2.2', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c8_a4_p2_sign_2_2',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не виконав вимогу дорожнього знаку {sign}, здійснивши рух без зупинки,', ],
	},
	descr 	: 'ЗНАК СТОП',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: 1, },
	edit 	: '19.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c8_a4_p3_sign_3_1', 
	img 	: 'sign_3.1', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c8_a4_p3_sign_3_1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не виконав вимогу дорожнього знаку {sign}, здійснивши рух в зону дії знаку,', ],
	},
	descr 	: 'РУХ ЗАБОРОНЕНО',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: 1, },
	edit 	: '19.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c8_a4_p3_sign_3_2', 
	img 	: 'sign_3.2', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c8_a4_p3_sign_3_2',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не виконав вимогу дорожнього знаку {sign}, здійснивши рух в зону дії знаку,', ],
	},
	descr 	: 'РУХ МЕХАНІЧНИХ ТЗ ЗАБОРОНЕНО',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: 1, },
	edit 	: '19.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c8_a4_p3_sign_3_21', 
	img 	: 'sign_3.21', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c8_a4_p3_sign_3_21',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не виконав вимогу дорожнього знаку {sign}, здійснивши рух в зону дії знаку,', ],
	},
	descr 	: 'В\'ЇЗД ЗАБОРОНЕНО, «кирпич»',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: 1, },
	edit 	: '19.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c8_a4_p3_sign_3_22', 
	img 	: 'sign_3.22', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c8_a4_p3_sign_3_22',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не виконав вимогу дорожнього знаку {sign}, здійснивши поворот праворуч,', ],
	},
	descr 	: 'ПОВОРОТ ЗАБОРОНЕНО',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: 1, },
	edit 	: '19.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c8_a4_p3_sign_3_25', 
	img 	: 'sign_3.25', 
	kupap 	: 'kupap_a122_p1',	
	pdr 	: 'pdr_c8_a4_p3_sign_3_25',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не виконав вимогу дорожнього знаку {sign}, здійснивши обгін в зоні дії знаку,', ],
	},
	descr 	: 'ОБГІН',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: 1, },
	edit 	: '25.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c8_a4_p3_sign_3_34', 
	img 	: 'sign_3.34', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c8_a4_p3_sign_3_34',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не виконав вимогу дорожнього знаку {sign}, здійснивши зупинку в зоні дії знаку,', ],
	},
	descr 	: 'ЗУПИНКА під ЗНАКОМ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, sign: 1, },
	edit 	: '19.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c8_a4_p3_sign_3_35', 
	img 	: 'sign_3.35', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c8_a4_p3_sign_3_35',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не виконав вимогу дорожнього знаку {sign}, здійснивши стоянку в зоні дії знаку,', ],
	},
	descr 	: 'СТОЯНКА під ЗНАКОМ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, sign: 1, },
	edit 	: '19.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c8_a4_p3_sign_3_41', 
	img 	: 'sign_3.41', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c8_a4_p3_sign_3_41',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не виконав вимогу дорожнього знаку {sign}, здійснивши рух без зупинки,', ],
	},
	descr 	: 'СТОП-Контроль',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: 1, },
	edit 	: '19.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c8_a5_p1_mark_c1_a1',            
	img 	: 'cross_mark_1.1', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c8_a5_p1_mark_c1_a1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'перетнув суцільну лінію {marking} дорожньої горизонтальної розмітки, яка поділяє транспортні потоки протилежних напрямків на дорозі,', ],
	},
	descr 	: 'ПЕРЕТИН СУЦІЛЬНОЇ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c8_a5_p1_mark_c1_a3',            
	img 	: 'cross_mark_1.3', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c8_a5_p1_mark_c1_a3',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'перетнув подвійну суцільну лінію {marking} дорожньої горизонтальної розмітки, яка поділяє транспортні потоки протилежних напрямків на дорозі, що має <span class="marker">[ --три; --чотири; ]</span> смуги руху,', ],
	},
	descr 	: 'ПОДВІЙНА СУЦІЛЬНА',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c8_a4_p4_sign_4_1', 
	img 	: 'sign_4.1', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c8_a4_p4_sign_4_1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не виконав вимогу дорожнього знаку {sign}, здійснивши поворот <span class="marker">[ --ліворуч; ]</span>,', ],
	},
	descr 	: 'НАПРЯМКИ РУХУ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c8_a4_p4_sign_4_2', 
	img 	: 'sign_4.2', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c8_a4_p4_sign_4_2',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не виконав вимогу дорожнього знаку {sign}, здійснивши <span class="marker">[ --рух прямо; --поворот ліворуч; ]</span>,', ],
	},
	descr 	: 'НАПРЯМКИ РУХУ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c8_a4_p4_sign_4_5', 
	img 	: 'sign_4.5', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c8_a4_p4_sign_4_5',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не виконав вимогу дорожнього знаку {sign}, здійснивши <span class="marker">[ --поворот праворуч; ]</span>,', ],
	},
	descr 	: 'НАПРЯМКИ РУХУ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c8_a4_p4_sign_4_6', 
	img 	: 'sign_4.6', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c8_a4_p4_sign_4_6',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не виконав вимогу дорожнього знаку {sign}, здійснивши рух прямо,', ],
	},
	descr 	: 'НАПРЯМКИ РУХУ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c8_a4_p4_sign_4_7', 
	img 	: 'sign_4.7', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c8_a4_p4_sign_4_7',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не виконав вимогу дорожнього знаку {sign}, здійснивши об\'їзд перешкоди з лівого боку,', ],
	},
	descr 	: 'ОБ\'ЇЗД ПЕРЕШКОДИ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c8_a4_p5_sign_5_16', 
	img 	: 'sign_5.16', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c8_a4_p5_sign_5_16',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не виконав вимогу дорожнього знаку {sign}, здійснивши рух <span class="marker">[ --прямо; --ліворуч; --праворуч; ]</span> зі смуги з якої дозволено рух тільки <span class="marker">[ --прямо; --прямо або ліворуч; --прямо або праворуч; --ліворуч; --праворуч; ]</span>,', ],
	},
	descr 	: 'РУХ ПО СМУГАХ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c12_a9_p2_sign_3_29_20', 
	img 	: 'sign_3.29_20', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c12_a9_p2_sign_3_29_20',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'перевищів встановлене обмеження швидкості руху ТЗ більш ніж на двадцять кілометрів на годину в зоні дії знаку {sign}. Швидкість руху вимірювалась приладом <span class="marker">[ --назва, №... ]</span>,', ],
	},
	descr 	: 'ПЕРЕВИЩЕННЯ на 20 км/год',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: 1, },
	edit 	: '19.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c15_a4', 
	img 	: 'row_second', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c15_a4',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'здійснив зупинку на проїзній частині, ставши другим рядом,', ],
	},
	descr 	: 'ЗУПИНКА ДРУГИМ РЯДОМ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1,  },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c15_a9_p4_sign_5_38_1', 
	img 	: 'stop_sign_5.38.1', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c15_a9_p4_sign_5_38_1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'здійснив зупинку ближче 10 м від пішохідного переходу, позначеного знаком {sign},', ],
	},
	descr 	: 'ЗУПИНКА на ПЕРЕХОДІ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, sign: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c15_a9_p5', 
	img 	: 'crossroads', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c15_a9_p5',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'здійснив зупинку ближче 10 м від краю перехрещуваної проїзної частини перехрестя,', ],
	},
	descr 	: 'ЗУПИНКА на ПЕРЕХРЕСТІ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c15_a9_p7_sign_5_45_1', 
	img 	: 'stop_sign_5.45.1', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c15_a9_p7_sign_5_45_1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'здійснив зупинку ближче 30 м від посадкового майданчику для зупинки маршрутних ТЗ, позначеного знаком {sign},', ],
	},
	descr 	: 'СТОЯНКА на ЗУПИНЦІ АВТОБУСА',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, sign: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c15_a9_p7_sign_5_46_1', 
	img 	: 'stop_sign_5.46.1', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c15_a9_p7_sign_5_46_1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'здійснив зупинку ближче 30 м від посадкового майданчику для зупинки маршрутних ТЗ, позначеного знаком {sign},', ],
	},
	descr 	: 'СТОЯНКА на ЗУПИНЦІ ТРАМВАЯ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, sign: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c15_a9_p7_sign_5_47_1', 
	img 	: 'stop_sign_5.47.1', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c15_a9_p7_sign_5_47_1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'здійснив зупинку ближче 30 м від посадкового майданчику для зупинки маршрутних ТЗ, позначеного знаком {sign},', ],
	},
	descr 	: 'СТОЯНКА на ЗУПИНЦІ ТРОЛЕЙБУСА',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, sign: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c15_a9_p7_sign_5_48', 
	img 	: 'stop_sign_5.48', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c15_a9_p7_sign_5_48',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'здійснив зупинку ближче 30 м від посадкового майданчику для зупинки маршрутних ТЗ, позначеного знаком {sign},', ],
	},
	descr 	: 'СТОЯНКА на ЗУПИНЦІ ТАКСІ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, sign: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c15_a9_p11', 
	img 	: 'territory_adjacent', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c15_a9_p11',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'здійснив зупинку ближче 10 м від виїзду з прилеглої території,', ],
	},
	descr 	: 'СТОЯНКА на ВИЇЗДІ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c11_a13', 
	img 	: 'sidewalk_move', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c11_a13',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'здійснював рух по тротуару,', ],
	},
	descr 	: 'РУХ по ТРОТУАРАХ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c15_a10_p3', 
	img 	: 'sidewalk_stop', 
	kupap 	: 'kupap_a122_p1',
	pdr 	: 'pdr_c15_a10_p3',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'здійснив зупинку на тротуарі, де для руху пішоходів залишалося менше 2 м,', ],
	},
	descr 	: 'СТОЯНКА на ТРОТУАРІ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, },
	edit 	: '21.11.2023',
},





// --- 122.2 ----------------------------------------------------------------------------------------------------------------------------

{ 
	id 		: 'fabula_kupap_a122_p2_pdr_c2_a9_p6', 
	img 	: 'mobile', 
	kupap 	: 'kupap_a122_p2',
	pdr 	: 'pdr_c2_a9_p6',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'під час руху користувався засобами зв’язку, тримаючи їх у руці,', ],
	},
	descr 	: 'МОБІЛЬНИЙ ТЕЛЕФОН',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p2_pdr_c8_a7_p3_i5', 
	img 	: 'traffic_light_yellow', 
	kupap 	: 'kupap_a122_p2',
	pdr 	: 'pdr_c8_a7_p3_i5',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'здійснив рух на заборонений жовтий сигнал світлофора,', ],
	},
	descr 	: 'ЖОВТИЙ',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, traffic_light: 1, },
	edit 	: '21.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p2_pdr_c8_a7_p3_i7', 
	img 	: 'traffic_light_red', 
	kupap 	: 'kupap_a122_p2',
	pdr 	: 'pdr_c8_a7_p3_i7',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'здійснив рух на заборонений червоний сигнал світлофора,', ],
	},
	descr 	: 'ЧЕРВОНИЙ',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, traffic_light: 1, },
	edit 	: '20.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p2_pdr_c8_a7_p3_i10',
	img 	: 'traffic_light_arrow',
	kupap 	: 'kupap_a122_p2',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'здійснив рух <span class="marker">[ --праворуч; ]</span> на вимкнений сигнал додаткової секції світлофора,', ],
	},
	descr 	: 'ВИМКНЕНА СЕКЦІЯ',
	pdr 	: 'pdr_c8_a7_p3_i10',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, traffic_light: 1, },
	edit 	: '25.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p2_pdr_c8_a8_p3', 
	img 	: 'rod_up', 
	kupap 	: 'kupap_a122_p2',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'здійснив рух на заборонений жест регулювальника (рука піднята вгору),', ],
	},
	descr 	: 'ЖЕЗЛ',
	kupap 	: 'kupap_a122_p2',
	pdr 	: 'pdr_c8_a8_p3',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, traffic_light: 1, },
	edit 	: '25.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p2_pdr_c9_a2_p1', 
	img 	: 'turn_signal_no_a', 
	kupap 	: 'kupap_a122_p2',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не подав сигнал світловими покажчиками повороту відповідного напрямку перед <span class="marker">[ --початком руху;  --зупинкою; ]</span>,', ],
	},
	descr 	: 'ПОВОРОТНИКИ, ПОЧАТОК РУХУ, ЗУПИНКА',
	pdr 	: 'pdr_c9_a2_p1',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, light: 1, },
	edit 	: '26.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p2_pdr_c9_a2_p2', 
	img 	: 'turn_signal_no_b', 
	kupap 	: 'kupap_a122_p2',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не подав сигнал світловими покажчиками повороту відповідного напрямку перед <span class="marker">[ --перестроюванням;  --поворотом;  --розворотом; ]</span>,', ],
	},
	descr 	: 'ПОВОРОТНИКИ, ЗМІНА НАПРЯМКУ',
	pdr 	: 'pdr_c9_a2_p2',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, light: 1, },
	edit 	: '26.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p2_pdr_c11_a4', 
	img 	: 'pdr_11.4', 
	kupap 	: 'kupap_a122_p2',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'на дорозі з двостороннім рухом, яка має <span class="marker">[ --дві; --три; --чотири; ]</span> смуги для руху в одному напрямку, здійснив виїзд на призначений для зустрічного руху бік дороги,', ],
	},
	descr 	: 'ВИЇЗД на ЗУСТРІЧНУ',
	pdr 	: 'pdr_c11_a4',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, },
	edit 	: '26.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p2_pdr_c19_a1_p1', 
	img 	: 'light_night_no', 
	kupap 	: 'kupap_a122_p2',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'на якому не горіли фари ближнього світла, здійснював рух в темну пору доби,', ],
	},
	descr 	: 'БЛИЖНІ ФАРИ в ТЕМНУ ПОРУ ДОБИ',
	pdr 	: 'pdr_c19_a1_p1',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, light: 1, },
	edit 	: '26.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p2_pdr_c8_a5_p1_mark_c1_a12',
	img 	: 'stop_line', 
	kupap 	: 'kupap_a122_p2',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не виконав вимогу дорожньої горизонтальної розмітки, перетнувши лінію {marking}, за наявності <span class="marker">[ --забороненого червоного сигналу світлофора; ]</span>,', ],
	},
	descr 	: 'СТОП-ЛІНІЯ',
	pdr 	: 'pdr_c8_a5_p1_mark_c1_a12',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, },
	edit 	: '26.11.2023',
},





// --- 122.3 ----------------------------------------------------------------------------------------------------------------------------






{ 
	id 		: 'fabula_kupap_a122_p3_pdr_c3_a2',
	img 	: 'ambulance', 
	kupap 	: 'kupap_a122_p3',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не забезпечив безперешкодний проїзд ТЗ з увімкненим синім проблисковим маячком [ --та спеціальним звуковим сигналом; ], створивши йому перешкоду для руху', ],
	},
	descr 	: 'НЕ ПРОПУСТИВ МІГАЛКУ',
	pdr 	: 'pdr_c3_a2',
	hash 	: { pdr_postanova: 1, kupap_a122_p3: 1, move: 1,  },
	edit 	: '04.01.2024',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c17_a1_sign_5_8_move',
	img 	: 'sign_5.8', 
	kupap 	: 'kupap_a122_p1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'рухався по смузі, призначеній для маршрутних ТЗ, на дорозі, позначеній дорожнім знаком {sign},', ],
	},
	descr 	: 'РУХ по СМУЗІ МАРШРУТНИХ ТЗ',
	pdr 	: 'pdr_c17_a1_sign_5_8',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1,  },
	edit 	: '26.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c17_a1_sign_5_8_stop',
	img 	: 'sign_5.8', 
	kupap 	: 'kupap_a122_p1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'здійснив зупинку на смузі, призначеній для маршрутних ТЗ, на дорозі, позначеній дорожнім знаком {sign},', ],
	},
	descr 	: 'ЗУПИНКА на СМУЗІ МАРШРУТНИХ ТЗ',
	pdr 	: 'pdr_c17_a1_sign_5_8',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1,  },
	edit 	: '26.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c17_a1_sign_5_11_move',
	img 	: 'sign_5.11', 
	kupap 	: 'kupap_a122_p1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'рухався по смузі, призначеній для маршрутних ТЗ, позначеній дорожнім знаком {sign},', ],
	},
	descr 	: 'РУХ по СМУЗІ МАРШРУТНИХ ТЗ',
	pdr 	: 'pdr_c17_a1_sign_5_11',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1,  },
	edit 	: '26.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p1_pdr_c17_a1_sign_5_11_stop',
	img 	: 'sign_5.11', 
	kupap 	: 'kupap_a122_p1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'здійснив зупинку на смузі, призначеній для маршрутних ТЗ, позначеній дорожнім знаком {sign},', ],
	},
	descr 	: 'ЗУПИНКА по СМУЗІ МАРШРУТНИХ ТЗ',
	pdr 	: 'pdr_c17_a1_sign_5_11',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1,  },
	edit 	: '26.11.2023',
},





// --- 122.4 ----------------------------------------------------------------------------------------------------------------------------

{ 
	id 		: 'fabula_kupap_a122_p4_pdr_c12_a9_p2_sign_3_29_50', 
	img 	: 'sign_3.29_50', 
	kupap 	: 'kupap_a122_p4',
	pdr 	: 'pdr_c12_a9_p2_sign_3_29_50',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'перевищів встановлене обмеження швидкості руху ТЗ більш ніж на п\'ятдесят кілометрів на годину в зоні дії знаку {sign}. Швидкість руху вимірювалась приладом <span class="marker">[ --назва, №... ]</span>,', ],
	},
	descr 	: 'ПЕРЕВИЩЕННЯ на 50 км/год',
	hash 	: { pdr_postanova: 1, kupap_a122_p4: 1, move: 1, },
	edit 	: '19.11.2023',
},





// --- 122.5 ----------------------------------------------------------------------------------------------------------------------------

{ 
	id 		: 'fabula_kupap_a122_p5_pdr_c8_a4_p2_sign_2_1', 
	img 	: 'sign_2.1', 
	kupap 	: 'kupap_a122_p5',
	pdr 	: 'pdr_c8_a4_p2_sign_2_1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'створив аварійну ситуацію, не виконавши вимогу дорожнього знаку {sign} та не надавши перевагу в русі ТЗ, яке рухалося по головній дорозі, змусивши водія ТЗ, що рухалося по головній дорозі [ --застосувати екстренне гальмування, --різко змінити напрямок руху; ] для уникнення зіткнення', ],
	},
	descr 	: 'ДАТИ ДОРОГУ, аварійка',
	hash 	: { pdr_protokol: 1, kupap_a122_p5: 1, move: 1, sign: 1, emergency: 1, },
	edit 	: '19.11.2023',
},
{ 
	id 		: 'fabula_kupap_a122_p5_pdr_c8_a4_p2_sign_2_5', 
	img 	: 'sign_2.5', 
	kupap 	: 'kupap_a122_p5',
	pdr 	: 'pdr_c8_a4_p2_sign_2_5',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'створив аварійну ситуацію, не виконавши вимогу дорожнього знаку {sign} та не надавши перевагу в русі зустрічному ТЗ на вузькій ділянці, змусивши водія ТЗ, що рухалося назустріч [ --застосувати екстренне гальмування, --різко змінити напрямок руху; ] для уникнення зіткнення', ],
	},
	descr 	: 'ПЕРЕВАГА в РУСІ, аварійка',
	hash 	: { pdr_protokol: 1, kupap_a122_p5: 1, move: 1, sign: 1, emergency: 1, },
	edit 	: '21.11.2023',
},





// --- 122.6 ----------------------------------------------------------------------------------------------------------------------------

{ 
	id 		: 'fabula_kupap_a122_p6_pdr_c8_a5_p1_mark_c1_a35', 
	img 	: 'invalid_parking', 
	kupap 	: 'kupap_a122_p6',
	pdr 	: 'pdr_c8_a5_p1_mark_c1_a35',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не виконав вимогу дорожньої розмітки {marking}, здійснивши стоянку на місці для паркування індивідуального транспорту осіб з інвалідністю,', ],
	},
	descr 	: 'МІСЦЯ для ІНВАЛІДІВ',
	hash 	: { pdr_postanova: 1, kupap_a122_p6: 1, stop: 1, marking: 1, },
	edit 	: '26.11.2023',
},





// --- 126.1 ----------------------------------------------------------------------------------------------------------------------------

{ 
	id 		: 'fabula_kupap_a126_p1_pdr_c2_a1_p1', 
	img 	: 'doc_license',
	kupap 	: 'kupap_a126_p1',
	pdr 	: 'pdr_c2_a1_p1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ '<span class="marker">[ --не мав при собі; --не пред’явив; ]</span> посвідчення водія на право керування ТЗ відповідної категорії,', ],
	},
	descr 	: 'ПВ, НЕ МАВ при СОБІ',
	hash 	: { pdr_postanova: 1, kupap_a126_p1: 1, move: 1, doc: 1, },
	edit 	: '26.11.2023',
},
{ 
	id 		: 'fabula_kupap_a126_p1_pdr_c2_a1_p2', 
	img 	: 'doc_registration',
	kupap 	: 'kupap_a126_p1',
	pdr 	: 'pdr_c2_a1_p2',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ '<span class="marker">[ --не мав при собі; --не пред’явив; ]</span> реєстраційного документа на транспортний засіб,', ],
	},
	descr 	: 'СВІДОЦТВО',
	hash 	: { pdr_postanova: 1, kupap_a126_p1: 1, move: 1, doc: 1, },
	edit 	: '26.11.2023',
},
{ 
	id 		: 'fabula_kupap_a126_p1_pdr_c2_a1_p5', 
	img 	: 'doc_policy',
	kupap 	: 'kupap_a126_p1',
	pdr 	: 'pdr_c2_a1_p5',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acting', 'car', ],
		wrap: [ '$1', ],
		fabula: [ '<span class="marker">[ --не мав при собі; --не пред’явив; ]</span> поліса обов’язкового страхування цивільно-правової відповідальності власників наземних ТЗ,', ],
	},
	descr 	: 'СТРАХОВКА',
	hash 	: { pdr_postanova: 1, kupap_a126_p1: 1, move: 1, doc: 1, },
	edit 	: '26.11.2023',
},





// --- 126.2 ----------------------------------------------------------------------------------------------------------------------------

{ 
	id 		: 'fabula_kupap_a126_p2_pdr_c2_a1_p1_nolicense', 
	img 	: 'doc_license',
	kupap 	: 'kupap_a126_p2',
	pdr 	: 'pdr_c2_a1_p1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acted', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'не маючи права керування таким ТЗ,', ],
	},
	descr 	: 'ПВ, ніколи не було...',
	hash 	: { pdr_postanova: 1, kupap_a126_p2: 1, move: 1, doc: 1, },
	edit 	: '26.11.2023',
},
{ 
	id 		: 'fabula_kupap_a126_p2_pdr_c2_a9_p5', 
	img 	: 'doc_license',
	kupap 	: 'kupap_a126_p2',
	pdr 	: 'pdr_c2_a9_p5',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acted', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'передав керування ТЗ особі, яка не має права керування таким ТЗ,', ],
	},
	descr 	: 'ПВ, ПЕРЕДАВ КЕРУВАННЯ',
	hash 	: { pdr_postanova: 1, kupap_a126_p2: 1, move: 1, doc: 1, },
	edit 	: '26.11.2023',
},





// --- 126.4 ----------------------------------------------------------------------------------------------------------------------------

{ 
	id 		: 'fabula_kupap_a126_p4_pdr_c2_a1_p1', 
	img 	: 'doc_license',
	kupap 	: 'kupap_a126_p4',
	pdr 	: 'pdr_c2_a1_p1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acted', 'car', ],
		wrap: [ '$1', ],
		fabula: [ 'будучи позбавленим права керування транспортними засобами,', ],
	},
	descr 	: 'ПВ, ПОЗБАВЛЕНИЙ',
	hash 	: { pdr_postanova: 1, kupap_a126_p4: 1, move: 1, doc: 1, },
	edit 	: '26.11.2023',
},





// --- 127.1 ----------------------------------------------------------------------------------------------------------------------------

{ 
	id 		: 'fabula_kupap_a127_p1_pdr_c4_a7', 
	img 	: 'pedestrian_crosswalk',
	kupap 	: 'kupap_a127_p1',
	pdr 	: 'pdr_c4_a7',
	txt 	: {
		intro : [ 'intro', 'pedestrian', 'name', ],
		wrap: [ '$1', ],
		fabula: [ 'перейшов проїзну частину у невстановленому місті, <span class="marker">[ --поза пішохідним переходом; ]</span>,', ],
	},
	descr 	: 'ПЕРЕХІД в НЕВСТАНОВЛЕНИХ МІСЦЯХ',
	hash 	: { pdr_postanova: 1, kupap_a127_p1: 1, pedestrian: 1, },
	edit 	: '26.11.2023',
},
{ 
	id 		: 'fabula_kupap_a127_p1_pdr_c8_a7_p7', 
	img 	: 'pedestrian_signal_red',
	kupap 	: 'kupap_a127_p1',
	pdr 	: 'pdr_c8_a7_p7',
	txt 	: {
		intro : [ 'intro', 'pedestrian', 'name', ],
		wrap: [ '$1', ],
		fabula: [ 'перейшов проїзну частину на заборонений червоний сигнал світлофора,', ],
	},
	descr 	: 'ПЕРЕХІД на ЧЕРВОНИЙ',
	hash 	: { pdr_postanova: 1, kupap_a127_p1: 1, pedestrian: 1, traffic_light: 1, },
	edit 	: '26.11.2023',
},





// --- 130.1 ----------------------------------------------------------------------------------------------------------------------------

{ 
	id 		: 'fabula_kupap_a130_p1_pdr_c2_a9_p1_inplace', 
	img 	: 'alco',
	kupap 	: 'kupap_a130_p1',
	pdr 	: 'pdr_c2_a9_p1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acted', 'car', ],
		wrap: [  'alco_state', '$1', 'alco_doc_n', 'alco_inspection1', 'alco_analyzer', 'alco_inspection2', 'alco_ppm', '$2', ],
		fabula: [ ', що підтверджується тестом ', ',', ],
	},
	descr 	: 'на МІСЦІ',
	hash 	: { pdr_protokol: 1, kupap_a130: 1, kupap_a130_p1: 1, move: 1, alco: 1, },
	edit 	: '28.11.2023',
},
{ 
	id 		: 'fabula_kupap_a130_p1_pdr_c2_a9_p1_ond', 
	img 	: 'alco',
	kupap 	: 'kupap_a130_p1',
	pdr 	: 'pdr_c2_a9_p1',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acted', 'car', ],
		wrap: [  'alco_state', '$1', 'alco_doc_n', ],
		fabula: [ ', що підтверджується висновком на стан алкогольного сп\'яніння ' ],
	},
	descr 	: 'в МЕД.ЗАКЛАДІ',
	hash 	: { pdr_protokol: 1, kupap_a130: 1, kupap_a130_p1: 1, move: 1, alco: 1, },
	edit 	: '28.11.2023',
},
{ 
	id 		: 'fabula_kupap_a130_p1_pdr_c2_a5_refuse_inplace', 
	img 	: 'alco',
	kupap 	: 'kupap_a130_p1',
	pdr 	: 'pdr_c2_a5',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acted', 'car', ],
		//wrap: [  'alco_symptom', '$1', 'alco_analyzer', '$2', ],
		wrap: [  'alco_symptom', '$1', ],
		fabula: [ 
			//'. Від проходження медичного огляду на визначення стану алкогольного сп\'яніння на місці зупинки ТЗ за допомогою газоаналізатора ',
			//' та проведення такого огляду у мед.закладі відмовився у присутності двох свідків,',

			'. Від проходження медичного огляду на визначення стану алкогольного сп\'яніння за допомогою газоаналізатора на місці зупинки ТЗ та проведення такого огляду у мед.закладі відмовився у присутності двох свідків,',
		],
	},
	descr 	: 'ВІДМОВА...',
	hash 	: { pdr_protokol: 1, kupap_a130: 1, kupap_a130_p1: 1, move: 1, alco: 1, },
	edit 	: '28.11.2023',
},
{ 
	id 		: 'fabula_kupap_a130_p1_pdr_c2_a5_inplace_not_agree_ond', 
	img 	: 'alco',
	kupap 	: 'kupap_a130_p1',
	pdr 	: 'pdr_c2_a5',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', 'acted', 'car', ],
		wrap: [  'alco_symptom', 'alco_inspection1', 'alco_analyzer', 'alco_inspection2', 'alco_ppm', '$1', ],
		fabula: [ 
			'. З результати огляду гр. <span class="marker"> --(П.І.Б. водія)</span> не згоден. Від проходження огляду у медичному закладі з метою підтвердження стану алкогольного сп\'яніння відмовився у присутності двох свідків,',
		],
	},
	descr 	: 'НЕ ЗГОДЕН з результатами',
	hash 	: { pdr_protokol: 1, kupap_a130: 1, kupap_a130_p1: 1, move: 1, alco: 1, },
	edit 	: '28.11.2023',
},
{ 
	id 		: 'fabula_kupap_a130_p1_pdr_c2_a9_p4', 
	img 	: 'alco',
	kupap 	: 'kupap_a130_p1',
	pdr 	: 'pdr_c2_a9_p4',
	txt 	: {
		intro : [ 'intro', 'driver', 'name', ],
		//wrap: [  'alco_state', '$1', 'alco_doc_n', 'alco_inspection1', 'alco_analyzer', 'alco_inspection2', 'alco_ppm', '$1', ],
		wrap: [ 'transfer_control', 'car', '$1', 'driver2', '$1', 'name2', '$2', 'dbirth', '$2', '$3', ],
		fabula: [ ' ', ', ', 'який керував цим транспортним засобом в стані алкогольного сп’яніння.',  ],
	},
	descr 	: 'ПЕРЕДАЧА КЕРУВАННЯ',
	hash 	: { pdr_protokol: 1, kupap_a130: 1, kupap_a130_p1: 1, move: 1, alco: 1, },
	edit 	: '3.12.2023',
},











// ГБ ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// --- 109 --------------------------------------------------------------------------------------------------------------------------

{ 
	id 			: 'fabula_kupap_a109_p3', 
	img 		: 'cross_rail', 
	kupap 		: 'kupap_a109_p3',
	railroad 	: 'rr_a2_p1',
	txt 		: {
		intro : [ 'intro', 'citizen', 'name', ],
		wrap: [ '$1', ],
		fabula: [ 'перейшов залізничну колію у невстановленому місці', ],
	},
	descr 	: 'ПЕРЕХіД КОЛІЙ',
	hash 	: { gb: 1, gb_postanova: 1, kupap_a175_1_p1: 1, },
	edit 	: '23.11.2023',
},





// --- 175-1.1 --------------------------------------------------------------------------------------------------------------------------

{ 
	id 		: 'fabula_kupap_a175_1_p1', 
	img 	: 'dont_smoke', 
	kupap 	: 'kupap_a175_1_p1',
	smoking : 'a13',
	txt 	: {
		intro : [ 'intro', 'citizen', 'name', ],
		wrap: [ '$1', ],
		fabula: [ 'курив тютюнові вироби на зупинці громадського транспорту', ],
	},
	descr 	: 'КУРІННЯ',
	hash 	: { gb: 1, gb_postanova: 1, kupap_a175_1_p1: 1, },
	edit 	: '23.11.2023',
},





// --- 178.1 --------------------------------------------------------------------------------------------------------------------------

{ 
	id 		: 'fabula_kupap_a178_p1_drank', 
	img 	: 'booze', 
	kupap 	: 'kupap_a178_p1',
	alco 	: 'a15_2',
	txt 	: {
		intro : [ 'intro', 'citizen', 'name', ],
		wrap: [ '$1', ],
		fabula: [ 'розпивав <span class="marker">[ --пиво; ]</span> на зупинці громадського транспорту,', ],
	},
	descr 	: 'РОЗПИВАВ',
	hash 	: {gb: 1,  gb_postanova: 1, kupap_a178_p1: 1, },
	edit 	: '23.11.2023',
},
{ 
	id 		: 'fabula_kupap_a178_p1_drunk', 
	img 	: 'booze', 
	kupap 	: 'kupap_a178_p1',
	alco 	: 'a15_2',
	txt 	: {
		intro : [ 'intro', 'citizen', 'name', ],
		wrap: [ '$1', ],
		fabula: [ 'знаходився на зупинці громадського транспорту у п\'яному вигляді, що ображає людську гідність та громадську мораль,', ],
	},
	descr 	: 'ХОДИВ П\'ЯНИЙ',
	hash 	: {gb: 1,  gb_postanova: 1, kupap_a178_p1: 1, },
	edit 	: '23.11.2023',
},




/*





// --- 122.3 ----------------------------------------------------------------------------------------------------------------------------
{ 
	id 		: 'sign_3.34_evacuation', img: 'sign_3.34', edit: { d: '19', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, здійснивши зупинку в зоні дії знаку, створивши [ --суттеву перешкоду; --загрозу безпеці; ] проїзду іншим ТЗ',
	descr 	: 'ЗУПИНКА під ЗНАКОМ. СУТТЄВО ПЕРЕШКОДЖАЄ',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '8.4.в',
	hash 	: { pdr_postanova: 1, kupap_a122_p3: 1, stop: 1, sign: '3.34', evacuation: 1, },
},
{ 
	id 		: 'sign_3.35_evacuation', img: 'sign_3.35', edit: { d: '19', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, здійснивши стоянку в зоні дії знаку, створивши [ --суттеву перешкоду; --загрозу безпеці; ] проїзду іншим ТЗ',
	descr 	: 'СТОЯНКА під ЗНАКОМ. СУТТЄВО ПЕРЕШКОДЖАЄ',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '8.4.в',
	hash 	: { pdr_postanova: 1, kupap_a122_p3: 3, stop: 1, sign: '3.35', evacuation: 1, },
},
{ 
	id 		: 'row_second_evocuation', img: 'row_second', edit: { d: '19', m: '10', y: '2023', }, 
	fabula 	: ', здійснив зупинку на проїзній частині, ставши другим рядом, створивши [ --суттеву перешкоду; --загрозу безпеці; ] проїзду іншим ТЗ',
	descr 	: 'ЗУПИНКА ДРУГИМ РЯДОМ. СУТТЄВО ПЕРЕШКОДЖАЄ',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '15.4',
	hash 	: { pdr_postanova: 1, kupap_a122_p3: 1, stop: 1, evacuation: 1, },
},
{ 
	id 		: 'stop_sign_5.38.1_evacuation', img: 'stop_sign_5.38.1', edit: { d: '19', m: '10', y: '2023', }, 
	fabula 	: ', здійснив зупинку ближче 10 м від пішохідного переходу, позначеного знаком {sign}, створивши [ --суттеву перешкоду; --загрозу безпеці; ] [ --проїзду іншим ТЗ; --руху пішоходів; ]',
	descr 	: 'ЗУПИНКА на ПЕРЕХОДІ. СУТТЄВО ПЕРЕШКОДЖАЄ',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '15.9.г',
	hash 	: { pdr_postanova: 1, kupap_a122_p3: 1, stop: 1, sign: '5.38.1', evacuation: 1, },
},
{ 
	id 		: 'stop_sign_5.38.2_evacuation', img: 'stop_sign_5.38.2', edit: { d: '19', m: '10', y: '2023', }, 
	fabula 	: ', здійснив зупинку ближче 10 м від пішохідного переходу, позначеного знаком {sign}, створивши [ --суттеву перешкоду; --загрозу безпеці; ] [ --проїзду іншим ТЗ; --руху пішоходів; ]',
	descr 	: 'ЗУПИНКА на ПЕРЕХОДІ. СУТТЄВО ПЕРЕШКОДЖАЄ',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '15.9.г',
	hash 	: { pdr_postanova: 1, kupap_a122_p3: 1, stop: 1, sign: '5.38.2', evacuation: 1, },
},
{ 
	id 		: 'stop_sign_5.45.1_evacuation', img: 'stop_sign_5.45.1', edit: { d: '19', m: '10', y: '2023', }, 
	fabula 	: ', здійснив зупинку ближче 30 м від посадкового майданчику для зупинки маршрутних ТЗ, позначеного знаком {sign}, створивши [ --суттеву перешкоду; --загрозу безпеці; ] проїзду громадському маршрутному транспорту',
	descr 	: 'ЗУПИНКА на ЗУПИНЦІ МАРШРУТНИХ ТЗ. СУТТЄВО ПЕРЕШКОДЖАЄ',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '15.9.е',
	hash 	: { pdr_postanova: 1, kupap_a122_p3: 1, stop: 1, sign: '5.45.1', evacuation: 1, },
},
{ 
	id 		: 'stop_sign_5.46.1_evacuation', img: 'stop_sign_5.46.1', edit: { d: '19', m: '10', y: '2023', }, 
	fabula 	: ', здійснив зупинку ближче 30 м від посадкового майданчику для зупинки маршрутних ТЗ, позначеного знаком {sign}, створивши [ --суттеву перешкоду; --загрозу безпеці; ] проїзду громадському маршрутному транспорту',
	descr 	: 'ЗУПИНКА на ЗУПИНЦІ МАРШРУТНИХ ТЗ. СУТТЄВО ПЕРЕШКОДЖАЄ',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '15.9.е',
	hash 	: { pdr_postanova: 1, kupap_a122_p3: 1, stop: 1, sign: '5.46.1', evacuation: 1, },
},
{ 
	id 		: 'stop_sign_5.47.1_evacuation', img: 'stop_sign_5.47.1', edit: { d: '19', m: '10', y: '2023', }, 
	fabula 	: ', здійснив зупинку ближче 30 м від посадкового майданчику для зупинки маршрутних ТЗ, позначеного знаком {sign}, створивши [ --суттеву перешкоду; --загрозу безпеці; ] проїзду громадському маршрутному транспорту',
	descr 	: 'ЗУПИНКА на ЗУПИНЦІ МАРШРУТНИХ ТЗ. СУТТЄВО ПЕРЕШКОДЖАЄ',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '15.9.е',
	hash 	: { pdr_postanova: 1, kupap_a122_p3: 1, stop: 1, sign: '5.47.1', evacuation: 1, },
},
{ 
	id 		: 'stop_sign_5.48_evacuation', img: 'stop_sign_5.48', edit: { d: '19', m: '10', y: '2023', }, 
	fabula 	: ', здійснив зупинку ближче 30 м від посадкового майданчику для зупинки маршрутних ТЗ, позначеного знаком {sign}, створивши [ --суттеву перешкоду; --загрозу безпеці; ] проїзду громадському маршрутному транспорту',
	descr 	: 'ЗУПИНКА на ЗУПИНЦІ МАРШРУТНИХ ТЗ. СУТТЄВО ПЕРЕШКОДЖАЄ',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '15.9.е',
	hash 	: { pdr_postanova: 1, kupap_a122_p3: 1, stop: 1, sign: '5.48', evacuation: 1, },
},
{ 
	id 		: 'crossroads_evacuation', img: 'crossroads', edit: { d: '08', m: '19', y: '2023', }, 
	fabula 	: ', здійснив зупинку ближче 10 м від краю перехрещуваної проїзної частини перехрестя, створивши [ --суттеву перешкоду; --загрозу безпеці; ] проїзду іншим ТЗ',
	descr 	: 'ЗУПИНКА на ПЕРЕХРЕСТІ. СУТТЄВО ПЕРЕШКОДЖАЄ',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '15.9.ґ',
	hash 	: { pdr_postanova: 1, kupap_a122_p3: 1, stop: 1, evacuation: 1, },
},
{ 
	id 		: 'territory_adjacent_evacuation', img: 'territory_adjacent', edit: { d: '19', m: '10', y: '2023', }, 
	fabula 	: ', здійснив зупинку ближче 10 м від виїзду з прилеглої території, створивши [ --суттеву перешкоду; --загрозу безпеці; ] проїзду іншим ТЗ',
	descr 	: 'ЗУПИНКА на ВИЇЗДІ з ПРИЛЕГЛИХ ТЕРИТОРІЙ. СУТТЄВО ПЕРЕШКОДЖАЄ',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '15.9.и',
	hash 	: { pdr_postanova: 1, kupap_a122_p3: 1, stop: 1, evacuation: 1, },
},
{ 
	id 		: 'sidewalk_stop_evacuation', img: 'sidewalk_stop', edit: { d: '19', m: '10', y: '2023', }, 
	fabula 	: ', здійснював стоянку на тротуарі, створивши [ --суттеву перешкоду; --загрозу безпеці; ] [ --руху пішоходів; --пішоходів із дитячими колясками; --осіб з інвалідністю на спеціальних засобах пересування; ]',
	descr 	: 'СТОЯНКА на ТРОТУАРІ. СУТТЄВО ПЕРЕШКОДЖАЄ',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '15.10.в',
	hash 	: { pdr_postanova: 1, kupap_a122_p3: 1, stop: 1, evacuation: 1, },
},





{ 
	id 		: 'sign_5.11_move_evacuation', img: 'sign_5.11', edit: { d: '19', m: '10', y: '2023', }, 
	fabula 	: 'на дорозі із виділеною смугою для маршрутних ТЗ, позначеній дорожнім знаком {sign}, здійснював рух по цій смузі, створивши суттеву перешкоду руху громадському маршрутному транспорту',
	descr 	: 'РУХ по СМУЗІ МАРШРУТНИХ ТЗ. СУТТЄВО ПЕРЕШКОДЖАЄ',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '17.1',
	hash 	: { pdr_postanova: 1, kupap_a122_p3: 1, move: 1, sign: '5.11', evacuation: 1, },
},
{ 
	id 		: 'sign_5.11_stop_evacuation', img: 'sign_5.11', edit: { d: '19', m: '10', y: '2023', }, 
	fabula 	: 'на дорозі із виділеною смугою для маршрутних ТЗ, позначеній дорожнім знаком {sign}, здійснив зупинку на цій смузі, створивши суттеву перешкоду проїзду громадському маршрутному транспорту',
	descr 	: 'ЗУПИНКА на СМУЗІ МАРШРУТНИХ ТЗ. СУТТЄВО ПЕРЕШКОДЖАЄ',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '17.1',
	hash 	: { pdr_postanova: 1, kupap_a122_p3: 1, stop: 1, sign: '5.11', evacuation: 1, },
},












// ПДР Протоколи




// --- 124 ------------------------------------------------------------------------------------------------------------------------------
{ 
	id 		: 'dtp_124', img: 'dtp', edit: { d: '16', m: '10', y: '2023', }, 
	fabula 	: '',
	descr 	: 'ДТП',
	kupap 	: { art: '124', },
	pdr 	: '',
	hash 	: { pdr_protokol: 1, kupap_a124: 1, },
},





// --- 123.1 ----------------------------------------------------------------------------------------------------------------------------
/*
{ 
	id 		: 'railroad_crossing', edit: { d: '08', m: '11', y: '2023', }, 
	fabula 	: ', зупинився на залізничному переїзді, за яким був утворений затор',
	descr 	: 'ЗАЛІЗНИЧНИЙ ПЕРЕЇЗД',
	kupap 	: { art: '123', part: '1', },
	pdr 	: '20.5.г',
	hash 	: { pdr_postanova: 1, kupap_a123_p1: 1, stop: 1, railroad: 1, },
},
*/







];















let objListSheriffFabuly = {};
arrListSheriffFabuly.forEach( k => {
	objListSheriffFabuly[ k.id ] = k;
});







