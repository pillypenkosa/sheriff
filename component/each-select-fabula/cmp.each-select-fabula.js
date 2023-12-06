// © 2023 DJS 
 
 
 
 
 
class ComponentEachSelectFabula { 
 
 
 
	static args = {}; 
 
 
 
	//static html( objData = {} ) { 
	static html( fabulaID ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
 
		//console.log( 'fooName: ', fooName );
		//console.log( 'fabulaID: ', fabulaID );


		let tagParam = { 
			//'data-id' 		: objData.id, 
			'data-id' 		: fabulaID, 
			//'onclick' 		: objData.clc, 
			//'onclick' 		: `ComponentFabula.insFabula( '${ objData.id }' )`, 
			//'onclick' 		: `ComponentFabula.insFabula( '${ fabulaID }' )`, 
			//'onclick' 		: `ComponentEachSelectFabula.clc( this )`, 
			
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
		//console.log( 'objListSheriffPdr: ', objListSheriffPdr );
 		

 		let objFabula = objListSheriffFabuly[ fabulaID ];



		// let htmlSign = '';
		//let sign 		= objData.sign ? `<div><b>Знак: ${ objData.sign }</b></div>` : '';




		let objKupap = {};
		let objPdr = {};

		let htmlPdrN = '';
		let htmlSign = '';
		let htmlMark = '';
		let htmlDstu = '';
		let htmlDescr = '';


		if ( objFabula ) {

			if ( objFabula.kupap ) {
				if ( objListSheriffKupap[ objFabula.kupap ] ) 
					objKupap = objListSheriffKupap[ objFabula.kupap ];
			}

			if ( objFabula.pdr ) {
				if ( objListSheriffPdr[ objFabula.pdr ] ) {
					objPdr = objListSheriffPdr[ objFabula.pdr ];

					if ( objPdr.txt ) {

						if ( objPdr.txt.pdr_n ) 
							htmlPdrN = `<div><b>ПДР: ${ objPdr.txt.pdr_n }</b></div>`;

						if ( objPdr.txt.sign_n ) 
							htmlSign = `<div><b>Знак: ${ objPdr.txt.sign_n }</b></div>`;
						
						if ( objPdr.txt.mark_n ) 
							htmlMark = `<div><b>Розмітка: ${ objPdr.txt.mark_n }</b></div>`;

						if ( objPdr.txt.dstu ) {
							if ( objPdr.txt.dstu.n ) {
								htmlDstu = `<div><b>ДСТУ: ${ objPdr.txt.dstu.n }</b></div>`;

							}
						}

					}
				}
			}

			if ( objFabula.descr ) 
				htmlDescr = `<div class="descr">${ objFabula.descr }...</div>`;
		}


		//console.log( 'objKupap: ', objKupap );
		//console.log( 'objFabula.pdr: ', objFabula.pdr );



		//console.log( 'objKupap: ', objKupap );
		//console.log( 'objPdr: ', objPdr );
		//console.log( 'htmlSign: ', htmlSign );
		//console.log( 'htmlMark: ', htmlMark );
		//console.log( 'htmlDescr: ', htmlDescr );
		//console.log( 'htmlPdrN: ', htmlPdrN );



		//  ${ this.name }.clc( this )


		let html = `
			<div class="intro" onclick="${ this.name }.clc( this )">
				<div class="img">
					<img src="img/fabuly/${ objFabula.img }.jpg" alt="">
				</div>

				<div class="info">
					<div><b>КУпАП</b>: ст.<b>${ objKupap.a }</b> ч.<b>${ objKupap.p }</b></div>
					${ htmlPdrN }
					${ htmlSign }
					${ htmlMark }
					${ htmlDstu }
					${ htmlDescr }
				</div>
			</div>
			<div class="full"></div>
		`; 


		return { html, tagParam };  
	} 
 
 
 
 
 
	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 

 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 



		let elemParent = elem.closest( 'cmp-each-select-fabula' );




		let ID = elemParent.dataset.id;
		console.log( 'ID: ', ID ); 


		let elem4ins = document.querySelector( `cmp-each-select-fabula[ data-id="${ ID }" ] .full` );

		//console.log( 'elem4ins: ', elem4ins ); 


		elem4ins.innerHTML = Component( 'Fabula', ID );
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
