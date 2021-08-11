import Head from 'next/head';
import Image from 'next/image';
import bees from '../../images/bees.jpeg';
import React from 'react';
import ImageCarousel from "../../components/ImageCarousel";
import OrderForm from '../../components/order/OrderForm';


import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ProductSection from '../../components/ProductSection';

Modal.setAppElement('#__next');


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const images = [
    {
        "id": 1,
        "url": "https://placekitten.com/1024/768?image=1",
       
    },
    {
        "id": 2,
        "url": "https://placekitten.com/1024/768?image=2",
       
    },
    {
        "id": 3,
        "url": "https://placekitten.com/1000/1768?image=3",
       
    },
    {
        "id": 4,
        "url": "https://placekitten.com/1024/768?image=4",
        "title": "Lorem Ipsum",
        "description":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
    },
    {
        "id": 5,
        "url": "https://placekitten.com/1024/768?image=5",
        "title": "Lorem Ipsum",
        "description":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
    },
]



const product = ({product}) => {
    console.log(product)

    

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        console.log("opneden")
      }
    
      function closeModal() {
        setIsOpen(false);
      }

    return (
        <div className=" px-10 flex  min-h-screen py-10 flex  flex-wrap justify-center ">

            <Head>
                <title>{product.meta_title}</title>
                <meta name="description" content={product.meta_description}/>
                <link rel="icon" href="/favicon.ico" />
                <meta charset="UTF-8"></meta>
                
            </Head>

                <div className="flex flex-col  w-1/2 min-w-[400px] ">
                    <ImageCarousel images={product.product_images} />
                </div>
    

            <div className="flex flex-col w-1/2   ">
                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{product.title}</h2>


                <div className="flex items-center space-x-4 my-4">
                    <div>
                        <div className="rounded-lg bg-gray-100 flex py-2 px-3 items-center">
                            <span className="font-bold text-yellow-600 text-3xl mr-1 mt-1">{product.price}</span>
                            <span className="text-yellow-500">лв.</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-green-500 text-xl font-semibold">Get free delivery</p>
                        <p className="text-gray-400 text-sm">by ordering goods for more than 50lv</p>
                    </div>
                </div>

                <p className="text-gray-500">{product.description}</p>

                <div className="flex py-4 space-x-4">


                    <button type="button" onClick={openModal} className="h-14 px-6 py-2 transition-colors duration-500 font-semibold rounded-xl bg-yellow-500 hover:bg-black text-white">
                      Order Now
                    </button>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                    <OrderForm/>
                    </Modal>

                </div>
            </div>

        </div>
     
  
    )
}

export default product

export const getStaticPaths = async ()=>{
    let res  = await fetch('http://localhost:8000/api/products/')
    const data = await res.json();
    
   
    const paths = data.results.map((product)=>{
        return{
            params:{
                id: product.id,
                slug:product.slug,
                
            }
        }
    })

    return{
        paths,
        fallback:false,
    }
}

export const getStaticProps = async (context) => {
    const slug = context.params.slug
    console.log(context)
    const res = await fetch('http://localhost:8000/api/products/'+slug)
    const data = await res.json()
    console.log(data)
    return{
        props:{product:data}
    }
}