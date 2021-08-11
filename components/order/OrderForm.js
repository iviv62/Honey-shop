const OrderForm = () => {
    return (
        <div className="leading-loose">
            <form className="max-w-3xl min-w-[400px] m-4 p-10 bg-white rounded ">
                <p className="text-gray-800 font-medium">Order information</p>
                <div className="">
                    <label className="block text-sm text-gray-00" for="cus_name">Name</label>
                    <input className="w-full mt-2 py-3 px-3 text-gray-700 bg-gray-200 rounded dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none "  name="cus_name" type="text" required="true" placeholder="Your Name" aria-label="Name" />
                </div>
                <div className="mt-2">
                    <label className="block text-sm text-gray-600" for="cus_email">Email</label>
                    <input className="w-full mt-2 py-3 px-3 text-gray-700 bg-gray-200 rounded dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none "  type="email" required="true" placeholder="Your Email" aria-label="Email" />
                </div>
                <div className="mt-2">
                    <label className=" block text-sm text-gray-600" for="cus_email">Address</label>
                    <input className="w-full mt-2 py-3 px-3 text-gray-700 bg-gray-200 rounded dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none " type="text" required="true" placeholder="Street" aria-label="Email" />
                </div>
                <div className="mt-2">
                    <label className="hidden text-sm block text-gray-600" for="cus_email">City</label>
                    <input className="w-full mt-2 py-3 px-3 text-gray-700 bg-gray-200 rounded dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none  "  type="text" required="" placeholder="City" aria-label="Email" />
                </div>
                <div className="mt-2">
                    <label className="hidden text-sm block text-gray-600" for="cus_email">Phone</label>
                    <input className="w-full mt-2 py-3 px-3 text-gray-700 bg-gray-200 rounded dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none "  type="text" required="true" placeholder="Phone" aria-label="Email" />
                </div>
                <div className="flex flex-col mt-2">
                <label for="text" className="hidden">Message</label>
                <textarea  placeholder="Message" className="w-full mt-2 py-3 px-3 text-gray-700 bg-gray-200 rounded dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none "/>
                </div>
                
                
                <div className="mt-4">
                <button type="button" className="h-14 px-6 py-2 transition-colors duration-500 font-semibold rounded-xl bg-yellow-500 hover:bg-black text-white">
                Submit
            </button>
                </div>
            </form>
        </div>
    )
}

export default OrderForm
