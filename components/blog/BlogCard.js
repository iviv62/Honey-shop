import Image from 'next/image';
import bees from '../../images/bees.jpeg';
import Link from 'next/link'
import Badge from './Badge'
import {useState} from 'react'

const BlogCard = ({image, image_alt , title, summary, slug, tags}) => {

    const prepareTags= (tags) =>{
      let tagArray = tags.split("|")
      return tagArray
    }
    const [tagArray, setTagArray] = useState(prepareTags(tags))
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
        <div className="flex flex-wrap justify-between">
        <h3  className="font-medium text-gray-600 text-lg my-2 uppercase">{title}</h3>
        
        </div>
        <div className="flex w-full justify-end flex-wrap space-x-2">
         {
           tagArray.map((title)=><Badge title={title}/>)
         }
          </div>
         
          <p  className="text-justify">{summary}</p>
          
          <div  className="mt-5">
            <Link href={`posts/${slug}`}  ><a className="hover:bg-yellow-600  py-2 px-3 font-semibold hover:text-white cursor-pointer bg-gray-400 text-gray-100">Прочетете повече</a></Link>
          </div>
        </div>
      </div>

    )
}

export default BlogCard
