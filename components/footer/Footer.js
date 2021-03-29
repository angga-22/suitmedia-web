import { useState } from 'react'
import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer() {

    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setInput(console.log("input apa"))
    }

    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <h3>SUBSCRIBE</h3>
                <p>Stay current with our latest insights.</p>
            </div>
            <section className={styles.form_wrapper}>
                <div className={styles.form_container}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Email Address"
                            className={styles.input}
                        />
                        <a href="mailto:e1d015121@gmail.com">
                            <button >SUBMIT</button>

                        </a>
                    </form>
                </div>
                <div className={styles.icons}>
                    <Link href="https://www.linkedin.com/company/suitmedia/">
                        <img src="/sosmed/linkedin.png" alt="in" />
                    </Link>
                    <Link href="https://www.instagram.com/suitmedia/">
                        <img src="/sosmed/instagram.png" alt="ig" />
                    </Link>
                    <Link href="https://www.youtube.com/user/suitmedia">
                        <img src="/sosmed/youtube.png" alt="yt" />
                    </Link>
                    <Link href="spotify:show:7D2MQnYYeui5DsXzfWMLXF">
                        <img src="/sosmed/spotify.png" alt="sp" />
                    </Link>
                    <Link href="https://www.facebook.com/socmed.suitmedia.7">
                        <img src="/sosmed/facebook.png" alt="fb" />
                    </Link>
                    <Link href="https://twitter.com/suitmedia">
                        <img src="/sosmed/twitter.png" alt="tw" />
                    </Link>
                </div>
            </section>
            <div className={styles.copyright}>
                <p> Copyright &copy; 2020 Suitmedia. All right reserved.</p>
            </div>
        </div>
    )
}
