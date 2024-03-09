import { FC, useState } from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { CgFacebook } from 'react-icons/cg'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'
import { SlLocationPin } from 'react-icons/sl'
import { Button } from '../../../UI'
import logo from '../../../assets/logo (2).svg'
import styles from './Header.module.scss'

interface linksType {
	href: string
	content: string | JSX.Element
}

const listItem: string[] = [
	'Наши кофейни',
	'Акции и новости',
	'Франшиза',
	'Поставщикам',
	'Вакансий',
	'Отзывы',
	'Контакты',
]

const links: linksType[] = [
	{ href: '#', content: 'Забронировать столик' },
	{ href: '#', content: <CgFacebook /> },
	{ href: '#', content: <AiFillInstagram /> },
]

export const Header: FC = () => {
	const [openNavbar, setOpenNavbar] = useState<boolean>(false)

	return (
		<div className={styles.headers}>
			<div className={styles.contentLoc}>
				<img src={logo} alt='logo' />
				<Button variant='btnBig' addClass={styles.btnLocations}>
					<span>
						<SlLocationPin />
					</span>
					<span>Адрес доставки</span>
				</Button>
			</div>
			<div className={!openNavbar ? styles.left : styles.open}>
				<nav className={styles.navLinks}>
					{listItem.map((list, i) => (
						<a key={i} href='#'>
							{list}
						</a>
					))}
				</nav>
			</div>
			<div className={styles.right}>
				{links.map((link, i) => (
					<a key={i} href={link.href}>
						{link.content}
					</a>
				))}
			</div>
			<div onClick={() => setOpenNavbar(!openNavbar)} className={styles.burger}>
				{!openNavbar ? <RxHamburgerMenu /> : <RxCross1 />}
			</div>
		</div>
	)
}
