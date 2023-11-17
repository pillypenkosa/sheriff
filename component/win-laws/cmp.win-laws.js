// © 2023 DJS 
 
 
 
 
 
class ComponentWinLaws { 
 
 
 
	static args = {}; 



	static laws = [

		{ id: 'constitution' 	, name: 'Law-Constitution' 	, title: 'Конституція України', href: 'https://zakon.rada.gov.ua/laws/show/254%D0%BA/96-%D0%B2%D1%80#Text', },
		{ id: 'npu' 			, name: 'Law-Npu' 			, title: 'ЗУ \"Про Національну поліцію\"', href: 'https://zakon.rada.gov.ua/laws/show/580-19#Text', },
		{ id: 'kupap' 			, name: 'Law-Kupap' 		, title: 'Кодекс України про адміністративні правопорушення', href: 'https://zakon.rada.gov.ua/laws/show/80731-10#Text', },
		{ id: 'kku' 			, name: 'Law-Kku' 			, title: 'Кримінальний Кодекс України', href: 'https://zakon.rada.gov.ua/laws/show/2341-14#Text', },
		{ id: 'alco' 			, name: 'Law-Alco' 			, title: 'ЗУ \"Про державне регулювання виробництва і обігу спирту етилового, коньячного і плодового, алкогольних напоїв, тютюнових виробів, рідин, що використовуються в електронних сигаретах, та пального\"', href: 'https://zakon.rada.gov.ua/laws/show/481/95-%D0%B2%D1%80#Text', },
		{ id: 'smoking' 		, name: 'Law-Smoking' 		, title: 'ЗУ \"Про заходи щодо попередження та зменшення вживання тютюнових виробів і їх шкідливого впливу на здоров\'я населення\"', href: 'https://zakon.rada.gov.ua/laws/show/2899-15#Text', },

	]; 



 
 
 
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
 
 
 
 /*
		let html = `



			<div>${ Component( 'Law-Constitution' ) }</div>
			<div>${ Component( 'Law-Npu' ) }</div>
			<div>${ Component( 'Law-Kupap' ) }</div>
			<div>${ Component( 'Law-Kku' ) }</div>

			<div>${ Component( 'Law-Alco' ) }</div>
			<div>${ Component( 'Law-Smoking' ) }</div>
		`; 
 
 */

		let html = '';
		this.laws.forEach( k => {

			html += `<div class="each">

				<div class="title-law">
					<a href="${ k.href }" target="_blank">${ k.title }${ symbolLink }</a>
				</div>
				<div class="law-arts">${ Component( k.name ) }</div>
			</div>`;
		});




 
		setMeta({ 
			title 			: 'Закони', 
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
 
 
 	
 
 
 
 
 	
 
 
