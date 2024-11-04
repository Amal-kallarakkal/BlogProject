import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
export const Navbar = () => {
  return (
    <div className="flex justify-between flex-row px-10 py-5 border-b">
      <Link to = {'/blogs'}>
      <div className="text-2xl font-semibold">
        Medium
      </div>
      </Link>
      <div>
      <Link to = {'/publish'}>
      <button type="button" className ="mr-5 text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 
        focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Publish</button>
        <Avatar name="Amal Kallarakkal" size = "big" />
      </Link>
      </div>
    </div>
  )
}
