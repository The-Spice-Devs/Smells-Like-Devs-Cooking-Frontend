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
  if (!resources) return (
    <>
    <Header />
    <div className="pt-2" style={{ position: 'relative', width: '100vw', height: '20vw' }}>
      <h1 className="text-7xl z-10 font-MajorMono" style={{ position: 'absolute', top: '30%',left:'15%', opacity: '1', color: 'rgb(41,0,0)'}}>Smells Like Devs Cooking</h1>
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          alt="Home Page Banner"
          style={{opacity:'0.5', zIndex:'-1'}}
          priority
        />
      </div>
    <h2>No Blog Posts Available, Try again later! :)</h2>
    </>
    )
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
          style={{opacity:'0.5', zIndex:'-1'}}
          priority
        />
      </div>
        <div className="items-center justify-center gap-4 p-8 mx-auto my-7 text-center rounded-lg text-md gap-x-8 w-4/5">
          <p className="text-4xl" style={{color: 'rgb(100,0,0)'}}>Welcome! Below you&apos;ll find all of the recipes that have been created by our users! <br></br>Click on the Title to Navigate to the Full Recipe</p>
        </div>
      <div className="flex flex-wrap justify-evenly mb-20">
        {resources.map((blog) => {
          return (
            <div className='shadow-2xl rounded-md pt-1 bg-stone-100 w-80 shadow-amber-900 mx-7 my-10 px-1' key={blog.id}>
              <Link href={`/${blog.id}`}><a className="text-2xl w-250 flex justify-center text-amber-900 pb-5">{blog.title}</a></Link>
                <Image src={blog.recipe_images} alt={blog.title} width={320} height={320} className="rounded-md"/>
            </div>
          )
        })}
      </div>
    </>
  )
}