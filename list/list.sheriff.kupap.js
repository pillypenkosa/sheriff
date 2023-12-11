// https://zakon.rada.gov.ua/laws/show/80731-10#Text




// прожитковий мінімум
const livingWage = 17;






// https://zakon.rada.gov.ua/laws/show/80732-10#Text
const objListOrgan = {

	a218: 'Адміністративні комісії',
	a219: 'Виконавчі комітети (виконавчі органи) сільських, селищних, міських рад',
	a221: 'Районні, районні у місті, міські чи міськрайонні суди (судді)',
	a222: 'Органи Національної поліції',
};








const arrListSheriffKupap = [







// --- 109 ------------------------------------------------------------------------------------------------------------------------------




{ 
	id 		: 'kupap_a109', a: '109',
	title 	: 'Порушення правил по охороні порядку і безпеки руху на залізничному транспорті', 
},
	{ 
		id 			: 'kupap_a109_p3', a: '109', p: '3', prevention: 1, min: 2, min: 10, organ: 'a222',
		title 		: 'Викидання сміття та інших предметів з вікон і дверей вагонів поїздів, прохід по залізничних коліях у невстановлених місцях -', 
		sanction 	: 'тягнуть за собою попередження або накладення штрафу від двох до десяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n845', 
	},















// --- 121 ------------------------------------------------------------------------------------------------------------------------------

	{ 
		id 			: 'kupap_a121_p1', a: 121, p: 1, min: 20, organ: 'a222', edit: '20.11.2023',
		title 		: 'Керування водієм транспортним засобом, що має несправності системи гальмового або рульового керування, тягово-зчіпного пристрою, зовнішніх світлових приладів (темної пори доби) чи інші технічні несправності, з якими відповідно до встановлених правил експлуатація його забороняється, або переобладнаний з порушенням відповідних правил, норм і стандартів, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі двадцяти неоподатковуваних мінімумів доходів громадян.',
		repeat		: 'kupap_a121_p4',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n959', 
	},
	{ 
		id 			: 'kupap_a121_p2', a: 121, p: 2, min: 40, organ: 'a222', edit: '21.11.2023',
		title 		: 'Керування водієм транспортним засобом, що має несправності системи гальмового або рульового керування, тягово-зчіпного пристрою, зовнішніх світлових приладів (темної пори доби) чи інші технічні несправності, з якими відповідно до встановлених правил експлуатація його забороняється, або переобладнаний з порушенням відповідних правил, норм і стандартів, -', 
		sanction 	: 'Керування водієм транспортним засобом, який використовується для надання послуг з перевезення пасажирів, що має несправності, передбачені частиною першою цієї статті, або технічний стан і обладнання якого не відповідають вимогам стандартів, правил дорожнього руху і технічної експлуатації, -',
		repeat		: 'тягне за собою накладення штрафу в розмірі сорока неоподатковуваних мінімумів доходів громадян.',
		repeat		: 'kupap_a121_p4',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n961', 
	},
	{ 
		id 			: 'kupap_a121_p3', a: 121, p: 3, min: 20, organ: 'a222', edit: '21.11.2023',
		title 		: 'Керування водієм транспортним засобом, що підлягає обов\'язковому технічному контролю, але своєчасно його не пройшов, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі двадцяти неоподатковуваних мінімумів доходів громадян.',
		repeat		: 'kupap_a121_p4',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n963', 
	},
	{ 
		id 			: 'kupap_a121_p4', a: 121, p: 4, min: 50, max: 100, organ: 'a221', edit: '20.11.2023',
		title 		: 'Повторне протягом року вчинення будь-якого з порушень, передбачених частинами першою - третьою цієї статті, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі від п’ятидесяти до ста неоподатковуваних мінімумів доходів громадян з позбавленням права керування транспортними засобами на строк від трьох до шести місяців або адміністративний арешт на строк від п’яти до десяти діб.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n965', 
	},
	{ 
		id 			: 'kupap_a121_p5', a: 121, p: 5, min: 30, organ: 'a222', edit: '21.11.2023',
		title 		: 'Порушення правил користування ременями безпеки або мотошоломами -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі тридцяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n967', 
	},
	{ 
		id 			: 'kupap_a121_p10', a: 121, p: 10, min: 30, organ: 'a', edit: '10.12.2023',
		title 		: 'Порушення правил перевезення дітей -', 
		sanction 	: 'тягне за собою накладення штрафу на водія в розмірі тридцяти неоподатковуваних мінімумів доходів громадян.',
		repeat		: 'kupap_a121_p11',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4285', 
	},
	{ 
		id 			: 'kupap_a121_p11', a: 121, p: 11, min: 50, organ: 'a', edit: '10.12.2023',
		title 		: 'Повторне протягом року вчинення порушення, передбаченого частиною десятою цієї статті, -', 
		sanction 	: 'тягне за собою накладення штрафу на водія в розмірі п\'ятдесяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4287', 
	},





// --- 121-3 ----------------------------------------------------------------------------------------------------------------------------


	{ 
		id 			: 'kupap_a121_3_p1', a: '121-3', p: 1, min: 70, organ: 'a222', edit: '21.11.2023',
		title 		: 'Керування або експлуатація транспортного засобу без номерного знака, з номерним знаком, що не належить цьому засобу або не відповідає встановленим зразкам або вимогам, з номерним знаком, закріпленим у не встановленому для цього місці, перевернутим чи неосвітленим, закритим іншими предметами (в тому числі прозорими), з нанесенням покриття або застосуванням матеріалів, що перешкоджають чи ускладнюють його ідентифікацію, забрудненим номерним знаком, якщо така забрудненість не дає можливості чітко визначити символи або буквено-числову комбінацію номерного знака з відстані двадцяти метрів, а так само вчинення інших дій, спрямованих на умисне приховування номерного знака, -', 
		sanction 	: 'тягнуть за собою накладення штрафу в розмірі сімдесяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4600', 
	},





// --- 122 ------------------------------------------------------------------------------------------------------------------------------

	{ 
		id 			: 'kupap_a122_p1', a: 122, p: 1, min: 20, organ: 'a222', edit: '20.11.2023',
		title 		: 'Перевищення встановлених обмежень швидкості руху транспортних засобів більш як на двадцять кілометрів на годину, порушення вимог дорожніх знаків та розмітки проїзної частини доріг, правил перевезення вантажів, буксирування транспортних засобів, зупинки, стоянки, проїзду пішохідних переходів, ненадання переваги у русі пішоходам на нерегульованих пішохідних переходах, а так само порушення встановленої для транспортних засобів заборони рухатися тротуарами чи пішохідними доріжками, -', 
		sanction 	: 'тягнуть за собою накладення штрафу в розмірі двадцяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n3533', 
	},
	{ 
		id 			: 'kupap_a122_p2', a: 122, p: 2, min: 40, organ: 'a222', edit: '21.11.2023',
		title 		: 'Порушення правил проїзду перехресть, зупинок транспортних засобів загального користування, проїзд на заборонний сигнал світлофора або жест регулювальника, порушення правил обгону і зустрічного роз’їзду, безпечної дистанції або інтервалу, розташування транспортних засобів на проїзній частині, порушення правил руху автомагістралями, користування зовнішніми освітлювальними приладами або попереджувальними сигналами при початку руху чи зміні його напрямку, використання цих приладів та їх переобладнання з порушенням вимог відповідних стандартів, користування під час руху транспортного засобу засобами зв’язку, не обладнаними технічними пристроями, що дозволяють вести перемови без допомоги рук (за винятком водіїв оперативних транспортних засобів під час виконання ними невідкладного службового завдання), а так само порушення правил навчальної їзди, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі сорока неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n3535', 
	},
	{ 
		id 			: 'kupap_a122_p3', a: '122', p: '3', min: 40, organ: 'a222', edit: '26.11.2023',
		title 		: 'Ненадання переваги в русі транспортним засобам аварійно-рятувальних служб, швидкої медичної допомоги, пожежної охорони, поліції, що рухаються з увімкненими спеціальними світловими або звуковими сигнальними пристроями, ненадання переваги маршрутним транспортним засобам, у тому числі порушення правил руху і зупинки на смузі для маршрутних транспортних засобів, а так само порушення правил зупинки, стоянки, що створюють перешкоди дорожньому руху або загрозу безпеці руху, -', 
		sanction 	: 'тягнуть за собою накладення штрафу в розмірі сорока неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n3537', 
	},
	{ 
		id 			: 'kupap_a122_p4', a: 122, p: 4, min: 100, organ: 'a222', edit: '20.11.2023',
		title 		: 'Перевищення встановлених обмежень швидкості руху транспортних засобів більш як на п’ятдесят кілометрів на годину -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі ста неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4471', 
	},
	{ 
		id 			: 'kupap_a122_p5', a: '122', p: 5, min: 85, organ: 'a221', edit: '06.12.2023',
		title 		: 'Порушення, передбачені частинами першою - четвертою цієї статті, що спричинили створення аварійної обстановки, а саме: примусили інших учасників дорожнього руху різко змінити швидкість, напрямок руху або вжити інших заходів щодо забезпечення особистої безпеки або безпеки інших громадян, -', 
		sanction 	: 'тягнуть за собою накладення штрафу в розмірі вісімдесяти п’яти неоподатковуваних мінімумів доходів громадян або позбавлення права керування транспортними засобами на строк від шести місяців до одного року.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n3539', 
	},
	{ 
		id 			: 'kupap_a122_p6', a: '122', p: '6', min: 60, max: 100, organ: 'a222', edit: '26.11.2023',
		title 		: 'Зупинка чи стоянка транспортних засобів на місцях, що позначені відповідними дорожніми знаками або дорожньою розміткою, на яких дозволено зупинку чи стоянку лише транспортних засобів, якими керують водії з інвалідністю або водії, які перевозять осіб з інвалідністю (крім випадків вимушеної стоянки), а так само створення перешкод водіям з інвалідністю або водіям, які перевозять осіб з інвалідністю, у зупинці чи стоянці керованих ними транспортних засобів, неправомірне використання на транспортному засобі розпізнавального знака "Водій з інвалідністю" -', 
		sanction 	: 'тягнуть за собою накладення штрафу від шістдесяти до ста неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4031', 
	},






// --- 126 ------------------------------------------------------------------------------------------------------------------------------

	{ 
		id 			: 'kupap_a126_p1', a: '126', p: '1', min: 25, organ: 'a222', edit: '26.11.2023',
		title 		: 'Керування транспортним засобом особою, яка не має при собі або не пред’явила у спосіб, який дає можливість поліцейському прочитати та зафіксувати дані, що містяться в посвідченні водія відповідної категорії, реєстраційному документі на транспортний засіб, а також полісі (договорі) обов’язкового страхування цивільно-правової відповідальності власників наземних транспортних засобів (страхового сертифіката "Зелена картка"), або не пред’явила електронне посвідчення водія та електронне свідоцтво про реєстрацію транспортного засобу, чинний внутрішній електронний договір зазначеного виду обов’язкового страхування у візуальній формі страхового поліса, а також інших документів, передбачених законодавством, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі двадцяти п’яти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n1036', 
	},
	{ 
		id 			: 'kupap_a126_p2', a: '126', p: '2', min: 200, organ: 'a222', edit: '26.11.2023',
		title 		: 'Керування транспортним засобом особою, яка не має права керування таким транспортним засобом, або передача керування транспортним засобом особі, яка не має права керування таким транспортним засобом, -', 
		sanction 	: 'тягнуть за собою накладення штрафу в розмірі двохсот неоподатковуваних мінімумів доходів громадян.',
		repeat 		: 'kupap_a126_p5',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n1038', 
	},
	{ 
		id 			: 'kupap_a126_p4', a: '126', p: '4', min: 1200, organ: 'a222', edit: '26.11.2023',
		title 		: 'Керування транспортним засобом особою, позбавленою права керування транспортними засобами, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі однієї тисячі двохсот неоподатковуваних мінімумів доходів громадян',
		repeat 		: 'kupap_a126_p5',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n1040', 
	},
	{ 
		id 			: 'kupap_a126_p5', a: '126', p: '5', min: 2400, organ: 'a221', edit: '26.11.2023',
		title 		: 'Повторне протягом року вчинення порушень, передбачених частинами другою - четвертою цієї статті, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі двох тисяч чотирьохсот неоподатковуваних мінімумів доходів громадян з позбавленням права керування транспортним засобом на строк від п’яти до семи років та з оплатним вилученням транспортного засобу чи без такого.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4475', 
	},








// --- 127 ------------------------------------------------------------------------------------------------------------------------------

	{ 
		id 			: 'kupap_a127_p1', a: '127', p: '1', min: 15, organ: 'a222', edit: '26.11.2023',
		title 		: 'Непокора пішоходів сигналам регулювання дорожнього руху, перехід ними проїзної частини у невстановлених місцях або безпосередньо перед транспортними засобами, що наближаються, невиконання інших правил дорожнього руху -', 
		sanction 	: 'тягнуть за собою накладення штрафу в розмірі п’ятнадцяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n1045', 
	},







// --- 130 ------------------------------------------------------------------------------------------------------------------------------

	{ 
		id 			: 'kupap_a130_p1', a: '130', p: '1', min: 1000, organ: 'a221', edit: '28.11.2023',
		title 		: 'Керування транспортними засобами особами в стані алкогольного, наркотичного чи іншого сп’яніння або під впливом лікарських препаратів, що знижують їх увагу та швидкість реакції, а також передача керування транспортним засобом особі, яка перебуває в стані такого сп’яніння чи під впливом таких лікарських препаратів, а так само відмова особи, яка керує транспортним засобом, від проходження відповідно до встановленого порядку огляду на стан алкогольного, наркотичного чи іншого сп’яніння або щодо вживання лікарських препаратів, що знижують увагу та швидкість реакції, -', 
		sanction 	: 'тягнуть за собою накладення штрафу на водіїв у розмірі однієї тисячі неоподатковуваних мінімумів доходів громадян з позбавленням права керування транспортними засобами на строк один рік і на інших осіб - накладення штрафу в розмірі однієї тисячі неоподатковуваних мінімумів доходів громадян.',
		repeat		: 'kupap_a130_p2',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n1083', 
	},
	{ 
		id 			: 'kupap_a130_p2', a: 130, p: '2', min: 2000, organ: 'a221', edit: '28.11.2023',
		title 		: 'Повторне протягом року вчинення будь-якого з порушень, передбачених частиною першою цієї статті, -', 
		sanction 	: 'тягне за собою накладення штрафу на водіїв у розмірі двох тисяч неоподатковуваних мінімумів доходів громадян з позбавленням права керування транспортними засобами на строк три роки та з оплатним вилученням транспортного засобу чи без такого або адміністративний арешт на строк десять діб з позбавленням права керування транспортними засобами на строк три роки та з оплатним вилученням транспортного засобу чи без такого і на інших осіб - накладення штрафу у розмірі двох тисяч неоподатковуваних мінімумів доходів громадян з оплатним вилученням транспортного засобу чи без такого або адміністративний арешт на строк десять діб з оплатним вилученням транспортного засобу чи без такого.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n1085', 
	},












// --- 175-1 ------------------------------------------------------------------------------------------------------------------------------

{ 
	id 		: 'kupap_a175_1', a: '175_1', edit: '24.11.2023',
	title 	: 'Куріння тютюнових виробів у заборонених місцях', 
},
	{ 
		id 			: 'kupap_a175_1_p1', a: '175-1', p: '1', prevention: 1, min: 3, max: 10, organ: 'a222', edit: '24.11.2023',
		title 		: 'Куріння тютюнових виробів у місцях, де це заборонено законом, а також в інших місцях, визначених рішенням відповідної сільської, селищної, міської ради, -', 
		sanction 	: 'тягне за собою попередження або накладення штрафу від трьох до десяти неоподатковуваних мінімумів доходів громадян.',
		repeat		: 'kupap_a175_1_p2',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n1882', 
	},
	{ 
		id 			: 'kupap_a175_1_p2', a: '175-1', p: '2', min: 10, max: 20, organ: 'a222', edit: '24.11.2023',
		title 		: 'Повторне протягом року вчинення порушення, передбаченого частиною першою цієї статті, за яке особу вже було піддано адміністративному стягненню, -', 
		sanction 	: 'тягне за собою накладення штрафу від десяти до двадцяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n1885', 
	},








// --- 178 ------------------------------------------------------------------------------------------------------------------------------


{ 
	id 		: 'kupap_a178', a: '178', edit: '24.11.2023',
	title 	: 'Розпивання пива, алкогольних, слабоалкогольних напоїв у заборонених законом місцях або поява у громадських місцях у п\'яному вигляді', 
},

	{ 
		id 			: 'kupap_a178_p1', a: '178', p: '1', prevention: 1, min: 1, max: 5, organ: 'a222', edit: '24.11.2023',
		title 		: 'Розпивання пива (крім безалкогольного), алкогольних, слабоалкогольних напоїв на вулицях, у закритих спортивних спорудах, у скверах, парках, у всіх видах громадського транспорту (включаючи транспорт міжнародного сполучення) та в інших заборонених законом місцях, крім підприємств торгівлі і громадського харчування, в яких продаж пива, алкогольних, слабоалкогольних напоїв на розлив дозволена відповідним органом місцевого самоврядування, або поява в громадських місцях у п\'яному вигляді, що ображає людську гідність і громадську мораль, -', 
		sanction 	: 'тягне за собою попередження або накладення штрафу від одного до п\'яти неоподатковуваних мінімумів доходів громадян.',
		repeat		: 'kupap_a178_p2',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n1905', 
	},
	{ 
		id 			: 'kupap_a178_p2', a: '178', p: '2', prevention: 1, min: 3, max: 7, organ: 'a222', edit: '24.11.2023',
		title 		: 'Ті самі дії, вчинені повторно протягом року після застосування заходів адміністративного стягнення, -', 
		sanction 	: 'тягнуть за собою накладення штрафу від трьох до семи неоподатковуваних мінімумів доходів громадян.',
		repeat		: 'kupap_a178_p3',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n1908', 
	},
	{ 
		id 			: 'kupap_a178_p3', a: '178', p: '3', prevention: 1, min: 10, max: 20, organ: 'a221', edit: '24.11.2023',
		title 		: 'Дії, передбачені частиною першою цієї статті, вчинені особою, яка двічі протягом року піддавалась адміністративному стягненню за розпивання пива (крім безалкогольного), алкогольних, слабоалкогольних напоїв у заборонених законом місцях або появу в громадських місцях у п\'яному вигляді, -', 
		sanction 	: 'тягнуть за собою накладення штрафу від десяти до двадцяти неоподатковуваних мінімумів доходів громадян або громадські роботи на строк від сорока до шістдесяти годин, або виправні роботи на строк від одного до двох місяців з відрахуванням двадцяти процентів заробітку, або адміністративний арешт на строк до п’ятнадцяти діб.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n1909', 
	},







// --- 268 ------------------------------------------------------------------------------------------------------------------------------

	{ 
		id 			: 'a268', a: 268, edit: '22.11.2023',
		title 		: 'Права особи, яка притягається до адміністративної відповідальності.', 
		descr		: `
			<p>Особа, яка притягається до адміністративної відповідальності має право:</p>
			<p>- знайомитися з матеріалами справи,</p>
			<p>- давати пояснення,</p>
			<p>- подавати докази,</p>
			<p>- заявляти клопотання,</p>
			<p>- при розгляді справи користуватися юридичною допомогою адвоката, іншого фахівця у галузі права, який за законом має право на надання правової допомоги особисто чи за дорученням юридичної особи,</p>
			<p>- виступати рідною мовою і користуватися послугами перекладача, якщо не володіє мовою, якою ведеться провадження,</p>
			<p>- оскаржити постанову по справі.</p>
			<br/>

			<p>Справа про адміністративне правопорушення розглядається в присутності особи, яка притягається до адміністративної відповідальності.</p>
			<p>Під час відсутності цієї особи справу може бути розглянуто лише у випадках, коли є дані про своєчасне її сповіщення про місце і час розгляду справи і якщо від неї не надійшло клопотання про відкладення розгляду справи.</p>
			<p>Особливості розгляду справ про адміністративні правопорушення у сферах забезпечення безпеки дорожнього руху, зафіксовані в автоматичному режимі, безпеки на автомобільному транспорті та про порушення правил зупинки, стоянки, паркування транспортних засобів, зафіксовані в режимі фотозйомки (відеозапису), встановлюються статтями 279-1-279-8 цього Кодексу.</p>

		`,
		href 		: 'https://zakon.rada.gov.ua/laws/show/80732-10#n607', 
	},





// --- 289 ------------------------------------------------------------------------------------------------------------------------------

	{ 
		id 			: 'a289', a: 289, edit: '22.11.2023',
		title 		: 'Строк оскарження постанови по справі про адміністративне правопорушення.', 
		descr		: `
			<p>Скаргу на постанову по справі про адміністративне правопорушення може бути подано протягом десяти днів з дня винесення постанови, а щодо постанов по справі про адміністративні правопорушення у сфері забезпечення безпеки дорожнього руху, зафіксовані в автоматичному режимі, безпеки на автомобільному транспорті, зафіксовані за допомогою засобів фото- і кінозйомки, відеозапису, у тому числі в автоматичному режимі, постанов у справі про адміністративні правопорушення, передбачені статтею 132-2 цього Кодексу, та/або про порушення правил зупинки, стоянки, паркування транспортних засобів, зафіксовані в режимі фотозйомки (відеозапису), - протягом десяти днів з дня набрання постановою законної сили. В разі пропуску зазначеного строку з поважних причин цей строк за заявою особи, щодо якої винесено постанову, може бути поновлено органом (посадовою особою), правомочним розглядати скаргу.</p>
		`,
		href 		: 'https://zakon.rada.gov.ua/laws/show/80732-10#n780', 
	},





// --- 307 ------------------------------------------------------------------------------------------------------------------------------

	{ 
		id 			: 'a307', a: 307, edit: '22.11.2023',
		title 		: 'Строки і порядок виконання постанови про накладення штрафу.', 
		descr		: `
			<p>Штраф має бути сплачений порушником не пізніш як через п’ятнадцять днів з дня вручення йому постанови про накладення штрафу, крім випадків, передбачених статтями 300-1, 300-2 цього Кодексу, а в разі оскарження такої постанови - не пізніш як через п’ятнадцять днів з дня повідомлення про залишення скарги без задоволення.</p>
			<p>У разі відсутності самостійного заробітку в осіб віком від шістнадцяти до вісімнадцяти років, які вчинили адміністративне правопорушення, штраф стягується з батьків або осіб, які їх замінюють.</p>
			<p>Штраф, накладений за вчинення адміністративного правопорушення, вноситься порушником в установу банку України, за винятком штрафу, що стягується на місці вчинення правопорушення, якщо інше не встановлено законодавством України.</p>
			<p>У разі несплати штрафу на місці вчинення адміністративного правопорушення документ, що підтверджує його сплату, або його копія не пізніше трьох робочих днів після закінчення строку, передбаченого частиною першою цієї статті, надсилається правопорушником до органу (посадовій особі), який виніс постанову про накладення цього штрафу.</p>
		`,	
		href 		: 'https://zakon.rada.gov.ua/laws/show/80732-10#n951', 
	},



// --- 308 ------------------------------------------------------------------------------------------------------------------------------

	{ 
		id 			: 'a308', a: 308, edit: '22.11.2023',
		title 		: 'Примусове виконання постанови про стягнення штрафу.', 
		descr		: `
			<p>У разі несплати правопорушником штрафу у строк, установлений частиною першою статті 307 цього Кодексу, постанова про накладення штрафу надсилається для примусового виконання до органу державної виконавчої служби за місцем проживання порушника, роботи або за місцезнаходженням його майна в порядку, встановленому законом.</p>
			<p>У порядку примусового виконання постанови про стягнення штрафу за вчинення адміністративного правопорушення з правопорушника стягується:</p>
			<p>подвійний розмір штрафу, визначеного у відповідній статті цього Кодексу та зазначеного у постанові про стягнення штрафу;</p>
			<p>витрати на облік зазначених правопорушень. Розмір витрат на облік правопорушень визначається Кабінетом Міністрів України.</p>
		`,
		href 		: 'https://zakon.rada.gov.ua/laws/show/80732-10#n956', 
	},


















/*







/*
{ 
	id 		: 'kupap_121', article: '121', edit: { d: '29', m: '09', y: '2023', }, 
	title 	: 'Порушення правил керування або експлуатації транспортного засобу, правил користування ременями безпеки або мотошоломами', 
},
	{ 
		id 			: 'kupap_121_1', article: '121', part: '1', min: 20, organ: 'art222', edit: { d: '29', m: '09', y: '2023', }, 
		title 		: 'Керування водієм транспортним засобом, що має несправності системи гальмового або рульового керування, тягово-зчіпного пристрою, зовнішніх світлових приладів (темної пори доби) чи інші технічні несправності, з якими відповідно до встановлених правил експлуатація його забороняється, або переобладнаний з порушенням відповідних правил, норм і стандартів, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі двадцяти неоподатковуваних мінімумів доходів громадян.',
		repeat		: 'kupap_121_4',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n959', 
	},


	{ 
		id 			: 'kupap_121_6', article: '121', part: '6', min: 50, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Керування водієм транспортним засобом, не зареєстрованим або не перереєстрованим в Україні в установленому порядку, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі п’ятдесяти неоподатковуваних мінімумів доходів громадян.',
		repeat		: 'kupap_121_7',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n969', 
	},
	{ 
		id 			: 'kupap_121_7', article: '121', part: '7', min: 100, organ: 'art221', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Повторне протягом року вчинення будь-якого з порушень, передбачених частиною шостою цієї статті, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі ста неоподатковуваних мінімумів доходів громадян або громадські роботи на строк від тридцяти до сорока годин, з оплатним вилученням транспортного засобу чи без такого.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n971', 
	},
	{ 
		id 			: 'kupap_121_8', article: '121', part: '8', min: 500, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Керування водієм транспортним засобом, щодо якого порушено обмеження, встановлені Митним кодексом України, а саме: порушено строки його тимчасового ввезення та/або переміщення в митному режимі транзиту; транспортний засіб використовується для цілей підприємницької діяльності та/або отримання доходів в Україні; транспортний засіб передано у володіння, користування або розпорядження особі, яка не ввозила його на митну територію України або не поміщувала в митний режим транзиту, -', 
		sanction 	: 'тягне за собою накладення штрафу на водія в розмірі п’ятисот неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4186', 
		repeat		: 'kupap_121_9',
	},
	{ 
		id 			: 'kupap_121_9', article: '121', part: '9', min: 1000, organ: 'art221', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Повторне протягом року вчинення порушення, передбаченого частиною восьмою цієї статті, -', 
		sanction 	: 'тягне за собою накладення штрафу на водія в розмірі однієї тисячі неоподатковуваних мінімумів доходів громадян з позбавленням права керування транспортними засобами на строк один рік та з оплатним вилученням транспортного засобу чи без такого.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4188', 
	},
	{ 
		id 			: 'kupap_121_10', article: '121', part: '10', min: 30, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Порушення правил перевезення дітей -', 
		sanction 	: 'тягне за собою накладення штрафу на водія в розмірі тридцяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4285', 
		repeat		: 'kupap_121_11',
	},
	{ 
		id 			: 'kupap_121_11', article: '121', part: '11', min: 50, organ: 'art222', edit: { d: '30', m: '09', y: '2023', },
		title 		: 'Повторне протягом року вчинення порушення, передбаченого частиною десятою цієї статті, -', 
		sanction 	: 'тягне за собою накладення штрафу на водія в розмірі п’ятдесяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4287', 
	},





{ 
	id 		: 'kupap_121_3', article: '121-3', edit: { d: '07', m: '10', y: '2023', }, 
	title 	: 'Порушення вимог законодавства щодо використання номерних знаків транспортних засобів', 
},



{ 
	id 		: 'kupap_122', article: '122', edit: { d: '29', m: '09', y: '2023', }, 
	title 	: 'Перевищення встановлених обмежень швидкості руху, проїзд на заборонний сигнал регулювання дорожнього руху та порушення інших правил дорожнього руху', 
},
	{ 
		id 			: 'kupap_122_1', article: '122', part: '1', min: 20, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Перевищення встановлених обмежень швидкості руху транспортних засобів більш як на двадцять кілометрів на годину, порушення вимог дорожніх знаків та розмітки проїзної частини доріг, правил перевезення вантажів, буксирування транспортних засобів, зупинки, стоянки, проїзду пішохідних переходів, ненадання переваги у русі пішоходам на нерегульованих пішохідних переходах, а так само порушення встановленої для транспортних засобів заборони рухатися тротуарами чи пішохідними доріжками, -', 
		sanction 	: 'тягнуть за собою накладення штрафу в розмірі двадцяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n3533', 
	},
	{ 
		id 			: 'kupap_122_2', article: '122', part: '2', min: 30, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Порушення правил проїзду перехресть, зупинок транспортних засобів загального користування, проїзд на заборонний сигнал світлофора або жест регулювальника, порушення правил обгону і зустрічного роз’їзду, безпечної дистанції або інтервалу, розташування транспортних засобів на проїзній частині, порушення правил руху автомагістралями, користування зовнішніми освітлювальними приладами або попереджувальними сигналами при початку руху чи зміні його напрямку, використання цих приладів та їх переобладнання з порушенням вимог відповідних стандартів, користування під час руху транспортного засобу засобами зв’язку, не обладнаними технічними пристроями, що дозволяють вести перемови без допомоги рук (за винятком водіїв оперативних транспортних засобів під час виконання ними невідкладного службового завдання), а так само порушення правил навчальної їзди, -', 
		sanction 	: 'тягнуть за собою накладення штрафу в розмірі тридцяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n3535', 
	},








	{ 
		id 			: 'kupap_122_7', article: '122', part: '7', min: 20, max: 30, organ: 'art222', edit: { d: '29', m: '09', y: '2023', },
		title 		: 'Зупинка чи стоянка транспортних засобів на місцях, що позначені відповідними дорожніми знаками та/або дорожньою розміткою, на яких дозволено зупинку чи стоянку лише транспортних засобів, оснащених електричними двигунами (одним чи декількома), а так само створення перешкод водіям транспортних засобів, оснащених електричними двигунами (одним чи декількома), у зупинці або стоянці -', 
		sanction 	: 'тягнуть за собою накладення штрафу в розмірі від двадцяти до тридцяти неоподатковуваних мінімумів доходів громадян.',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4275', 
	},

{ 
	id 		: 'kupap_123', article: '123', edit: { d: '08', m: '11', y: '2023', }, 
	title 	: 'Порушення правил руху через залізничні переїзди', 
},
	{ 
		id 			: 'kupap_123_1', article: '123', part: '1', min: 20, organ: 'art222', edit: { d: '08', m: '11', y: '2023', },
		title 		: 'Порушення правил руху через залізничний переїзд, крім порушень, передбачених частинами другою і третьою цієї статті, -', 
		sanction 	: 'тягне за собою накладення штрафу в розмірі двадцяти неоподатковуваних мінімумів доходів громадян',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n2975', 
	},

{ 
	id 		: 'kupap_124', article: '124', edit: { d: '16', m: '10', y: '2023', }, href: '', 
	title 	: 'Порушення правил дорожнього руху, що спричинило пошкодження транспортних засобів, вантажу, автомобільних доріг, вулиць, залізничних переїздів, дорожніх споруд чи іншого майна', 
},


{ 
	id 		: 'kupap_126', article: '126', edit: { d: '07', m: '10', y: '2023', }, href: '', 
	title 	: 'Керування транспортним засобом особою, яка не має відповідних документів на право керування таким транспортним засобом або не пред’явила їх для перевірки, або стосовно якої встановлено тимчасове обмеження у праві керування транспортними засобами', 
},


	{ 
		id 			: 'kupap_126_3', article: '126', part: '3', min: 0, organ: 'art221', edit: { d: '08', m: '10', y: '2023', },
		title 		: 'Керування транспортним засобом особою, стосовно якої встановлено тимчасове обмеження у праві керування транспортними засобами, -', 
		sanction 	: 'тягне за собою позбавлення права керування транспортними засобами на строк від трьох до шести місяців.',
		repeat 		: 'kupap_126_5',
		href 		: 'https://zakon.rada.gov.ua/laws/show/80731-10#n4068', 
	},




{ 
	id 		: 'kupap_127', article: '127', edit: { d: '08', m: '10', y: '2023', }, 
	title 	: 'Порушення правил дорожнього руху пішоходами, велосипедистами та особами, які керують гужовим транспортом, і погоничами тварин', 
},





{ 
	id 		: 'kupap_130', article: '130', edit: { d: '16', m: '10', y: '2023', }, 
	title 	: 'Керування транспортними засобами або суднами особами, які перебувають у стані алкогольного, наркотичного чи іншого сп’яніння або під впливом лікарських препаратів, що знижують їх увагу та швидкість реакції', 
},


	{ 
		id 			: 'kupap_130_3', article: '130', part: '3', min: 3000, organ: 'art221', edit: { d: '16', m: '10', y: '2023', }, 
		title 		: 'Дії, передбачені частиною першою цієї статті, вчинені особою, яка двічі протягом року піддавалася адміністративному стягненню за керування транспортними засобами у стані алкогольного, наркотичного чи іншого сп’яніння або під впливом лікарських препаратів, що знижують її увагу та швидкість реакції, за відмову від проходження відповідно до встановленого порядку огляду на стан алкогольного, наркотичного чи іншого сп’яніння або щодо вживання лікарських препаратів, що знижують увагу та швидкість реакції, -', 
		sanction 	: 'тягнуть за собою накладення штрафу на водіїв у розмірі трьох тисяч неоподатковуваних мінімумів доходів громадян з позбавленням права керування транспортними засобами на строк десять років та з конфіскацією транспортного засобу, який є у приватній власності порушника, або адміністративний арешт на строк п’ятнадцять діб з позбавленням права керування транспортними засобами на строк десять років та з конфіскацією транспортного засобу, який є у приватній власності порушника, і на інших осіб - накладення штрафу у розмірі трьох тисяч неоподатковуваних мінімумів доходів громадян з конфіскацією транспортного засобу, який є у приватній власності порушника, або адміністративний арешт на строк п’ятнадцять діб з конфіскацією транспортного засобу, який є у приватній власності порушника.',
		href 		: '', 
	},
	{ 
		id 			: 'kupap_130_4', article: '130', part: '4', min: 2000, organ: 'art221', edit: { d: '16', m: '10', y: '2023', }, 
		title 		: 'Вживання особою, яка керувала транспортним засобом, після дорожньо-транспортної пригоди за її участю алкоголю, наркотичних засобів, психотропних речовин, їх аналогів, а також лікарських препаратів, виготовлених на їх основі (крім тих, що входять до офіційно затвердженого складу аптечки або призначені медичним працівником), або після того, як транспортний засіб був зупинений на вимогу поліцейського, до проведення уповноваженою особою медичного огляду з метою встановлення стану алкогольного, наркотичного чи іншого сп’яніння або щодо вживання лікарських препаратів, що знижують його увагу та швидкість реакції, чи до прийняття рішення про звільнення від проведення такого огляду, -', 
		sanction 	: 'тягне за собою накладення штрафу на водіїв у розмірі двох тисяч неоподатковуваних мінімумів доходів громадян або адміністративний арешт на строк п’ятнадцять діб, з позбавленням права керування транспортними засобами на строк три роки і на інших осіб - накладення штрафу у розмірі двох тисяч неоподатковуваних мінімумів доходів громадян або адміністративний арешт на строк п’ятнадцять діб.',
		href 		: '', 
	},




















{ 
	id 		: 'kupap_265_4', article: '265-4', edit: { d: '22', m: '10', y: '2023', }, 
	title 	: 'Тимчасове затримання транспортних засобів інспекторами з паркування', 
	href 	: 'https://zakon.rada.gov.ua/laws/show/80732-10#n1134', 

},



*/



];


















let objListSheriffKupap = {};
arrListSheriffKupap.forEach( k => {
	objListSheriffKupap[ k.id ] = k;
});







