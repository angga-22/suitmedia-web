
import Layout from '../../layout'
import axios from 'axios'
import Button from '../../components/button/Button'
import styles from './Home.module.scss';
import Link from 'next/link'

export default function Home({ digital, ourwork, featured }) {
    return (
        <Layout title="Digital Agency Indonesia | Web & Mobile App ...">
            <div className={styles.container}>
                <section className={styles.hero}>
                    <div className={styles.heroLabel}>
                        <h1> <span style={{ color: "#fc8534" }}>Make</span> Everything Digitally  <span style={{ color: "#fc8534" }}>Possible</span> </h1>
                        <p>Suitmedia is a <span style={{ fontWeight: "bold" }}>full-service digital agency </span> that helps brands in digital transformation through strategy, product development, and creative communication.</p>
                    </div>
                    <div className={styles.heroImage}>
                        <img src="https://i.ibb.co/q9W9XsT/SuitBot.png" alt="suitbot" />
                    </div>
                </section>
                <section className={styles.section1}>
                    <div className={styles.labelWrapper}>
                        <h1 className={styles.label}>DIGITAL <span style={{ color: "#fc8534" }}>AGENCY</span> INDONESIA</h1>
                        <p>Suitmedia combine Customer Experience, Data Analytics, and ROI-oriented approaches to help our clients succeed through digital innovation.
                        </p>
                    </div>
                    <div className={styles.itemGroup}>
                        {digital.map(({ id, name, desc, img }) => (
                            <div key={id} className={styles.itemWrapper} >
                                <img src={img} alt="img" />
                                <div className={styles.itemContent}>
                                    <h1>{name}</h1>
                                    <p>{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link href="/about">
                        <div className={styles.buttons}>
                            <Button title="ABOUT SUITMEDIA" />
                        </div>
                    </Link>
                </section>
                <section className={styles.section2}>
                    <h1 className={styles.label}> <span style={{ color: "#fc8534" }}>OUR</span> WORK</h1>
                    <div className={styles.items}>
                        {ourwork.map(({ id, title, img }) => (
                            <div key={id} className={styles.item} >

                                <img src={img} alt="ourwork" />
                                <h2>{title}</h2>
                            </div>
                        ))}
                    </div>
                    <Link href="/work">
                        <div className={styles.buttons}>
                            <Button title="BROWSE OUR PORTFOLIO" />
                        </div>
                    </Link>
                </section>
                <section className={styles.section3}>
                    <h1 className={styles.label}> <span style={{ color: "#fc8534" }}>FEATURED</span> CLIENTS</h1>
                    <div className={styles.items}>
                        {featured.map(({ id, img }) => (
                            <div key={id} className={styles.item}>
                                <img src={img} alt="featured" />
                            </div>
                        ))}
                    </div>
                    <Link href="/contact">
                        <div className={styles.buttons}>
                            <Button title="START PROJECT WITH US" />
                        </div>
                    </Link>

                </section>

            </div>
        </Layout>
    )
}


const getDigital = async (key, name) => {
    const { data } = await axios.get('http://localhost:3000/api/digitalagency');
    return data;
}

const getOurWork = async (key, name) => {
    const { data } = await axios.get('http://localhost:3000/api/ourwork');
    return data;
}
const getFeatured = async (key, name) => {
    const { data } = await axios.get('http://localhost:3000/api/featuredclients');
    return data;
}



export async function getServerSideProps() {
    const data = await getDigital();
    const datas = await getOurWork();
    const datass = await getFeatured();
    return {
        props: {
            digital: data,
            ourwork: datas,
            featured: datass
        }
    }

}

