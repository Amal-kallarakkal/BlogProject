import {Circle } from "./BlogCard"
export const BlogSkeleton = () => {
  return (
    <div>
        <div role="status" className="animate-pulse flex justify-center">
            <div className="border-b mb-2  p-3 items-start w-screen max-w-screen-md cursor-pointer">
                <div className="flex flex-row items-center">
                    <div className="flex flex-row justify-center ">
                    <div className="mb-4 relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-300 w-5 h-5">
                        <span className='text-gray-600 dark:text-gray-300 text-medium '></span>
                    </div>
                    <div className="pl-2 text-sm font-light text-slate-700 flex justify-center flex-col">
                        <div className="h-2.5 bg-gray-200 rounded-full w-20 mb-4"></div>
                    </div>
                    <div className="mx-0.5"><Circle/></div>
                    <div className="pl-1 font-light text-sm text-slate-400 mt-1">
                        <div className="h-2.5 bg-gray-200 rounded-full w-24 mb-4"></div>
                    </div>   
                    </div>
                </div>
                <div className="text-3xl font-bold mt-1">
                    <div className="h-7 bg-gray-300 rounded-full w-48 mb-4"></div>
                </div>
                <div className="text-slate-500 mt-1 font-semibold">
                    <div className="h-2.5 bg-gray-200 rounded-full mb-2.5"></div>
                    {/* <div className="h-2.5 bg-gray-200 rounded-full mb-2.5"></div> */}
                </div>
                <div className="text-slate-400 text-xs mt-3 mb-1">      
                    <div className="h-2 bg-gray-200 rounded-full w-12 mb-4"></div>
                </div>
            </div>
       
        </div>      
    </div>
  )
}

