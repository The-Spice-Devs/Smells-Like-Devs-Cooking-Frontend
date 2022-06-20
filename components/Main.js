import useResource from '../hooks/useResource'

export default function Main() {

    const { resources, createResource, deleteResource } = useResource();

    if (!resources) return <h2>No Blog Posts Available, Try again later! :)</h2>

    return (
        <div>
          {resources.map((blog, i) => {
            <h3>{blog.title}</h3>
          })}
        </div>
    )
}