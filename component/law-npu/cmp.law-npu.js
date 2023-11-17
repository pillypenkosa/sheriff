// © 2023 DJS 
 
 
 
 
 
class ComponentLawNpu { 
 
 
 
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
 
 
 
		let html = '';
		arrListSheriffNpu.forEach( k => {


			let htmlParts = '';
			if ( k.parts ) {

				k.parts.forEach( k1 => {

					let htmlItems = '';
					if ( k1.arr ) {
						k1.arr.forEach( k2 => {
							htmlItems += `<div class="each-item">${ k2.title }</div>`;
						});
					}

					htmlItems = htmlItems ? `<div class="items">${ htmlItems }</div>` : '';

					htmlParts += `
					<div class="parts">
						<div class="each-part">
							${ k1.title }
							${ htmlItems }
						</div>
					</div>`;
				});
			}

			html += `<div class="each">
				<div class="title">
					<span class="art-n">${ k.art }</span>. <span class="art-title">${ k.title }</span>
				</div>
				${ htmlParts }
				<div class="href">
					<a href="${ k.href }" target="_blank">Стаття ${ k.art }${ symbolLink }</a>
				</div>
			</div>`;

		}); 
 
 
 
		setMeta({ 
			title 			: fooName, 
			description 	: 'Опис...', 
			//image 		: '', 
		}); 
 
 
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
