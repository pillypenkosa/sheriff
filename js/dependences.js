




const dependences = [



	// масиви-списки з інших сайтів ( сторонні ) ----------------------------------------------------------------------------------
	
	{ db: 'country' 	, },  // https://pillypenkosa.github.io/database/list/list.country.js





	// масиви-списки з ЦЬОГО проекту ( свої ) -------------------------------------------------------------------------------------

	{ arr: 'sheriff.pdr' 			, },
	{ arr: 'sheriff.kupap' 			, }, 	
	{ arr: 'sheriff.fabuly' 		, }, 	
	{ arr: 'sheriff.constitution' 	, }, 	





	// компоненти загальні --------------------------------------------------------------------------------------------------------

	//{ cmp: 'Fabuly-Pdr-Pic' 		, },
	//{ cmp: 'Search-Fabula' 			, },


	{ cmp: 'Menu-Select-Fabula' 	, },
	{ cmp: 'Each-Select-Fabula' 	, },
	{ cmp: 'Fabula-Head' 			, },
	{ cmp: 'Fabula' 				, },


	{ cmp: 'Win-Err404' 			, },
	{ cmp: 'Footer' 				, },
	{ cmp: 'Menu' 					, },
	{ cmp: 'Header' 				, },








	// компоненти-контенти // win-сторiнки ----------------------------------------------------------------------------------------
	
	{ cmp: 'Win-Index' 					, regexp: /^index$/ 					, }, 	// regexp - url-маршрут (route) в адресному рядку
	{ cmp: 'Win-Fabuly-Postanov-Pdr' 	, regexp: /^fabuly-postanov-pdr$/ 		, },
	{ cmp: 'Win-Fabuly-Protokoliv-Pdr' 	, regexp: /^fabuly-protokoliv-pdr$/ 	, },
	{ cmp: 'Win-Kupap' 					, regexp: /^kupap$/ 					, },
	{ cmp: 'Win-Rights' 				, regexp: /^rights$/ 					, },






	//{ cmp: 'Win-Cars' 			, regexp: /^cars$/ 						, }, 	// cars
	//{ cmp: 'Win-Film' 			, regexp: /^film\/[0-9A-Za-z]+$/ 		, }, 	// film/{ txt }
	{ cmp: 'Win-Films' 				, regexp: /^films$/ 					, },
	{ cmp: 'Win-User' 				, regexp: /^user\/[0-9]+$/ 				, }, 	// user/{ n }
	//{ cmp: 'Win-User' 			, regexp: /^user\/[0-9A-Za-z]+$/ 		, }, 	// user/{ txt }
	//{ cmp: 'Win-Users' 			, regexp: /^users$/ 					, },










];




















