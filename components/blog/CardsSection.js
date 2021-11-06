import BlogCard from "./BlogCard"
import {blogItemsVar,blogSearchBool} from '../../constants/cache';
import {useEffect} from 'react';
import { useReactiveVar } from '@apollo/client';

const CardsSection = ({data}) => {
    let SearchBool = useReactiveVar(blogSearchBool);
    let BlogItems = useReactiveVar(blogItemsVar);

    useEffect(() => {
        blogItemsVar(data)
        console.log(blogSearchBool())
    }, []);

    return (
        <div className="flex items-center justify-center container  mx-auto my-auto  flex-wrap">
        {SearchBool===false ? ( data.map(post=><BlogCard
            key = {post.id}
            image={post.image}
            image_alt={post.image_alt} 
            key={post.id} 
            title={post.title} 
            summary={post.summary} 
            slug  ={post.slug}
            tags ={post.tags}
            />
            )):(
            BlogItems.map(post=><BlogCard
                key = {post.id}
                image={post.image}
                image_alt={post.image_alt} 
                key={post.id} 
                title={post.title} 
                summary={post.summary} 
                slug  ={post.slug}
                tags ={post.tags}
                />
                )
            )
        
        
        }
            
            
        </div>
    )
}

export default CardsSection
