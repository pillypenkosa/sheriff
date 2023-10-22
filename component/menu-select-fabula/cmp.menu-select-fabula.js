// © 2023 DJS 
 
 
 
 
 
class ComponentMenuSelectFabula { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
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
 
 
 		//cns( 'var', 'fooName', fooName ); 
		//cns( 'var', 'objData', objData );




		let html = fooName; 
		if ( objData.typeBlank == 'pdr_postanova' ) 
			html = this.getFabulySelect( objData.typeBlank, 'all' );
		

		if ( objData.typeBlank == 'pdr_protokol' ) 
			html = this.getFabulySelect( objData.typeBlank, 'all' );
		




 
		//cns( 'var', 'html', html );
 

		//<div class="menu-select-fabuly">${ ComponentWinFabulyPostanovPdr.showFabuly( 'all' ) }</div>
 
 
 
		return { html, tagParam };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//cns( 'var', 'fooName', fooName ); 
		//cns( 'var', 'data', data ); 
 
	} 
 




 	static getSelectOptionVal( elem ) {
		const fooName = this.name + '.getSelectOptionVal()';

		//cns( 'var', 'fooName', fooName ); 
		//cns( 'var', 'elem.value', elem.value ); 
		//cns( 'var', 'elem.data.blank', elem.dataset.blank ); 



		document.querySelector( 'cmp-menu-select-fabula' ).innerHTML = this.getFabulySelect( elem.dataset.blank, elem.value );






 	}






 	// набір фабул постанов ПДР для меню 
 	static getFabulySelect( typeBlank, hash ) { 
		const fooName = this.name + '.getFabulySelect()';
 
		//cns( 'var', 'fooName', fooName ); 
		//cns( 'var', 'typeBlank', typeBlank ); 
		//cns( 'var', 'hash', hash ); 


		let selectedFabuly = [];

		selectedFabuly = arrListSheriffFabuly.filter( k => {
			if ( k.hash ) {
				if ( k.hash[ typeBlank ] ) {

					if ( hash == 'all' ) 
						return true;

					else if ( k.hash[ hash ] ) 
						return true;
				}
			}
		});






		let htmlSelectFabula = ''; 
		selectedFabuly.forEach( k => {

			htmlSelectFabula += Component( 'Each-Select-Fabula', {

				id 			: k.id 												,
				img 		: k.img ? k.img : k.id 								,
				art 		: k.kupap.art 										,
				part 		: k.kupap.part 										,
				pdr 		: k.pdr 											,
				sign 		: k.hash ? ( k.hash.sign ? k.hash.sign : '' ) : ''	,
				marking 	: k.marking 										,
				descr 		: k.descr 											,
				clc 		: `ComponentFabula.insFabula( '${ k.id }' )`		,
				typeBlank 	: typeBlank											,

			});
		});


		return htmlSelectFabula; 
	} 
 
 

















 
 
} 
 
 
 	
 
 
 
 
 	
 
 
