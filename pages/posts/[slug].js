import Head from 'next/head';
import Image from 'next/image';
import bees from '../../images/bees.jpeg';
import {API_DOMAIN} from '../../constants/Api'
import ReactHtmlParser from 'react-html-parser';


const post = ({post}) => {
    return (
        <div className="flex flex-col min-h-screen">
        <Head>
            <title>{post.meta_title}</title>
            <meta name="description" content={post.meta_description}/>
            <link rel="icon" href="/favicon.ico" />
            <meta charset="UTF-8"></meta>
           </Head>
        
    <main class="mt-10  flex-grow">
      <div class="mx-auto w-full relative flex h-96" >
      <Image
      layout='fill'
      objectFit="contain"
      src={post.image}
      alt={post.image_alt} />
      </div>

      <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
      { ReactHtmlParser(post.content) }

      </div>
    </main>
            
        </div>
    )
}

export default post


export const getStaticPaths = async ()=>{
    let res  = await fetch(`${API_DOMAIN}api/posts/`)
    const data = await res.json();
    
   
    const paths = data.results.map((post)=>{
        return{
            params:{
                id: post.id,
                slug:post.slug,
                
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
    const res = await fetch(`${API_DOMAIN}api/posts/`+slug)
    const data = await res.json()
    return{
        props:{post:data}
    }
}