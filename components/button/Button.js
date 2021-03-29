import styles from './Button.module.scss'

export default function Button(props) {
    return (
        <>
            <div>

                <button className={styles.buttons}>
                    {props.title}

                    <div>
                        <img src="/arrow-right.png" alt="arrow" />

                    </div>
                </button>

            </div>
        </>
    )
}
