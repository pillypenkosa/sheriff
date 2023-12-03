// © 2023 DJS 
 
 
 
 
 
class ComponentWinLaws { 
 
 
 
	static args = {}; 



	static tfArtsLaws = {}; 




	static laws = [

		{ id: 'npu' 		, },
		{ id: 'ku' 			, },
		{ id: 'kupap' 		, },
		{ id: 'smoking' 	, },
		{ id: 'alco' 		, },
	
	]; 








	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 

		//let tfLaws = {};


		//console.log( 'tfArtsLaws: ', this.tfArtsLaws );




		let html = '';
		this.laws.forEach( k => {

			//let doc 			= '';
			//let title 			= '';
			//let href 			= '';
			let htmlLawTitle 	= '';


			if ( k.id == 'alco' || k.id == 'ku' || k.id == 'smoking' || k.id == 'kupap' || k.id == 'npu' ) {

				if ( objListSheriffLaws[ k.id ].doc ) 
					htmlLawTitle += objListSheriffLaws[ k.id ].doc
				
				if ( objListSheriffLaws[ k.id ].title ) 
					htmlLawTitle += `<br/>"${ objListSheriffLaws[ k.id ].title }"`;

				if ( objListSheriffLaws[ k.id ].href ) 
					htmlLawTitle = `<a href="${ objListSheriffLaws[ k.id ].href }" target="_blank">${ htmlLawTitle }</a>`;

			}









			
			html += `<div class="law-each">
				<div class="law-title">${ htmlLawTitle }</div>
				<div class="law-descr">${ Component( 'Spoiler-Art', k.id ) }</div>
			</div>`;

		});



		//console.log( 'tfArtsLaws: ', this.tfArtsLaws );


		setMeta({ 
			title 			: 'Закони', 
			description 	: 'Опис...', 
			//image 		: '', 
		}); 
 
 
 
		return { tagParam, html };  
	} 
 
 
 
 
 	// клік по тітлу конкретної статті
	static clcArt( elem ) { 
		const fooName = this.name + '.clcArt()'; 
 
		console.log( 'fooName: ', fooName ); 
		console.log( 'elem: ', elem ); 


		//let elemParent = elem.parentNode;
		let elemParent = elem.closest( '.art-each' );

		const ID = elemParent.dataset.id;

		console.log( 'ID: ', ID ); 


		let elemDescr = elemParent.querySelector( '.descr' );

		let htmlArrow = '';


		if ( this.tfArtsLaws[ ID ] ) { // сховати
			elemDescr.style.display = 'none';
			htmlArrow = '&#8680;';

		} else { // відобразити
			elemDescr.style.display = 'block';
			htmlArrow = '&#8681;';

		}

		this.tfArtsLaws[ ID ] = !this.tfArtsLaws[ ID ];

		console.log( 'elemParent: ', elemParent ); 

		elemParent.querySelector( '.title .pm' ).innerHTML = htmlArrow;



		//элемент.closest('селектор');








		//alert( fooName );
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
