
import Layout from '../../layout'
import axios from 'axios'
import Button from '../../components/Button'
import styles from '../../styles/Home.module.scss';


export default function Home({ data, ourwork, featured }) {
    return (
        <Layout title="Digital Agency Indonesia | Web & Mobile App ...">
            <div className={styles.hero}>
                <div className={styles.heroText}>
                    <h1> <span style={{ color: "#fc8534" }}>Make</span> Everything Digitally  <span style={{ color: "#fc8534" }}>Possible</span> </h1>
                    <p>Suitmedia is a <span style={{ fontWeight: "bold" }}>full-service digital agency </span> that helps brands in digital transformation through strategy, product development, and creative communication.</p>
                </div>
                <div className={styles.heroImage}>
                    <img src="https://i.ibb.co/q9W9XsT/SuitBot.png" alt="suitbot" />
                </div>
            </div>
            <div className={styles.section1}>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.text}>DIGITAL <span style={{ color: "#fc8534" }}>AGENCY</span> INDONESIA</h1>
                    <p>Suitmedia combine Customer Experience, Data Analytics, and ROI-oriented approaches to help our clients succeed through digital innovation.
                    </p>
                </div>
                <div className={styles.section1Item}>
                    {data.map(({ id, name, desc, img }) => (

                        <div className={styles.itemWrapper} key={id}>
                            <img src={img} alt="img" />
                            <div className={styles.itemContent}>

                                <h1>{name}</h1>
                                <p>{desc}</p>
                            </div>
                        </div>

                    ))}
                </div>
                <div className={styles.buttons}>

                    <Button title="ABOUT SUITMEDIA" />
                </div>
            </div>
            <div className={styles.section2}>
                <h1 className={styles.text}> <span style={{ color: "#fc8534" }}>OUR</span> WORK</h1>
                <div className={styles.section2Item}>
                    {ourwork.map(({ id, title, link, img }) => (
                        <div className={styles.item} key={id}>

                            <img src={img} alt="ourwork" />
                            <h2>{title}</h2>
                        </div>
                    ))}
                </div>
                <div className={styles.buttons}>
                    <Button title="BROWSE OUR PORTFOLIO" />
                </div>
            </div>
            <div className={styles.section3}>
                <h1 className={styles.text}> <span style={{ color: "#fc8534" }}>FEATURED</span> CLIENTS</h1>
                <div className={styles.section3Item}>
                    {featured.map(({ id, link, img }) => (
                        <div key={id}>
                            <img src={img} alt="ourwork" />
                        </div>
                    ))}

                </div>
                <div className={styles.buttons}>

                    <Button title="START PROJECT WITH US" />
                </div>
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
            data: data,
            ourwork: datas,
            featured: datass
        }
    }

}

