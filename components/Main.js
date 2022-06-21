import useResource from '../hooks/useResource';
import {useAuth} from '../contexts/auth'
// import Image from 'next/image';
import Link from "next/link"

export default function Main( {username} ) {

  const { resources, createResource, deleteResource } = useResource();
  

  if (!resources) return <h2>No Blog Posts Available, Try again later! :)</h2>



  return (
    <div>
      {resources.map((blog) => {
        return (
          <div className="border-2 border-violet-500 bg-violet-300 my-10 mx-3 pl-3"key={blog.id}>
            <Link href={`/${blog.id}`}><a>{blog.title}</a></Link>
            <p>Author: {blog.owner} Date Created: {blog.created_at}</p>
            <p>Meal Type: {blog.meal_type}</p>
            <p>Level of Difficulty: {blog.difficulty}</p>
            <p>src={blog.recipe_images}</p>
            <p>Ratings Coming Soon!</p>
            <p>Dietary Tags Coming Soon!</p>
          </div>
        )
      })}
    </div>
  )
}