import Header from "../components/Header";
import { useRouter } from "next/router";
import Image from "next/image";
import banner from "../assets/bannerThree.jpeg";

export default function LoginForm({ login }) {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    login(event.target.username.value, event.target.password.value);
    try {
      // mutate(); // mutate causes complete collection to be refetched
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <div
        className="w-full pt-2"
        style={{ position: "relative", height: "30vmax" }}
      >
        <h1
          className="text-center font-MajorMono"
          style={{
            fontSize: "4.5vmax",
            position: "relative",
            top: "30%",
            opacity: "1",
            color: "rgb(41,0,0)",
          }}
        >
          Smells Like Devs Cooking
        </h1>
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          alt="About the cooks Banner"
          style={{ opacity: "0.6", zIndex: "-1" }}
          priority
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-2/6 h-full px-5 py-3 mt-5 mb-10 ml-auto mr-auto border-2 border-orange-500 rounded-lg justify-left top-56"
        style={{ color: "rgb(41,0,0)" }}
      >
        <h1 className="py-4 text-3xl font-bold text-center"> Sign In Here!</h1>
        <fieldset autoComplete="off" className="flex flex-col p-4">
          <label htmlFor="username" className="py-4 text-2xl font-bold">
            USERNAME
          </label>
          <input
            className="w-1/2 px-2 border border-2 border-orange-200 bg-stone-50 placeholder-stone-400"
            id="username"
            placeholder="Username"
          />
          <label htmlFor="password" className="py-4 text-2xl font-bold">
            PASSWORD
          </label>
          <input
            className="w-1/2 px-2 border border-2 border-orange-200 bg-stone-50 placeholder-stone-400"
            placeholder="Password"
            type="password"
            id="password"
          />
          <button className="w-1/2 py-4 mt-4 font-bold bg-orange-900 rounded p text-orange-50">
            SIGN IN
          </button>
        </fieldset>
      </form>
    </>
  );
}
