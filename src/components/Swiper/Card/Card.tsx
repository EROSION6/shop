import { FC } from 'react'
import { Items } from '../types'
import styles from './Card.module.scss'

export const Card: FC<Items> = ({ back, title, image, color, display }) => {
	return (
		<article className={styles.contents} style={{ background: back }}>
			<div className={styles.image}>
				<img style={{ display: display }} src={image} alt={title} />
			</div>
			<div className={styles.info}>
				<span>Акция</span>
				<h4 style={{ color: color }}>{title}</h4>
			</div>
		</article>
	)
}
