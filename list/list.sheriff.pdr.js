

// a b v g kg d e ye zh z i yi k l m n o p r s t u f h c ch sh sch 6 yu ya 



// chapter 		- розділ
// part  		- частина
// paragraph 	- пункт
// item 		- подпункт



// p1
// p2
// p3
// p4
// p5
// p6
// p7



const arrListSheriffPdr = [

{
	id: '1', chapter: '1',
	txt: [ 'Загальні положення', ],
},
	{
		id: '1.1', chapter: '1', part: '1',
		txt: [ 
			'Ці Правила відповідно до Закону України «Про дорожній рух» встановлюють єдиний порядок дорожнього руху на всій території України.', 
			'Інші нормативні акти, що стосуються особливостей дорожнього руху (перевезення спеціальних вантажів, експлуатація транспортних засобів окремих видів, рух на закритій території тощо), повинні ґрунтуватися на вимогах цих Правил.',
		],
	},
	{
		id: '1.2', chapter: '1', part: '2',
		txt: [ 'В Україні установлено правосторонній рух транспортних засобів.', ],
	},

{
	id: '2', chapter: '2',
	txt: [ 'Обов\'язки і права водіїв механічних транспортних засобів', ],
},
	{
		id: '2.1', chapter: '2', part: '1',
		txt: [ 'Водій механічного транспортного засобу повинен мати при собі:', ],
	},
		{
			id: '2.1.а', chapter: '2', part: '1', paragraph: 'а',
			txt: [ 'посвідчення водія на право керування транспортним засобом відповідної категорії;', ],
		},
		{
			id: '2.1.б', chapter: '2', part: '1', paragraph: 'б',
			txt: [ 'реєстраційний документ на транспортний засіб (для транспортних засобів Збройних Сил, Національної Гвардії, Держприкордонслужби, Держспецтрансслужби, Держспецзв’язку, Оперативно-рятувальної служби цивільного захисту — технічний талон);', ],
		},
		{
			id: '2.1.в', chapter: '2', part: '1', paragraph: 'в',
			txt: [ 'у разі встановлення на транспортних засобах проблискових маячків та (або) спеціальних звукових сигнальних пристроїв — дозвіл, виданий уповноваженим органом МВС, а у разі встановлення проблискового маячка оранжевого кольору на великогабаритних та великовагових транспортних засобах — дозвіл, виданий уповноваженим підрозділом Національної поліції, крім випадків встановлення проблискових маячків оранжевого кольору на сільськогосподарській техніці, ширина якої перевищує 2,6 м;', ],
		},
		{
			id: '2.1.г', chapter: '2', part: '1', paragraph: 'г',
			txt: [ 'на маршрутних транспортних засобах — схему маршруту та розклад руху; на великовагових і великогабаритних транспортних засобах та транспортних засобах, що здійснюють дорожнє перевезення небезпечних вантажів — документацію відповідно до вимог спеціальних правил, що визначаються Європейською Угодою про міжнародне дорожнє перевезення небезпечних вантажів (далі — спеціальні правила) (пункт змінено 11.11.2020);', ],
		},
		{
			id: '2.1.ґ', chapter: '2', part: '1', paragraph: 'ґ',
			txt: [ 'чинний страховий поліс (страховий сертифікат «Зелена картка») про укладення договору обов’язкового страхування цивільно-правової відповідальності власників наземних транспортних засобів або чинний внутрішній електронний договір зазначеного виду обов’язкового страхування у візуальній формі страхового поліса (на електронному або паперовому носії), відомості про який підтверджуються інформацією, що міститься в єдиній централізованій базі даних, оператором якої є Моторне (транспортне) страхове бюро України. Водії, які відповідно до законодавства звільняються від обов’язкового страхування цивільно-правової відповідальності власників наземних транспортних засобів на території України, повинні мати при собі відповідні підтвердні документи (посвідчення);', ],
		},
		{
			id: '2.1.д', chapter: '2', part: '1', paragraph: 'д',
			txt: [ 'у разі встановлення на транспортному засобі розпізнавального знака “Водій з інвалідністю” - документ, що підтверджує інвалідність водія або пасажира (крім водіїв з явними ознаками інвалідності або водіїв, які перевозять пасажирів з явними ознаками інвалідності).', ],
		},

	{
		id: '2.2', chapter: '2', part: '2',
		txt: [ 
			'Власник транспортного засобу, а також особа, яка використовує такий транспортний засіб на законних підставах, можуть передавати керування транспортним засобом іншій особі, що має при собі посвідчення водія на право керування транспортним засобом відповідної категорії.', 
			'Власник транспортного засобу може передавати такий засіб у користування іншій особі, що має посвідчення водія на право керування транспортним засобом відповідної категорії, передавши їй реєстраційний документ на цей транспортний засіб.', 
		],
	},
	{
		id: '2.3', chapter: '2', part: '3',
		txt: [ 
			'Для забезпечення безпеки дорожнього руху водій зобов’язаний:', 
		],
	},
		{
			id: '2.3.а', chapter: '2', part: '3', paragraph: 'а',
			txt: [ 'перед виїздом перевірити і забезпечити технічно справний стан і комплектність транспортного засобу, правильність розміщення та кріплення вантажу;', ],
		},
		{
			id: '2.3.б', chapter: '2', part: '3', paragraph: 'б',
			txt: [ 'бути уважним, стежити за дорожньою обстановкою, відповідно реагувати на її зміну, стежити за правильністю розміщення та кріплення вантажу, технічним станом транспортного засобу і не відволікатися від керування цим засобом у дорозі;', ],
		},
	{
		id: '2.9', chapter: '2', part: '9',
		txt: [ 
			'Водієві забороняється:', 
		],
	},
		{
			id: '2.9.а', chapter: '2', part: '9', paragraph: 'а',
			txt: [ 'керувати транспортним засобом у стані алкогольного, наркотичного чи іншого сп’яніння або перебування під впливом лікарських препаратів, що знижують увагу та швидкість реакції;', ],
		},

		
		{
			id: '2.9.г', chapter: '2', part: '9', paragraph: 'г',
			txt: [ 'передавати керування транспортним засобом особам, які перебувають у стані алкогольного, наркотичного чи іншого сп’яніння або під впливом лікарських препаратів, що знижують увагу та швидкість реакції, у хворобливому стані;', ],
		},






{
	id: '4', chapter: '4',
	txt: [ 'Обов\'язки і права пішоходів', ],
},
	{
		id: '4.7', chapter: '4', part: '7',
		txt: [ 'Пішоходи повинні переходити проїзну частину по пішохідних переходах, у тому числі підземних і надземних, а у разі їх відсутності — на перехрестях по лініях тротуарів або узбіч.', ],
	},









{
	id: '8', chapter: '8',
	txt: [ 'Регулювання дорожнього руху', ],
},
	{
		id: '8.4', chapter: '8', part: '4',
		txt: [ 'Дорожні знаки поділяються на групи:', ],
	},
		{
			id: '8.4.в', chapter: '8', part: '4', paragraph: 'б',
			txt: [ 'Знаки пріоритету. Встановлюють черговість проїзду перехресть, перехрещень проїзних частин або вузьких ділянок дороги.', ],
		},
		{
			id: '8.4.в', chapter: '8', part: '4', paragraph: 'в',
			txt: [ 'Заборонні знаки. Запроваджують або скасовують певні обмеження в русі.', ],
		},

	{
		id: '8.7', chapter: '8', part: '7',
		txt: [ 
			'Світлофори призначені для регулювання руху транспортних засобів і пішоходів, мають світлові сигнали зеленого, жовтого, червоного і біло-місячного кольорів, які розташовані вертикально чи горизонтально. Сигнали світлофора можуть бути з нанесеною суцільною чи контурною стрілкою (стрілками), із силуетом пішохода, Х-подібні.', 
			'На рівні червоного сигналу світлофора із вертикальним розташуванням сигналів може встановлюватися табличка білого кольору із нанесеною на ній стрілкою зеленого кольору.', 
		],
	},
		{
			id: '8.7.3', chapter: '8', part: '7', paragraph: '3',
			txt: [ 'Сигнали світлофора мають такі значення:', ],
		},
			{
				id: '8.7.3.ґ', chapter: '8', part: '7', paragraph: '3', item: 'ґ',
				txt: [ 'Жовтий забороняє рух і попереджає про наступну зміну сигналів;', ],
			},
			{
				id: '8.7.3.e', chapter: '8', part: '7', paragraph: '3', item: 'е',
				txt: [ 
					'Червоний сигнал, у тому числі миготливий, або два червоних миготливих сигнали забороняють рух.', 
					'Сигнал у вигляді зеленої стрілки (стрілок) у додатковій (додаткових) секції разом з жовтим або червоним сигналом світлофора інформує водія про те, що рух дозволяється у вказаному напрямку за умови безперешкодного пропуску транспортних засобів, які рухаються з інших напрямків.', 
					'Стрілка зеленого кольору на табличці, встановленій на рівні червоного сигналу світлофора з вертикальним розташуванням сигналів, дозволяє рух у зазначеному напрямку при ввімкненому червоному сигналі світлофора з крайньої правої смуги руху (або крайньої лівої смуги руху на дорогах з одностороннім рухом) за умови надання переваги в русі іншим його учасникам, які рухаються з інших напрямків на сигнал світлофора, що дозволяє рух;', 
				],
			},









{
	id: '11', chapter: '11',
	txt: [ 'Розташування транспортних засобів на дорозі', ],
},
	{
		id: '11.4', chapter: '11', part: '4',
		txt: [ 'На дорогах з двостороннім рухом, які мають щонайменше дві смуги для руху в одному напрямку, забороняється виїжджати на призначений для зустрічного руху бік дороги.', ],
	},









{
	id: '17', chapter: '17',
	txt: [ 'Переваги маршрутних транспортних засобів', ],
},
	{
		id: '17.1', chapter: '17', part: '1',
		txt: [ 'На дорозі із смугою для маршрутних транспортних засобів, позначеній дорожнім знаком 5.8 або 5.11 забороняються рух і зупинка інших транспортних засобів (крім таксі та велосипедистів) на цій смузі.', ],
	},











{
	id: '9', chapter: '9',
	txt: [ 'Попереджувальні сигнали', ],
},
	{
		id: '9.2', chapter: '9', part: '2',
		txt: [ 'Водій повинен подавати сигнали світловими покажчиками повороту відповідного напрямку:', ],
	},
		{
			id: '9.2.а', chapter: '9', part: '2', paragraph: 'а',
			txt: [ 'Перед початком руху і зупинкою.', ],
		},
		{
			id: '9.2.б', chapter: '9', part: '2', paragraph: 'б',
			txt: [ 'Перед перестроюванням, поворотом або розворотом.', ],
		},







{
	id: '15', chapter: '15',
	txt: [ 'Зупинка і стоянка', ],
},
	{
		id: '15.9', chapter: '15', part: '9',
		txt: [ 'Зупинка забороняється:', ],
	},
		{
			id: '15.9.г', chapter: '15', part: '9', paragraph: 'г',
			txt: [ 'На пішохідних переходах і ближче 10 м від них з обох боків, крім випадків надання переваги в русі', ],
		},
		{
			id: '15.9.е', chapter: '15', part: '9', paragraph: 'е',
			txt: [ 'Ближче 30 м від посадкових майданчиків для зупинки маршрутних ТЗ, а коли їх немає — ближче 30 м від дорожнього знака такої зупинки з обох боків', ],
		},






{
	id: '20', chapter: '20',
	txt: [ 'Рух через залізничні переїзди', ],
},
	{
		id: '20.', chapter: '20', part: '',
		txt: [ 'Зупинка забороняється:', ],
	},














{
	id: '31', chapter: '31',
	txt: [ 'Технічний стан транспортних засобів та їх обладнання', ],
},
	{
		id: '31.4', chapter: '31', part: '4',
		txt: [ 'Забороняється експлуатація транспортних засобів згідно із законодавством за наявності таких технічних несправностей і невідповідності таким вимогам:', ],
	},
		{
			id: '31.4.3', chapter: '31', part: '4', paragraph: '3',
			txt: [ 'Зовнішні світлові прилади:', ],
		},
			{
				id: '31.4.3.в', chapter: '31', part: '4', paragraph: '3', item: 'в',
				txt: [ 'Не горить лампа лівої фари в режимі ближнього світла.', ],
			},

	{
		id: '31.6', chapter: '31', part: '6',
		txt: [ 'Забороняється подальший рух транспортних засобів, у яких:', ],
	},
		{
			id: '31.6.', chapter: '31', part: '6', paragraph: 'б',
			txt: [ 'у темну пору доби або в умовах недостатньої видимості не горять лампи фар чи задніх габаритних ліхтарів;', ],
		},



{
	id: '34', chapter: '34',
	txt: [ 'Дорожня розмітка', ],
},
	{
		id: '34.1', chapter: '34.1',
		txt: [ 
			'Горизонтальна розмітка',
			'Дорожня розмітка є найпростішим та ефективним засобом організації дорожнього руху. Розмітка являє собою лінії, написи та інші позначення, що наносяться на проїзну частину, бордюри та елементи дорожніх споруд.',
			'Дорожня розмітка допомогає водію орієнтуватися в дорожніх умовах, особливо під час руху в темну пору доби, коли водієві дуже складно залишатися на полосі руху під час зустрічного роз’їзду.',
		],
	},

{
	id: 'marking_horizontal_1', chapter: 'marking_horizontal_1',
	txt: [ 'Горизонтальна розмітка', ],
},
	{
		id: 'marking_horizontal_1.3', chapter: 'marking_horizontal_1.3',
		txt: [ 
			'Розділяє транспортні потоки протилежних напрямків на дорогах, які мають чотири і більше смуг руху або на ділянках доріг з трьома (2+1) смугами.',
			'Лінію 1.3 перетинати забороняється.',
		],
	},





{
	id: 'sign_2', sign: '2',
	txt: [ 'Знаки пріоритету', ],
},
	{
		id: 'sign_2.1', sign: '2', part: '1', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/2.1',
		title: [ 'Дати дорогу', ],
	},
	{
		id: 'sign_2.2', sign: '2', part: '2', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/2.2',
		title: [ 'Проїзд без зупинки заборонено', ],
	},
	{
		id: 'sign_2.5', sign: '2', part: '5', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/2.5',
		title: [ 'Перевага зустрічного руху', ],
	},




{
	id: 'sign_3', sign: '3',
	txt: [ 'Заборонні знаки', ],
},
	{
		id: 'sign_3.1', sign: '3', part: '1', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/3.1',
		title: [ 'Рух заборонено', ],
	},
	{
		id: 'sign_3.2', sign: '3', part: '2', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/3.2',
		title: [ 'Рух механічних транспортних засобів заборонено', ],
	},
	{
		id: 'sign_3.21', sign: '3', part: '21', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/3.21',
		title: [ 'В\'їзд заборонено', ],
	},
	{
		id: 'sign_3.22', sign: '3', part: '22', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/3.22',
		title: [ 'Поворот праворуч заборонено', ],
	},
	{
		id: 'sign_3.23', sign: '3', part: '23', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/3.23',
		title: [ 'Поворот ліворуч заборонено', ],
	},
	{
		id: 'sign_3.25', sign: '3', part: '25', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/3.25',
		title: [ 'Обгін заборонено', ],
	},
	{
		id: 'sign_3.29', sign: '3', part: '29', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/3.29',
		title: [ 'Обмеження максимальної швидкості', ],
	},
	{
		id: 'sign_3.34', sign: '3', part: '34', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/3.34',
		title: [ 'Зупинку заборонено', ],
	},
	{
		id: 'sign_3.35', sign: '3', part: '35', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/3.35',
		title: [ 'Стоянку заборонено', ],
	},
	{
		id: 'sign_3.41', sign: '3', part: '41', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/3.41',
		title: [ 'Контроль', ],
	},
	{
		id: 'sign_3.41', sign: '3', part: '41', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/3.41',
		title: [ 'Контроль', ],
	},





{
	id: 'sign_4', sign: '4',
	txt: [ 'Наказові знаки', ],
},
	{
		id: 'sign_4.1', sign: '4', part: '1', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/4.1',
		title: [ 'Рух прямо', ],
	},
	{
		id: 'sign_4.2', sign: '4', part: '2', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/4.2',
		title: [ 'Рух праворуч', ],
	},
	{
		id: 'sign_4.5', sign: '4', part: '5', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/4.5',
		title: [ 'Рух прямо або ліворуч', ],
	},
	{
		id: 'sign_4.6', sign: '4', part: '6', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/4.6',
		title: [ 'Рух праворуч або ліворуч', ],
	},
	{
		id: 'sign_4.7', sign: '4', part: '7', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/4.7',
		title: [ 'Об’їзд перешкоди з правого боку', ],
	},


{
	id: 'sign_5', sign: '5', 
	title: [ 'Інформаційно-вказівні знаки', ],
},
	{
		id: 'sign_5.16', sign: '5', part: '16', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/5.16',
		title: [ 'Напрямки руху по смугах', ],
	},
	{
		id: 'sign_5.38.1', sign: '5', part: '38', paragraph: '1', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/5.38.1',
		title: [ 'Пішохідний перехід', ],
	},
	{
		id: 'sign_5.38.2', sign: '5', part: '38', paragraph: '2', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/5.38.2',
		title: [ 'Пішохідний перехід', ],
	},
	{
		id: 'sign_5.45.1', sign: '5', part: '45', paragraph: '1', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/5.45.1',
		title: [ 'Пункт зупинки автобуса', ],
	},
	{
		id: 'sign_5.46.1', sign: '5', part: '46', paragraph: '1', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/5.46.1',
		title: [ 'Пункт зупинки трамвая', ],
	},
	{
		id: 'sign_5.47.1', sign: '5', part: '47', paragraph: '1', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/5.47.1',
		title: [ 'Пункт зупинки тролейбуса', ],
	},
	{
		id: 'sign_5.48', sign: '5', part: '48', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/5.48',
		title: [ 'Місце зупинки таксі', ],
	},








{
	id: 'sign_5', sign: '5',
	txt: [ 'Інформаційно-вказівні знаки', ],
},
	{
		id: 'sign_5.8', sign: '5', part: '8', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/5.8',
		title: 'Дорога із смугою для руху маршрутних транспортних засобів',
		descr: [ 
			'Дорога, на якій по спеціально відведеній смузі здійснюється рух транспортних засобів за встановленим маршрутом та велосипедистів.',
		],
	},
	{
		id: 'sign_5.11', sign: '5', part: '11', href_sign: 'https://pdr.infotech.gov.ua/theory/road-signs/5.11',
		title: 'Смуга для руху маршрутних транспортних засобів',
		descr: [ 
			'Смуга призначена для руху транспортних засобів, що рухаються за встановленими маршрутами, та велосипедистів, якщо рух такою смугою здійснюється попутно загальному потоку транспортних засобів.',
			'Дія знака поширюється на смугу руху, над якою він установлений. Якщо знак установлений праворуч від дороги, його дія поширюється на праву смугу руху.',
			'Водію, який повертає праворуч на дорозі із смугою для маршрутних транспортних засобів, що відокремлена переривчастою лінією дорожньої розмітки, дозволено виконувати поворот із цієї смуги. У таких місцях дозволяється також заїжджати на неї під час виїзду на дорогу і для посадки чи висадки пасажирів біля правого краю проїзної частини.',
		],
	},

















];









let objListSheriffPdr = {};
arrListSheriffPdr.forEach( k => {
	objListSheriffPdr[ k.id ] = k;
});







