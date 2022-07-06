import useResource from "../hooks/useResource";
import Link from "next/link";
import Header from "../components/Header";
import Image from "next/image";
import banner from "../assets/mainBanner.jpeg";
import carrotGif from "../assets/carrot-gif.gif";
import { useAuth } from "../contexts/auth";
export default function Main() {
  const { resources } = useResource();
  const { user } = useAuth();
  console.log(user);
  if (!resources)
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
            style={{ opacity: "0.6", zIndex: "-1", width: "100%" }}
            priority
          />
        </div>
        <div
          style={{
            paddingBlock: "40px",
            position: "relative",
            textAlign: "center",
          }}
        >
          <p className="mb-4 animate-bounce">Loading Blog Posts</p>
          <Image
            src={carrotGif}
            alt="Loading Carrot"
            style={{ margin: "0 auto", textAlign: "center", width: "500px" }}
          />
        </div>
        <p></p>
      </>
    );
  return (
    <>
      <Header />
      <div
        className="w-full pt-2"
        style={{ position: "relative", height: "25vmax" }}
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
          alt="Home Page Banner"
          style={{ opacity: "0.5", zIndex: "-1" }}
          priority
        />
      </div>
      <div className="items-center justify-center w-4/5 gap-4 p-8 mx-auto text-center rounded-lg my-7 text-md gap-x-8">
        <p className="text-4xl" style={{ color: "rgb(100,0,0)" }}>
          Welcome! Below you&apos;ll find all of the recipes that have been
          created by our users! <br></br>Click on the Title to Navigate to the
          Full Recipe
        </p>
      </div>
      <div className="flex flex-wrap mb-20 justify-evenly">
        {resources.map((blog) => {
          return (
            <div
              className="px-1 pt-1 my-10 rounded-md shadow-2xl bg-stone-100 w-80 shadow-amber-900 mx-7"
              key={blog.id}
            >
              <Link href={`/${blog.id}`}>
                <a className="flex justify-center pb-5 text-2xl w-250 text-amber-900">
                  {blog.title}
                </a>
              </Link>
              <Image
                src={blog.recipe_images}
                alt={blog.title}
                width={320}
                height={320}
                className="rounded-md"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
