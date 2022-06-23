import useResource from '../hooks/useResource';
import Link from "next/link"
import Header from "../components/Header";
import Image from 'next/image'
import banner from '../assets/mainBanner.jpeg'
import { useAuth } from '../contexts/auth';
export default function Main() {
  const { resources } = useResource();
  const { user } = useAuth();
console.log(user)
  if (!resources) return <h2>No Blog Posts Available, Try again later! :)</h2>
  return (
    <>
      <Header />
      <div className="pt-2" style={{ position: 'relative', width: '100vw', height: '20vw' }}>
      <h1 className="z-10 text-7xl font-MajorMono" style={{ position: 'absolute', top: '30%',left:'15%', opacity: '1', color: 'rgb(41,0,0)'}}>Smells Like Devs Cooking</h1>
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          alt="Home Page Banner"
          style={{opacity:'0.6', zIndex:'-1'}}
          priority
        />
      </div>
      <div className="flex flex-wrap justify-center w-3/4">
        {resources.map((blog) => {
          return (
            <div className='my-10 shadow-2xl w-80 shadow-amber-500 mx-7' style={{color: 'rgb(41,0,0)'}} key={blog.id}>
              <Link href={`/${blog.id}`}><a className="flex justify-center pb-5 text-2xl font-bold underline w-250" >{blog.title}</a></Link>
                <Image src={blog.recipe_images} alt={blog.title} width={320} height={320} />
            </div>
          )
        })}
      </div>
    </>
  )
}