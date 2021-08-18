import Link from 'next/link'
import Image from 'next/image'
const Product = ({Title, Description, Price, Availability, Img, Alt,Slug}) => {
    return (
        <div>
        <div className=" ">
        <div className="flex  min-w-sm max-w-md bg-white shadow-lg rounded-lg overflow-hidden">

          <div className="relative w-[150px]">
          <Image
                    layout="fill"
                    objectFit="cover"
                    src={Img}
                    alt={Alt} />
          </div> 
          <div className="w-2/3 p-4">
            <div className="text-gray-900 font-bold text-2xl">{Title}</div>
            <p className="mt-2 text-gray-600 text-sm">{Description}</p>
            <div className="flex item-center mt-2">
              {Availability}
            </div>
            <div className="flex item-center justify-between mt-3">
              <div className="text-gray-700 font-bold text-xl">${Price}</div>
              <button className="px-3 py-2 bg-gray-800 hover:bg-yellow-500 transition-colors duration-300 text-white text-xs font-bold uppercase rounded"><Link href={`/products/${Slug}`}><a>Научи повече</a></Link></button>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Product
