import useResource from '../hooks/useResource';
import { useAuth } from '../contexts/auth'
import Link from "next/link"
import Header from "../components/Header";

export default function Main({ logout }) {
  const { user } = useAuth();
  const { resources } = useResource();


  if (!resources) return <h2>No Blog Posts Available, Try again later! :)</h2>



  return (
    <>
    {/* <header className="flex">
        <div className="w-full border-2 border-violet-900 bg-violet-300">
          <h1 className="text-4xl text-center"> Welcome to Smells Like Devs Cooking</h1>
          <nav className="flex items-center gap-10 pt-5 justify-center">
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About the Cooks</a></Link>
            {user && <><Link href="/create"><a>Create a Blog Post</a></Link></>}
            {user && <><Link href="/owner"><a>{user.username}&apos;s Profile</a></Link></>}
            {!user && <><Link href="/loginpage"><a>Login</a></Link></>}
            {user && <><Link href="/"> <a onClick={logout}>Sign Out</a></Link></>}
            {!user && <><Link href="/signuppage"><a>Sign up</a></Link></>}
          </nav>
        </div>
      </header> */}
      <Header />  
      {user && <><p className="px-3 py-1 text-gray-800 bg-violet-100 rounded-lg">{user.username}</p></>}
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