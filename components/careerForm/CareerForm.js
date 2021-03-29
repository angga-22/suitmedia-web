import { useState } from 'react'
import Button from '../button/Button'
import styles from './CareerForm.module.scss';

export default function CareerForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [selectedCv, setSelectedCv] = useState([])
    const [isCvPicked, setIsCvPicked] = useState(false)
    const [portfolio, setPortfolio] = useState('')


    const handleCv = (event) => {
        setSelectedCv(event.target.files[0]);
        setIsCvPicked(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("submitted")
    }


    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <h1>Apply <span>Now</span></h1>
            </div>
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className={styles.form__input}
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className={styles.form__input}
                    />
                    <div className={styles.form__inputfiles}>
                        Your CV:
                        <input
                            type="file"
                            name="cv"
                            onChange={handleCv}
                            placeholder="Your Name"
                            className={styles.files}
                        />
                        {isCvPicked ? (
                            <div>
                                <p>filename: {selectedCv.name}</p>
                                <p>filetype: {selectedCv.type}</p>
                                <p>size: {selectedCv.size}</p>
                            </div>
                        ) : <p>select a file to show details</p>}
                    </div>
                    <input
                        type="text"
                        name="portfolio"
                        value={portfolio}
                        onChange={(e) => setPortfolio(e.target.value)}
                        placeholder="Your Portfolio URL"
                        className={styles.form__input}
                    />
                    <div className={styles.button}>
                        <Button title="SUBMIT" />
                    </div>
                </form>
            </div>
        </div>
    )
}
