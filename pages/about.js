import Footer from '../components/Footer';
import TopMenu from '../components/TopMenu';
import Head from 'next/head';
import AboutSection from '../components/about/AboutSection'
const about = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
            <title>About</title>
            <link rel="icon" href="/favicon.ico" />
           
        </Head>
        <AboutSection/>
       
        </div>
    )
}

export default about
