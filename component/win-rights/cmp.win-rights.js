// © 2023 DJS 
 
 
 
 
 
class ComponentWinRights { 
 
 
 
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
 
 
 
		let html = `

			<div class="law">
				<div class="title-link">
					<a href="https://zakon.rada.gov.ua/laws/show/580-19#Text" target="_blank">
						<div><b>ЗАКОН УКРАЇНИ</b></div>
						<div><b>Про Національну поліцію${ symbolLink }</b></div>
					</a>
				</div> 

				<div>
					<b>Стаття 35.</b> Зупинення транспортного засобу 
				</div>
				<p>
					<a href="https://zakon.rada.gov.ua/laws/show/580-19#n282" target="_blank">
						<b>Частина 1.${ symbolLink }</b>
					</a>
					Поліцейський може зупиняти транспортні засоби у разі: 
				</p>
				<p><b>Пункт 1)</b> якщо водій порушив Правила дорожнього руху;</p>
				<p><b>Пункт 2)</b> якщо є очевидні ознаки, що свідчать про технічну несправність транспортного засобу;</p>
				<p><b>Пункт 4)</b> якщо транспортний засіб перебуває в розшуку;</p>
				<p><b>Пункт 6)</b> якщо необхідно залучити водія транспортного засобу до надання допомоги іншим учасникам дорожнього руху або поліцейським або як свідка під час оформлення протоколів про адміністративні правопорушення чи матеріалів дорожньо-транспортних пригод;</p>	
				<p><b>Пункт 11)</b> якщо є наявна інформація, яка свідчить про те, що водій або пасажир транспортного засобу є особою, яка самовільно залишила місце для утримання військовополонених.</p>
			</div>

			<div class="law">
				<div class="title-link">
					<a href="https://zakon.rada.gov.ua/laws/show/254%D0%BA/96-%D0%B2%D1%80#Text" target="_blank">
						<div><b>КОНСТИТУЦІЯ УКРАЇНИ${ symbolLink }</b></div>
					</a>
				</div>

				<p>
					<a href="" target="_blank">
						<b>Стаття 10.${ symbolLink }</b> 
					</a>
					Державною мовою в Україні є українська мова.
				</p>

				<p>
					<a href="https://zakon.rada.gov.ua/laws/show/254%D0%BA/96-%D0%B2%D1%80#n4378" target="_blank">
						<b>Стаття 63.${ symbolLink }</b> 
					</a>
					Особа не несе відповідальності за відмову давати показання або пояснення щодо себе, членів сім'ї чи близьких родичів, коло яких визначається законом.
				</p>
				
			</div>

			<div class="law">
				<div class="title-link">
					<div>
						<a href="https://zakon.rada.gov.ua/laws/show/80731-10#Text" target="_blank">
							<b>КУпАП${ symbolLink }</b>
						</a>
					</div>
				</div>

				<p>
					<a href="https://zakon.rada.gov.ua/laws/show/80732-10#n607" target="_blank">
						<b>Стаття 268.${ symbolLink }</b> 
					</a>
					Права особи, яка притягається до адміністративної відповідальності
				</p>

				<div>Особа, яка притягається до адміністративної відповідальності має право:</div>
						<div>- знайомитися з матеріалами справи,</div>
						<div>- давати пояснення,</div>
						<div>- подавати докази,</div>
						<div>- заявляти клопотання;</div>
						<div>- при розгляді справи користуватися юридичною допомогою адвоката, іншого фахівця у галузі права, який за законом має право на надання правової допомоги особисто чи за дорученням юридичної особи,</div>
						<div>- виступати рідною мовою і користуватися послугами перекладача, якщо не володіє мовою, якою ведеться провадження;</div>
						<div>- оскаржити постанову по справі.</div>

				<p>Справа про адміністративне правопорушення розглядається в присутності особи, яка притягається до адміністративної відповідальності.</p>
				<p>Під час відсутності цієї особи справу може бути розглянуто лише у випадках, коли є дані про своєчасне її сповіщення про місце і час розгляду справи і якщо від неї не надійшло клопотання про відкладення розгляду справи.</p>
				<p>Особливості розгляду справ про адміністративні правопорушення у сферах забезпечення безпеки дорожнього руху, зафіксовані в автоматичному режимі, безпеки на автомобільному транспорті та про порушення правил зупинки, стоянки, паркування транспортних засобів, зафіксовані в режимі фотозйомки (відеозапису), встановлюються статтями 279-1-279-8 цього Кодексу.</p>
			</div>



			<div class="law">
				<div class="title-link">
					<div>
						<a href="https://zakon.rada.gov.ua/laws/show/2341-14#Text" target="_blank">
							<b>КРИМІНАЛЬНИЙ КОДЕКС${ symbolLink }</b>
						</a>
					</div>
				</div>

				<div class="articles">
					<div class="article-each">
						<p>
							<a href="https://zakon.rada.gov.ua/laws/show/2341-14#n2739" target="_blank">
								<b>Стаття 383.${ symbolLink }</b> 
							</a>
							Завідомо неправдиве повідомлення про вчинення кримінального правопорушення
						</p>

						<p>1. Завідомо неправдиве повідомлення суду, прокурору, слідчому, дізнавачу або органу досудового розслідування про вчинення кримінального правопорушення -</p>
						<p>карається виправними роботами на строк до двох років або арештом на строк до шести місяців, або обмеженням волі на строк до трьох років, або позбавленням волі на строк до двох років.</p>
						<p>2. Ті самі дії, поєднані з обвинуваченням особи в тяжкому чи особливо тяжкому злочині або із штучним створенням доказів обвинувачення, а також вчинені з корисливих мотивів, -</p>
						<p>караються обмеженням волі на строк від двох до п'яти років або позбавленням волі на той самий строк.</p>
					</div>
				</div>


				<div class="articles">
					<div class="article-each">
						<p>
							<a href="https://zakon.rada.gov.ua/laws/show/2341-14#n2745" target="_blank">
								<b>Стаття 384.${ symbolLink }</b> 
							</a>
							Введення в оману суду або іншого уповноваженого органу
						</p>

						<p>1. Завідомо неправдиве показання свідка, потерпілого, завідомо неправдивий висновок експерта, спеціаліста, складені для надання або надані органу, що здійснює досудове розслідування, виконавче провадження, суду, Вищій раді правосуддя, тимчасовій слідчій чи спеціальній тимчасовій слідчій комісії Верховної Ради України, подання завідомо недостовірних або підроблених доказів, завідомо неправдивий звіт оцінювача про оцінку майна, а також завідомо неправильний переклад, зроблений перекладачем у таких самих випадках, -</p>
						<p>караються виправними роботами на строк до двох років або арештом на строк до шести місяців, або обмеженням волі на строк до двох років.</p>

						<p>2. Ті самі дії, поєднані з обвинуваченням у тяжкому чи особливо тяжкому злочині, або зі штучним створенням доказів обвинувачення чи захисту, а також вчинені з корисливих мотивів, -</p>
						<p>караються виправними роботами на строк до двох років або обмеженням волі на строк до п'яти років, або позбавленням волі на строк від двох до п'яти років.</p>

					</div>
				</div>


			</div>
		`;

 
 



 
		setMeta({ 
			title 			: name, 
			description 	: 'Опис...', 
			//image 		: '', 
		}); 
 
 
 
		return { html, tagParam };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//cns( 'var', 'fooName', fooName ); 
		//cns( 'var', 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
