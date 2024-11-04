import { Navbar } from '../components/Navbar'
import { useBlog } from '../hooks'
import { useParams } from 'react-router-dom'
import { Fullblog } from '../components/Fullblog'
import { FullBlogskeleton } from '../components/FullBlogskeleton'

export const Blog = () => {
    const {id}  = useParams();
    const {loading, blog} = useBlog( {
      id: id || ""
    });
    if(loading) {
      return <div>
        <Navbar/>
        <FullBlogskeleton/>
      </div>
    }
  return (
    <div>
      <Navbar/>
      <Fullblog blog={blog}/>
    </div>
  )
}
