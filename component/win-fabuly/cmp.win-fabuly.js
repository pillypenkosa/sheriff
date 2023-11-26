// © 2023 DJS 
 
 
 
 
 
class ComponentWinFabuly { 
 
 
 
	static args = {}; 
	static tag = 'cmp-win-fabuly-postanov-pdr'; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 




		//cns( 'var', 'fooName', fooName );
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
		//cns( 'vvar', 'arrListSheriffPdr', arrListSheriffPdr );


/*
		let html = `
			${ Component( 'Fabula' ) }
			${ Component( 'Fabula-Head', { type: 'pdr_postanova', } ) }
			<div class="menu-select-fabuly">${ ComponentWinFabuly.showFabuly( 'all' ) }</div>
		`;
*/


		const typeBlank = 'pdr_postanova';



		//${ Component( 'Menu-Select-Fabula', { typeBlank } ) }
		let html = `
			${ Component( 'Fabula' ) }
			${ Component( 'Fabula-Head', {} ) }
			${ Component( 'Menu-Select-Fabula', { typeBlank } ) }
		`;




		setMeta({ 
			title 			: 'Фабули постанов ПДР', 
			description 	: 'Опис...', 
			//image 		: '', 
		}); 
 
 
 
		return { html, tagParam };  
	} 
 
 
 
 
 
	static clc222( data ) { 
		const name = this.name + '.clc()'; 
 

		let objFabula = arrListSheriffFabuly.find( k => {

			if ( k.id == data.dataset.id )
				return true;
		});

		//cns( 'var', 'arrListSheriffFabuly[ data.dataset.id ]', arrListSheriffFabuly ); 
		//cns( 'var', 'fabula', objFabula ); 

		//objListSheriffKupap[ data.dataset.id ];
		ComponentFabula.insFabula( objFabula );

	} 
 
 





























	static clcSelectTypePDR222( data ) {
		const name = this.name + '.clcSelectTypePDR()'; 

		//cns( 'var', 'data', data.value );

		document.querySelector( this.tag + ' .menu-select-fabuly' ).innerHTML = ComponentMenuSelectFabula.getFabuly( data.value );
	}





	static showFabuly222( txt ) {
		const fooName = this.name + '.showFabuly()'; 


		//cns( 'var', 'fooName', fooName );
		//cns( 'var', 'txt', txt );



		let selectedFabuly = [];

		if ( txt == 'all' ) {

			selectedFabuly = arrListSheriffFabuly.filter( k => {
				if ( k.hash ) {
					if ( k.hash.pdr_postanova ) 
						return true
				}
			});




		}
		
		else {

			//selectedFabuly = arrListSheriffFabuly.filter( k => k.type == txt );
			selectedFabuly = arrListSheriffFabuly.filter( k => {
				if ( k.hash ) {
					if ( k.hash.pdr_postanova ) {
						if ( k.hash[ txt ] ) 
							return true;
					}
				}
			});
		}




		let htmlSelectFabula = ''; 
		selectedFabuly.forEach( k => {

			//cns( 'var', 'k', k );

			htmlSelectFabula += Component( 'Each-Select-Fabula', {

				id 			: k.id 												,
				img 		: k.img ? k.img : k.id 								,
				art 		: k.kupap.art 										,
				part 		: k.kupap.part 										,
				pdr 		: k.pdr 											,
				sign 		: k.hash ? ( k.hash.sign ? k.hash.sign : '' ) : ''	,
				marking 	: k.marking 										,
				descr 		: k.descr 											,
				clc 		: 'ComponentWinFabuly.clc( this )'		,

			});

		});

		return htmlSelectFabula;
	}





 
 
} 
 
 
 	
 
 
 
 
 	
 
 
