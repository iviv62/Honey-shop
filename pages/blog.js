
import CardsSection from '../components/blog/CardsSection';
import Head from 'next/head';
const blog = () => {
    return (
        <div className="flex flex-col min-h-screen">

            <Head>
            <title>Blog</title>
            <link rel="icon" href="/favicon.ico" />
           </Head>


          
           <h1 className="text-center text-5xl py-12 font-bold">Our Blog</h1>
            <CardsSection/>
           

          

        </div>
    )
}

export default blog
