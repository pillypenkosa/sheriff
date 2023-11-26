// © 2023 DJS 
 
 
 
 
 
class ComponentFabulaHead { 
 
 
	static args = {}; 
 
 


	static fabulaHeadTitle = {

		pdr_postanova 	: 'постанов ПДР' 	,
		pdr_protokol 	: 'протоколів ПДР' 	,
		gb_postanova 	: 'постанов ГБ' 	,
		gb_protokol 	: 'протоколів ГБ' 	,

	}; 






 
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
 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'objData: ', objData );



		//let htmlOptionPdrType = objData.type;



		let htmlOptionPdrType = '';
		arrListSheriffFabulyType.forEach( k => {

			//if ( k.blank == 'pdr_postanova' ) 
			if ( k.hash ) {

				//if ( k.hash[ objData.typeBlank ] ) 
					htmlOptionPdrType += `<option value="${ k.id }">${ k.title }</option>`;

			}



			

		});


		//console.log( 'htmlOptionPdrType: ', htmlOptionPdrType );




/*

<div class="win-fabuly-postanov-pdr-title">Фабули протоколів ПДР</div>
			<select class="select-offense-type" onchange="ComponentWinFabulyPostanovPdr.clcSelectTypePDR( this )">${ htmlOptionPdrType }</select>
			<div class="menu-select-fabuly">${ ComponentWinFabulyPostanovPdr.showFabuly( 'all' ) }</div>
		


*/
/*
		let htmlFabulaHeadTitle = '';
		if ( objData.typeBlank ) {

			if ( this.fabulaHeadTitle[ objData.typeBlank ] ) 
				htmlFabulaHeadTitle = this.fabulaHeadTitle[ objData.typeBlank ];
		}
*/




		//<select class="select-offense-type" data-blank="${ objData.typeBlank }" onchange="ComponentMenuSelectFabula.getSelectOptionVal( this )">${ htmlOptionPdrType }</select>

		//let html = `<div class="fabula-title">Фабули ${ htmlFabulaHeadTitle }</div>
		let html = `<div class="fabula-title">Фабули</div>
			<select class="select-offense-type" onchange="ComponentMenuSelectFabula.getSelectOptionVal( this )">${ htmlOptionPdrType }</select>
		`; 



//


		return { html, tagParam };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//cns( 'var', 'fooName', fooName ); 
		//cns( 'var', 'data', data ); 
 
	} 
 
 
 














 
 
} 
 
 
 	
 
 
 
 
 	
 
 
