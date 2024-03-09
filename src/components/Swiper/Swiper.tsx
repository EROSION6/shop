import { FC } from 'react';
import { Title } from '../../UI/index';
import { Card } from './Card/Card';
import styles from './Swiper.module.scss';

interface CardsType {
	title: string;
	image: string;
	color: string;
	display: string;
	back: string;
}

const cards: CardsType[] = [
	{
		title: 'Крем с кусочками ананаса :)',
		image: 'https://crepe-cafe.netlify.app/img/main/action-1.jpg',
		display: 'block',
		color: '#000',
		back: '#f16664',
	},
	{
		title: 'Почувствуй лето',
		image: 'https://crepe-cafe.netlify.app/img/main/action-2.jpg',
		display: 'block',
		color: '#fff',
		back: '#f16664',
	},
	{
		title: 'Просто банан',
		image: 'https://crepe-cafe.netlify.app/img/main/action-3.jpg',
		display: 'block',
		color: '#000',
		back: '#f16664',
	},
	{
		title: 'Крем с кусочками ананаса :)',
		image: 'https://crepe-cafe.netlify.app/img/main/action-1.jpg',
		display: 'none',
		color: '#fff',
		back: '#f16664',
	},
	{
		title: 'Просто банан',
		image: 'https://crepe-cafe.netlify.app/img/main/action-1.jpg',
		display: 'none',
		color: '#000',
		back: '#FAC575',
	},
];

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
	);
};
