import { FC, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoEarthOutline } from 'react-icons/io5'
import { SlLocationPin } from 'react-icons/sl'
import { Button, Input, Modal, Title } from '../../UI'
import logo from '../../assets/logo (2).svg'
import { Header } from './Header/Header'
import styles from './Navbar.module.scss'
import { blockLinks } from './data'
import { InputType, NavbarProps } from './types'

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

export const Navbar: FC<NavbarProps> = ({ search, handleSearch }) => {
	const [isModal, setModal] = useState<boolean>(false)

	const [value, setValue] = useState<{
		nickname: string
		email: string
		password: string
	}>({
		nickname: '',
		email: '',
		password: '',
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
	const [showEmail, setShowEmail] = useState<boolean>(false)

	const registerUser: React.MouseEventHandler<HTMLButtonElement> = e => {
		e.preventDefault()

		if (value.nickname === '' || value.email === '' || value.password === '') {
			alert('fill out all fields to register')
		} else {
			setModal(false)
			setShowEmail(true)
		}
	}

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
						{showEmail ? (
							<span>{value.email}</span>
						) : (
							<Button onClick={() => setModal(!isModal)} variant='btnBig'>
								Войти
							</Button>
						)}
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
									<Button onClick={registerUser} variant='btnBig'>
										Зарегистрироваться
									</Button>
								</form>
							</Modal>
						)}
					</div>
				</div>
			</header>
		</div>
	)
}
