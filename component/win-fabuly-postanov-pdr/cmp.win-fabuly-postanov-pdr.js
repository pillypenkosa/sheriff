// © 2023 DJS 
 
 
 
 
 
class ComponentWinFabulyPostanovPdr { 
 
 
 
	static args = {}; 
	static tag = 'cmp-win-fabuly-postanov-pdr'; 
 
 
 
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
 
 
		//cns( 'var', 'arrListPatrolPdr', arrListPatrolPdr );

		let item = arrListPatrolPdr.find( k => k.id == '2_9_a' );


		let htmlOptionPdrType = '';
		arrListPatrolFabulyType.forEach( k => {
			htmlOptionPdrType += `<option value="${ k.id }">${ k.title }</option>`;
		});



		let html = `${ Component( 'Fabula' ) }
			<div class="win-fabuly-postanov-pdr-title">Фабули постанов ПДР</div>
			<select class="select-offense-type" onchange="ComponentWinFabulyPostanovPdr.clcSelectTypePDR( this )">${ htmlOptionPdrType }</select>
			<div class="menu-select-fabuly">${ ComponentWinFabulyPostanovPdr.showFabuly( 'all' ) }</div>
		`;


		setMeta({ 
			title 			: 'Фабули постанов ПДР', 
			description 	: 'Опис...', 
			//image 		: '', 
		}); 
 
 
 
		return { html, tagParam };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const name = this.name + '.clc()'; 
 

		let objFabula = arrListPatrolFabuly.find( k => {

			if ( k.id == data.dataset.id )
				return true;
		});

		//cns( 'var', 'arrListPatrolFabuly[ data.dataset.id ]', arrListPatrolFabuly ); 
		//cns( 'var', 'fabula', objFabula ); 

		//objListPatrolKupap[ data.dataset.id ];
		ComponentFabula.insFabula( objFabula );

	} 
 
 

	static clcSelectTypePDR( data ) {
		const name = this.name + '.clcSelectTypePDR()'; 

		//cns( 'var', 'data', data.value );

		document.querySelector( this.tag + ' .menu-select-fabuly' ).innerHTML = this.showFabuly( data.value );
	}







	static showFabuly( txt ) {
		const fooName = this.name + '.showFabuly()'; 


		//cns( 'var', 'fooName', fooName );
		//cns( 'var', 'txt', txt );



		let selectedFabuly = [];

		if ( txt == 'all' ) 
			selectedFabuly = arrListPatrolFabuly.filter( k => true );

		else 
			selectedFabuly = arrListPatrolFabuly.filter( k => k.type == txt );




		let htmlSelectFabula = ''; 
		selectedFabuly.forEach( k => {
			let sign = k.sign ? `<div><b>Знак: ${ k.sign }</b></div>` : '';
			let marking = k.marking ? `<div><b>Розмітка: ${ k.marking }</b></div>` : '';
			let descr = k.descr ? `<div class="descr">${ k.descr }...</div>` : '';
			//let offenseType = k.type ? `<div class="offense-type type-${ k.type }">${ objListPatrolFabulyType[ k.type ].title }</div>` : '';
			//${ offenseType }



			htmlSelectFabula += `<div class="each" data-id="${ k.id }" onclick="ComponentWinFabulyPostanovPdr.clc( this )">
				<div class="img">
					<img src="img/fabuly/${ k.img ? k.img : k.id }.jpg" alt="">
				</div>

				<div class="info">
					<div><b>КУпАП</b>: ст.<b>${ k.kupap.art }</b> ч.<b>${ k.kupap.part }</b></div>
					<div><b>ПДР</b>: <b>${ k.pdr }</b></div>
					${ sign }
					${ marking }
					${ descr }
				</div>
			</div>`;
		});

		return htmlSelectFabula;
	}





 
 
} 
 
 
 	
 
 
 
 
 	
 
 
