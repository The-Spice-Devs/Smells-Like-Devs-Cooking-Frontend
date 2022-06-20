import '../styles/globals.css'
import Link from 'next/link';
import { AuthProvider } from '../contexts/auth';

function MyApp({ Component, pageProps }) {
  return (
  <>
  <header className="flex">
    <div className="w-full border-2 border-violet-900 bg-violet-300">
    <h1 className="text-4xl text-center"> Welcome to Smells Like Devs Cooking</h1>
      <nav className="flex items-center gap-10 pt-5 justify-center">
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About the Cooks</a></Link>
        <Link href="/create"><a>Create a Blog Post</a></Link>
        <Link href="/owner"><a>Profile</a></Link>
      </nav>
    </div>
  </header>
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
  </>
  )
}

export default MyApp
