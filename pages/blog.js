
import CardsSection from '../components/blog/CardsSection';
import Head from 'next/head';
const blog = ({posts}) => {
    return (
        <div className="flex flex-col min-h-screen">

            <Head>
            <title>Blog</title>
            <link rel="icon" href="/favicon.ico" />
           </Head>


          
           <h1 className="text-center text-5xl py-12 font-bold">Our Blog</h1>
            <CardsSection data={posts}/>
           

          

        </div>
    )
}

export default blog

export const getStaticProps = async () =>{

    let res  = await fetch('http://localhost:8000/api/posts/')
    const data = await res.json();
   
    return{
      props:{
        posts:data.results
      }
  }
  }