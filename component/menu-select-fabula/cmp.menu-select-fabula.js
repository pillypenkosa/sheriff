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


		html = this.getFabulySelect( 'all' );




/*		
		if ( objData.typeBlank == 'pdr_postanova' ) 
			html = this.getFabulySelect( objData.typeBlank, 'all' );
		

		if ( objData.typeBlank == 'pdr_protokol' ) 
			html = this.getFabulySelect( objData.typeBlank, 'all' );
		*/




 
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

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem.value: ', elem.value ); 
		//console.log( 'elem.data.blank: ', elem.dataset.blank ); 



		//document.querySelector( 'cmp-menu-select-fabula' ).innerHTML = this.getFabulySelect( elem.dataset.blank, elem.value );
		document.querySelector( 'cmp-menu-select-fabula' ).innerHTML = this.getFabulySelect( elem.value );






 	}






 	// набір фабул постанов ПДР для меню 
 	//static getFabulySelect( typeBlank, hash ) { 
 	static getFabulySelect( hash ) { 
		const fooName = this.name + '.getFabulySelect()';
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'hash: ', hash ); 





		let htmlSelectFabula = ''; 




		arrListSheriffFabuly.forEach( k => {


			if ( hash == 'all' ) {

				//console.log( 'all: ', 555 )

				htmlSelectFabula += Component( 'Each-Select-Fabula', k.id );


			} else {


				if ( k.hash ) {
					if ( k.hash[ hash ] ) 
						htmlSelectFabula += Component( 'Each-Select-Fabula', k.id );
				} 



			}






		});


		return htmlSelectFabula; 
	} 
 
 

















 
 
} 
 
 
 	
 
 
 
 
 	
 
 
