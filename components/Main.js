import useResource from '../hooks/useResource';
import { useAuth } from '../contexts/auth'
import Link from "next/link"
import Header from "../components/Header";
import Image from 'next/image'
import banner from '../assets/mainBanner.jpeg'

export default function Main({ logout }) {
  const { user } = useAuth();
  const { resources } = useResource();


  if (!resources) return <h2>No Blog Posts Available, Try again later! :)</h2>



  return (
    <>
      <Header />
      <div className="pt-2" style={{ position: 'relative', width: '100vw', height: '25vw' }}>
      <h1 className="text-8xl z-10 font-Rampart" style={{ position: 'absolute', top: '30%',left:'15%', opacity: '1', color: 'rgb(41,0,0)'}}>Smells Like Devs Cooking</h1>
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          alt="Yhe SPice Devs"
          style={{opacity:'0.7'}}
        />
      </div>
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