import { useState } from 'react'
import { BsBasket2 } from 'react-icons/bs'
import { Button, Title } from '../../UI'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { clearCart } from '../../redux/slice/cartSlice'
import Card from './Card/Card'
import styles from './Cart.module.scss'

type pricesArray = {
	product: string
	price: number
}

const prices: pricesArray[] = [
	{ product: '3 товара', price: 12850 },
	{ product: 'Доставка', price: 850 },
]

const Cart = () => {
	const [openCart, setOpenCart] = useState<boolean>(false)
	const { cart, totalPrice } = useAppSelector(state => state.cart)
	const dispatch = useAppDispatch()

	return (
		<>
			<div className={openCart ? styles.cart : styles.closeOpen}>
				<div className={styles.banner}>
					<div className={styles.img}>
						<img
							src='https://crepe-cafe.netlify.app/img/main/sidebar.png'
							alt='sidebar'
						/>
					</div>
					<div className={styles.text}>
						<span>Забронировать столик</span>
						<span>Работает с 10:00 до 22:00</span>
					</div>
				</div>
				<div className={styles.cartsText}>
					<Title>Корзина</Title>
					<span onClick={() => dispatch(clearCart())}>Очистить</span>
				</div>
				<div className={styles.blockCart}>
					{cart.map(car => (
						<Card {...car} key={car.id} />
					))}
				</div>
				<div className={styles.prices}>
					{prices.map(prices => (
						<div key={prices.price} className={styles.content}>
							<span>{prices.product}</span>
							<b>{prices.price} ₸</b>
						</div>
					))}
					<Button addClass={styles.btnPrice} variant='btnBig'>
						<span>Верно, далее</span>
						<span>{totalPrice} ₸</span>
					</Button>
				</div>
			</div>
			<div className={styles.cartButton}>
				<Button
					onClick={() => setOpenCart(!openCart)}
					addClass={styles.btn}
					variant='btnBig'
				>
					<span>
						<BsBasket2 />
						Корзина ({cart.length})
					</span>
					<span>{totalPrice} ₸</span>
				</Button>
			</div>
		</>
	)
}

export default Cart
