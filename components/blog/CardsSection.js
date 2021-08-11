import BlogCard from "./BlogCard"
const CardsSection = ({data}) => {
    return (
        <div className="flex items-center justify-center container  mx-auto my-auto  flex-wrap">
        {data.map(post=><BlogCard title={post.title} summary={post.summary} slug={post.slug}/>)}
            
            
        </div>
    )
}

export default CardsSection
