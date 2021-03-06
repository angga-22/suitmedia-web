import Head from 'next/head';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="logo-favicon.png" />
            </Head>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )
}
