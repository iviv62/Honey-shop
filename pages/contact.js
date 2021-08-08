import ContactForm from '../components/contacts/ContactForm';
import Footer from '../components/Footer';
import TopMenu from '../components/TopMenu';
import Head from 'next/head';

const contact = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <Head>
            <title>Contacts</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <ContactForm/>
        </div>
    )
}

export default contact
