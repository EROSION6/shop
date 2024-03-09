import { FC } from 'react'
import styles from './Sidebar.module.scss'

const links: {
	title: string
	href: string
}[] = [
	{ title: 'Новинки', href: '#' },
	{ title: 'Завтраки', href: '#' },
	{ title: 'Салаты', href: '#' },
	{ title: 'Супы', href: '#' },
	{ title: 'Горячее', href: '#' },
	{ title: 'Сытные крепы', href: '#' },
	{ title: 'Креп роллы', href: '#' },
	{ title: 'Сладкие крепы', href: '#' },
	{ title: 'Вафли', href: '#' },
	{ title: 'Ролл Мороженое', href: '#' },
	{ title: 'Гарниры', href: '#' },
	{ title: 'Барное меню', href: '#' },
]

export const Sidebar: FC = () => {
	return (
		<div className={styles.bar}>
			<nav>
				<ul>
					{links.map((link, i) => (
						<li key={i}>
							<a href={link.href}>{link.title}</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
