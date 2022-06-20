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
    <h1>Stand detail</h1>
    <p>{JSON.stringify(resource)}</p>
    </>
  )
}