import CreateABlog from '../components/CreateABlog';
import useResource from '../hooks/useResource';
import Header from '../components/Header';
import Head from 'next/head';

export default function Create() {
	const { createResource } = useResource();

	return (
		<>
			<Head>
				<title>Create a Blog!</title>
			</Head>
			<Header />
			<CreateABlog createResource={createResource} />
		</>
	)
}