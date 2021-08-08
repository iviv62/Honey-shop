import Link from 'next/Link'
const Product = ({Title, Description, Price, Availability}) => {
    return (
        <div>
        <div className="py-6 m-4">
        <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-1/3 bg-cover" style={{backgroundImage: `url('background.png')`}}>
          </div> 
          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-2xl">{Title}</h1>
            <p className="mt-2 text-gray-600 text-sm">{Description}</p>
            <div className="flex item-center mt-2">
              {Availability}
            </div>
            <div className="flex item-center justify-between mt-3">
              <h1 className="text-gray-700 font-bold text-xl">${Price}</h1>
              <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"><Link href="/products/product"><a>Order</a></Link></button>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Product
