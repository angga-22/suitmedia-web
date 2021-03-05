import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav className={styles.container}>
            <Link href="/">
                <img
                    src="logo.png"
                    alt="Picture of the author"
                    className={styles.logo}
                />
            </Link>

            <ul className={styles.uls} >
                <div className={styles.iconMenu} onClick={handleOpenMenu}>
                    <FontAwesomeIcon
                        className={styles.iconBars}
                        icon={faBars}></FontAwesomeIcon>
                </div>


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
                        </li> </div> : null}

            </ul>
        </nav>
    )
}
