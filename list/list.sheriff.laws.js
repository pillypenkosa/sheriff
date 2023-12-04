



const arrListSheriffLaws = [


{
	id: 'alco',
	doc: 'ЗАКОН УКРАЇНИ',
	title: 'Про державне регулювання виробництва і обігу спирту етилового, спиртових дистилятів, алкогольних напоїв, тютюнових виробів, рідин, що використовуються в електронних сигаретах, та пального',
	href: 'https://zakon.rada.gov.ua/laws/show/481/95-%D0%B2%D1%80#Text',
},
{
	id: 'ku',
	doc: 'КОНСТИТУЦІЯ УКРАЇНИ',
	title: '',
	href: 'https://zakon.rada.gov.ua/laws/show/254%D0%BA/96-%D0%B2%D1%80#Text',
},
{
	id: 'kupap',
	doc: 'Кодекс України',
	title: 'Про адміністративні правопорушення',
	href: 'https://zakon.rada.gov.ua/laws/show/80731-10#Text',
},
{
	id: 'npu',
	doc: 'ЗАКОН УКРАЇНИ',
	title: 'Про Національну поліцію',
	href: 'https://zakon.rada.gov.ua/laws/show/580-19#Text',
},
{
	id: 'smoking',
	doc: 'ЗАКОН УКРАЇНИ',
	title: 'Про заходи щодо попередження та зменшення вживання тютюнових виробів і їх шкідливого впливу на здоров\'я населення',
	href: 'https://zakon.rada.gov.ua/laws/show/2899-15#Text',
},



];









let objListSheriffLaws = {};
arrListSheriffLaws.forEach( k => {
	objListSheriffLaws[ k.id ] = k;
});









