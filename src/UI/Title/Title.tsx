import { FC } from 'react'
import styles from './Title.module.scss'

interface TitleProps {
	children: React.ReactNode
	style?: React.CSSProperties
}

export const Title: FC<TitleProps> = ({ style, children }) => {
	return (
		<h3 style={style} className={styles.title}>
			{children}
		</h3>
	)
}
