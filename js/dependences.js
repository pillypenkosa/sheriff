




const dependences = [



	// масиви-списки з інших сайтів ( сторонні ) ----------------------------------------------------------------------------------
	
	{ db: 'country' 	, },  // https://pillypenkosa.github.io/database/list/list.country.js





	// масиви-списки з ЦЬОГО проекту ( свої ) -------------------------------------------------------------------------------------

	{ arr: 'sheriff.laws' 			, }, 	
	{ arr: 'sheriff.terminology' 	, }, 	

	{ arr: 'sheriff.alco' 			, }, 	
	{ arr: 'sheriff.npu' 			, }, 	
	{ arr: 'sheriff.kupap' 			, }, 	
	{ arr: 'sheriff.kku' 			, }, 	
	{ arr: 'sheriff.ku' 			, }, 	
	{ arr: 'sheriff.railroad' 		, }, 
	{ arr: 'sheriff.pdr' 			, },
	{ arr: 'sheriff.smoking' 		, }, 
	
	{ arr: 'sheriff.fabuly' 		, }, 








	// компоненти загальні --------------------------------------------------------------------------------------------------------

	//{ cmp: 'Fabuly-Pdr-Pic' 		, },
	//{ cmp: 'Search-Fabula' 			, },


	{ cmp: 'Menu-Select-Fabula' 	, },
	{ cmp: 'Each-Select-Fabula' 	, },
	{ cmp: 'Fabula-Head' 			, },
	{ cmp: 'Fabula' 				, },
	{ cmp: 'Law-Alco' 				, },
	{ cmp: 'Law-Kku' 				, },
	{ cmp: 'Law-Ku' 				, },
	{ cmp: 'Law-Kupap' 				, },
	{ cmp: 'Law-Npu' 				, },
	{ cmp: 'Law-Smoking' 			, },
	{ cmp: 'Spoiler-Art' 			, },

	{ cmp: 'Win-Err404' 			, },
	{ cmp: 'Footer' 				, },
	{ cmp: 'Menu' 					, },
	{ cmp: 'Header' 				, },








	// компоненти-контенти // win-сторiнки ----------------------------------------------------------------------------------------
	
	{ cmp: 'Win-Index' 				, regexp: /^index$/ 			, }, 	// regexp - url-маршрут (route) в адресному рядку
	{ cmp: 'Win-Fabuly' 			, regexp: /^fabuly$/ 			, },
	{ cmp: 'Win-Kupap' 				, regexp: /^kupap$/ 			, },
	{ cmp: 'Win-Laws' 				, regexp: /^laws$/ 				, },
	{ cmp: 'Win-Rights' 			, regexp: /^rights$/ 			, },
	{ cmp: 'Win-Terminology' 		, regexp: /^terminology$/ 		, },









	//{ cmp: 'Win-Cars' 			, regexp: /^cars$/ 						, }, 	// cars
	//{ cmp: 'Win-Film' 			, regexp: /^film\/[0-9A-Za-z]+$/ 		, }, 	// film/{ txt }
	{ cmp: 'Win-Films' 				, regexp: /^films$/ 					, },
	{ cmp: 'Win-User' 				, regexp: /^user\/[0-9]+$/ 				, }, 	// user/{ n }
	//{ cmp: 'Win-User' 			, regexp: /^user\/[0-9A-Za-z]+$/ 		, }, 	// user/{ txt }
	//{ cmp: 'Win-Users' 			, regexp: /^users$/ 					, },










];




















