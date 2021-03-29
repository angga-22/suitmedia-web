import styles from './Button.module.scss'

export default function ButtonServices(props) {
    return (
        <>
            <button className={styles.button_services}>{props.title}

            </button>
        </>
    )
}
