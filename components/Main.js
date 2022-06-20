import useResource from '../hooks/useResource';
import {useAuth} from '../contexts/auth'
// import Image from 'next/image';

export default function Main( {username} ) {

  const { resources, createResource, deleteResource } = useResource();
  

  if (!resources) return <h2>No Blog Posts Available, Try again later! :)</h2>



  return (
    <div>
      {resources.map((blog) => {
        return (
          <div className="border-2 border-violet-500 bg-violet-300 my-10 mx-3 pl-3"key={blog.id}>
            <h3>{blog.title}</h3>
            <p>Author: {blog.owner} Date Created: {blog.created_at}</p>
            <p>Meal Type: {blog.meal_type}</p>
            <p>Level of Difficulty: {blog.difficulty}</p>
            <p>Prep Time: {blog.prep_time}</p>
            <p>Cook Time: {blog.cook_time}</p>
            <p>src={blog.recipe_images}</p>
            <p>Instructions: {blog.recipe_intro}</p>
            <p>Description: {blog.recipe_content}</p>
            <p>Updated At: {blog.updated_at}</p>
            <p>Ratings Coming Soon!</p>
            <p>Dietary Tags Coming Soon!</p>
          </div>
        )
      })}
    </div>
  )
}