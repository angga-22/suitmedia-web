import styles from './Button.module.scss'
export default function Button(props) {
    return (
        <>
            <button className={styles.buttons}>{props.title}
                arrow right
            </button>
        </>
    )
}
