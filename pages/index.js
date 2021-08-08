import Head from 'next/head';
import TopMenu from '../components/TopMenu';
import Banner from '../components/Banner';
import Section from '../components/Section';
import SmallBanner from '../components/SmallBanner';
import Footer from '../components/Footer';
import ProductSection from "../components/ProductSection";
import OrderingSection from "../components/OrderingSection"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen flex-grow ">
      <Head>
        <title>Honey</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine"></link>
      </Head>

      
      <div className=" flex flex-col flex-grow ">
      <Banner/>
      <Section/>
      <SmallBanner/>
      <ProductSection/>
      <OrderingSection/>
      </div>
      
      

      
    </div>
  )
}
