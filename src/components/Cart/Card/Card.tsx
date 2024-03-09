import { FC } from 'react'
import { Button } from '../../../UI'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { addCart, deleteCart } from '../../../redux/reducers/cardSlice'
import styles from './Card.module.scss'

interface CardPropsCart {
	id: number
	title: string
	image: string
	price: number
}

const Card: FC<CardPropsCart> = ({ id, title, image, price }) => {
	const counter = useAppSelector(state =>
		state.cart.cart.find(c => c.id === id)
	)

	const totalCount = counter ? counter.count : 0

	const dispatch = useAppDispatch()

	const deleteCard = () => {
		dispatch(deleteCart(id))
	}

	const addCardCount = () => {
		const cards = {
			id,
			title,
			image,
			price,
		}

		dispatch(addCart(cards))
	}

	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<img src={image} alt='' />
			</div>
			<div className={styles.text}>
				<span>{title}</span>
				<div className={styles.price}>
					<b>{price} ₸</b>
					<span>180 г.</span>
				</div>
			</div>
			<div>
				<div className={styles.count}>
					<Button
						onClick={addCardCount}
						addClass={styles.plus}
						variant='btnSmall'
					>
						+
					</Button>
					<b>{totalCount}</b>

					<Button
						onClick={deleteCard}
						addClass={styles.minus}
						variant='btnSmall'
					>
						-
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Card
