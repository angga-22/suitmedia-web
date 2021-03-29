import axios from 'axios';
import { useState } from 'react'
import Layout from '../../layout';
import styles from './About.module.scss';
import Button from '../../components/button/Button'
import Link from 'next/link';


export default function About({ whatwedo }) {
    return (
        <Layout title="Digital Marketing & Development Agency, Based in Jakarta">
            <div className={styles.container}>
                <section className={styles.hero}>
                    <div className={styles.text}>
                        <h1><span>ABOUT </span> US</h1>
                        <p>Suitmedia has become our second home where technology & creativity fused into digital chemistry</p>
                    </div>
                </section>
                <section className={styles.section1}>
                    <div className={styles.section1__approach}>
                        <div className={styles.section1__approach__label}>
                            <h1> Our <span>Approach</span></h1>
                            <p>As <span>Creative Digital Lab</span> we do our work through four cyclical stages that repeat to the first step once one cycle finishes.</p>
                        </div>
                        <div className={styles.section1__approach__items}>
                            <div>
                                <h3>1. Discover</h3>
                                <p>Finding insights from data and research</p>
                            </div>
                            <div>
                                <h3>2. Define</h3>
                                <p>Creating digital strategy and solution blueprint.</p>
                            </div>
                            <div>
                                <h3>3. Deliver</h3>
                                <p>Developing solution and implementing media strategy.</p>
                            </div>
                            <div>
                                <h3>4. Determine</h3>
                                <p>Measuring the performance of our implementation</p>
                            </div>
                        </div>
                        <Link href="/contact">
                            <div className={styles.section1__approach__button}>
                                <Button title="START PROJECT WITH US" />
                            </div>
                        </Link>
                    </div>
                    <div className={styles.section1__cycle}>
                        <img src="https://suitmedia.com/assets/img/diagram-4d-framework.png" alt="cycling" />
                    </div>
                </section>
                <section className={styles.section2}>
                    <div className={styles.section2__label}>
                        <div className={styles.section2__label__label1}>
                            <h1>WHAT WE</h1>
                        </div>
                        <div className={styles.section2__label__label2}>
                            <h1>DO</h1>
                            <img src="https://suitmedia.com/assets/img/icon-technology-4.png" alt="img" />
                        </div>
                        <Link href="/work">
                            <div className={styles.section2__label__button}>
                                <Button title="BROWSE OUR PORTFOLIO" />
                            </div>
                        </Link>
                    </div>
                    <div className={styles.section2__items}>
                        {whatwedo.map(({ id, label, desc, img }) => {
                            return (
                                <div className={styles.section2__items__item}>
                                    <img src={img} alt="category" />
                                    <h1>{label.toUpperCase()}</h1>
                                    <p>{desc[0].toUpperCase()}</p>
                                    <p>{desc[1].toUpperCase()}</p>
                                    <p>{desc[2].toUpperCase()}</p>
                                    <p>{desc[3].toUpperCase()}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </Layout>
    )
}



const getWeDo = async (key, name) => {
    const { data } = await axios.get("http://localhost:3000/api/whatwedo")
    return data;
}

export async function getServerSideProps() {
    const data = await getWeDo()
    return {
        props: {
            whatwedo: data
        }
    }
}

