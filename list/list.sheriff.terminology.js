






const arrListSheriffTerminology = [

/*


{	
	id: '', title: ' ',
	descr: '',
	law: '',
	href: ''

},





*/




{	
	id: 'public_place', title: 'Громадське місце',
	descr: 'частина (частини) будь-якої будівлі, споруди, яка доступна чи відкрита для населення вільно або за запрошенням, або за плату, постійно, періодично або час від часу, у тому числі під’їзди будівель і споруд, а також підземні переходи, стадіони, паркінги;',
	law: 'smoking',
	href: 'https://zakon.rada.gov.ua/laws/show/2899-15#n435'

},



{	
	id: 'alco_drink', title: 'Напої алкогольні',
	descr: 'продукти, одержані шляхом спиртового бродіння цукровмісних матеріалів або виготовлені на основі харчових спиртів з вмістом спирту етилового понад 0,5 відсотка об’ємних одиниць, які зазначені у товарних позиціях 2203, 2204, 2205, 2206 (крім квасу "живого" бродіння), 2208 згідно з УКТ ЗЕД, а також з вмістом спирту етилового 8,5 відсотка об’ємних одиниць та більше, які зазначені у товарних позиціях 2103 90 30 00, 2106 90 згідно з УКТ ЗЕД;',
	law: 'alco',
	href: 'https://zakon.rada.gov.ua/laws/show/481/95-%D0%B2%D1%80#n31'

},
{	
	id: 'alco_drink_low', title: 'Напої слабоалкогольні',
	descr: 'алкогольні напої з вмістом етилового спирту від 0,5 до 8,5 відсотка об\'ємних одиниць та екстрактивних речовин не більш як 14,0 г на 100 куб. см, виготовлені на основі водно-спиртової суміші з використанням інгредієнтів, напівфабрикатів та консервантів, насичені чи ненасичені діоксидом вуглецю;',
	law: 'alco',
	href: 'https://zakon.rada.gov.ua/laws/show/481/95-%D0%B2%D1%80#n33'

},

{	
	id: 'beer', title: 'Пиво',
	descr: 'насичений діоксидом вуглецю пінистий алкогольний напій із вмістом спирту етилового від 0,5 відсотка об’ємних одиниць, отриманий під час бродіння охмеленого сусла пивними дріжджами, що відноситься до товарної групи УКТ ЗЕД за кодом 2203;',
	law: 'alco',
	href: 'https://zakon.rada.gov.ua/laws/show/481/95-%D0%B2%D1%80#n35'

},





































];









let objListSheriffTerminology = {};
arrListSheriffTerminology.forEach( k => {
	objListSheriffTerminology[ k.id ] = k;
});







