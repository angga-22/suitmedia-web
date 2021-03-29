import Link from 'next/link';
import styles from './Navbar.module.scss';
import { useState } from 'react';


export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav className={styles.container}>
            <section className={styles.sections}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img
                            src="logo.png"
                            alt="Picture of the author"
                            className={styles.logoIcon}
                        />
                    </Link>
                </div>
                <div className={styles.iconMenu}
                    onClick={handleOpenMenu}>
                    {openMenu ?

                        <img
                            src="close.png"
                            alt="menu"
                            className={styles.iconBars}
                        />
                        : <img
                            src="menu.png"
                            alt="menu"
                            className={styles.iconBars}
                        />
                    }
                </div>
            </section>
            <ul className={styles.uls} >
                {openMenu ?
                    <div className={styles.menu} >
                        <li >
                            <Link href="/work">
                                WORK
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                                SERVICES
                            </Link>
                        </li>
                        <li>
                            <Link href="/ideas">
                                IDEAS
                            </Link>
                        </li>
                        <li>
                            <Link href="/careers">
                                CAREERS
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                CONTACT
                            </Link>
                        </li>
                    </div> : null}
            </ul>
        </nav>
    )
}
