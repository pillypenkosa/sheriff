// © 2023 DJS 





class ComponentSpoilerArt { 



	static args = {}; 














	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
		console.log( 'fooName: ', fooName ); 



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



		let html = `
			<div class="each" data-id="${ objData.id }">
				<div class="title">
					<span class="art-n">${ objData.art }</span>. <span class="art-title">${ objData.title }</span>
				</div>

				<div class="descr">${ objData.descr }</div>
				<div class="href">
					<a href="${ objData.href }" target="_blank">Стаття ${ objData.art } ${ symbolLink }</a>
				</div>
			</div>
		`; 


		console.log( 'objData: ', objData ); 




		return { tagParam, html };  
	} 



	// згорнути/розгорнути тіло статті ККУ
	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'dataset.id: ', elem.dataset.id ); 
		//console.log( 'dataset.tf: ', elem.dataset.tf ); 
		//console.log( 'parentNode: ', elem.parentNode ); 


		let parent = elem.parentNode;
		let tf = parent.dataset.tf; 	// тут тільки через додаткову змінну

		console.log( 'dataset.tf: ', parent.dataset.tf ); 


		if ( tf == 'close' ) {
			parent.querySelector( '.body' ).style.display = 'block'; 
			parent.dataset.tf = 'open';
		}

		if ( tf == 'open' ) {
			parent.querySelector( '.body' ).style.display = 'none'; 
			parent.dataset.tf = 'close';
		}


	} 


 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
