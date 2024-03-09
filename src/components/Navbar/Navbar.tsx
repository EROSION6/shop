import { FC, useState } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { IoEarthOutline } from 'react-icons/io5'
import { SlLocationPin } from 'react-icons/sl'
import { TbTruckDelivery } from 'react-icons/tb'
import { Button, Input, Modal, Title } from '../../UI'
import logo from '../../assets/logo (2).svg'
import { Header } from './Header/Header'
import styles from './Navbar.module.scss'

interface blockLinksItems {
	icon: JSX.Element
	title: string
	links: string
	href: string
}

const blockLinks: blockLinksItems[] = [
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

const items = (
	<>
		{blockLinks.map(linksBlock => (
			<div className={styles.content}>
				<div className={styles.icons}>{linksBlock.icon}</div>
				<div className={styles.info}>
					<span>{linksBlock.title}</span>
					<a href={linksBlock.href}>{linksBlock.links}</a>
				</div>
			</div>
		))}
	</>
)

interface NavbarProps {
	search: string
	handleSearch: (e: React.SyntheticEvent<HTMLInputElement>) => void
}

type InputType = {
	value: string
	onChange: (e: any) => void
	placeholder: string
	type: string
}

export const Navbar: FC<NavbarProps> = ({ search, handleSearch }) => {
	const [isModal, setModal] = useState<boolean>(false)

	const [value, setValue] = useState({
		nickname: '',
		email: '',
		password: ' ',
	})

	const inputs: InputType[] = [
		{
			value: value.nickname,
			onChange: e => setValue({ ...value, nickname: e.target.value }),
			placeholder: 'Введите nickname',
			type: 'text',
		},
		{
			value: value.email,
			onChange: e => setValue({ ...value, email: e.target.value }),
			placeholder: 'Введите email',
			type: 'email',
		},
		{
			value: value.password,
			onChange: e => setValue({ ...value, password: e.target.value }),
			placeholder: 'Введите password',
			type: 'password',
		},
	]

	return (
		<div className={styles.containers}>
			<Header />
			<header className={styles.header}>
				<div className={styles.left}>
					<img src={logo} alt='logo' />
					<Button variant='btnBig' addClass={styles.btnLocations}>
						<span>
							<SlLocationPin />
						</span>
						<span>Адрес доставки</span>
					</Button>
					<div className={styles.search}>
						<Input
							value={search}
							onChange={handleSearch}
							type='text'
							placeholder='Поиск блюда'
						/>
						<span>
							<FiSearch />
						</span>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.block}>{items}</div>
					<div className={styles.blockRegister}>
						<div className={styles.lang}>
							<span>
								<IoEarthOutline />
							</span>
							<b>Русский</b>
						</div>
						<Button onClick={() => setModal(!isModal)} variant='btnBig'>
							Войти
						</Button>
						{isModal && (
							<Modal onClick={() => setModal(false)}>
								<div className={styles.reg}>
									<Title>Регистрация</Title>
								</div>
								<form className={styles.forms}>
									{inputs.map(input => (
										<Input
											value={input.value}
											onChange={input.onChange}
											placeholder={input.placeholder}
											type={input.type}
										/>
									))}
									<Button variant='btnBig'>Зарегистрироваться</Button>
								</form>
							</Modal>
						)}
					</div>
				</div>
			</header>
		</div>
	)
}
