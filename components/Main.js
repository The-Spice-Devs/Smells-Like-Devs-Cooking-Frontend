import useResource from '../hooks/useResource';
import { useAuth } from '../contexts/auth'
import Link from "next/link"

export default function Main({ username, logout }) {
  const { user, login } = useAuth();
  
  const { resources } = useResource();

  console.log("MAIN PAGE USER", user)
  if (!resources) return <h2>No Blog Posts Available, Try again later! :)</h2>



  return (
    <>



<header className="flex">
    <div className="w-full border-2 border-violet-900 bg-violet-300">
    <h1 className="text-4xl text-center"> Welcome to Smells Like Devs Cooking</h1>
      <nav className="flex items-center justify-center gap-10 pt-5">
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About the Cooks</a></Link>
        <Link href="/create"><a>Create a Blog Post</a></Link>
        <Link href="/owner"><a>Profile</a></Link>
          <Link href="/LoginPage"><a>Login</a></Link>       
        <Link href="/SignupPage"><a>Sign up</a></Link>
      </nav>
    </div>
  </header>
  <footer className="w-full border-2 border-violet-900 bg-violet-300">
    <p >&copy;2022</p>
    <a href="https://github.com/The-Spice-Devs">The Spice Devs GitHub</a>
  </footer>
  
    
      <Link href="/">
        <a onClick={logout} className="px-3 py-1 text-gray-100 rounded-lg bg-violet-600">Sign Out</a>
      </Link>
      <div className="flex">
        {resources.map((blog) => {
          return (
            <div className="w-1/4 pl-3 mx-3 my-10 text-center border-2 border-violet-500 bg-violet-300" key={blog.id}>
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