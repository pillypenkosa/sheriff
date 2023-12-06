// © 2023 DJS 
 
 
 
 
 
class ComponentFabulaHead { 
 
 
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
 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'objData: ', objData );


		let htmlOptionPdrType = '';
		arrListSheriffFabulyType.forEach( k => {

			htmlOptionPdrType += `<option value="${ k.id }">${ k.title }</option>`;

		});


		let html = `<div class="fabula-title">Фабули</div>
			<select class="select-offense-type" onchange="ComponentMenuSelectFabula.getSelectOptionVal( this )">${ htmlOptionPdrType }</select>
		`; 

		return { html, tagParam };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 

 
	} 
 
 
 














 
 
} 
 
 
 	
 
 
 
 
 	
 
 
