import { useAuth } from '../contexts/auth';
import Link from 'next/link';
import { FaHamburger, FaPepperHot, FaCookieBite, FaCookie, FaCarrot, FaPizzaSlice } from "react-icons/fa";
import { MdExitToApp} from "react-icons/md";

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <>
      <header className="relative flex">
        <div className="fixed top-0 z-20 w-full bg-amber-700 opacity-80">
          <nav className="flex justify-around py-2 text-orange-50" style={{fontSize: "1.6vmax"}}>
            <Link href="/"><a style={{display: 'flex', justifyContent: 'space-between'}}><FaHamburger />&nbsp;&nbsp;Home</a></Link>
            <Link href="/about"><a style={{display: 'flex', justifyContent: 'space-between'}}><FaPepperHot/>&nbsp;&nbsp;About the Cooks</a></Link>
            {user && <><Link href="/create"><a style={{display: 'flex', justifyContent: 'space-between'}}><FaCarrot/>&nbsp;&nbsp;Create a Blog Post</a></Link></>}
            {user && <><Link href="/owner"><a style={{display: 'flex', justifyContent: 'space-between'}}><FaPizzaSlice/>&nbsp;&nbsp;{user.username}&apos;s Profile</a></Link></>}
            {!user && <><Link href="/loginpage"><a style={{display: 'flex', justifyContent: 'space-between'}}><FaCookieBite/>&nbsp;&nbsp;Login</a></Link></>}
            {user && <><Link href="/"><a onClick={logout} style={{display: 'flex', justifyContent: 'space-between'}}><MdExitToApp/>&nbsp;&nbsp;Logout</a></Link></>}
            {!user && <><Link href="/signuppage"><a style={{display: 'flex', justifyContent: 'space-between'}}><FaCookie/>&nbsp;&nbsp;Sign up</a></Link></>}
          </nav>
        </div>
      </header>
    </>
  )
}