// © 2023 DJS 
 
 
 
 
 
class ComponentWinTerminology { 
 
 
 
	static args = {}; 
 
 
	static tfSpoiler = {}; 



 
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
		arrListSheriffTerminology.forEach( k => {


			let doc = '';
			let title = '';

			if ( k.law ) {
				if ( objListSheriffLaws[ k.law ] ) {

					if ( objListSheriffLaws[ k.law ].doc ) 
						doc = objListSheriffLaws[ k.law ].doc + ' ';

					if ( objListSheriffLaws[ k.law ].title ) 
						title = `\"${ objListSheriffLaws[ k.law ].title }\"`;
/*
					if ( objListSheriffLaws[ k.law ].href ) 
						href = objListSheriffLaws[ k.law ].href;
*/
				}
			}


			let href = '';
			if ( k.href ) 
				href = k.href;

			




			this.tfSpoiler[ k.id ] = false;


			html += `<div class="each" data-id="${ k.id }">
				<div class="title pointer" onclick="${ this.name }.clcTfSpoiler( this )">${ k.title } <span class="pm">&#8680;</span></div>
				<div class="descr" data-id="spoilerBody_${ k.id }">
					${ k.descr }
					<br/><br/>
					<a href="${ href }" target="_blank">${ doc }${ title } <br/>--<b>${ k.title }</b>${ symbolLink }</a>
				</div>
			</div>`;
		});

 
 
		setMeta({ 
			title 			: 'Термінологія', 
			description 	: 'Опис...', 
			//image 		: '', 
		}); 
 
 
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clcTfSpoiler( data ) { 
		const fooName = this.name + '.clcTfSpoiler()'; 
 
		console.log( 'fooName: ', fooName ); 
		console.log( 'data: ', data ); 

		//let elemParent = document.getElementById( 'elem' ).parentNode;
		let elemParent = data.parentNode;
		console.log( 'elemParent: ', elemParent ); 

		let ID = elemParent.dataset.id;
		console.log( 'ID: ', ID ); 

		let elemDescr = elemParent.querySelector( `.descr` );
		console.log( 'elemDescr: ', elemDescr ); 

		let elemArrow = elemParent.querySelector( `.title .pm` );
		console.log( 'elemArrow: ', elemArrow ); 




		let arrow = '&#8680;';
 		if ( this.tfSpoiler[ ID ] ) {
			elemDescr.style.display = 'none';
			arrow = '&#8680;';

 		} else {
			elemDescr.style.display = 'block';
			arrow = '&#8681;';
		}

		elemArrow.innerHTML = arrow;


		//elemParent.querySelector( `.descr[ data-id="spoilerBody_${ ID }" ]` );


		console.log( 'this.tfSpoiler[ ID ]: ', this.tfSpoiler[ ID ] ); 
		this.tfSpoiler[ ID ] = !this.tfSpoiler[ ID ];
		console.log( 'this.tfSpoiler[ ID ]: ', this.tfSpoiler[ ID ] ); 

	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
