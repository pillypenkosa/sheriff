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
		const name = this.name + '.clc()'; 

		document.querySelector( 'cmp-fabula' ).innerHTML = '';
		//cns( 'var', 'data', data ); 
	} 
 
 








	static insFabula( id ) { 
		const fooName = this.name + '.clc()'; 

		cns( 'var', 'fooName', fooName ); 
		cns( 'var', 'id', id );


		let objFabula = arrListSheriffFabuly.find( k => k.id == id );


 

		const kupapID 			= objFabula.kupap.art + '_' + objFabula.kupap.part;
		



		//cns( 'var', 'kupapID', kupapID );
		//cns( 'var', 'objListSheriffKupap', objListSheriffKupap );












		//return;

		const htmlPartKupap 	= this.paintKupap( objListSheriffKupap[ kupapID ].article, objListSheriffKupap[ kupapID ].part, objListSheriffKupap[ kupapID ].href ? objListSheriffKupap[ kupapID ].href : '' );



			 	
		const htmlItemPdr  		= `<span class="item-border item-pdr">${ objFabula.pdr }</span>`;

		let htmlMarkingInfo  	= objFabula.marking ? `Розмітка: <span class="item-border item-pdr">${ objFabula.marking }</span>` : '';
		let htmlMarkingFabula 	= objFabula.marking ? `(розмітка <span class="item-border item-pdr">${ objFabula.marking }</span>)` : '';

		let txtSignNumFull	 	= '';
		let htmlSignNumBorder 	= '';
		let htmlInfoSign 		= '';
		let txtSignNameFull	 	= '';
		let htmlFabula 			= '';



		// розглядають справу
		let htmlOrgan = '';
		if ( objListSheriffKupap[ kupapID ].organ ) 
			 htmlOrgan = `<div class="organ">Розглядають справу: <b>${ objListOrgan[ objListSheriffKupap[ kupapID ].organ ] }</b></div>`;


		// повторність
		let htmlRepeat 		= '';
		let objKupapRepeat 	= {};
		if ( objListSheriffKupap[ kupapID ].repeat ) {

			objKupapRepeat = arrListSheriffKupap.find( k => k.id == objListSheriffKupap[ kupapID ].repeat );

			let htmlMinMax = `<span class="item-border min"><b>${ objKupapRepeat.min }</b></span>`;
			let htmlPenalty = `<span class="item-border penalty"><b>${ objKupapRepeat.min * livingWage }</b></span>`;

			if ( objKupapRepeat.max ) {
				htmlMinMax += `-<span class="item-border min"><b>${ objKupapRepeat.max }</b></span>`;
				htmlPenalty += `-<span class="item-border penalty"><b>${ objKupapRepeat.max * livingWage }</b></span>`;
			}
		
			htmlMinMax += ' мінімумів';
			htmlPenalty += ' грн';

			htmlRepeat = `<div class="reapeat">
				<div class="repeat-warning">Повторність:</div>
				<div>КУпАП: ${ this.paintKupap( objKupapRepeat.article, objKupapRepeat.part, objKupapRepeat.href ) }</div>
				<div>${ htmlMinMax }</div>
				<div>Штраф: ${ htmlPenalty }</div>
				<div>Розглядають: <b>${ objListOrgan[ objKupapRepeat.organ ] }</b></div>
			</div>`;
		}



		let txtPerson 		= 'водій';
		let txtAction 		= ', керуючи ТЗ «Ferrari 248 F1» д.н.з. АХ 1234 АВ'; 		// залишити ПРОБІЛ
		let htmlEvacuation 	= '';

		if ( objFabula.hash ) {

			if ( objFabula.hash.pedestrian ) {
				txtPerson = 'пішохід';
				txtAction = ' ';
			}

			if ( objFabula.hash.sign ) {

				txtSignNumFull = this.getFullNumSign( objFabula.hash.sign );
				//cns( 'var', 'txtSignNumFull', txtSignNumFull );

				htmlSignNumBorder = this.paintSign( txtSignNumFull );
				//cns( 'var', 'htmlSignNumBorder', htmlSignNumBorder );

				htmlInfoSign = 'Знак: ' + htmlSignNumBorder;
				txtSignNameFull = this.paintSign( this.getFullNameSign( objFabula.hash.sign ));
				//cns( 'var', 'txtSignNameFull', txtSignNameFull );
			}

			if ( objFabula.hash.evacuation ) 
				htmlEvacuation = `<div class="evacuation">---<br/>Якщо суттєво перешкоджає іншим учасникам дорожнього руху - передбачена ЕВАКУАЦІЯ! ${ this.paintKupap( '265-4', '', 'https://zakon.rada.gov.ua/laws/show/80732-10#n1134' ) }</div>`;
		

		}


		// фабула, якщо є
		if ( objFabula.fabula ) {

			htmlFabula = objFabula.fabula.replace( /{sign}/g, txtSignNameFull );

		} else 
			htmlFabula = '<span class="item-border no-fabula">а ось тут могла бути Ваша реклама (((</span>';


		if ( objFabula.marking ) {
			htmlMarkingInfo  	= `Розмітка: <span class="item-border marking">${ objFabula.marking }</span>`;
			htmlMarkingFabula 	= ` (розмітка <span class="item-border marking">${ objFabula.marking }</span>)`;
		}


		let edited = objFabula.edit ? `<div class="edited">Оновлено: ${ objFabula.edit.d }.${ objFabula.edit.m }.${ objFabula.edit.y }</div>` : '';



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
							<div>КУпАП: ${ htmlPartKupap }</div>
							<div><span class="item-border min"><b>${ objListSheriffKupap[ kupapID ].min }</b></span> мінімумів</div>
							<div><span class="item-border penalty"><b>${ objListSheriffKupap[ kupapID ].min * livingWage }</b> грн</span></div>
						</div>
					</div>
					
					<div class="fabula-txt">
						<div>1.10.2023 р. о 12:00 в м.Харків, вул.Сумська, біля буд.38а ${ txtPerson } Шумахер Михайло Побатькович${ txtAction }</div>
						<div class="fabula-action">${ htmlFabula }</div>						
						<div>, чим порушив п.${ htmlItemPdr } ПДР${ htmlMarkingFabula }, чим скоїв адміністративне правопорушення, передбачене ${ htmlPartKupap } КУпАП.</div>
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
 
 
 
	// отримати повний номер знаку
	static getFullNumSign( txt = '' ) { 	// txt - текст-номер знаку ( цифри текстом )

		let textNum = '';

		//cns( 'var', 'txt', txt );

		if ( txt ) {

			if ( objListSheriffPdr[ 'sign_' + txt ] ){

				if ( objListSheriffPdr[ 'sign_' + txt ].sign ) 
					textNum += objListSheriffPdr[ 'sign_' + txt ].sign;

				if ( objListSheriffPdr[ 'sign_' + txt ].part ) 
					textNum += '.' + objListSheriffPdr[ 'sign_' + txt ].part;

				if ( objListSheriffPdr[ 'sign_' + txt ].paragraph ) 
					textNum += '.' + objListSheriffPdr[ 'sign_' + txt ].paragraph;

				if ( objListSheriffPdr[ 'sign_' + txt ].item ) 
					textNum += '.' + objListSheriffPdr[ 'sign_' + txt ].item;

			}
		}

		return textNum;
	}




	// отримати повну назву знаку з номером та описом
	static getFullNameSign( txt = '' ) { 	// txt - текст-номер знаку ( цифри текстом )

		let textNum = '';

		//cns( 'var', 'txt', txt );


		if ( txt ) 
			textNum = this.getFullNumSign( txt ) + ' «' + objListSheriffPdr[ 'sign_' + txt ].title + '»';

		return textNum;
	}








		




	// фарбувати текст статті КУпАП
	static paintKupap( art, part, href ) { 	// signID - txt
		const fooName = this.name + '.paintKupap()'; 

		//cns( 'var', 'fooName', fooName );

		let clsPointer = '';


		let htmlHref = '';
		if ( href ) {
			htmlHref = `data-href="${ href }" onclick="${ this.name }.linkTo( this )"`;
			clsPointer = 'link-pointer'
		}

		let htmlPart = part ? `ч.<b>${ part }</b> ` : '';
		
		return `<span class="item-border part-kupap ${ clsPointer }" ${ htmlHref }>${ htmlPart }ст.<b>${ art }</b></span>`;
	}







	// фарбувати текст знаку
	static paintSign( txt = '' ) { 	// signID - txt
		const name = this.name + '.txtBorderSign()'; 

		//cns( 'var', 'name', name );
		//cns( 'var', 'txt', txt );

		return '<span class="item-border sign">' + txt + '</span>';
	}


















	// перехід за посиланням на інші сайти
	static linkTo( data ) {
		const fooName = this.name + '.linkTo()'; 

		//cns( 'var', 'fooName', fooName );
		//cns( 'var', 'data.href', data.dataset.href );

		window.open( data.dataset.href );
	}















 
 
} 
 
 
 	
 
 
 
 
 	
 
 
