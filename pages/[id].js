import { useRouter } from 'next/router'
import { useAuth } from '../contexts/auth'
import { useEffect } from 'react'
import useResource from '../hooks/useResource'

export default function BlogDetail() {
  const router = useRouter();
  const { user } = useAuth();
  const { resources, error } = useResource();
  useEffect(() => {
      if (error || !user) {
          router.push('/')
      }
  })
  if (!resources) return <h2>Loading...</h2>
  const { id } = router.query;
  const resource = resources.find(item => item.id == id)
  return (
     <>
    <h1>Recipe: {resource.title}</h1>
    <p>Created By: {resource.owner} Date Submitted: {resource.created_at}</p>
    <p>Ratings Coming Soon!</p>
    <p>Dietary Tags coming Soon!</p>
    <p>Prep Time: {resource.prep_time}</p>
    <p>Cook Time: {resource.cook_time}</p>
    <p>src={resource.recipe_images}</p>
    <p>About This Recipe: {resource.recipe_intro}</p>
    <p>Instructions: {resource.recipe_content}</p>
    <p>Updated At: {resource.updated_at}</p>
    {/* <p>{JSON.stringify(resource)}</p> */}
    </>
  )
}