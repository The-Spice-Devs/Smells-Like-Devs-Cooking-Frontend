import { useRouter } from 'next/router'
import { useAuth } from '../contexts/auth'
import { useEffect } from 'react'
import useResource from '../hooks/useResource'

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

  function saveFavorite(event){
    event.preventDefault();
    let fave = {
      owner: user.id,
      blogPostID: resource.id,
    };
    createFavoriteResource(fave);
  }

  return (
    <>
      <h1 className="text-4xl py-4 font-bold border-2 border-violet-500 bg-violet-100 my-5 text-center">Recipe: {resource.title}</h1>
      <div className="border-2 my-10 border-violet-500 bg-violet-200 px-10">
        <p className="text-medium text-center my-5 text-2xl"> {resource.recipe_intro}</p>
        <p> Image {resource.recipe_images}</p>
        <div>
          <p className="italic">Prep Time: {resource.prep_time} : Cook Time: {resource.cook_time}</p>
        <p className="font-bold mt-5"> Recipe Ingredients</p> {resource.recipe_ingredients.map((amt, i) => (
          <ul className="list-disc" key={i}>
            <li key={i}>
              {amt}
            </li>
          </ul>
        ))}
        </div>
        <div className="border-1 border-violet-500">
        <p className="font-bold mt-5">Recipe Directions</p>
        {resource.recipe_directions.map((amt, i) => (
          <ol className="list-disc" key={i}>
            <li key={i}>
              {amt}
            </li>
          </ol>
        ))}
        </div>
        <div className="border-2 border-violet-500  mt-5 text-center w-1/2">
        <h3 className="font-bold">Recipe Finer Details</h3>
        <p className="italic">Eat this as a nice {resource.meal_type}!</p>
        <p className="italic">Ratings Coming Soon!</p>
        <p className="italic">Dietary Tags coming Soon!</p>
        </div>
        <p className="italic">Created By: {resource.owner} </p>
        <p className="italic">Date Submitted: {resource.created_at}</p>
        <p className="italic">Updated At: {resource.updated_at}</p>
        <button onClick={saveFavorite}>Favorite this Recipe! :)</button>
      </div>
      {/* <p>{JSON.stringify(resource)}</p> */}
    </>
  )
}