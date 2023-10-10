// © 2023 DJS





class ComponentWinIndex {



	static args = {};





	static html( objData = {} ) {

		const name = this.name + '.html()';
		
		this.args = objData.args ? objData.args : {}; 


		let tagParam = {
			//'class' 		: 'active',
			//'name' 		: 'Any',
			//'title' 		: 'Всплывающая подсказка',
			//'data-id' 	: 'any-data',
			//'onclick' 	: `${ this.name }.clc( ${ this.name }.args )`,
			//'selected' 	: '',
			//'defer' 		: '',
		};



		//let html = '<div class="info">Бажаю здоров\'я! ))</div>';
		let html = `
			<div class="screen">




				<div class="avatar"><img src="img/cars_sheriff.jpg" alt="Тачки. Шериф"></div>

				<div class="hi">Бажаю здоров\'я, <br/>любі друзі! )))</div>

				<div class="book"><img src="img/book.png"></div>

			</div>

		`;





		setMeta({
			title 			: 'Шериф на зв\'язку )))',
			description 	: 'Фабули. Шпаргалка',
			//keywords 		: 'Ключові слова...' + name,
			image 			: 'img/cars_sheriff.jpg',
			//url 			: 'url/any/there/' + name,
			//type 			: 'Тіпі-тіп ' + name,
			//site_name 		: 'Назва сайту, мабуть стале значення... ' + name,
		});



		return { html, tagParam };
	}






	static clc( data ) {
		const name = this.name + '.clc()';


		cns( 'var', 'data', data );

	}










}























