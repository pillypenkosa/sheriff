// © 2023 DJS 





class ComponentFabula { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
 
		const name = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		//let html = '';
		let html = ''; 
 
		return { html, tagParam };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const name = this.name + '.clc()'; 
 
		//cns( 'var', 'data', data ); 
 
	} 
 
 


 	// перехыд за посиланням в новому вікні
 	static clcLink( data ) { 
		const name = this.name + '.clcLink()'; 
 
		//cns( 'var', 'data', data ); 
		window.open( data.dataset.href );
	} 










	static close( data ) { 
		const name = this.name + '.close()'; 

		document.querySelector( 'cmp-fabula' ).innerHTML = '';
	} 
 
 


	static insFabula( id ) { 
		const fooName = this.name + '.insFabula()'; 

		//console.log( 'fooName: ', fooName );
		//console.log( 'id: ', id );
		//console.log( 'objListSheriffFabuly: ', objListSheriffFabuly );


		const objFabula = objListSheriffFabuly[ id ];
		//console.log( 'objFabula: ', objFabula );

		const objPdr = objFabula.pdr ? objListSheriffPdr[ objFabula.pdr ] : {};

		//const kupapID = objFabula.kupap.art + '_' + objFabula.kupap.part;
		const kupapID = 'kupap_' + objFabula.kupap.art + '_' + objFabula.kupap.part;
		//console.log( 'kupapID: ', kupapID );


		//console.log( 'kupapID: ', kupapID );
		
		const objKupap = objListSheriffKupap[ kupapID ];
		//console.log( 'objKupap: ', objKupap );

		//console.log( 'objKupap: ', objKupap );


		const htmlPartKupap = this.wrapKupap( objKupap );
		//console.log( 'htmlPartKupap: ', htmlPartKupap );




		//console.log( 'objPdr: ', objPdr );
		const htmlItemPdr = this.wrapItemPdr( objPdr );
		//console.log( 'htmlItemPdr: ', htmlItemPdr );






		let txtSignNumFull	 	= '';
		let htmlSignNumBorder 	= '';
		let htmlInfoSign 		= '';
		let htmlInfoDstu 		= '';
		let txtSignNameFull	 	= '';
		let htmlFabula 			= '';



		// розглядають справу
		let htmlOrgan = '';
		if ( objKupap.organ ) 
			 htmlOrgan = `<div class="organ">Розглядають справу: <b>${ objListOrgan[ objKupap.organ ] }</b></div>`;

		//console.log( 'htmlOrgan: ', htmlOrgan );

		//return;


		// повторність
		let htmlRepeat 		= '';
		let objKupapRepeat 	= {};


		//console.log( 'objKupap: ', objKupap )



		if ( objKupap.repeat ) {
		
			objKupapRepeat = objListSheriffKupap[ objKupap.repeat ];

			//console.log( 'objKupapRepeat: ', objKupapRepeat )

			let htmlRepeatMinMax = this.wrapMinMax( objKupapRepeat ) + ' мінімумів';
			let htmlRepeatPenalty = this.wrapPenalty( objKupapRepeat ) + ' грн';

			//console.log( 'htmlRepeatMinMax: ', htmlRepeatMinMax );
			//console.log( 'htmlRepeatPenalty: ', htmlRepeatPenalty );


			htmlRepeat = `<div class="reapeat">
				<div class="repeat-warning">Повторність:</div>
				<div>КУпАП: ${ this.wrapKupap( objKupapRepeat ) }</div>
				<div>${ htmlRepeatMinMax }</div>
				<div>${ htmlRepeatPenalty }</div>
				<div>Розглядають: <b>${ objListOrgan[ objKupapRepeat.organ ] }</b></div>
			</div>`;
		}



		let txtPerson 		= 'водій';
		let txtAction 		= ', керуючи ТЗ «Ferrari 248 F1» д.н.з. АХ 1234 АВ'; 		// залишити ПРОБІЛ
		let htmlEvacuation 	= '';
		let objSign 		= '';



		if ( objFabula.hash ) {

			if ( objFabula.hash.pedestrian ) {
				txtPerson = 'пішохід';
				txtAction = ' ';
			}

			if ( objFabula.hash.sign ) {

				//console.log( 'objFabula.hash.sign: ', objFabula.hash.sign );
				objSign = objListSheriffPdr[ 'sign_' + objFabula.hash.sign ];


				//console.log( 'objListSheriffPdr: ', objListSheriffPdr );
				//console.log( 'objSign: ', objSign );
				//console.log( 'txtSignNumFull', txtSignNumFull );

				htmlSignNumBorder = this.wrapSign( objSign );

				htmlInfoSign = 'Знак: ' + htmlSignNumBorder;
			}



			if ( objFabula.hash.dstu ) 
				//htmlInfoDstu += 'ДСТУ ' + ( objFabula.hash.dstu.n ? objFabula.hash.dstu.n : '' ) + ' ' + ( objFabula.hash.dstu.item ? 'п.' + this.wrapDstu( 'DSTU_3649.2010.pdf', objFabula.hash.dstu.item ) : '' );
				htmlInfoDstu += 'ДСТУ: ' + ( objFabula.hash.dstu.n ? this.wrapDstu( objFabula.hash.dstu.n ) : '' ) + ' ' + ( objFabula.hash.dstu.item ? 'п.' + objFabula.hash.dstu.item  : '' );
			


			if ( objFabula.hash.evacuation ) 
				htmlEvacuation = `<div class="evacuation">---<br/>Якщо суттєво перешкоджає іншим учасникам дорожнього руху - передбачена ЕВАКУАЦІЯ! ${ this.wrapKupap( objListSheriffKupap[ 'kupap_265_4' ] ) }</div>`;
		

		}


		// фабула, якщо є
		if ( objFabula.fabula ) {
			htmlFabula = objFabula.fabula.replace( /{sign}/g, this.wrapSign( objSign, true ) );

		} else 
			htmlFabula = '<span class="item-border no-fabula">а ось тут могла бути Ваша реклама (((</span>';


		//let htmlMarkingFabula 	= objFabula.marking ? `(розмітка <span class="item-border item-pdr">${ objFabula.marking }</span>)` : '';
		


		let htmlItemMarking = this.wrapMarking( objPdr );

		let htmlMarkingFabula = '';

		let htmlMarkingInfo = '';
		if ( objFabula.marking ) {
			//htmlMarkingInfo  	= `Розмітка: <span class="item-border marking pointer">${ objFabula.marking }</span>`;
			htmlMarkingInfo  	= 'Розмітка: ' + htmlItemMarking;
			//console.log ( 'fooName', fooName ); 
			//console.log ( 'objPdr', objPdr );

			htmlMarkingFabula 	= ` (розмітка ${ htmlItemMarking })`;
		}


		let edited = objFabula.edit ? `<div class="edited">Оновлено: ${ objFabula.edit.d }.${ objFabula.edit.m }.${ objFabula.edit.y }</div>` : '';


		//console.log( 'objKupap: ', objKupap );


		const htmlInfoMinMax = this.wrapMinMax( objKupap ) + ' мінімумів';
		const htmlInfoPenalty = this.wrapPenalty( objKupap ) + ' грн';

		let html = `
			<div class="modal">
				<div class="back-close back" onclick="ComponentFabula.close()">
					<img src="img/pic/arrow-left.png" alt="close">
				</div>
				<div class="back-close close" onclick="ComponentFabula.close()">
					<img src="img/pic/cross.png" alt="close">
				</div>

				<div class="fabula-title">Фабула</div>
				<div class="fabula-body">
					<div class="vstup">
						<div class="img">
							<img src="img/fabuly/${ objFabula.img ? objFabula.img : objFabula.id }.jpg" alt="">
						</div>
						<div class="info">
							<div>ПДР: ${ htmlItemPdr }</div>
							<div>${ htmlInfoSign }</div>
							<div>${ htmlMarkingInfo }</div>
							<div>${ htmlInfoDstu }</div>
							<div>КУпАП: ${ htmlPartKupap }</div>
							<div>${ htmlInfoMinMax }</div>
							<div>${ htmlInfoPenalty }</div>
						</div>
					</div>
					
					<div class="fabula-txt">
						<div>1.10.2023 р. о 12:00 в м.Харків, вул.Сумська, біля буд.38а ${ txtPerson } Шумахер Михайло Побатькович${ txtAction }</div>
						<div class="fabula-action">${ htmlFabula }</div>						
						<div>, чим порушив п.${ htmlItemPdr } ПДР${ htmlMarkingFabula }${ htmlInfoDstu ? ' ( ' + htmlInfoDstu + ' )' : '' }, чим скоїв адміністративне правопорушення, передбачене ${ htmlPartKupap } КУпАП.</div>
						${ htmlEvacuation }
						<div>---</div>
						${ htmlOrgan }
					</div>
					${ htmlRepeat }
					${ edited }
				</div>
			</div>
		`;

		document.querySelector( 'cmp-fabula').innerHTML = html;
	} 
 
 

	// фарбувати текст статті КУпАП
	static wrapKupap( obj ) { 	// signID - txt
		const fooName = this.name + '.paintKupap()'; 

		//console.log ( 'fooName: ', fooName );
		//console.log ( 'obj: ', obj );
		//console.trace();

		let htmlPart = obj.part ? `ч.<b>${ obj.part }</b> ` : '';
		
		//let link = obj.href ? `onclick="window.open( '${ obj.href }')"` : '';
		let link = '';
		let symbol = '';

		if ( obj.href ) {
			link = `onclick="window.open( '${ obj.href }' )"`;
			symbol = symbolLink;
		}



		return `<span class="item-border part-kupap pointer" ${ link }>${ htmlPart }ст.<b>${ obj.article }</b> ${ symbol }</span>`;
	}





	static wrapMinMax( obj ) { 			// signID - txt
		const fooName = this.name + '.wrapMinMax()'; 

		//console.log ( 'fooName', fooName );
		//console.log ( 'obj', obj );

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

		if ( obj.id ) {
			//let link = obj.href ? `onclick="window.open( '${ obj.href }' )"` : '';
			let link = '';
			let symbol = '';

			if ( obj.href ) {
				link = `onclick="window.open( '${ obj.href }' )"`;
				symbol = symbolLink;
			}

			//console.log( 'link: ', link );
			html = `<span class="item-border item-pdr pointer" ${ link }>${ obj.id } ${ symbol }</span>`;
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
		if ( obj.sign ) {
			txt += obj.sign;

			if ( obj.part ) {
				txt += '.' + obj.part;

				if ( obj.paragraph ) {
					txt += '.' + obj.paragraph;

					if ( obj.item ) 
						txt += '.' + obj.item;
				}
			}

			if ( tf ) 
				txt += ` «${ obj.title }»`;
		}

		//console.log( 'txt: ', txt );

		let link = '';
		let symbol = '';
		
		if ( obj.href_sign ) {
			link += `onclick="window.open( '${ obj.href_sign }' )"`;
			symbol = symbolLink;
		}


		return `<span class="item-border sign pointer" ${ link }>${ txt } ${ symbol }</span>`;
	}












	// фарбувати текст знаку
	static wrapMarking( obj ) { 	// signID - txt
		const fooName = this.name + '.wrapMarking()'; 
		//console.log( 'fooName: ', fooName );


		let htmlItem = '';
		if ( obj.part ) {

			htmlItem += obj.part;

			if ( obj.paragraph ) {
				htmlItem += '.' + obj.paragraph
			}
		}

		//let link = obj.descrimg ? `onclick="window.open( '${ obj.descrimg }' )"` : '';
		let link = '';
		let symbol = '';

		if ( obj.descrimg ) {
			link = `onclick="window.open( '${ obj.descrimg }' )"`;
			symbol = symbolLink;
		}


		return `<span class="item-border marking pointer" ${ link }>${ htmlItem } ${ symbol }</span>`;
	}





	// фарбувати пункт ДСТУ
	static wrapDstu( txt ) { 	// 
		const fooName = this.name + '.wrapDstu()'; 
		//console.log( 'fooName: ', fooName );


		//alert( doc );

		let link = '';
		if ( txt == '3649:2010' ) 
			link += 'https://patrul.in.ua/pdf/dstu-3649.pdf';


		//return `<span class="item-border marking pointer" onclick="window.open( 'doc/${ doc }' )">${ txt }</span>`;
		return `<span class="item-border marking pointer" onclick="window.open( '${ link }' )">${ txt } ${ symbolLink }</span>`;
	}







 
 
} 
 
 
 	
 
 
 
 
 	
 
 
