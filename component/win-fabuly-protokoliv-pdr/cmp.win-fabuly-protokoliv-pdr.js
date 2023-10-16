// © 2023 DJS 
 
 
 
 
 
class ComponentWinFabulyProtokolivPdr { 
 
 
 
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
 
 










/*
		let htmlOptionPdrType = '';
		arrListSheriffFabulyType.forEach( k => {
			htmlOptionPdrType += `<option value="${ k.id }">${ k.title }</option>`;
		});






			<div class="win-fabuly-postanov-pdr-title">Фабули протоколів ПДР</div>
			<select class="select-offense-type" onchange="ComponentWinFabulyPostanovPdr.clcSelectTypePDR( this )">${ htmlOptionPdrType }</select>
			<div class="menu-select-fabuly">${ ComponentWinFabulyPostanovPdr.showFabuly( 'all' ) }</div>


*/
 




		const typeBlank = 'pdr_protokol';


		let html = `
			${ Component( 'Fabula' ) }
			${ Component( 'Fabula-Head', { typeBlank } ) }
			${ Component( 'Menu-Select-Fabula', { typeBlank } ) }
		`;; 
 
 
 
		setMeta({ 
			title 			: name, 
			description 	: 'Опис...', 
			//image 		: '', 
		}); 
 
 
 
		return { html, tagParam };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const name = this.name + '.clc()'; 
 
		//cns( 'var', 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
