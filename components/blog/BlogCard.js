import Image from 'next/image';
import bees from '../../images/bees.jpeg';
import Link from 'next/link'

const BlogCard = ({image, image_alt , title, summary, slug}) => {
    return (


        <div  className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100  bg-white my-12 mx-8 w-[400px]">
        <div className="relative flex h-72 ">
        <Image
        layout="fill"
        objectFit="cover"
        src={image}
        alt={image_alt} />
        </div>
        <div  className="p-4">
          <h3  className="font-medium text-gray-600 text-lg my-2 uppercase">{title}</h3>
          <p  className="text-justify">{summary}</p>
          <div  className="mt-5">
            <Link href={`posts/${slug}`}  ><a className="hover:bg-gray-700  py-2 px-3 font-semibold hover:text-white cursor-pointer bg-gray-400 text-gray-100">Read More</a></Link>
          </div>
        </div>
      </div>

    )
}

export default BlogCard
