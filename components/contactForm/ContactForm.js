import { useState } from 'react'
import Button from '../button/Button'
import styles from './ContactForm.module.scss';
export default function ContactForm() {

    const [fullName, setFullName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState()
    const [country, setCountry] = useState('')
    const [chooseProject, setChooseProject] = useState('')
    const [message, setMessage] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form submitted misalnya hehee")
    }

    return (
        <div className={styles.container}>
            <h1>LET'S TALK ABOUT BUSINESS</h1>
            <form className={styles.forms} onSubmit={handleSubmit}>
                <input
                    name="fullName"
                    type="text"
                    value={fullName}
                    placeholder="Full Name *"
                    onChange={(e) => setFullName(e.target.value)}
                    className={styles.inputs}
                />
                <input
                    name="companyName"
                    type="text"
                    value={companyName}
                    placeholder="Company Name *"
                    onChange={(e) => setCompanyName(e.target.value)}
                    className={styles.inputs}
                />
                <input
                    name="workEmail"
                    type="email"
                    value={email}
                    placeholder="Work Email *"
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.inputs}
                />
                <input
                    name="mobileNumber"
                    type="number"
                    value={number}
                    placeholder="Mobile Phone Number *"
                    onChange={(e) => setNumber(e.target.value)}
                    className={styles.inputs}
                />
                <select
                    className={styles.inputs}
                    value={country} id="country" name="country" onChange={(e) => setCountry(e.target.value)}>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Other Countries">Other Countries</option>
                </select>
                <select
                    className={styles.inputs}
                    value={chooseProject} id="project" name="project" onChange={(e) => setChooseProject(e.target.value)}>
                    <option value="Start New Project">Start New Project</option>
                    <option value="Media Inquiries">Media Inquiries</option>
                    <option value="Career Opportunities">Career Opportunities</option>
                    <option value="Something Else">Something Else</option>
                </select>
                <textarea
                    name="yourMessage"
                    type="textArea"
                    value={message}
                    placeholder="Your Message *"
                    onChange={(e) => setMessage(e.target.value)}
                    className={styles.textareas}

                />
                <div className={styles.buttons}>

                    <Button title="Submit" />
                </div>
            </form>
        </div>
    )
}
