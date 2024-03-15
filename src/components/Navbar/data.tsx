import { AiFillInstagram } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { CgFacebook } from 'react-icons/cg'
import { TbTruckDelivery } from 'react-icons/tb'
import { blockLinksItems, linksType } from './types'

export const blockLinks: blockLinksItems[] = [
	{
		icon: <TbTruckDelivery />,
		title: 'Доставляем',
		links: 'с 10:00 до 22:00',
		href: '#',
	},
	{
		icon: <BsTelephone />,
		title: 'Заказ по звонку',
		links: '+7 707 837 98 89',
		href: 'tel:+7 707 837 98 89',
	},
]

export const listItem: string[] = [
	'Наши кофейни',
	'Акции и новости',
	'Франшиза',
	'Поставщикам',
	'Вакансий',
	'Отзывы',
	'Контакты',
]

export const links: linksType[] = [
	{ href: '#', content: 'Забронировать столик' },
	{ href: '#', content: <CgFacebook /> },
	{ href: '#', content: <AiFillInstagram /> },
]
