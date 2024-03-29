import { useDispatch } from 'react-redux'
import { Button } from '../../../UI'
import { addCart } from '../../../redux/slice/cartSlice'
import { Items } from '../types'
import styles from './Card.module.scss'

export const Card = ({ id, title, image, price, info, background }: Items) => {
	const dispatch = useDispatch()

	const addCard = () => {
		const cards = {
			id,
			title,
			image,
			price,
			info,
			background,
		}

		dispatch(addCart(cards))
	}

	return (
		<article className={styles.card} style={{ backgroundColor: background }}>
			<div className={styles.productImage}>
				<img src={image} alt={title} />
			</div>
			<div className={styles.catalog}>
				<span>New</span>
				<img src='https://crepe-cafe.netlify.app/img/main/tag-1.svg' alt='' />
				<img src='https://crepe-cafe.netlify.app/img/main/tag-2.svg' alt='' />
			</div>
			<div className={styles.info}>
				<h4>{title}</h4>
				<p>{info}</p>
			</div>
			<footer className={styles.price}>
				<i>{price} ₸</i>
				<Button onClick={addCard} variant='btnBig' addClass={styles.addBtn}>
					<span>Добавить</span>
					<span>{price}</span>
				</Button>
			</footer>
		</article>
	)
}
