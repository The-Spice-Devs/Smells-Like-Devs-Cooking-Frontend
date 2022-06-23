import { useRouter } from 'next/router'
import { useAuth } from '../contexts/auth'
import { useEffect } from 'react'
import useResource from '../hooks/useResource'
import Header from '../components/Header';
import Image from 'next/image'
import Head from 'next/head';
import {FcLike} from 'react-icons/fc';
import { GiCook } from "react-icons/gi";
import { MdUpdate } from "react-icons/md";
import { RiKnifeLine } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";

export default function BlogDetail() {
  const router = useRouter();
  const { user } = useAuth();
  const { resources, createFavoriteResource, error } = useResource();
  useEffect(() => {
    if (error) {
      // || !user
      router.push('/')
    }
  })
  if (!resources) return <h2>Loading...</h2>
  const { id } = router.query;
  const resource = resources.find(item => item.id == id)

  function saveFavorite(event) {
    event.preventDefault();
    let fave = {
      owner: user.id,
      blogPostID: resource.id,
    };
    createFavoriteResource(fave);
  }


  return (
    <>
      <Head>
        <title>{resource.title}</title>
      </Head>
      <Header />
      <div>
        <div className="items-center justify-center gap-4 p-8 mx-auto text-center rounded-lg text-md gap-x-8 w-11/12">
      <h1 className="pt-10 pb-5 text-5xl border-b-2 border-orange-900 ">{resource.title}</h1>
      <div className="flex">
        <p className="italic" style={{display: 'flex', justifyContent: 'space-between'}}><GiCook/>&nbsp;Created By: {resource.owner} </p>
        <p className="italic" style={{display: 'flex', justifyContent: 'space-between'}}>&nbsp;&nbsp;&nbsp;<MdUpdate/>&nbsp;Date Submitted: {resource.created_at}</p>
      </div>
      </div> 
      <div className="items-center justify-center gap-4 p-8 mx-auto text-center rounded-lg text-md gap-x-8 w-9/12">
        <p className="text-medium text-center mb-5 text-2xl"> {resource.recipe_intro}</p>
        <Image className="rounded-lg" src={resource.recipe_images} alt={resource.title} width={500} height={500} />
      </div>
        <div>
          <div className="w-40">
          <p className="italic" style={{display: 'flex', justifyContent: 'space-evenly'}}><RiKnifeLine/>Prep Time: {resource.prep_time}</p>
          <p className="italic" style={{display: 'flex', justifyContent: 'space-evenly'}}><ImSpoonKnife/>Cook Time: {resource.cook_time}</p>
          <p className="italic">This would make a great {resource.meal_type}!</p>
          </div>
          <p className="font-bold mt-5"> Recipe Ingredients</p> {resource.recipe_ingredients.map((amt, i) => (
            <ul className="list-disc" key={i}>
              <li key={i}>
                {amt}
              </li>
            </ul>
          ))}
        </div>
        <div className="border-1 border-orange-500">
          <p className="font-bold mt-5">Recipe Directions</p>
          {resource.recipe_directions.map((amt, i) => (
            <ol className="list-disc" key={i}>
              <li key={i}>
                {amt}
              </li>
            </ol>
          ))}
        </div>
        {user && <><button onClick={saveFavorite}>Favorite this Recipe! <FcLike/></button></>}
      </div>
    </>
  )
}