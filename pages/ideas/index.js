import axios from 'axios';
import Layout from '../../layout'
import styles from '../../styles/Ideas.module.scss';
import Button from '../../components/Button'
export default function Ideas({ ideas }) {
    return (
        <Layout title="Suitmedia Insights : Digital Marketing, Web, Mobile ...">
            <div className={styles.heroIdeas}>
                <img
                    src="https://i.ibb.co/W2R75tm/ideas.jpg"
                    alt="ideas"
                    style={{
                        width: "100vw",
                        height: "100vh",
                        marginTop: "-90px",
                        zIndex: "-99",
                    }}
                />
                <div className={styles.heroText}>

                    <h1>IDEAS</h1>
                    <p>Where all our great things begin</p>
                </div>

            </div>
            <div className={styles.ideasContent}>
                {ideas.map(({ id, link, title, date, img }) => {
                    return (
                        <div className={styles.ideaContent} key={id}>


                            <img
                                src={img}
                                alt="imgideas"
                                style={{ width: "100%" }}
                            />
                            <p>{date}</p>
                            <h4>{title}</h4>
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

