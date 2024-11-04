import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName : string;
  title : string;
  content: string;
  publishedDate: string;
  id: number;
}
export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate

}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="border-b mb-2  p-3 items-start w-screen max-w-screen-md cursor-pointer">
      <div className="flex flex-row items-center">
        <div >
          <Avatar name = {authorName} />
        </div>
        <div className="pl-2 text-sm font-light text-slate-700 flex justify-center flex-col">
          {authorName}
        </div>
        <div className="mx-0.5"><Circle/></div>
        <div className="pl-1 font-light text-sm text-slate-400">
          {publishedDate}
        </div>        
      </div>
      <div className="text-3xl font-bold mt-1">
        {title}
      </div>
      <div className="text-slate-500 mt-1 font-semibold">
        {content.slice(0, 100) + "..."}
      </div>
      <div className="text-slate-400 text-xs mt-3 mb-1">      
        {`${Math.ceil(content.length/300)} min read` }
      </div>
    </div>
    </Link>
  )
}

export function Avatar({name, size= "small"} : {name: string, size?: string}) {
  return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "w-5 h-5" : "w-8 h-8"}`}>
    <span className={`text-gray-600 dark:text-gray-300 ${size === "small" ? "text-xs " : "text-medium"}`}>{name[0]}</span>
  </div>
}

export function Circle () {
  return <div className="h-1 w-1 border-2 ml-1 border-slate-500 rounded-full">

  </div>
}
