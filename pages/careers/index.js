import { useState } from 'react'
import CareerForm from '../../components/careerForm/CareerForm'
import Layout from '../../layout'
import axios from 'axios';
import styles from './Career.module.scss'
import ButtonServices from '../../components/button/ButtonServices'
import Button from '../../components/button/Button';
import Link from 'next/link'

export default function Careers({ careers, values }) {

    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if (clicked === index) {
            //if clicked section is already active, then close it
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <Layout title="Join Us in Building The Best Creative Digital Agency...">
            <div className={styles.container}>
                <section className={styles.hero}>
                    <div className={styles.text}>
                        <h4>Career</h4>
                        <h3>WE NEVER TIRE OF <span className={styles.mantra}>THE MANTRA</span> <span className={styles.quality}>QUALITY</span> OVER QUANTITY  </h3>
                    </div>
                </section>
                <section className={styles.valuesContainer}>
                    <div className={styles.values}>
                        <div className={styles.values__label}>
                            <h2>OUR VALUES DEFINE HOW WE DO THINGS IN OUR WORKPLACE</h2>
                        </div>
                        <div className={styles.values__category}>
                            {values.map(({ id, label, desc, img }) => {
                                return (
                                    <div className={styles.values__category__item} key={id}>
                                        <img src={img} alt="img-values" />
                                        <h4>{label.toUpperCase()}</h4>
                                        <p>{desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section className={styles.activity}>
                    <div className={styles.activity__label}>
                        <h2><span>Our</span> Activity</h2>
                    </div>
                    <div className={styles.activity__video}>
                        <iframe

                            src="https://www.youtube.com/embed/1TJzLGDxLcU"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                    <div className={styles.activity__button}>
                        <a href="https://www.youtube.com/watch?v=1TJzLGDxLcU&t=1s">
                            <ButtonServices title="WATCH OUR YOUTUBE" />
                        </a>
                    </div>
                </section>
                <section className={styles.reqruitment}>
                    <div className={styles.reqruitment__label}>
                        <h1>So, Are <span>You</span> The Qualified Person <span>We</span>'ve Been <span>Looking For?</span></h1>
                    </div>
                    <div className={styles.reqruitment__items}>
                        {careers.map(({ id, label, role, responsible, qualify, note }, index) => {
                            return (
                                <>
                                    <div className={styles.reqruitment__items__item}>
                                        <div className={styles.reqruitment__items__item__title}>
                                            <div>
                                                <h1>{label}</h1>
                                            </div>
                                            <div style={{ marginTop: "15px" }} onClick={() => toggle(index)} key={index}>
                                                <span>{clicked === index ? "minus" : "plus"}</span>
                                            </div>

                                        </div>
                                        {clicked === index ? (
                                            <div style={{ padding: "10px 20px", width: "100%" }} key={id}>
                                                <div>
                                                    <h4>Role</h4>
                                                    <ul>
                                                        <li>{role} </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4>Responsibilites</h4>
                                                    <p>{responsible[0]}</p>
                                                    <p>{responsible[1]}</p>
                                                    <p>{responsible[2]}</p>
                                                    <p>{responsible[3]}</p>
                                                    <p>{responsible[4]}</p>
                                                </div>
                                                <div>
                                                    <h4>Qualifications</h4>
                                                    <p>{qualify[0]}</p>
                                                    <p>{qualify[1]}</p>
                                                    <p>{qualify[2]}</p>
                                                    <p>{qualify[3]}</p>
                                                    <p>{qualify[4]}</p>
                                                </div>
                                                <div>
                                                    <h4>{note}</h4>
                                                </div>
                                                <CareerForm />
                                            </div>

                                        ) : null}
                                    </div>
                                </>
                            )
                        })}
                        <div>
                        </div>
                    </div>
                    <Link href="/contact">
                        <div className={styles.reqruitment__button}>
                            <Button title="START PROJECT WITH US" />
                        </div>
                    </Link>
                </section >
            </div >

        </Layout >
    )
}



const getCareers = async (key, name) => {
    const { data } = await axios.get("http://localhost:3000/api/careers")
    return data;
}


const getValues = async (key, name) => {
    const { data } = await axios.get("http://localhost:3000/api/values")
    return data
}

export async function getServerSideProps() {
    const data = await getCareers()
    const datas = await getValues()
    return {
        props: {
            careers: data,
            values: datas
        }
    }
}
