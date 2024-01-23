// © 2023 DJS 





class ComponentFabula { 
 
 
 
	static args = {}; 
 
 
 
	static html( ID ) { 
		const fooName = this.name + '.html()'; 



		console.log( 'fooName: ', fooName ); 
		console.log( 'ID: ', ID ); 








 
		//this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		let html = '';
		//html = fooName;








		if ( objListSheriffFabuly[ ID ] ) {

			let objFabula = objListSheriffFabuly[ ID ];


			// порушення конкретного закону, наказу чи правил
			let htmlViolationLaw = ''; 	



			let objKupap;
			if ( objFabula.kupap ) {
				if ( objListSheriffKupap[ objFabula.kupap ] ) 
					objKupap = objListSheriffKupap[ objFabula.kupap ];
			}
			//console.log( 'objKupap: ', objKupap ); 



			let objPdr;
			if ( objFabula.pdr ) {
				if ( objListSheriffPdr[ objFabula.pdr ] )
					objPdr = objListSheriffPdr[ objFabula.pdr ];
			}
			//console.log( 'objPdr: ', objPdr ); 





			let htmlInfoMinMax = '';
			let htmlInfoPenalty = '';
			let htmlKupapN = '';
			let htmlKupapInfo = '';
			let htmlViolationKupap = '';


			if ( objFabula.kupap ) {
				if ( objListSheriffKupap[ objFabula.kupap ] ) {

					htmlInfoMinMax 		= `<div>${ this.wrapMinMax( objKupap ) } мінімумів</div>`;
					htmlInfoPenalty 	= `<div>${ this.wrapPenalty( objKupap ) } грн</div>`;
					htmlKupapN 			= this.wrapKupap( objKupap );
					htmlKupapInfo 		= `<div>КУпАП:${ htmlKupapN }</div>`;
					htmlViolationKupap = `<div class="violation violation-kupap">чим скоїв адміністративне правопорушення, передбачене ${ htmlKupapN } КУпАП.</div>`;
				}
			}





			//let htmlIntroFabula = '<div class="fabula-action">';
			let htmlIntroFabula = '';
			if ( objFabula.txt ) {


				if ( objFabula.txt.intro ) {
				
					htmlIntroFabula += '<div class="txt-intro">';

					objFabula.txt.intro.forEach( k => {
						htmlIntroFabula += `${ objSheriffdictionary[ k ] } `;
					});

					htmlIntroFabula += '</div>';
				}



				if ( objFabula.txt.wrap ) {

					htmlIntroFabula += '<div class="fabula-action">';


					// заміна {шаблонів} на реальні значення -----------------------------
					let replaceSign = ''; 												//
					let replaceMarking = ''; 											//
					if ( objPdr ) { 													//
						replaceSign = this.wrapSign( objPdr, true ); 					//
						replaceMarking = this.wrapMarking( objPdr, true ); 				//
					} 																	//
					// -------------------------------------------------------------------


					objFabula.txt.wrap.forEach( k => {

						if ( k == '$1' ) {
							if ( objFabula.txt.fabula ) {

								let htmlInsert = objFabula.txt.fabula[ 0 ].replace( /{sign}/g, replaceSign );
								htmlInsert = htmlInsert.replace( /{marking}/g, replaceMarking );

								htmlIntroFabula += htmlInsert;
							}

						}
						else if ( k == '$2' ) {
							if ( objFabula.txt.fabula ) 
								htmlIntroFabula += `${ objFabula.txt.fabula[ 1 ] }`;
						}
						else if ( k == '$3' ) {
							if ( objFabula.txt.fabula ) 
								htmlIntroFabula += `${ objFabula.txt.fabula[ 2 ] }`;
						}
						else if ( k == '$4' ) {
							if ( objFabula.txt.fabula ) 
								htmlIntroFabula += `${ objFabula.txt.fabula[ 3 ] }`;

						} else
							htmlIntroFabula += `${ objSheriffdictionary[ k ] }`;

					});

					htmlIntroFabula += '</div>';
				}
			}


			htmlIntroFabula = htmlIntroFabula ? `<div class="fabula-intro">${ htmlIntroFabula }</div>` : '';

			//console.log( 'htmlIntroFabula: ', htmlIntroFabula );


			let htmlPdrN 			= '';

			let txtSignNumFull	 	= '';
			let txtSignNameFull	 	= '';
			let htmlFabula 			= '';

			let htmlItemMarking 	= '';
			let htmlMarkingFabula 	= '';





			// повторність
			let htmlRepeat 		= '';
			let htmlRepeat2 	= '';
			let objKupapRepeat 	= {};
			let objKupapRepeat2 = {};

			//console.log( 'objKupap: ', objKupap )


			let htmlEvacuation 	= '';
			let objSign 		= '';




			let htmlSignInfo 	= '';

			let htmlMarkN 		= '';
			let htmlMarkFabula 	= '';
			let htmlDstu 		= '';
			let htmlDstuFull 	= '';
			let htmlPdrInfo 	= '';



			// ПДР --------------------------------------------------------------------------------------------------------------------
			if ( objFabula.pdr ) {
				if ( objListSheriffPdr[ objFabula.pdr ] ) {

					objPdr 			= objListSheriffPdr[ objFabula.pdr ];
					htmlPdrN 		= this.wrapItemPdr( objPdr );
					htmlPdrInfo 	= `<div>ПДР: ${ htmlPdrN }</div>`;

					if ( objPdr.txt ) {
						if ( objPdr.txt.sign_n ) 
							htmlSignInfo = `<div>Знак: ${ this.wrapSign( objPdr ) }</div>`;

						if ( objPdr.txt.mark_n ) {
							htmlMarkN = `<div>Розмітка: ${ this.wrapMarking( objPdr ) }</div>`;
							//htmlMarkFabula = ` (розмітка: ${ this.wrapMarking( objPdr ) })`;

						}

						if ( objPdr.txt.dstu ) {
							htmlDstu = `<div>ДСТУ: ${ this.wrapDstu( objPdr ) }</div>`;
							htmlDstuFull = ` ( ДСТУ: ${ this.wrapDstu( objPdr, true ) } )`;
						}
					}

					htmlViolationLaw = `чим порушив п.${ htmlPdrN } ПДР${ htmlDstuFull }${ htmlMarkFabula },`;
				}
			}





			// Тютюн -------------------------------------------------------------------------------------------------------------------
			let objSmoking 			= {};
			let htmlSmokingN 		= '';
			let htmlSmokingFabula 	= '';

			if ( objFabula.smoking ) {
				if ( objListSheriffSmoking[ objFabula.smoking ] ) {

					objSmoking = objListSheriffSmoking[ objFabula.smoking ];

					htmlSmokingN = this.wrapSmoking( objSmoking );
					htmlSmokingFabula = `<div>ЗУ: ст.${ htmlSmokingN }</div>`;

					htmlViolationLaw = `чим порушив <span class="marker">п.[ --1, --2, .. --16, ]</span> ч.2 ст.${ htmlSmokingN } ЗУ \"Про заходи щодо попередження та зменшення вживання тютюнових виробів і їх шкідливого впливу на здоров'я населення\",`;
				
				}
			}

			//console.log( 'htmlViolationLaw: ', htmlViolationLaw );


			// Бухло -------------------------------------------------------------------------------------------------------------------
			let objAlco 		= {};
			let htmlAlcoN 		= '';
			let htmlAlcoFabula 	= '';

			if ( objFabula.alco ) {
				if ( objListSheriffAlco[ objFabula.alco ] ) {

					objAlco = objListSheriffAlco[ objFabula.alco ];

					htmlAlcoN = this.wrapAlco( objAlco );
					htmlAlcoFabula = `<div>ЗУ: ст.${ htmlAlcoN }</div>`;

					htmlViolationLaw = `чим порушив ст.${ htmlAlcoN } ЗУ \"Про державне регулювання виробництва і обігу спирту етилового, спиртових дистилятів, алкогольних напоїв, тютюнових виробів, рідин, що використовуються в електронних сигаретах, та пального\",`;
				}
			}





			// залізничний транспорт ---------------------------------------------------------------------------------------------------
			let objRailroad = {};
			let htmlRailroadInfo = '';
			
			if ( objFabula.railroad ) {
				objRailroad = objListSheriffRailroad[ objFabula.railroad ];

				let htmlRrN = this.wrapRailroad( objRailroad );

				htmlRailroadInfo = `<div>ЗУ: п.${ htmlRrN }</div>`;
				htmlViolationLaw = `<div>чим порушив п.${ htmlRrN } \"Правил безпеки громадян на залізничному транспорті України\",</div>`;
			}





			// порушення конкретного закону
			htmlViolationLaw = htmlViolationLaw ? `<div class="violation violation-law">${ htmlViolationLaw }</div>` : '';


			// розглядають справу ------------------------------------------------------------------------------------------------
			let htmlOrgan = '';
			if ( objKupap.organ ) 
				 htmlOrgan = `<div class="organ">Розглядають справу: <b>${ objListOrgan[ objKupap.organ ] }</b></div>`;





			// повторність --------------------------------------------------------------------------------------------------------
			if ( objKupap.repeat ) {
			
				objKupapRepeat = objListSheriffKupap[ objKupap.repeat ];


				let htmlRepeatMinMax = this.wrapMinMax( objKupapRepeat ) + ' мінімумів';
				let htmlRepeatPenalty = this.wrapPenalty( objKupapRepeat ) + ' грн';

				if ( objKupapRepeat.repeat ) {

					objKupapRepeat2 = objListSheriffKupap[ objKupapRepeat.repeat ];

					let htmlRepeatMinMax2 = this.wrapMinMax( objKupapRepeat2 ) + ' мінімумів';
					let htmlRepeatPenalty2 = this.wrapPenalty( objKupapRepeat2 ) + ' грн';


					htmlRepeat2 = `
						<br/>
						${ this.getRepeatKupap( objKupapRepeat2 ) }
					`;
				}

				htmlRepeat = `
					${ this.getRepeatKupap( objKupapRepeat ) }
					${ htmlRepeat2 }
				`;


			}




			// дата останього редагування ----------------------------------------------------------------------------------------------
			let htmlEdited = objFabula.edit ? `<div class="edited">Оновлено: ${ objFabula.edit }</div>` : '';

			//console.log( 'objFabula: ', objFabula );



			let htmlBlankName = '';
			if ( objFabula.hash ) {

				if ( objFabula.hash.pdr_postanova ) 
					htmlBlankName = '<span class="pdr-postanova">ПОСТАНОВА ПДР</span>';
				
				if ( objFabula.hash.pdr_protokol ) 
					htmlBlankName = '<span class="pdr-protokol">ПРОТОКОЛ ПДР</span>';
				
				if ( objFabula.hash.gb_postanova ) 
					htmlBlankName = '<span class="gb-postanova">ПОСТАНОВА ГБ</span>';
				
				if ( objFabula.hash.gb_protokol ) 
					htmlBlankName = '<span class="gb-protokol">ПРОТОКОЛ ГБ</span>';
				
			}



			html = `
				<div class="vstup">

					<div class="back-close close pointer" onclick="ComponentFabula.close( this )">
						<img src="img/pic/cross.png" alt="close">
					</div>



				
					<div class="info">
						${ htmlKupapInfo }
						${ htmlPdrInfo }
						${ htmlSignInfo }
						${ htmlMarkN }
						${ htmlDstu }
						${ htmlSmokingFabula }
						${ htmlAlcoFabula }
						${ htmlRailroadInfo }
						${ htmlInfoMinMax }
						${ htmlInfoPenalty }
					</div>
				</div>
				<div class="blank-name">${ htmlBlankName }</div>
				<div class="fabula-txt">
					<div>${ htmlIntroFabula }</div>	

					${ htmlViolationLaw }
					${ htmlViolationKupap }

					${ htmlEvacuation }
					<div>---</div>
					${ htmlOrgan }
				</div>
				${ htmlRepeat }
				${ htmlEdited }
			`;


			//document.querySelector( 'cmp-fabula').innerHTML = html;

/*
			let elem4ins = document.querySelector( `cmp-each-select-fabula[data-id="${ id }"] .full` );
			console.log( 'elem4ins: ', elem4ins );
			elem4ins.innerHTML = html;
*/



			//document.querySelector( `cmp-each-select-fabula[data-id="${ id }"]` ).innerHTML = html;




		} else 
			console.log( 'Дивна помилка...', );


		return { html, tagParam };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const name = this.name + '.clc()'; 
 
		//cns( 'var', 'data', data ); 
 
	} 
 
 
/*
 	// перехыд за посиланням в новому вікні
 	static clcLink( data ) { 
		const name = this.name + '.clcLink()'; 
 
		//cns( 'var', 'data', data ); 
		window.open( data.dataset.href );
	} 
*/


	static close( elem ) { 
		const fooName = this.name + '.close()'; 
		console.log( 'fooName: ', fooName );



		let elemParent = elem.closest( 'cmp-each-select-fabula' );
		console.log( 'elemParent: ', elemParent );



		// поиск дитя в родителе по селектору, наприклад по класу
		let elemFind = elemParent.querySelector( '.full' );


		console.log( 'elemFind: ', elemFind );


		elemFind.innerHTML = '';


	} 
 
 




	static getRepeatKupap( obj ) {
		const fooName = this.name + '.getRepeatKupap()'; 

		//console.log ( 'fooName: ', fooName );
		//console.log ( 'obj: ', obj );


		return `
			<div class="reapeat">
				<div class="repeat-warning">Повторність:</div>
				<div>КУпАП: ${ this.wrapKupap( obj ) }</div>
				<div>${ this.wrapMinMax( obj ) } мінімумів</div>
				<div>${ this.wrapPenalty( obj ) } грн</div>
				<div>Розглядають: <b>${ objListOrgan[ obj.organ ] }</b></div>
			</div>
		`;
	}






	// фарбувати текст статті КУпАП
	static wrapKupap( obj ) { 	// signID - txt
		const fooName = this.name + '.wrapKupap()'; 

		//console.log ( 'fooName: ', fooName );
		//console.log ( 'obj: ', obj );
		//console.trace();

		let htmlPart = '';
		let link = '';
		let symbol = '';

		if ( obj.a ) {
			htmlPart += `ст.<b>${ obj.a }</b>`;

			if ( obj.a ) 
				htmlPart += ` ч.<b>${ obj.p }</b>`;
			
			if ( obj.href ) {
				link = `onclick="window.open( '${ obj.href }' )"`;
				symbol = symbolLink;
			}
		}

		return `<span class="item-border part-kupap pointer" ${ link }>${ htmlPart }</span>${ symbol }`;
	}





	static wrapMinMax( obj ) { 			// signID - txt
		const fooName = this.name + '.wrapMinMax()'; 

		//console.log ( 'fooName: ', fooName );
		//console.log ( 'obj: ', obj );

		let html = '';
		if ( obj.min ) {

			html += `<span class="item-border min"><b>${ obj.min }</b></span>`;

			if ( obj.max ) 
				html += `-<span class="item-border min"><b>${ obj.max }</b></span>`;
		}

		return html;
	}



	static wrapPenalty( obj ) {

		const fooName = this.name + '.wrapPenalty()'; 

		let html = '';
		if ( obj.min ) {

			html += `<span class="item-border penalty"><b>${ obj.min * livingWage }</b></span>`;

			if ( obj.max ) 
				html += `-<span class="item-border penalty"><b>${ obj.max * livingWage }</b></span>`;
		}

		return html;

	}




//symbolLink

	// фарбувати текст пункту ПДР
	static wrapItemPdr( obj = {} ) { 	// signID - txt
		const fooName = this.name + '.wrapItemPdr()'; 
		//console.log( 'fooName: ', fooName );
		//console.log( 'obj: ', obj );

		let html = '';

		if ( obj.txt ) {
			if ( obj.txt.pdr_n ) {

				let link = '';
				let symbol = '';

				if ( obj.href ) {

					if ( obj.href.pdr ) {

						link = `onclick="window.open( '${ obj.href.pdr }' )"`;
						symbol = symbolLink;
					}
				}

				html = `<span class="item-border item-pdr pointer" ${ link }>${ obj.txt.pdr_n }</span>${ symbol }`;
			}
		}

		return html;
	}




	// фарбувати текст знаку
	static wrapSign( obj, tf = false ) { 	// 
		const fooName = this.name + '.wrapSign()'; 
		//console.log( 'fooName: ', fooName );
		//console.log( 'obj: ', obj );
		//console.log( 'tf: ', tf );


		let txt = '';
		let link = '';
		let symbol = '';



		if ( obj.txt ) {

			if ( obj.txt.sign_n ) 
				txt = obj.txt.sign_n;

			if ( tf && obj.txt.sign_title ) 
				txt += ` «${ obj.txt.sign_title }»`;
		}

		if ( obj.href ) {
			if ( obj.href.sign ) {

				link = `onclick="window.open( '${ obj.href.sign }' )"`;
				symbol = symbolLink;
			}
		}
	
		return `<span class="item-border sign pointer" ${ link }>${ txt }</span>${ symbol }`;
	}





	// фарбувати текст знаку
	static wrapMarking( obj, tf = false ) { 	// signID - txt
		const fooName = this.name + '.wrapMarking()'; 
		//console.log( 'fooName: ', fooName );
		//console.log( 'obj: ', obj );


		let htmlItem = '';
		let link = '';
		let symbol = '';

		if ( obj.txt ) {
			if ( obj.txt.mark_n ) {
				htmlItem += obj.txt.mark_n;

				if ( obj.href ) {
					if ( obj.href.mark ) {
						link = `onclick="window.open( '${ obj.href.mark}' )"`;
						symbol = symbolLink;
					}
				}
			}

			if ( tf ) {
				if ( obj.txt.mark_title ) 
					htmlItem += ` «${ obj.txt.mark_title }»`;
			}
		}

		return `<span class="item-border marking pointer" ${ link }>${ htmlItem }</span>${ symbol }`;
	}





	// фарбувати пункт ДСТУ
	static wrapDstu( obj = {}, tf = false ) { 	// 
		const fooName = this.name + '.wrapDstu()'; 
		//console.log( 'fooName: ', fooName );
		//console.log( 'obj: ', obj );


		let txt = '';
		let link = '';
		let symbol = '';

		if ( obj.txt ) {
			if ( obj.txt.dstu ) {
				if ( obj.txt.dstu.n ) 
					txt += obj.txt.dstu.n;

				if ( tf ) {
					if ( obj.txt.dstu.item ) 
						txt += ` п.${ obj.txt.dstu.item }`;
				}
			}
		}

		if ( obj.href ) {
			if ( obj.href.dstu ) {
				link = `onclick="window.open( '${ obj.href.dstu }' )"`;
				symbol = symbolLink;
			}
		}

		return `<span class="item-border marking pointer" ${ link }>${ txt }</span>${ symbol }`;
	}






	// фарбувати пункт ДСТУ
	static wrapRailroad( obj = {}, tf = false ) { 	// 

		const fooName = this.name + '.wrapRailroad()'; 
		//console.log( 'fooName: ', fooName );
		//console.log( 'obj: ', obj );



		let txt = '';
		let link = '';
		let symbol = '';

		if ( obj.txt ) {
			if ( obj.txt.n )
				txt += obj.txt.n;

			if ( tf ) {
				if ( obj.txt.title ) 
					txt += ` п.${ obj.txt.title }`;
			}
		}

		if ( obj.href ) {
			link = `onclick="window.open( '${ obj.href }' )"`;
			symbol = symbolLink;
		}

		return `<span class="item-border marking pointer" ${ link }>${ txt }</span>${ symbol }`;
	}









	// фарбувати пункт ЗУ про тютюн
	static wrapSmoking( obj = {}, tf = false ) { 	// 

		const fooName = this.name + '.wrapSmoking()'; 
		//console.log( 'fooName: ', fooName );
		//console.log( 'obj: ', obj );



		let txt = '';
		let link = '';
		let symbol = '';

		if ( obj.a ) {
			txt += obj.a;
		}


		if ( obj.href ) {
			link = `onclick="window.open( '${ obj.href }' )"`;
			symbol = symbolLink;
		}

		return `<span class="item-border marking pointer" ${ link }>${ txt }</span>${ symbol }`;
	}








	// фарбувати пункт ЗУ про бухло
	static wrapAlco( obj = {}, tf = false ) { 	// 

		const fooName = this.name + '.wrapAlco()'; 
		//console.log( 'fooName: ', fooName );
		//console.log( 'obj: ', obj );



		let txt = '';
		let link = '';
		let symbol = '';

		if ( obj.a ) {
			txt += obj.a;
		}


		if ( obj.href ) {
			link = `onclick="window.open( '${ obj.href }' )"`;
			symbol = symbolLink;
		}


		return `<span class="item-border marking pointer" ${ link }>${ txt }</span>${ symbol }`;
	}


















 
 
} 






