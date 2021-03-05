import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.scss'
export default function Footer() {

    const [sendMail, setSendMail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setSendMail(sendMail)
    }

    return (
        <div className={styles.container}>
            <div className={styles.topFooter}>
                <div>
                    <h4>SUBSCRIBE</h4>
                    <p>Stay current with our latest insights</p>
                    <div className={styles.form}>
                        <form onSubmit={handleSubmit}>
                            <input
                                className={styles.inputMail}
                                name="email"
                                type="email"
                                onChange={(e) => setSendMail(e.target.value)}
                                placeholder="Email Address"
                                value={sendMail}
                            />
                            <button className={styles.button}>SUBMIT</button>
                        </form>
                    </div>
                </div>
                <div className={styles.sosmedIcon}>

                    <Link href="/">

                        <img
                            src="sosmed/linkedin-brands.svg" alt="in" />
                    </Link>

                    <Link href="/">

                        <img

                            src="sosmed/instagram-brands.svg" alt="ig" />
                    </Link>
                    <Link href="/">

                        <img

                            src="sosmed/youtube-brands.svg" alt="yt" />
                    </Link>
                    <Link href="/">

                        <img
                            src="sosmed/spotify-brands.svg" alt="sy" />
                    </Link>
                    <Link href="/">

                        <img
                            src="sosmed/facebook-brands.svg" alt="fb" />
                    </Link>
                    <Link href="/">

                        <img
                            src="sosmed/twitter-brands.svg" alt="tt" />
                    </Link>
                </div>
            </div>
            <div className={styles.botFooter}>
                <p>Copyright &copy; 2020. Suitmedia. All rights reserved.</p>
            </div>
        </div>
    )
}
