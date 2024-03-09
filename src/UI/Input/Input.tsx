import styles from './Input.module.scss'

export const Input = ({...props}) => {
	return <input {...props} className={styles.inputs} />
}
