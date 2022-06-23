import Header from '../components/Header';
import { useRouter } from 'next/router'

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
    <form
      onSubmit={handleSubmit}
      className="justify-center w-full h-full max-w-screen-xl px-5 py-3 ml-auto mr-auto text-center border-4 border-solid rounded-lg top-56 bg-orange-200 border-orange-500 my-20"
    >
      <h1 className="text-3xl py-4 font-bold"> Sign In Here!</h1>
      <fieldset autoComplete="off" className="flex flex-col p-4">
        <label htmlFor="username" className="py-4 font-bold text-2xl">
          USER NAME
        </label>
        <input className="border border-2 border-orange-200 placeholder-gray-300" id="username" placeholder="User Name" />
        <label htmlFor="password" className="py-4 font-bold text-2xl">
          PASSWORD
        </label>
        <input
          className="border border-2 border-orange-200 placeholder-gray-300"
          placeholder="password"
          type="password"
          id="password"
        />
        <button className="py-4 mt-4 rounded p bg-orange-500 font-bold">SIGN IN</button>
      </fieldset>
    </form>
    </>
  );
}
