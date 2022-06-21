import useResource from '../hooks/useResource';
import { useAuth } from '../contexts/auth'
import Link from "next/link"

export default function Main({ username, logout }) {

  const { resources } = useResource();


  if (!resources) return <h2>No Blog Posts Available, Try again later! :)</h2>



  return (
    <>
      <Link href="/">
        <a onClick={logout} className="px-3 py-1 text-gray-100 bg-violet-600 rounded-lg">Sign Out</a>
      </Link>
      <div className="flex">
        {resources.map((blog) => {
          return (
            <div className="border-2 border-violet-500 bg-violet-300 my-10 mx-3 pl-3 w-1/4 text-center" key={blog.id}>
              <Link href={`/${blog.id}`}><a className="text-2xl font-bold underline">{blog.title}</a></Link>
              <p className="italic">Author: {blog.owner} Date Created: {blog.created_at}</p>
              <p className="py-1">Meal Type: {blog.meal_type}</p>
              <p className="py-1">Level of Difficulty: {blog.difficulty} out of 5</p>
              <p className="py-1"> Image {blog.recipe_images}</p>
              <p className="py-1 italic">Ratings Coming Soon!</p>
              <p className="py-1 italic">Dietary Tags Coming Soon!</p>
            </div>
          )
        })}
      </div>
    </>
  )
}