// © 2023 DJS 





class ComponentSpoilerArt { 



	static args = {}; 




	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'objData: ', objData ); 



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


		let objLaw4show = [];

		if ( objData == 'alco' ) 
			objLaw4show = arrListSheriffAlco;

		if ( objData == 'dstu_3649_2010' ) 
			objLaw4show = arrListSheriffDstu_3649_2010;

		if ( objData == 'ku' ) 
			objLaw4show = arrListSheriffKu;

		if ( objData == 'kku' ) 
			objLaw4show = arrListSheriffKku;

		if ( objData == 'smoking' ) 
			objLaw4show = arrListSheriffSmoking;
				
		if ( objData == 'npu' ) 
			objLaw4show = arrListSheriffNpu;
			
		if ( objData == 'railroad' ) 
			objLaw4show = arrListSheriffRailroad;
			







		if ( objData == 'kupap' ) {

			let arrKupapArts = [
				'a268',
				'a289',
				'a307',
				'a308',
			];

			let objKupapSelected = [];

			arrKupapArts.forEach( k => {

				let objTemp = {};

				if ( objListSheriffKupap[ k ] ) {

					let art = '';
					if ( objListSheriffKupap[ k ].a ) {
						art += objListSheriffKupap[ k ].a;

						if ( objListSheriffKupap[ k ].p ) 
							art += `.${ objListSheriffKupap[ k ].p }`;

					}

					objTemp.id = objListSheriffKupap[ k ].id;
					objTemp.title = objListSheriffKupap[ k ].title;
					objTemp.a = art;
					objTemp.descr = objListSheriffKupap[ k ].descr;
					objTemp.href = objListSheriffKupap[ k ].href;

					objKupapSelected.push( objTemp );
				}
			});

			objLaw4show = objKupapSelected;

		}

		console.log( 'objLaw4show: ', objLaw4show );

		//console.log( 'objLaw4show: ', objLaw4show ); 


		let html 		= '';
		let title 		= '';
		let htmlHref 	= '';

		//console.log( 'tfArtsLaws: ', ComponentWinLaws.tfArtsLaws );
		

		objLaw4show.forEach( k => {

			const ID = `${ objData }_${ k.id }`;

			ComponentWinLaws.tfArtsLaws[ ID ] = false;

			let htmlArt = `<b>Стаття ${ k.a }</b>`;

			if ( k.href ) {
				htmlHref = `<div class="href">
					<a href="${ k.href }" target="_blank">${ htmlArt }${ symbolLink }</a>
				</div>`;
			}
			
			html += `<div class="art-each" data-id="${ objData }_${ k.id }">
				<div class="title pointer" onclick="ComponentWinLaws.clcArt( this )">${ htmlArt }. ${ k.title }<span class="pm">&#8680;</span></div>
				<div class="descr">
					${ k.descr }
					${ htmlHref }
				</div>
			</div>`;
		});












/*
		if ( k.id ) {
			if ( objListSheriffLaws[ k.id ] ) {

				if ( objListSheriffLaws[ k.id ].doc ) 
					title += `${ objListSheriffLaws[ k.id ].doc } `;

				if ( objListSheriffLaws[ k.id ].title ) 
					title += `"${ objListSheriffLaws[ k.id ].title }"`;

				if ( objListSheriffLaws[ k.id ].href ) 
					href =  objListSheriffLaws[ k.id ].href;

			}
		}

		html += `<div class="each" data-id="law_${ k.id }">

			<div class="title-law">
				<a href="${ href }" target="_blank">${ title }${ symbolLink }</a>
			</div>
			<div class="law-arts">${ Component( k.cmp ) }</div>
		</div>`;

*/







/*
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
*/

		//console.log( 'objData: ', objData ); 




		return { tagParam, html };  
	} 



	// згорнути/розгорнути тіло статті ККУ
	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 

		console.log( 'fooName: ', fooName ); 
		//console.log( 'dataset.id: ', elem.dataset.id ); 
		//console.log( 'dataset.tf: ', elem.dataset.tf ); 
		//console.log( 'parentNode: ', elem.parentNode ); 

/*
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

*/




	} 


 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
