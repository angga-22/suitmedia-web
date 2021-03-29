import { useState } from 'react';
import axios from 'axios'
import Layout from '../../layout'
import styles from './Work.module.scss'
import ButtonServices from '../../components/button/ButtonServices'
import Button from '../../components/button/Button'
export default function Work({ content, clients }) {

    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if (clicked === index) {
            //if clicked section is already active, then close it
            return setClicked(null)
        }
        setClicked(index)
    }


    return (
        <Layout title="Suitmedia Portfolio, Digital Marketing & Development Case ...">
            <div className={styles.container}>
                <section className={styles.hero}>
                    <div className={styles.text}>
                        <h1><span>Our</span> WORK</h1>
                        <p>We make something you love</p>
                    </div>
                </section>
                <section className={styles.content}>
                    <div className={styles.content__label}>
                        <h1>These are some clients that have already put their trust in our work</h1>
                    </div>
                    <div className={styles.content__items}>
                        {content.map(({ id, title, img }) => (
                            <div key={id} className={styles.content__items__item} >
                                <img src={img} alt="content" />
                                <h2>{title}</h2>
                            </div>
                        ))}
                    </div>
                    <div className={styles.buttons}>
                        <ButtonServices title="LOAD MORE" />
                    </div>
                </section>
                <div className={styles.titleClients}>
                    <h1> <span>OUR</span> CLIENTS</h1>
                </div>
                <section className={styles.clients}>

                    {clients.map(({ id, label, items }, index) => {
                        return (
                            <div key={id} className={styles.clients__items}>

                                <div className={clicked === index ? styles.active : styles.clients__items__label} onClick={() => toggle(index)}>
                                    <h1>{label.toUpperCase()} ({items.length})</h1>

                                </div>

                                <div className={styles.clients__items__item}>
                                    {clicked === index ?
                                        <div className={styles.clients__items__item__client}>
                                            <img src={items[0]} alt="items" />
                                            <img src={items[1]} alt="items" />
                                            <img src={items[2]} alt="items" />
                                            <img src={items[3]} alt="items" />
                                            <img src={items[4]} alt="items" />
                                            <img src={items[5]} alt="items" />
                                            <img src={items[6]} alt="items" />
                                            <img src={items[7]} alt="items" />
                                            <img src={items[8]} alt="items" />
                                            <img src={items[9]} alt="items" />
                                        </div>
                                        : null
                                    }
                                </div>

                            </div>
                        )
                    })}


                </section>
                <div className={styles.buttonss}>
                    <Button title="START PROJECT WITH US" />
                </div>
            </div>
        </Layout>
    )
}



const getContent = async (key, name) => {
    const { data } = await axios.get("http://localhost:3000/api/content")
    return data;
}

const getClients = async (key, name) => {
    const { data } = await axios.get("http://localhost:3000/api/clients")
    return data;
}

export async function getServerSideProps() {
    const data = await getContent();
    const datas = await getClients()
    return {
        props: {
            content: data,
            clients: datas
        }
    }

}