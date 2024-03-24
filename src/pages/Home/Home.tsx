import { useState } from 'react'
import Cart from '../../components/Cart/Cart'
import { Navbar } from '../../components/Navbar/Navbar'
import { Product } from '../../components/Product/Product'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Swiper } from '../../components/Swiper/Swiper'
import styles from './styles/Home.module.scss'

const Home = () => {
	const [search, setSearch] = useState<string>('')

	const handleSearch = (e: React.SyntheticEvent<HTMLInputElement>): void => {
		setSearch((e.target as HTMLInputElement).value)
	}

	return (
		<div className={styles.home}>
			<Navbar handleSearch={handleSearch} search={search} />
			<div className={styles.blockContent}>
				<div className={styles.menu}>
					<Sidebar />
				</div>
				<div className={styles.slider}>
					<Swiper />
					<Product search={search} />
				</div>
				<div className={styles.cart}>
					<Cart />
				</div>
			</div>
		</div>
	)
}

export default Home
