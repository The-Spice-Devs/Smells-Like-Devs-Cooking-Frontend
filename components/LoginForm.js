import { useAuth } from '../contexts/auth'

export default function LoginForm() {
  const { user, login } = useAuth();
  
  async function handleSubmit(event) {
    event.preventDefault();
    login(event.target.username.value, event.target.password.value);
    
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="justify-center w-full h-full max-w-screen-xl px-5 py-3 my-5 ml-auto mr-auto text-center border-4 border-solid rounded-lg top-56 bg-violet-200 border-violet-500"
    >
      <h1 className="py-4 text-3xl font-bold"> Returning User? Sign In Here!</h1>
      <fieldset autoComplete="off" className="flex flex-col p-4">
        <label htmlFor="username" className="py-4 text-2xl font-bold">
          USER NAME
        </label>
        <input className="placeholder-gray-300 border border-2 border-violet-200" id="username" placeholder="User Name" />
        <label htmlFor="password" className="py-4 text-2xl font-bold">
          PASSWORD
        </label>
        <input
          className="placeholder-gray-300 border border-2 border-violet-200"
          placeholder="password"
          type="password"
          id="password"
        />
        <button className="py-4 mt-4 font-bold rounded p bg-violet-500">SIGN IN</button>
      </fieldset>
    </form>
  );
}
