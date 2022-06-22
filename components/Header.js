import { useAuth } from '../contexts/auth';
import Link from 'next/link';

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <>
      <header className="flex">
        <div className="w-full border-2 border-violet-900 bg-violet-300">
          <h1 className="text-4xl text-center"> Welcome to Smells Like Devs Cooking</h1>
          <nav className="flex items-center gap-10 pt-5 justify-center">
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About the Cooks</a></Link>
            {user && <><Link href="/create"><a>Create a Blog Post</a></Link></>}
            {user && <><Link href="/owner"><a>{user.username}&apos;s Profile</a></Link></>}
            {!user && <><Link href="/loginpage"><a>Login</a></Link></>}
            {user && <><Link href="/"><a onClick={logout}>Logout</a></Link></>}
            {!user && <><Link href="/signuppage"><a>Sign up</a></Link></>}
          </nav>
        </div>
      </header>
    </>
  )
}