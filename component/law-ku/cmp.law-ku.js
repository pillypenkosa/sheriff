// © 2023 DJS 
 
 
 
 
 
class ComponentLawKu { 
 
 
 
	static args = {}; 
	static tfArts = {}; 
 
 
 
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
 
 
 
		let html = ''; 
		arrListSheriffKu.forEach( k => {

			//html += Component( 'Spoiler-Art', k );

			const ID = 'ku_' + k.id ;

			this.tfArts[ ID ] = false;



			let htmlHref = '';
			if ( k.href ) 
				htmlHref = `<a href="${ k.href }" target="_blank"><b>Стаття ${ k.a }</b>${ symbolLink }</a>`;

			html += `<div class="each" data-id="${ ID }">

				<div class="title" onclick="${ this.name }.clc( this )">
					<b>Стаття ${ k.a }</b>. ${ k.title }<span class="pm">&#8680;</span>
				</div>

				<div class="descr">
					${ k.descr }
					<div class="href">${ htmlHref }</div>
				</div>
			</div>`;
		});


		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 
 
		console.log( 'fooName', fooName ); 
		console.log( 'elem', elem ); 
 
		let elemParent = elem.parentNode;
		console.log( 'elemParent', elemParent ); 

		const ID = elemParent.dataset.id
		console.log( 'ID', ID ); 


		let elemDescr = elemParent.querySelector( '.descr' );
		console.log( 'elemDescr', elemDescr ); 


		let htmlArrow = '';
		if ( this.tfArts[ ID ] ) {

			elemDescr.style.display = 'none';
			//elemParent.querySelector( '.title .pm' ).innerHTML = '&#8681;';
			htmlArrow = '&#8680;';


		} else {

			elemDescr.style.display = 'block';
			htmlArrow = '&#8681;';

		}


		elemParent.querySelector( '.title .pm' ).innerHTML = htmlArrow;



		console.log( 'this.tfArts: ', this.tfArts ); 
		this.tfArts[ ID ] = !this.tfArts[ ID ];
		console.log( 'this.tfArts: ', this.tfArts ); 





	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
