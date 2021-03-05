import styles from '../styles/Button.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Button(props) {
    return (
        <>
            <button className={styles.buttons}>{props.title}
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </>
    )
}
