import { FC } from 'react'
import styles from './Modal.module.scss'

interface ModalProps {
	children: React.ReactNode
	onClick?: () => void
}

export const Modal: FC<ModalProps> = ({ onClick, children }) => {
	const handleDoNotTouch: React.MouseEventHandler<HTMLDivElement> = e => {
		e.stopPropagation()
	}
	return (
		<div onClick={onClick} className={styles.overflow}>
			<div onClick={handleDoNotTouch} className={styles.content}>
				{children}
			</div>
		</div>
	)
}
