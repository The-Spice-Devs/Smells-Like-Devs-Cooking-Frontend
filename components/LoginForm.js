import Header from '../components/Header';
import { useRouter } from 'next/router'
import Image from 'next/image';
import banner from '../assets/bannerThree.jpeg'

export default function LoginForm({ login }) {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    login(event.target.username.value, event.target.password.value);
    try {
      // mutate(); // mutate causes complete collection to be refetched
      router.push('/')
    }
      catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <Header />
    <div className="pt-2" style={{ position: 'relative', width: '100vw', height: '20vw' }}>
        <h1 className="text-7xl font-MajorMono text-center" style={{ position: 'absolute', top: '30%', left: '15%', opacity: '1', color: 'rgb(41,0,0)' }}>Smells Like Devs Cooking</h1>
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          alt="About the cooks Banner"
          style={{ opacity: '0.6', zIndex: '-1' }}
          priority
        />
      </div>
    <form
      onSubmit={handleSubmit}
      className="justify-left w-2/6 h-full px-5 py-3 ml-auto mr-auto rounded-lg top-56 mt-5 mb-10 border-2 border-orange-500" style={{color: 'rgb(41,0,0)'}}
    >
      <h1 className="text-3xl py-4 font-bold text-center"> Sign In Here!</h1>
      <fieldset autoComplete="off" className="flex flex-col p-4">
        <label htmlFor="username" className="py-4 font-bold text-2xl">
          USERNAME
        </label>
        <input className="bg-stone-50 w-1/2 border border-2 border-orange-200 placeholder-stone-400 px-2" id="username" placeholder="Username" />
        <label htmlFor="password" className="py-4 font-bold text-2xl">
          PASSWORD
        </label>
        <input
          className="bg-stone-50 w-1/2 border border-2 border-orange-200 placeholder-stone-400 px-2"
          placeholder="Password"
          type="password"
          id="password"
        />
        <button className="py-4 mt-4 rounded p bg-orange-900 text-orange-50 font-bold w-1/2">SIGN IN</button>
      </fieldset>
    </form>
    </>
  );
}
