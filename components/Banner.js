import Image from 'next/image';


const Banner = () => {
    return (
        <div className="bg-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24 justify-center ">
		
		<div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
			<p className="uppercase tracking-loose">Some text</p>
			<h1 className="font-bold text-3xl my-4">The best honey around</h1>
			<p className="leading-normal mb-4">dasda das dsa dsa das dasdsadsda s dsa dsa d sadsadsa dsa d sadsa sad asd sad as dasd sa dsad asd sadd.</p>
			<button className="bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent">Learn more</button>
		</div>
		
		<div className="w-full lg:w-1/2 lg:py-6 text-center flex justify-center  ">
			
			<img src="/honey-svg.svg" width={400} alt="Honey pot" />
		</div>
	</div>
    </div>
    )
}

export default Banner
