// © 2023 DJS 
 
 
 
 
 
class ComponentWinTerminology { 
 
 
 
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
		arrListSheriffTerminology.forEach( k => {

			html += `<div class="each">
				<div class="title">${ k.title }:</div>
				<div class="descr">
					${ k.descr }
					<br/><br/>
					<a href="${ k.href }" target="_blank">${ arrListSheriffLaws[ k.law ] }${ symbolLink }</a>
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
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
