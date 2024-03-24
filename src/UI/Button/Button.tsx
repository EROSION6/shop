import classNames from 'classnames'
import { FC } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
	children: React.ReactNode
	addClass?: string
	variant: string
	onClick?: () => void | undefined
}

export const Button: FC<ButtonProps> = ({
	onClick,
	children,
	variant,
	addClass,
}) => {
	const btns = classNames({
		[styles.pink]: variant === 'btnBig',
		[styles.white]: variant === 'btnSmall',
	})

	return (
		<button onClick={onClick} className={`${btns} ${addClass}`}>
			{children}
		</button>
	)
}
