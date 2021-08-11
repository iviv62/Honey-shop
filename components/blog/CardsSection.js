import BlogCard from "./BlogCard"
const CardsSection = ({data}) => {
    return (
        <div className="flex items-center justify-center container  mx-auto my-auto  flex-wrap">
        {data.map(post=><BlogCard
            image={post.image}
            image_alt={post.image_alt} 
            key={post.id} 
            title={post.title} 
            summary={post.summary} 
            slug={post.slug}
            />)}
            
            
        </div>
    )
}

export default CardsSection
