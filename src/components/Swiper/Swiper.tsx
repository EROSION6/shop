import { FC } from 'react'
import { Title } from '../../UI/index'
import { Card } from './Card/Card'
import styles from './Swiper.module.scss'
import { cards } from './data'

export const Swiper: FC = () => {
	return (
		<div className={styles.sliders}>
			<div className={styles.top}>
				<Title>Акции и новости</Title>
				<a href='#'>Все акции и новости</a>
			</div>
			<div className={styles.bottom}>
				{cards.map((card, i) => (
					<Card key={i} {...card} />
				))}
			</div>
		</div>
	)
}
