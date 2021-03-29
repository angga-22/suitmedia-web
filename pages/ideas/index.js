import axios from 'axios';
import Layout from '../../layout'
import styles from './Ideas.module.scss';
import Button from '../../components/button/Button'
export default function Ideas({ ideas }) {
    return (
        <Layout title="Suitmedia Insights : Digital Marketing, Web, Mobile ...">
            <div className={styles.heroIdeas}>
                <div className={styles.label}>
                    <h1>IDEAS</h1>
                    <h4>Where all our great things begin</h4>
                </div>

            </div>
            <div className={styles.ideasGroup}>
                {ideas.map(({ id, link, title, date, img }) => {
                    return (
                        <div className={styles.ideasItem} key={id}>
                            <img
                                src={img}
                                alt="imgideas"

                            />
                            <div className={styles.body}>
                                <p>{date}</p>
                                <h4>{title}</h4>
                            </div>
                            <div className={styles.sub}>
                                <p>Read More</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.buttons}>
                <Button title="Load More" />
            </div>
        </Layout>
    )
}



const getIdeas = async (key, name) => {
    const { data } = await axios.get('http://localhost:3000/api/ideas');
    return data;
}


export async function getServerSideProps() {
    const datasss = await getIdeas();
    return {
        props: {
            ideas: datasss
        }
    }
}

