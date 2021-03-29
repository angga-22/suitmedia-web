import ButtonServices from '../../components/button/ButtonServices'
import Button from '../../components/button/Button'
import styles from './Services.module.scss'
import Layout from '../../layout'
export default function Services() {
    return (
        <Layout title="Digital Marketing Agency, Web & Mobile Apps Development Services">
            <div className={styles.container}>
                <section className={styles.hero}>
                    <div className={styles.text}>
                        <h1>SERVICES</h1>
                        <p>Suitmedia combines Customer Experience, Data Analytics and ROI-oriented approaces to help our clients success through digital innovation</p>
                    </div>
                </section>
                <section className={styles.services}>
                    <div className={styles.services__card}>
                        <h6>Strategy</h6>
                        <h2>We help you understand the customers and create blueprint to solve the problems</h2>
                        <div className={styles.button}>
                            <ButtonServices title="DIGITAL & IT ADVISORY" />
                            <ButtonServices title="UX & MARKET RESEARCH" />
                            <ButtonServices title="DEVELOPMENT CONSULTATION" />
                            <ButtonServices title="MONITORING & ANALYTICS" />
                        </div>
                    </div>
                    <div className={styles.services__card}>
                        <h6>Creative</h6>
                        <h2>We design beautiful apps, write engaging stories, and produce entertaining videos</h2>
                        <div className={styles.button}>
                            <ButtonServices title="BRAND DEVELOPMENT" />
                            <ButtonServices title="UI/UX DESIGN" />
                            <ButtonServices title="CONTENT CREATION" />
                            <ButtonServices title="MOTION & VIDEOGRAPHY" />
                        </div>
                    </div>
                    <div className={styles.services__card}>
                        <h6>Technology</h6>
                        <h2>We develop iOS, Android, web application, and e-commerce</h2>
                        <div className={styles.button}>
                            <ButtonServices title="IOS & ANDROID DEVELOPMENT" />
                            <ButtonServices title="WEB DEVELOPMENT" />
                            <ButtonServices title="E-COMMERCE SOLUTIONS" />
                            <ButtonServices title="SEARCH ENGINE OPTIMIZATION" />
                        </div>
                    </div>
                    <div className={styles.services__card}>
                        <h6>Communication</h6>
                        <h2>We create 360&deg; digital campaign through social media, influencers activation, and advertising. </h2>
                        <div className={styles.button}>
                            <ButtonServices title="CREATIVE CAMPAIGN" />
                            <ButtonServices title="SOCIAL MEDIA MANAGEMENT" />
                            <ButtonServices title="DIGITAL ADVERTISING" />
                            <ButtonServices title="INFLUENCER MARKETING" />
                        </div>
                    </div>
                </section>
                <div className={styles.buttonAlone}>
                    <Button title="START PROJECT WITH US" />
                </div>
            </div>
        </Layout >
    )
}
