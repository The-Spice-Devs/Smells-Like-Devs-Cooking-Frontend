import useResource from '../hooks/useResource';
import { useAuth } from '../contexts/auth'
import Link from "next/link"
import Header from './Header';
// import { useRouter } from 'next/router';
import Image from 'next/image';
import banner from '../assets/profileBanner.jpeg'
import React, { useState } from "react";

export default function Main({ username, logout }) {

  const { resources, deleteResource } = useResource();
  const { user } = useAuth();
  // const router = useRouter();
  // const [id, setID] = useState("");

  if (!resources) return <h2>No Blog Posts Available, Try again later! :)</h2>

  // if (!user){
  //   router.push('/');
  // }
  
  function deleteBlogPost(event){
    event.preventDefault();
    
    deleteResource(event.currentTarget.id);
    // router.push("/owner")
  }
  return (
    <>
    <Header />
    {/* ternary: if no user, this page just returns a header, and goes to home route, because of logic on owner.js */}
    <div className="pt-2" style={{ position: 'relative', width: '100vw', height: '25vw' }}>
      <h1 className="z-10 text-center text-8xl font-Rampart" style={{ position: 'absolute', top: '30%',left:'15%', opacity: '1'}}>Smells Like Devs Cooking</h1>
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          alt="Yhe SPice Devs"
          style={{opacity:'0.7'}}
        />
        </div>

     {user &&   <>     
     <h1>Welcome to Your Profile {user.username}</h1>
    <h2> Here are your create recipes:</h2>
      <div className="flex">
        {resources.map((blog) => {
          if (user.id == blog.owner)
          return (
            <div className="w-1/4 pl-3 mx-3 my-10 text-center border-2 border-violet-500 bg-violet-300" key={blog.id}>
              <Link href={`/${blog.id}`}><a className="text-2xl font-bold underline">{blog.title}</a></Link>
              <p className="italic">Author: {blog.owner} Date Created: {blog.created_at}</p>
              <p className="py-1">Meal Type: {blog.meal_type}</p>
              <p className="py-1">Level of Difficulty: {blog.difficulty} out of 5</p>
              <p className="py-1"> Image {blog.recipe_images}</p>
              <p className="py-1 italic">Ratings Coming Soon!</p>
              <p className="py-1 italic">Dietary Tags Coming Soon!</p>
              <button id={blog.id} onClick={deleteBlogPost}>DELETE</button>
            </div>
          )
        })}
        </div>
        <h2> These are the recipes you&apos;ve favorited:</h2>
        <div className="flex">
        {resources.map((blog) => {
          if (user.id == blog.owner)
          return (
            <div className="w-1/4 pl-3 mx-3 my-10 text-center border-2 border-violet-500 bg-violet-300" key={blog.id}>
              <Link href={`/${blog.id}`}><a className="text-2xl font-bold underline">{blog.title}</a></Link>
              <p className="italic">Author: {blog.owner} Date Created: {blog.created_at}</p>
              <p className="py-1">Meal Type: {blog.meal_type}</p>
              <p className="py-1">Level of Difficulty: {blog.difficulty} out of 5</p>
              <p className="py-1"> Image {blog.recipe_images}</p>
              <p className="py-1 italic">Ratings Coming Soon!</p>
              <p className="py-1 italic">Dietary Tags Coming Soon!</p>
            </div>
          )
        })}
      </div>
      </>} 
    </>
  )
}
