import CreateABlog from '../components/CreateABlog';
import useResource from '../hooks/useResource';


export default function Create() { 
	const { createResource } = useResource();

	return ( 
		<>
		<CreateABlog createResource={createResource} />
		</>
		) 
	}