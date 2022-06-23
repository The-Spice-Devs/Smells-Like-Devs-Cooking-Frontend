import useResource from '../hooks/useResource';
import Link from "next/link"
import Header from "../components/Header";
import Image from 'next/image'
import banner from '../assets/mainBanner.jpeg'

export default function Main() {
  const { resources } = useResource();

  if (!resources) return <h2>No Blog Posts Available, Try again later! :)</h2>

  return (
    <>
      <Header />
      <div className="pt-2" style={{ position: 'relative', width: '100vw', height: '20vw' }}>
      <h1 className="text-7xl z-10 font-MajorMono" style={{ position: 'absolute', top: '30%',left:'15%', opacity: '1', color: 'rgb(41,0,0)'}}>Smells Like Devs Cooking</h1>
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          alt="Home Page Banner"
          style={{opacity:'0.6', zIndex:'-1'}}
          priority
        />
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
    </>
  )
}