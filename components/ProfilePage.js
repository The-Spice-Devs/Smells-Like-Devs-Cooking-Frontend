import useResource from '../hooks/useResource';
import { useAuth } from '../contexts/auth'
import Link from "next/link"
import Header from './Header';
import { useRouter } from 'next/router';

export default function Main({ username, logout }) {

  const { resources } = useResource();
  const { user } = useAuth();
  const router = useRouter();

  if (!resources) return <h2>No Blog Posts Available, Try again later! :)</h2>

  // if (!user){
  //   router.push('/');
  // }

  return (
    <>
    <Header />
    {/* ternary: if no user, this page just returns a header, and goes to home route, because of logic on owner.js */}

     {user &&   <>     
     <h1>Welcome to Your Profile {user.username}</h1>
    <h2> Here are your create recipes:</h2>
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
        <h2> These are the recipes you&apos;ve favorited:</h2>
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
      </>} 
    </>
  )
}
