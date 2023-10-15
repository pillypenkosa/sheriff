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
 
 








	static insFabula( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//cns( 'var', 'fooName', fooName ); 
		//cns( 'var', 'data', data ); 

		const kupapID 			= data.kupap.art + '_' + data.kupap.part;
		const htmlPartKupap 	= this.paintKupap( objListSheriffKupap[ kupapID ].article, objListSheriffKupap[ kupapID ].part, objListSheriffKupap[ kupapID ].href ? objListSheriffKupap[ kupapID ].href : '' );
			 	
		const htmlItemPdr  		= `<span class="item-border item-pdr">${ data.pdr }</span>`;

		let htmlMarkingInfo  	= data.marking ? `Розмітка: <span class="item-border item-pdr">${ data.marking }</span>` : '';
		let htmlMarkingFabula 	= data.marking ? `(розмітка <span class="item-border item-pdr">${ data.marking }</span>)` : '';

		let txtSignNumFull	 	= '';
		let htmlSignNumBorder 	= '';
		let htmlInfoSign 		= '';
		let txtSignNameFull	 	= '';
		let htmlFabula 			= '';



		// розглядають справу
		let htmlOrgan = '';
		if ( objListSheriffKupap[ kupapID ].organ) 
			 htmlOrgan = `<div class="organ">Розглядають справу: <b>${ objListOrgan[ objListSheriffKupap[ kupapID ].organ ] }</b></div>`;



		let htmlRepeat 		= '';
		let objKupapRepeat 	= {};


		if ( objListSheriffKupap[ kupapID ].repeat ) {

			objKupapRepeat = arrListSheriffKupap.find( k => k.id == objListSheriffKupap[ kupapID ].repeat );

			//let minKupap = objKupapRepeat.min ? : '';
			let htmlMinMax = `<span class="item-border min"><b>${ objKupapRepeat.min }</b></span>`;
			let htmlPenalty = `<span class="item-border penalty"><b>${ objKupapRepeat.min * livingWage }</b></span>`;

			if ( objKupapRepeat.max ) {
				htmlMinMax += `-<span class="item-border min"><b>${ objKupapRepeat.max }</b></span>`;
				htmlPenalty += `-<span class="item-border penalty"><b>${ objKupapRepeat.max * livingWage }</b></span>`;
			}
		
			htmlMinMax += ' мінімумів';
			htmlPenalty += ' грн';



			//const htmlPartKupap 	= ``;

			htmlRepeat = `<div class="reapeat">
				<div class="repeat-warning">Повторність:</div>
				<div>КУпАП: ${ this.paintKupap( objKupapRepeat.article, objKupapRepeat.part, objKupapRepeat.href ) }</div>
				<div>${ htmlMinMax }</div>
				<div>Штраф: ${ htmlPenalty }</div>
				<div>Розглядають: <b>${ objListOrgan[ objKupapRepeat.organ ] }</b></div>
			</div>`;
		}


		//cns( 'var', 'fooName', fooName ); 
		//cns( 'var', 'objKupapRepeat', objKupapRepeat );





		//let linkPdr 			= '';
		//let linkSign 			= '';

		//cns( 'var', 'data', data );

		if ( data.sign ) {

			txtSignNumFull = this.getFullNumSign( data.sign );
			//cns( 'var', 'txtSignNumFull', txtSignNumFull );

			htmlSignNumBorder = this.paintSign( txtSignNumFull );
			//cns( 'var', 'htmlSignNumBorder', htmlSignNumBorder );

			htmlInfoSign = 'Знак: ' + htmlSignNumBorder;
			txtSignNameFull = this.paintSign( this.getFullNameSign( data.sign ));
			//cns( 'var', 'txtSignNameFull', txtSignNameFull );
		}





		//cns( 'var', 'href_sign', objListSheriffPdr[ 'sign_' + data.sign ].href_sign );




		if ( data.fabula ) {

			htmlFabula = data.fabula.replace( /{sign}/g, txtSignNameFull );

		} else 
			htmlFabula = '<span class="item-border no-fabula">а ось тут могла бути Ваша реклама (((</span>';


		if ( data.marking ) {
			htmlMarkingInfo  	= `Розмітка: <span class="item-border marking">${ data.marking }</span>`;
			htmlMarkingFabula 	= ` (розмітка <span class="item-border marking">${ data.marking }</span>)`;
		}


		let edited = data.edit ? `<div class="edited">Оновлено: ${ data.edit.d }.${ data.edit.m }.${ data.edit.y }</div>` : '';


		let txtPerson = '';
		let txtAction = ' '; 		// залишити ПРОБІЛ
		if ( data.type == 'pedestrian' ) {

			txtPerson = 'пішохід';
			//txtAction = ' '; 		// залишити ПРОБІЛ

		} else {

			txtPerson = 'водій';
			txtAction = ', керуючи ТЗ «Ferrari 248 F1» д.н.з. АХ 1234 АВ';
		}





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
							<img src="img/fabuly/${ data.img ? data.img : data.id }.jpg" alt="">
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
						<div class="fabula-action">${ htmlFabula },</div>						
						<div>чим порушив п.${ htmlItemPdr } ПДР${ htmlMarkingFabula }, чим скоїв адміністративне правопорушення, передбачене ${ htmlPartKupap } КУпАП.</div>
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
		
		return `<span class="item-border part-kupap ${ clsPointer }" ${ htmlHref }>ч.<b>${ art }</b> ст.<b>${ part }</b></span>`;
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
 
 
 	
 
 
 
 
 	
 
 
