import CreateABlog from '../components/CreateABlog';
import useResource from '../hooks/useResource';
import Header from '../components/Header';

export default function Create() { 
	const { createResource } = useResource();

	return ( 
		<>
		<Header />
		<CreateABlog createResource={createResource} />
		</>
		) 
	}