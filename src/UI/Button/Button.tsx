import { FC } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
	children: React.ReactNode;
	addClass?: string;
	variant: string;
	onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ onClick, children, variant, addClass }) => {
	const btns = classNames({
		[styles.pink]: variant === 'btnBig',
		[styles.white]: variant === 'btnSmall',
	});

	return (
		<button onClick={onClick} className={`${btns} ${addClass}`}>
			{children}
		</button>
	);
};
