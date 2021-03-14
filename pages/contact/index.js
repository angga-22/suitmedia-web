import ContactForm from "../../components/ContactForm";
import Maps from "../../components/Maps";
import Layout from '../../layout'
import styles from '../../styles/Contact.module.scss';
export default function Contact() {

    return (
        <Layout title="Start Project with Suitmedia - Creative Digital">
            <div>
                <Maps />
            </div>
            <section className={styles.container}>
                <div >
                    <ContactForm />
                </div>
                <div className={styles.visitus}>
                    <h1>VISIT US</h1>
                    <div className={styles.visitFirstChild}>
                        <div>

                            <img src='/pin.png' alt="location" />
                        </div>
                        <div>
                            <div>
                                <h4>Suitmedia HQ</h4>
                                <p>Jl. Pejaten Barat II No. 3A </p>
                                <p>Jakarta, Indonesia 12510</p>
                            </div>
                            <div>
                                <h4>Suitmedia Singapore</h4>
                                <p>190 Clemenceau Avenue #06-02 </p>
                                <p>Singapore 239924</p>
                            </div>
                            <div>
                                <h4>Suitmedia Bandung</h4>
                                <p>Jl. sekeloa No. 2, Dipatiukur </p>
                                <p>Bandung, Indonesia 40132</p>
                            </div>
                            <div>
                                <h4>Suitmedia Yogyakarta</h4>
                                <p>Jl. Jat Pratama 237A, Sleman</p>
                                <p>Yogyakarta, Indonesia 55284 </p>
                            </div>
                        </div>

                    </div>
                    <div className={styles.visitSecondChild}>
                        <img src="/phone.png" alt="phone" />
                        <p>+62 21 719 6877</p>
                    </div>
                    <div className={styles.visitThirdChild}>
                        <img src="/mail.png" alt="mail" />
                        <p>contact@suitmedia.com</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
