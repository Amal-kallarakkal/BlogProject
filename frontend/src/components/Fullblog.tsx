import { Blog } from '../hooks'
import { Avatar } from './BlogCard'
export const Fullblog = ({blog} : {blog: Blog}) => {
  return (
    <div className='flex justify-center'>
    <div className='grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12'>
      <div className='col-span-8'>
        <div className='text-5xl font-extrabold'>
            {blog.title}
            
        </div>
        <div className='text-slate-500 pt-2'>Posted on March 2nd 2010</div>
        <div>
            {blog.content}
        </div>
      </div>
      <div className='col-span-4'>
        <div className='text-slate-600 px-4'> Author </div> 
        <div className='flex pt-2'>
            <div className='flex flex-col justify-center p-4'> <Avatar size = "big" name = {blog.author.name || "Anonymous"} /></div>
            <div>
                <div className='text-xl font-bold mx-2'>
                    {blog.author.name || "Anonymous"}
                <div>
                <div className='pt-2 text-base font-normal text-slate-500'>
                    catchphrase
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

