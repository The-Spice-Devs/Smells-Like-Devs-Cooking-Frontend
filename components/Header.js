import { useAuth } from '../contexts/auth';
import Link from 'next/link';
import { FaHamburger, FaPepperHot, FaCookieBite, FaCookie, FaCarrot, FaPizzaSlice } from "react-icons/fa";
import { MdExitToApp} from "react-icons/md";

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <>
      <header className="flex">
        <div className="w-full border-2 border-violet-900 bg-violet-300">
          <h1 className="text-4xl text-center"> Welcome to Smells Like Devs Cooking</h1>
          <nav className="flex items-center gap-10 pt-5 justify-center">
            <Link href="/"><a><FaHamburger/>Home</a></Link>
            <Link href="/about"><a><FaPepperHot/>About the Cooks</a></Link>
            {user && <><Link href="/create"><a><FaCarrot/>Create a Blog Post</a></Link></>}
            {user && <><Link href="/owner"><a><FaPizzaSlice/>{user.username}&apos;s Profile</a></Link></>}
            {!user && <><Link href="/loginpage"><a><FaCookieBite/>Login</a></Link></>}
            {user && <><Link href="/"><a onClick={logout}><MdExitToApp/>Logout</a></Link></>}
            {!user && <><Link href="/signuppage"><a><FaCookie/>Sign up</a></Link></>}
          </nav>
        </div>
      </header>
    </>
  )
}