// © 2023 DJS 





class ComponentSpoilerLaw { 



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



		let html = `<div class="law-name"><a href="https://zakon.rada.gov.ua/laws/show/2341-14#Text" target="_blank">КРИМІНАЛЬНИЙ КОДЕКС${ symbolLink }</a></div>`; 
		arrListSheriffKku.forEach( k => {

			let parts = '';
			if ( k.parts ) {
				k.parts.forEach( k1 => {
					parts += `<div class="each-part">
						<div class="part-act">${ k1.act }</div>
						<div class="part-sanction">${ k1.sanction }</div>
					</div>`;
				});
			}

			html += `<div class="each-art" data-id="${ k.id }" data-tf="close">
				<div class="art-title" onclick="${ this.name }.clc( this )">
					<span class="art-n">Стаття ${ k.art }</span>. 
					<span class="art-title">${ k.title }</span>
				</div>
				<div class="body" data-art-body="${ k.id }" >
					${ parts }
					<div><a href="${ k.href }" target="_blank">www.gov.ua ст.${ k.art } ККУ${ symbolLink }</a></div>
					<br />
				</div>

			</div>`;
		});


		// <div><a href="${ k.href }" target="_blank">www.стаття ${ k.art } ККУ${ symbolLink }</a></div>



		return { tagParam, html };  
	} 



	// згорнути/розгорнути тіло статті ККУ
	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 

		//console.log( 'fooName', fooName ); 
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
 
 
 	
 
 
 
 
 	
 
 
