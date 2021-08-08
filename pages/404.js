import Link from 'next/Link';

const NotFound = () => {
    return (
        <div className="relative flex flex-col items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
        <div className="text-center space-y-14">
            <h1 className="text-4xl font-bold text-gray-500">Oooops.....</h1>
            <h2 className="text-3xl font-bold text-black">That page cannot be found!</h2>
            <p className="text-2xl font-bold text-black">Go back to the <Link href="/"><a className="text-blue-500" >Home Page</a></Link> </p>
        </div>
        </div>
    )
}

export default NotFound
