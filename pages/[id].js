import { useRouter } from 'next/router'
import { useAuth } from '../contexts/auth'
import { useEffect } from 'react'
import useResource from '../hooks/useResource'
import Header from '../components/Header';
import Image from 'next/image'
import Head from 'next/head';
import { GiCook } from "react-icons/gi";
import { MdUpdate } from "react-icons/md";
import { RiKnifeLine } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";
import { GiHotMeal } from "react-icons/gi";
import { BsFillSuitHeartFill  } from "react-icons/bs";

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
        <div style={{color: 'rgb(41,0,0)'}} className="items-center justify-center gap-4 p-8 mx-auto text-center rounded-lg text-md gap-x-8 w-11/12">
      <h1 className="pt-10 pb-5 text-5xl border-b-2 border-orange-900 ">{resource.title}</h1>
      <div className="flex">
        <p className="italic" style={{display: 'flex', justifyContent: 'space-between'}}><GiCook/>&nbsp;Created By: {resource.owner} </p>
        <p className="italic" style={{display: 'flex', justifyContent: 'space-between'}}>&nbsp;&nbsp;&nbsp;<MdUpdate/>&nbsp;Date Submitted: {resource.created_at}</p>
      </div>
      </div> 
      <div className="items-center justify-center gap-4 p-8 mx-auto text-center rounded-lg text-md gap-x-8 w-9/12">
        <p style={{color: 'rgb(41,0,0)'}} className="text-medium text-center mb-5 text-2xl"> {resource.recipe_intro}</p>
        <Image className="rounded-lg" src={resource.recipe_images} alt={resource.title} width={500} height={500} />
      </div>
        <div className='items-center justify-center gap-4 mx-auto rounded-lg text-md gap-x-8 w-3/5 border-2 border-orange-900 mb-10 bg-stone-200'>
          <div className="bg-orange-900 text-orange-50 items-center justify-center gap-4 p-8 mx-auto text-center text-md gap-x-8 w-full">
            <h3 className="py-3 text-3xl border-b-2 border-orange-50">{resource.title}</h3> 
          <div className="flex justify-between pt-3">
          <p className="italic" style={{display: 'flex', justifyContent: 'space-around'}}><RiKnifeLine/>&nbsp;Prep Time: {resource.prep_time}</p>
          <p className="italic" style={{display: 'flex', justifyContent: 'space-around'}}><ImSpoonKnife/>&nbsp;Cook Time: {resource.cook_time}</p>
          <p className="italic" style={{display: 'flex', justifyContent: 'space-around'}}><GiHotMeal/>&nbsp;This would make a great {resource.meal_type}!</p>
          </div>
          </div>
          <div className='flex justify-end'>
          {user && <><button className='border-2 border-orange-900 p-1 rounded-md bg-orange-700 text-orange-50 mt-5 mr-5' style={{display: 'flex', justifyContent: 'space-around'}} onClick={saveFavorite}><BsFillSuitHeartFill />&nbsp;Favorite this Recipe!&nbsp; <BsFillSuitHeartFill /></button></>}
          </div>
          <div className='pl-10 mb-5' style={{color: 'rgb(41,0,0)'}}>
          <p className="font-bold mt-5 "> Recipe Ingredients</p> {resource.recipe_ingredients.map((amt, i) => (
            <ul className="list-disc" key={i}>
              <li key={i}>
                {amt}
              </li>
            </ul>
          ))}
        
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
        </div>
      </div>
      </div>

    </>
  )
}