import useResource from '../hooks/useResource';
import { useAuth } from '../contexts/auth'
import Link from "next/link"
import Header from './Header';
import Image from 'next/image';
import banner from '../assets/profileBanner.jpeg'
import React, { useState } from "react";

export default function Main() {

  const { resources, deleteResource } = useResource();
  const { user } = useAuth();
  if (!resources) return <h2>No Blog Posts Available, Try again later! :)</h2>
  function deleteBlogPost(event){
    event.preventDefault();
    
    deleteResource(event.currentTarget.id);
    // router.push("/owner")
  }
  return (
    <>
      <Header />
      {/* ternary: if no user, this page just returns a header, and goes to home route, because of logic on owner.js */}
      <div className="pt-2" style={{ position: 'relative', width: '100vw', height: '20vw' }}>
        <h1 className="text-7xl z-10 font-MajorMono text-center" style={{ position: 'absolute', top: '30%', left: '15%', opacity: '1', color: 'rgb(41,0,0)'}}>Smells Like Devs Cooking</h1>
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          alt="Profile Page Banner"
          style={{ opacity: '0.6', zIndex: '-1' }}
          priority
        />
      </div>

      {user && <>
        <div className="items-center justify-center gap-4 p-8 mx-auto my-7 text-center bg-orange-200 border-2 border-orange-400 rounded-lg text-md gap-x-8 w-4/5">
        <h1 className="text-amber-900 text-5xl pb-10 font-bold">Welcome to Your Profile {user.username}!</h1>
        <h2 className="text-amber-900 text-4xl pb-10 font-bold"> Here are the Recipes you have Created:</h2>
      </div>
        <div className="flex flex-wrap w-3/4 justify-center">
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
      <div className="items-center justify-center gap-4 p-8 mx-auto my-7 text-center bg-orange-200 border-2 border-orange-400 rounded-lg text-md gap-x-8 w-4/5">
        <h2 className="text-amber-900 text-4xl pb-10 font-bold"> Here are the Recipes you have Favorited:</h2>
      </div>
        <div className="flex flex-wrap w-3/4 justify-center">
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
