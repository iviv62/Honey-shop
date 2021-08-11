import Head from 'next/head';
import TopMenu from '../components/TopMenu';
import Banner from '../components/Banner';
import Section from '../components/Section';
import SmallBanner from '../components/SmallBanner';
import Footer from '../components/Footer';
import ProductSection from "../components/ProductSection";
import OrderingSection from "../components/OrderingSection"
import {API_DOMAIN} from '../constants/Api'

export default function Home({products}) {
  return (
    <div className="flex flex-col min-h-screen flex-grow ">
      <Head>
        <title>Honey</title>
        <link rel="icon" href="/favicon.ico" />
       
      </Head>

      
      <div className=" flex flex-col flex-grow ">
      <Banner/>
      <Section/>
      <SmallBanner/>
      <ProductSection products={products}/>
      <OrderingSection/>
      </div>
  
    </div>
  )
}


export const getStaticProps = async () =>{

  let res  = await fetch(`${API_DOMAIN}api/products/`)
  const data = await res.json();
 
  return{
    props:{
      products:data.results
    }
}
}