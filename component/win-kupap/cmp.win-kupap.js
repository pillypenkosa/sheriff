// © 2023 DJS 
 
 
 
 
 
class ComponentWinKupap { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
 
		const name = this.name + '.html()'; 
 
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

		let articles = [];


 
 
 
		let htmlArticles = ''; 
		arrListPatrolKupap.forEach( k => {

			if ( k.article && !k.part ) 
				articles.push( k.id )


			let article 		= ''; 
			let clsArticle 		= ''; 
			let part 			= '';
			let clsPart 		= '';
			let titleBold 		= '';
			let minimum 		= '';
			let organ 			= '';
			let sanction 		= k.sanction ? `<div class="sanction">- ${ k.sanction }</div>` : '';


			if ( k.part ) {
				article = k.article ? 'Ст.' + k.article : ''; 
				part = k.part ? ', ч.' + k.part : '';
				clsPart = ' clsPart';

			} else {
				article = k.article ? 'Стаття ' + k.article : ''; 
				titleBold = 'bold';
				clsArticle = ' clsArticle'
			}


			if ( k.min ) {
				if ( k.max ) 
					minimum += `<span class="minimum">// <b>${ k.min }</b> - <b>${ k.max }</b> мінімумів</span>`;
				else 
					minimum += `<span class="minimum">// <b>${ k.min }</b> мінімумів </span>`;
			}

			if ( k.organ ) 
				organ = objListOrgan[ k.organ ] ? 'розглядають: ' + objListOrgan[ k.organ ] : '';
			


			htmlArticles += `<div id="q_${ k.article }" class="each${ clsArticle }${ clsPart }">
				<div class="article">${ article }${ part } ${ minimum }</div>
				<div class="organ">${ organ }</div>
				<div class="title ${ titleBold }">${ k. title }</div>
				${ sanction }
				<div class="edited">Ред.: ${ k.edit ? ( k.edit.d + '.' + k.edit.m + '.' + k.edit.y ) : '' }</div>
			</div>`;

		});

		/*
				<div>${ k.id }</div>
				<div>${ k.title }</div>
				<div>${ k.min }</div>
				<div>${ k.max }</div>
				<div>${ k.organ }</div>
				<div>${ k.edit }</div>
*/


		let htmlNavBtnEach = '';
		articles.forEach( k => {
			htmlNavBtnEach += `<a href="#q_${ k }"><div class="btn">${ k }</div></a>`;
		});




		let html = `
			<div class="nav">${ htmlNavBtnEach }</div> 
			<div class="listArticles">${ htmlArticles }</div> 
		`;


 		//cns( 'var', 'articles', articles );
 
 
		setMeta({ 
			title 			: name, 
			description 	: 'Опис...', 
			//image 		: '', 
		}); 
 
 
 
		return { html, tagParam };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const name = this.name + '.clc()'; 
 
		//cns( 'var', 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
