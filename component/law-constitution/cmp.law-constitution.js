// © 2023 DJS 
 
 
 
 
 
class ComponentLawConstitution { 
 
 
 
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
		arrListSheriffConstitution.forEach( k => {

			html += `<div class="each">

				<div class="title">
					<span class="art-n">${ k.art }</span>. <span class="art-title">${ k.title }</span>
				</div>
				<div class="descr">${ k.descr }</div>
				<div class="href">
					<a href="${ k.href }" target="_blank">Стаття ${ k.art } КУ${ symbolLink }</a>
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
 
 
 	
 
 
 
 
 	
 
 
