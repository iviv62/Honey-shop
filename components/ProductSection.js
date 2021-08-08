import Product from "../components/Product"
import Image from 'next/image';
import honeycomb from '../images/honeycomb.png';
const products =[
    {
        Title:"Honey",
        Description:"lormdas dsakl dsakkp  dsap pd sa dppsad sp sa dskalldsklasdk  dsapldsal",
        Price: 7,
        Availability:"In stock"
    },
    {
        Title:"Honey",
        Description:"lormdas dsakl dsakkp  dsap pd sa dppsad sp sa dskalldsklasdk  dsapldsal",
        Price: 7,
        Availability:"In stock"
    },
    {
        Title:"Honey",
        Description:"lormdas dsakl dsakkp  dsap pd sa dppsad sp sa dskalldsklasdk  dsapldsal",
        Price: 7,
        Availability:"In stock"
    },
    {
        Title:"Honey",
        Description:"lormdas dsakl dsakkp  dsap pd sa dppsad sp sa dskalldsklasdk  dsapldsal",
        Price: 7,
        Availability:"In stock"
    },
    {
        Title:"Honey",
        Description:"lormdas dsakl dsakkp  dsap pd sa dppsad sp sa dskalldsklasdk  dsapldsal",
        Price: 7,
        Availability:"In stock"
    },
    {
        Title:"Honey",
        Description:"lormdas dsakl dsakkp  dsap pd sa dppsad sp sa dskalldsklasdk  dsapldsal",
        Price: 7,
        Availability:"In stock"
    },


]

const ProductSection = () => {
    return (
        <div className="flex flex-col items-center  ">
            <div className="flex  items-center py-12 justify-center">
                
                    <Image
                    height={100}
                    objectFit="contain"
                    src={honeycomb}
                    alt="honeycomb" />
                
            <h3 className="text-4xl  font-bold">Products</h3>
            </div>

            <div className="flex flex-wrap pb-20 justify-center  max-w-[1500px]">
                {products.map((item)=>
                    <Product Title={item.Title} Price={item.Price} Availability={item.Availability} Description={item.Description}/>
            )}
            </div>
        </div>
    )
}


export default ProductSection
