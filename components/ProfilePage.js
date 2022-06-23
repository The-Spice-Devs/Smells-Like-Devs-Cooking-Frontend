import useResource from '../hooks/useResource';
import { useAuth } from '../contexts/auth'
import Link from "next/link"
import Header from './Header';
import Image from 'next/image';
import banner from '../assets/profileBanner.jpeg'

export default function Main() {

  const { resources } = useResource();
  const { user } = useAuth();

  if (!resources) return <h2>No Blog Posts Available, Try again later! :)</h2>

  return (
    <>
      <Header />
      {/* ternary: if no user, this page just returns a header, and goes to home route, because of logic on owner.js */}
      <div className="pt-2" style={{ position: 'relative', width: '100vw', height: '20vw' }}>
        <h1 className="text-7xl z-10 font-MajorMono text-center" style={{ position: 'absolute', top: '30%', left: '15%', opacity: '1', color: 'rgb(41,0,0)'}}>Smells Like Devs Cooking</h1>
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          alt="Profile Page Banner"
          style={{ opacity: '0.6', zIndex: '-1' }}
          priority
        />
      </div>

      {user && <>
        <div className="items-center justify-center gap-4 p-8 mx-auto my-7 text-center bg-orange-200 border-2 border-orange-400 rounded-lg text-md gap-x-8 w-4/5">
        <h1 className="text-amber-900 text-5xl pb-10 font-bold">Welcome to Your Profile {user.username}!</h1>
        <h2 className="text-amber-900 text-4xl pb-10 font-bold"> Here are the Recipes you have Created:</h2>
      </div>
        <div className="flex flex-wrap w-3/4 justify-center">
        {resources.map((blog) => {
          return (
            <div className='shadow-2xl w-80 shadow-amber-500 mx-7 my-10' style={{color: 'rgb(41,0,0)'}} key={blog.id}>
              <Link href={`/${blog.id}`}><a className="text-2xl w-250 flex justify-center font-bold underline pb-5" >{blog.title}</a></Link>
                <Image src={blog.recipe_images} alt={blog.title} width={320} height={320} />
            </div>
          )
        })}
      </div>
      <div className="items-center justify-center gap-4 p-8 mx-auto my-7 text-center bg-orange-200 border-2 border-orange-400 rounded-lg text-md gap-x-8 w-4/5">
        <h2 className="text-amber-900 text-4xl pb-10 font-bold"> Here are the Recipes you have Favorited:</h2>
      </div>
        <div className="flex flex-wrap w-3/4 justify-center">
        {resources.map((blog) => {
          return (
            <div className='shadow-2xl w-80 shadow-amber-500 mx-7 my-10' style={{color: 'rgb(41,0,0)'}} key={blog.id}>
              <Link href={`/${blog.id}`}><a className="text-2xl w-250 flex justify-center font-bold underline pb-5" >{blog.title}</a></Link>
                <Image src={blog.recipe_images} alt={blog.title} width={320} height={320} />
            </div>
          )
        })}
      </div>
      </>}
    </>
  )
}
