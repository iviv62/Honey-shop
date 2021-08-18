import Product from "../components/Product"
import Image from 'next/image';
import honeycomb from '../images/honeycomb.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1900 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1900, min: 1100 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1100, min: 800 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1
    }
  };



const ProductSection = ({products}) => {
    return (
        <div className="flex flex-col items-center  ">
            <div className="flex  items-center py-12 justify-center">
                
                    <Image
                    height={100}
                    objectFit="contain"
                    src={honeycomb}
                    alt="honeycomb" />
                
            <h3 className="text-4xl  font-bold">Продукти</h3>
            </div>

            <div className=" w-full">
            <Carousel
            swipeable={true}
            draggable={true}
            ssr={true}
            responsive={responsive}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            infinite
            itemClass={"item-carousel"}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            >
                {products.map((item)=>
                    <Product 
                    key={item.id} Id={item.id} Title={item.title} Price={item.price} 
                    Availability={item.in_stock==true?"Наличен":"Изчерпан"} 
                    Description={item.description} 
                    Img={item.product_images[0].image} 
                    Alt={item.product_images[0].alt} 
                    Slug={item.slug}
                    />
            )}
            </Carousel>
            </div>
            
        </div>
    )
}


export default ProductSection
