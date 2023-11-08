const arrListSheriffFabulyType = [

	{ id: 'all' 				, title: 'Категорії порушень' 			, hash: { pdr_postanova: 1, pdr_protokol: 1 }, },
	{ id: 'move' 				, title: 'Рух ТЗ' 						, hash: { pdr_postanova: 1,  }, },
	{ id: 'stop' 				, title: 'Зупинка/стоянка ТЗ' 			, hash: { pdr_postanova: 1,  }, },
	{ id: 'disrepair' 			, title: 'Несправності ТЗ' 				, hash: { pdr_postanova: 1,  }, },
	{ id: 'light' 				, title: 'Світлові прилади ТЗ' 			, hash: { pdr_postanova: 1,  }, },
	{ id: 'traffic_light' 		, title: 'Світлофори / регулювальник' 	, hash: { pdr_postanova: 1,  }, },
	{ id: 'sign' 				, title: 'Знаки' 						, hash: { pdr_postanova: 1,  }, },
	{ id: 'doc' 				, title: 'Документи' 					, hash: { pdr_postanova: 1,  }, },
	

	{ id: 'evacuation' 			, title: 'Евакуація' 					, hash: { pdr_postanova: 1,  }, },


	{ id: 'kupap_a121_p1' 		, title: 'КУпАП ст. 121 ч. 1' 			, hash: { pdr_postanova: 1,  }, },
	{ id: 'kupap_a121_p2' 		, title: 'КУпАП ст. 121 ч. 2' 			, hash: { pdr_postanova: 1,  }, },
	{ id: 'kupap_a121_p5' 		, title: 'КУпАП ст. 121 ч. 5' 			, hash: { pdr_postanova: 1,  }, },
	{ id: 'kupap_a121_3_p1' 	, title: 'КУпАП ст. 121-3 ч. 1' 		, hash: { pdr_postanova: 1,  }, },
	{ id: 'kupap_a122_p1' 		, title: 'КУпАП ст. 122 ч. 1' 			, hash: { pdr_postanova: 1,  }, },
	{ id: 'kupap_a122_p2' 		, title: 'КУпАП ст. 122 ч. 2' 			, hash: { pdr_postanova: 1,  }, },
	{ id: 'kupap_a122_p3' 		, title: 'КУпАП ст. 122 ч. 3' 			, hash: { pdr_postanova: 1,  }, },
	{ id: 'kupap_a122_p4' 		, title: 'КУпАП ст. 122 ч. 4' 			, hash: { pdr_postanova: 1,  }, },
	{ id: 'kupap_a122_p6' 		, title: 'КУпАП ст. 122 ч. 6' 			, hash: { pdr_postanova: 1,  }, },
	//{ id: 'kupap_a123_p1' 		, title: 'КУпАП ст. 123 ч. 1' 			, hash: { pdr_postanova: 1,  }, },
	{ id: 'kupap_a126_p1' 		, title: 'КУпАП ст. 126 ч. 1' 			, hash: { pdr_postanova: 1,  }, },
	{ id: 'kupap_a126_p2' 		, title: 'КУпАП ст. 126 ч. 2' 			, hash: { pdr_postanova: 1,  }, },
	{ id: 'kupap_a126_p4' 		, title: 'КУпАП ст. 126 ч. 4' 			, hash: { pdr_postanova: 1,  }, },
	{ id: 'kupap_a127_p1' 		, title: 'КУпАП ст. 127 ч. 1' 			, hash: { pdr_postanova: 1,  }, },

	{ id: 'kupap_a130_p1' 		, title: 'КУпАП ст. 130 ч. 1' 			, hash: { pdr_protokol: 1 } },




	//{ id: 'speed' 				, title: 'Швидкість' 					, },
	//{ id: 'pedestrian' 			, title: 'Пішоходи' 					, },
];





let objListSheriffFabulyType = {};
arrListSheriffFabulyType.forEach( k => {
	objListSheriffFabulyType[ k.id ] = k;
});













const arrListSheriffFabuly = [

/*
{ 
	id 		: 'traffic_light_red',
	//title 	: 'здійснив проїзд на червоний сигнал світлофора, чим порушив п.8.7.3.е ПДР, чим скоїв адміністративне правопорушення, передбачене ч.2 ст.122 КУпАП.', 
	title 	: '', 
	//offense : 'ючи',
	//offense : 'вав',

	fabula 	: 'здійснив рух на заборонений червоний сигнал світлофора', 
	kupap 	: { id: '122_2', art: '122', part: '2', },
	pdr 	: '8.7.3.e', 	


	img 	: 'light_left_no', // якщо є - то картинка звідси, якщо нема - картинка з ID

},
*/






// ПДР Постанови
// --- 121.1 ----------------------------------------------------------------------------------------------------------------------------



{ 
	id 		: 'glass_crack', edit: { d: '08', m: '11', y: '2023', }, 
	fabula 	: ', на вітровому склі якого є [ --сколи, --тріщини, ] в зоні роботи склоочисників, здійснював рух', 
	descr 	: 'ТРІЩИНА СКЛА', 
	kupap 	: { art: '121', part: '1', },
	pdr 	: '31.1',
	hash 	: { pdr_postanova: 1, kupap_a121_p1: 1, move: 1, disrepair: 1, dstu: { n: '3649:2010', item: '6.8.5', }, }, 
},
{ 
	id 		: 'light_left_no', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', на якому не горіла лампа лівої фари в режимі ближнього світла, здійснював рух в темну пору доби', 
	descr 	: 'ЛІВА ФАРА', 
	kupap 	: { art: '121', part: '1', },
	pdr 	: '31.4.3.в',
	hash 	: { pdr_postanova: 1, kupap_a121_p1: 1, move: 1, light: 1, disrepair: 1, }, 
},
{ 
	id 		: 'mirror', edit: { d: '16', m: '10', y: '2023', }, 
	fabula 	: ', на якому було відсутнє дзеркало заднього виду з правого боку, здійснював рух', 
	descr 	: 'ДЗЕРКАЛА', 
	kupap 	: { art: '121', part: '1', },
	pdr 	: '31.4.7.а',
	hash 	: { pdr_postanova: 1, kupap_a121_p1: 1, move: 1, disrepair: 1, },
},
{ 
	id 		: 'mudguard', edit: { d: '08', m: '11', y: '2023', }, 
	fabula 	: ', який має задній привід та на якому був відсутній задній правий бризковик, здійснював рух', 
	descr 	: 'БРИЗКОВИКИ', 
	kupap 	: { art: '121', part: '1', },
	pdr 	: '31.4.7.е',
	hash 	: { pdr_postanova: 1, kupap_a121_p1: 1, move: 1, disrepair: 1, },
},
{ 
	id 		: 'light_back', edit: { d: '16', m: '10', y: '2023', }, 
	fabula 	: ', на якому не горіли задні габаритні ліхтарі, здійснював рух в темну пору доби', 
	descr 	: 'ЗАДНІ ГАБАРИТИ', 
	kupap 	: { art: '121', part: '1', },
	pdr 	: '31.6.б',
	hash 	: { pdr_postanova: 1, kupap_a121_p1: 1, move: 1, light: 1, disrepair: 1, },
},
{ 
	id 		: 'wiper', edit: { d: '16', m: '10', y: '2023', }, 
	fabula 	: ', на якому не працював склоочисник з боку розміщення керма, здійснював рух під час [ --дощу; --снігопаду ]', 
	descr 	: 'ДВІРНИКИ', 
	kupap 	: { art: '121', part: '1', },
	pdr 	: '31.6.в',
	hash 	: { pdr_postanova: 1, kupap_a121_p1: 1, move: 1, disrepair: 1, },
},





// --- 121.2 ----------------------------------------------------------------------------------------------------------------------------
{ 
	id 		: 'minibus', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', який використовується для надання послуг з перевезення пасажирів та на якому не горіла лампа лівої фари в режимі ближнього світла, здійснював рух в темну пору доби', 
	descr 	: 'ЛІВА ФАРА,  МАРШРУТНІ ТЗ', 
	kupap 	: { art: '121', part: '2', },
	pdr 	: '31.4.3.в',
	hash 	: { pdr_postanova: 1, kupap_a121_p2: 1, move: 1, light: 1, disrepair: 1, },
},





// --- 121.5 ----------------------------------------------------------------------------------------------------------------------------
{ 
	id 		: 'belt', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', під час руху не був пристебнутий ременем безпеки',
	descr 	: 'РЕМІНЬ',
	kupap 	: { art: '121', part: '5', },
	pdr 	: '2.3.в',
	hash 	: { pdr_postanova: 1, kupap_a121_p5: 1, move: 1, },
},
{ 
	id 		: 'helmet', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', під час руху не був в мотошоломі',
	descr 	: 'ШОЛОМ',
	kupap 	: { art: '121', part: '5', },
	pdr 	: '2.3.г',
	hash 	: { pdr_postanova: 1, kupap_a121_p5: 1, move: 1, },
},
{ 
	id 		: 'dnz_mud', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: 'з забрудненим номерним знаком, що не дає змоги чітко визначити символи знака з відстані 20 м, здійснював рух в темну пору доби',
	descr 	: 'БРУДНИЙ НОМЕР',
	kupap 	: { art: '121-3', part: '1', },
	pdr 	: '2.9.в',
	hash 	: { pdr_postanova: 1, kupap_a121_3_p1: 1, move: 1, },
},
{ 
	id 		: 'dnz_light_no', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: 'з неосвітленим номерним знаком, здійснював рух [ --у темну пору доби; --в умовах недостатньої видимості ]',
	descr 	: 'НЕОСВІТЛЕНИЙ НОМЕР',
	kupap 	: { art: '121-3', part: '1', },
	pdr 	: '2.9.в',
	hash 	: { pdr_postanova: 1, kupap_a121_3_p1: 1, move: 1, },
},





// --- 122.1 ----------------------------------------------------------------------------------------------------------------------------
{ 
	id 		: 'sign_2.1', edit: { d: '15', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, не надавши перевагу в русі ТЗ, яке рухалося по головній дорозі',
	descr 	: 'ДАЙ ДОРОГУ', 
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.б',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: '2.1', },
},
{ 
	id 		: 'sign_2.2', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, здійснивши рух без зупинки',
	descr 	: 'ЗНАК СТОП', 
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.б',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: '2.2', },
},
{ 
	id 		: 'sign_3.1', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, здійснивши рух в зону дії знаку',
	descr 	: 'РУХ ЗАБОРОНЕНО', 
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.в',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: '3.1', },
},
{ 
	id 		: 'sign_3.2', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, здійснивши рух в зону дії знаку',
	descr 	: 'РУХ МЕХАНІЧНИХ ТЗ ЗАБОРОНЕНО', 
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.в',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: '3.2', },
},
{ 
	id 		: 'sign_3.21', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, здійснивши рух в зону дії знаку',
	descr 	: 'В\'ЇЗД ЗАБОРОНЕНО, «кирпич»',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.в',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: '3.21', },
},
{ 
	id 		: 'sign_3.22', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, здійснивши поворот праворуч',
	descr 	: 'ПОВОРОТ ЗАБОРОНЕНО',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.в',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: '3.22', },
},
{ 
	id 		: 'sign_3.29_20', img: 'sign_3.29_20', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', перевищів встановлене обмеження швидкості руху ТЗ більш ніж на двадцять кілометрів на годину в зоні дії знаку {sign}. Швидкість руху вимірювалась приладом [ --назва, №... ]',
	descr 	: 'ПЕРЕВИЩЕННЯ на 20 км/год',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '12.9.б',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: '3.29', speed: 1, },
},
{ 
	id 		: 'sign_3.34', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, здійснивши зупинку в зоні дії знаку',
	descr 	: 'ЗУПИНКА під ЗНАКОМ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.в',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, sign: '3.34', },
},
{ 
	id 		: 'sign_3.35', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, здійснивши стоянку в зоні дії знаку',
	descr 	: 'СТОЯНКА під ЗНАКОМ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.в',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, sign: '3.35', },
},
{ 
	id 		: 'sign_3.41', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, здійснивши рух без зупинки',
	descr 	: 'СТОП-Контроль',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.в',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: '3.41', },
},
{ 
	id 		: 'sign_4.1', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, здійснивши поворот [ --ліворуч, ]',
	descr 	: 'НАПРЯМКИ РУХУ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.г',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: '4.1', },
},
{ 
	id 		: 'sign_4.2', edit: { d: '15', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, здійснивши [ --рух прямо; --поворот ліворуч; ]',
	descr 	: 'НАПРЯМКИ РУХУ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.г',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: '4.2', },
},
{ 
	id 		: 'sign_4.5', edit: { d: '15', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, здійснивши [ --поворот праворуч; ]',
	descr 	: 'НАПРЯМКИ РУХУ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.г',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: '4.5', },
},
{ 
	id 		: 'sign_4.6', edit: { d: '15', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, здійснивши рух прямо',
	descr 	: 'НАПРЯМКИ РУХУ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.г',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: '4.6', },
},
{ 
	id 		: 'sign_4.7', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, здійснивши об\'їзд перешкоди з лівого боку',
	descr 	: 'ОБ\'ЇЗД ПЕРЕШКОДИ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.г',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: '4.7', },
},
{ 
	id 		: 'sign_5.16', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, здійснивши рух [ --прямо; --ліворуч; --праворуч; ] зі смуги з якої дозволено рух тільки [ --прямо; --прямо або ліворуч; --прямо або праворуч; --ліворуч; --праворуч; ]',
	descr 	: 'РУХ ПО СМУГАХ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '8.4.ґ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, sign: '5.16', },
},
{ 
	id 		: 'row_second_1', img: 'row_second', edit: { d: '16', m: '10', y: '2023', }, 
	fabula 	: ', здійснив зупинку на проїзній частині, ставши другим рядом',
	descr 	: 'ЗУПИНКА ДРУГИМ РЯДОМ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '15.4',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, },
},
{ 
	id 		: 'stop_sign_5.38.1', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', здійснив зупинку ближче 10 м від пішохідного переходу, позначеного знаком {sign}',
	descr 	: 'ЗУПИНКА на ПЕРЕХОДІ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '15.9.г',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, sign: '5.38.1', },
},
{ 
	id 		: 'stop_sign_5.38.2', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', здійснив зупинку ближче 10 м від пішохідного переходу, позначеного знаком {sign}',
	descr 	: 'ЗУПИНКА на ПЕРЕХОДІ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '15.9.г',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, sign: '5.38.2', },
},
{ 
	id 		: 'crossroads', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', здійснив зупинку ближче 10 м від краю перехрещуваної проїзної частини перехрестя',
	descr 	: 'ЗУПИНКА на ПЕРЕХРЕСТІ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '15.9.ґ',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, },
},
{ 
	id 		: 'stop_sign_5.45.1', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', здійснив зупинку ближче 30 м від посадкового майданчику для зупинки маршрутних ТЗ, позначеного знаком {sign}',
	descr 	: 'ЗУПИНКА на ЗУПИНЦІ МАРШРУТНИХ ТЗ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '15.9.е',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, sign: '5.45.1', },
},
{ 
	id 		: 'stop_sign_5.46.1', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', здійснив зупинку ближче 30 м від посадкового майданчику для зупинки маршрутних ТЗ, позначеного знаком {sign}',
	descr 	: 'ЗУПИНКА на ЗУПИНЦІ МАРШРУТНИХ ТЗ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '15.9.е',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, sign: '5.46.1', },
},
{ 
	id 		: 'stop_sign_5.47.1', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', здійснив зупинку ближче 30 м від посадкового майданчику для зупинки маршрутних ТЗ, позначеного знаком {sign}',
	descr 	: 'ЗУПИНКА на ЗУПИНЦІ МАРШРУТНИХ ТЗ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '15.9.е',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, sign: '5.47.1', },
},
{ 
	id 		: 'stop_sign_5.48', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', здійснив зупинку ближче 30 м від посадкового майданчику для зупинки маршрутних ТЗ, позначеного знаком {sign}',
	descr 	: 'ЗУПИНКА на ЗУПИНЦІ МАРШРУТНИХ ТЗ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '15.9.е',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, sign: '5.48', },
},
{ 
	id 		: 'territory_adjacent', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', здійснив зупинку ближче 10 м від виїзду з прилеглої території',
	descr 	: 'ЗУПИНКА на ВИЇЗДІ з ПРИЛЕГЛИХ ТЕРИТОРІЙ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '15.9.и',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, },
},
{ 
	id 		: 'sidewalk_move', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', здійснював рух по тротуару',
	descr 	: 'РУХ по ТРОТУАРАХ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '11.13',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, move: 1, },
},
{ 
	id 		: 'sidewalk_stop', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', здійснював стоянку на тротуарі, де для руху пішоходів залишалося менше 2 м',
	descr 	: 'СТОЯНКА на ТРОТУАРІ',
	kupap 	: { art: '122', part: '1', },
	pdr 	: '15.10.в',
	hash 	: { pdr_postanova: 1, kupap_a122_p1: 1, stop: 1, },
},

{ 
	id 		: 'cross_line_34.1.1', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', перетнув суцільну лінію 1.1 дорожньої горизонтальної розмітки, яка поділяє транспортні потоки протилежних напрямків на дорозі', 
	descr 	: 'ПЕРЕТИН СУЦІЛЬНОЇ',
	kupap 	: { id: '122_1', art: '122', part: '1', },
	pdr 	: '34.1.1',
	marking : '1.1',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, },
},
{ 
	id 		: 'cross_line_34.1.3', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', перетнув подвійну суцільну лінію 1.3 дорожньої горизонтальної розмітки, яка поділяє транспортні потоки протилежних напрямків на дорозі, що має [ --три; --чотири; ] смуги руху', 
	descr 	: 'ПОДВІЙНА СУЦІЛЬНА. ПЕРЕТИН',
	kupap 	: { id: '122_1', art: '122', part: '1', },
	pdr 	: '34.1.3', 
	marking	: '1.3',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, },
},





// --- 122.2 ----------------------------------------------------------------------------------------------------------------------------
{ 
	id 		: 'mobile', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', під час руху користувався засобами зв’язку, тримаючи їх у руці',
	descr 	: 'МОБІЛЬНИЙ ТЕЛЕФОН',
	kupap 	: { art: '122', part: '2', },
	pdr 	: '2.9.д',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, },
},
{ 
	id 		: 'sign_2.5', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожнього знаку {sign}, не надавши перевагу в русі зустрічному ТЗ на вузькій ділянці',
	descr 	: 'ПЕРЕВАГА в РУСІ', 
	kupap 	: { art: '122', part: '2', },
	pdr 	: '8.4.б',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, sign: '2.5', },
},
{ 
	id 		: 'sign_3.25', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', здійснив обгін в зоні дії знаку {sign}',
	descr 	: 'ОБГІН',
	kupap 	: { art: '122', part: '2', },
	pdr 	: '8.4.в',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, sign: '3.25', },
},
{ 
	id 		: 'traffic_light_yellow', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', здійснив рух на заборонений жовтий сигнал світлофора', 
	descr 	: 'ЖОВТИЙ',
	kupap 	: { art: '122', part: '2', },
	pdr 	: '8.7.3.ґ',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, traffic_light: 1, },
},
{ 
	id 		: 'traffic_light_red', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', здійснив рух на заборонений червоний сигнал світлофора', 
	descr 	: 'ЧЕРВОНИЙ',
	kupap 	: { art: '122', part: '2', },
	pdr 	: '8.7.3.e',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, traffic_light: 1, },
},
{ 
	id 		: 'traffic_light_arrow', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', здійснив рух ( --прямо, --ліворуч, --праворуч ) на вимкнений сигнал додаткової секції світлофора', 
	descr 	: 'ВИМКНЕНА СЕКЦІЯ',
	kupap 	: { art: '122', part: '2', },
	pdr 	: '8.7.3.з',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, traffic_light: 1, },
},
{ 
	id 		: 'rod_up', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', здійснив рух на заборонений жест регулювальника (рука піднята вгору)', 
	descr 	: 'ЖЕЗЛ',
	kupap 	: { art: '122', part: '2', },
	pdr 	: '8.8.в',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, traffic_light: 1, },
},
{ 
	id 		: 'turn_signal_no_a', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', не подав сигнал світловими покажчиками повороту відповідного напрямку перед  [ --початком руху;  --зупинкою; ]', 
	descr 	: 'ПОВОРОТНИКИ, ПОЧАТОК РУХУ, ЗУПИНКА',
	kupap 	: { art: '122', part: '2', },
	pdr 	: '9.2.а',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, light: 1, },
},
{ 
	id 		: 'turn_signal_no_b', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', не подав сигнал світловими покажчиками повороту відповідного напрямку перед  [ --перестроюванням;  --поворотом;  --розворотом; ]', 
	descr 	: 'ПОВОРОТНИКИ, ЗМІНА НАПРЯМКУ',
	kupap 	: { art: '122', part: '2', },
	pdr 	: '9.2.б',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, light: 1, },
},
{ 
	id 		: 'pdr_11.4', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: 'на дорозі з двостороннім рухом, яка має [ --дві; --три; --чотири; ] смуги для руху в одному напрямку, здійснив виїзд на призначений для зустрічного руху бік дороги', 
	descr 	: 'ВИЇЗД на ЗУСТРІЧНУ',
	kupap 	: { id: '122_2', art: '122', part: '2', },
	pdr 	: '11.4',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, },
},
{ 
	id 		: 'light_night_no', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', на якому не горіли фари ближнього світла, здійснював рух в темну пору доби', 
	descr 	: 'БЛИЖНІ ФАРИ в ТЕМНУ ПОРУ ДОБИ',
	kupap 	: { id: '122_2', art: '122', part: '2', },
	pdr 	: '19.1.а',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, move: 1, light: 1, },
},
{ 
	id 		: 'stop_line', edit: { d: '22', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожньої горизонтальної розмітки, перетнувши лінію 1.12, за наявності [ --забороненого червоного сигналу світлофора; ]', 
	descr 	: 'СТОП-ЛІНІЯ',
	kupap 	: { id: '122_2', art: '122', part: '2', },
	pdr 	: '34.1.12',
	marking	: '1.12',
	hash 	: { pdr_postanova: 1, kupap_a122_p2: 1, stop: 1, move: 1, },
},





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
	id 		: 'sign_5.8_move_evacuation', img: 'sign_5.8', edit: { d: '19', m: '10', y: '2023', }, 
	fabula 	: 'на дорозі із виділеною смугою для маршрутних ТЗ, позначеній дорожнім знаком {sign}, здійснював рух по цій смузі, створивши суттеву перешкоду руху громадському маршрутному транспорту',
	descr 	: 'РУХ по СМУЗІ МАРШРУТНИХ ТЗ. СУТТЄВО ПЕРЕШКОДЖАЄ',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '17.1',
	hash 	: { pdr_postanova: 1, kupap_a122_p3: 1, move: 1, sign: '5.8', evacuation: 1, },
},
{ 
	id 		: 'sign_5.8_stop_evacuation', img: 'sign_5.8', edit: { d: '19', m: '10', y: '2023', }, 
	fabula 	: 'на дорозі із виділеною смугою для маршрутних ТЗ, позначеній дорожнім знаком {sign}, здійснив зупинку на цій смузі, створивши суттеву перешкоду проїзду громадському маршрутному транспорту',
	descr 	: 'ЗУПИНКА на СМУЗІ МАРШРУТНИХ ТЗ. СУТТЄВО ПЕРЕШКОДЖАЄ',
	kupap 	: { art: '122', part: '3', },
	pdr 	: '17.1',
	hash 	: { pdr_postanova: 1, kupap_a122_p3: 1, stop: 1, sign: '5.8', evacuation: 1, },
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





// --- 122.4 ----------------------------------------------------------------------------------------------------------------------------
{ 
	id 		: 'sign_3.29_50', img: 'sign_3.29_50', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', перевищів встановлене обмеження швидкості руху ТЗ більш ніж на п’ятдесят кілометрів на годину в зоні дії знаку {sign}. Швидкість руху вимірювалась приладом ( --назва, №... )',
	descr 	: 'ПЕРЕВИЩЕННЯ на 50 км/год',
	kupap 	: { art: '122', part: '4', },
	pdr 	: '12.9.б',
	hash 	: { pdr_postanova: 1, kupap_a122_p4: 1, move: 1, sign: '3.29', speed: 1, },
},





// --- 122.6 ----------------------------------------------------------------------------------------------------------------------------
{ 
	id 		: 'invalid_parking', edit: { d: '22', m: '10', y: '2023', }, 
	fabula 	: ', не виконав вимогу дорожньої розмітки 1.35, здійснивши стоянку на місці для паркування індивідуального транспорту осіб з інвалідністю',
	descr 	: 'МІСЦЯ для ІНВАЛІДІВ',
	kupap 	: { art: '122', part: '6', },
	pdr 	: '34.1.35',
	marking : '1.35',
	hash 	: { pdr_postanova: 1, kupap_a122_p6: 1, stop: 1, },
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




// --- 126.1 ----------------------------------------------------------------------------------------------------------------------------
{ 
	id 		: 'doc_license_no_paper', img: 'doc_license', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', [ --не мав при собі; --не пред’явив; ] посвідчення водія на право керування ТЗ відповідної категорії',
	descr 	: 'ПВ, НЕ МАВ при СОБІ',
	kupap 	: { art: '126', part: '1', },
	pdr 	: '2.1.а',
	hash 	: { pdr_postanova: 1, kupap_a126_p1: 1, move: 1, doc: 1, },
},
{ 
	id 		: 'doc_registration', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', [ --не мав при собі; --не пред’явив; ] реєстраційного документа на транспортний засіб',
	descr 	: 'СВІДОЦТВО',
	kupap 	: { art: '126', part: '1', },
	pdr 	: '2.1.б',
	hash 	: { pdr_postanova: 1, kupap_a126_p1: 1, move: 1, doc: 1, },
},
{ 
	id 		: 'doc_policy', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', [ --не мав при собі; --не пред’явив; ] поліса обов’язкового страхування цивільно-правової відповідальності власників наземних ТЗ',
	descr 	: 'СТРАХОВКА',
	kupap 	: { art: '126', part: '1', },
	pdr 	: '2.1.ґ',
	hash 	: { pdr_postanova: 1, kupap_a126_p1: 1, move: 1, doc: 1, },
},





// --- 126.2 ----------------------------------------------------------------------------------------------------------------------------
{ 
	id 		: 'doc_license_no_rights', img: 'doc_license', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', здійснював рух, не маючи права керування таким ТЗ',
	descr 	: 'ПВ, НЕ МАЄ ПРАВА, ніколи не було',
	kupap 	: { art: '126', part: '2', },
	pdr 	: '2.1.а',
	hash 	: { pdr_postanova: 1, kupap_a126_p2: 1, move: 1, doc: 1, },
},





// --- 126.4 ----------------------------------------------------------------------------------------------------------------------------
{ 
	id 		: 'doc_license_deprived', img: 'doc_license', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: ', здійснював рух, будучи позбавленим права керування транспортними засобами',
	descr 	: 'ПВ, ПОЗБАВЛЕНИЙ',
	kupap 	: { art: '126', part: '4', },
	pdr 	: '2.1.а',
	hash 	: { pdr_postanova: 1, kupap_a126_p4: 1, move: 1, doc: 1, },
},





// --- 127.1 ----------------------------------------------------------------------------------------------------------------------------
{ 
	id 		: 'pedestrian_crosswalk', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: 'перейшов проїзну частину у невстановленому місті, поза пішохідним переходом',
	descr 	: 'ПЕРЕХІД в НЕВСТАНОВЛЕНИХ МІСЦЯХ',
	kupap 	: { art: '127', part: '1', },
	pdr 	: '4.7',
	hash 	: { pdr_postanova: 1, kupap_a127_p1: 1, pedestrian: 1, },
},
{ 
	id 		: 'pedestrian_signal_red', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: 'перейшов проїзну частину на заборонений червоний сигнал світлофора',
	descr 	: 'ПЕРЕХІД на ЧЕРВОНИЙ',
	kupap 	: { art: '127', part: '1', },
	pdr 	: '8.7.7',
	hash 	: { pdr_postanova: 1, kupap_a127_p1: 1, pedestrian: 1, traffic_light: 1, },
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











// --- 130.1 ----------------------------------------------------------------------------------------------------------------------------
{ 
	id 		: 'alco_', img: 'alco', edit: { d: '16', m: '10', y: '2023', }, 
	fabula 	: '',
	descr 	: 'ВІДМОВА',
	kupap 	: { art: '130', part: '', },
	pdr 	: '2.5',
	hash 	: { pdr_protokol: 1, },
},
{ 
	id 		: 'alco_', img: 'alco', edit: { d: '16', m: '10', y: '2023', }, 
	fabula 	: '',
	descr 	: 'НЕЗГОДА',
	kupap 	: { art: '130', part: '', },
	pdr 	: '2.5',
	hash 	: { pdr_protokol: 1, },
},
{ 
	id 		: 'alco_130_1', img: 'alco', edit: { d: '16', m: '10', y: '2023', }, 
	fabula 	: 'в стані алкогольного сп\'яніння. Огляд проводився на місці зупинки ТЗ за допомогою газоаналізатора «Alcotest №... » у присутності двох свідків, що підтверджується тестом № ______ від _______, результати огляду становлять 0,36 % проміле.  ',
	descr 	: 'ТЕСТ на МІСЦІ',
	kupap 	: { art: '130', part: '1', },
	pdr 	: '2.9.а',
	hash 	: { pdr_protokol: 1, kupap_a130_p1: 1, },
},
{ 
	id 		: 'alco_', img: 'alco', edit: { d: '16', m: '10', y: '2023', }, 
	fabula 	: '',
	descr 	: 'ТЕСТ у МЕД.ЗАКЛАДІ',
	kupap 	: { art: '130', part: '', },
	pdr 	: '2.9.а',
	hash 	: { pdr_protokol: 1, },
},























/* 	Громадська безпека 
{ 
	id 		: 'pedestrian_railroad', edit: { d: '08', m: '10', y: '2023', }, 
	fabula 	: '',
	descr 	: 'ЗАЛІЗНИЦЯ',
	kupap 	: { art: '109', part: '3', },
	pdr 	: '',
	type 	: 'pedestrian',
},
*/










];















let objListSheriffFabuly = {};
arrListSheriffFabuly.forEach( k => {
	objListSheriffFabuly[ k.id ] = k;
});







