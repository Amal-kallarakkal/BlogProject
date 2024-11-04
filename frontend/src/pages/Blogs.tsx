import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { Navbar } from "../components/Navbar"
import { useBlogs } from "../hooks";
export const Blogs = () => {
   const {loading, blogs} = useBlogs();
   if(loading) {
      return <div>
         <Navbar/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
      </div>
   }
  return <div >
   < Navbar/>  
   <div className="flex justify-center ">
    <div>
      {blogs.map(blog => <BlogCard 
        id = {blog.id}
        authorName={blog.author.name || "Anonymus"}
        title = {blog.title}
        content = {blog.content}
        publishedDate = {"13th Dec 2006"}/>)}
    </div>
    </div>
    </div>    
  
}

