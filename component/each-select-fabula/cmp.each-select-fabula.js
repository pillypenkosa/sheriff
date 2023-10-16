// © 2023 DJS 
 
 
 
 
 
class ComponentEachSelectFabula { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 

		//cns( 'var', 'fooName', fooName ); 
		//cns( 'var', 'objData', objData );



		let tagParam = { 
			'data-id' 		: objData.id, 
			'onclick' 		: objData.clc, 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 


		let sign 		= objData.sign ? `<div><b>Знак: ${ objData.sign }</b></div>` : '';
		let marking 	= objData.marking ? `<div><b>Розмітка: ${ objData.marking }</b></div>` : '';
		let descr 		= objData.descr ? `<div class="descr">${ objData.descr }...</div>` : '';



 
		let html = `
			<div class="img">
				<img src="img/fabuly/${ objData.img }.jpg" alt="">
			</div>

			<div class="info">
				<div><b>КУпАП</b>: ст.<b>${ objData.art }</b> ч.<b>${ objData.part }</b></div>
				<div><b>ПДР</b>: <b>${ objData.pdr }</b></div>
				${ sign }
				${ marking }
				${ descr }
			</div>
		`; 

		return { html, tagParam };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//cns( 'var', 'fooName', fooName ); 
		//cns( 'var', 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
