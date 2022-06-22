import useResource from '../hooks/useResource';
import { useAuth } from '../contexts/auth'
import Link from "next/link"
import Header from "../components/Header";
import Image from 'next/image'

export default function Main({ logout }) {
  const { user } = useAuth();
  const { resources } = useResource();


  if (!resources) return <h2>No Blog Posts Available, Try again later! :)</h2>



  return (
    <>
      <Header />
      {user && <><p className="px-3 py-1 text-gray-800 bg-violet-100 rounded-lg">{user.username}</p></>}
      <div className="flex flex-wrap">
        {resources.map((blog) => {
          return (
            <div className=' my-10 mx-3 shadow-lg w-80 shadow-blue-500/50' key={blog.id}>
              <Link href={`/${blog.id}`}><a className="text-2xl w-250 flex justify-center font-bold underline">{blog.title}</a></Link>
            

                <Image src={blog.recipe_images} alt={blog.title} width={320} height={320} />

       
            </div>
          )
        })}
      </div>
    </>
  )
}