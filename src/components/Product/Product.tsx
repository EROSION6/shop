import { useEffect, useState } from 'react'
import { Title } from '../../UI/Title/Title'
import logo from '../../assets/logo (2).svg'
import { Card } from './Card/Card'
import styles from './Product.module.scss'

export type Items = {
	id: number
	title: string
	info: string
	image: string
	price: number
	background: string
}

export interface ProductProps {
	search: string
}

export const Product = ({ search }: ProductProps) => {
	const [responseCard, setResponseCard] = useState<Items[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	const fetchCart = async () => {
		try {
			const response = await fetch('https://538c08bfac604c3a.mokky.dev/items')

			if (!response.ok) {
				throw new Error('Ошибка загрузки данных')
			}
			setResponseCard(await response.json())
			setLoading(false)
		} catch {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchCart()
	}, [])

	if (loading) {
		return (
			<div className={styles.loading}>
				<h1>
					<span>Загрузка...</span>
					<span>
						<img src={logo} alt='logo' />
					</span>
				</h1>
			</div>
		)
	}
	return (
		<section className={styles.product}>
			<Title style={{ marginBottom: 15 }}>Новинки</Title>
			<div className={styles.productBlock}>
				{responseCard
					.filter(sea => {
						return sea.title.toLowerCase().includes(search.toLowerCase())
					})
					.map(item => (
						<Card key={item.id} {...item} />
					))}
			</div>
		</section>
	)
}
