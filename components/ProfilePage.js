import useResource from "../hooks/useResource";
import { useAuth } from "../contexts/auth";
import Link from "next/link";
import Header from "./Header";
import Image from "next/image";
import banner from "../assets/profileBanner.jpeg";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Main() {
  const router = useRouter();
  const { resources, favResources, deleteResource } = useResource();
  const { user } = useAuth();
  if (!resources) return <h2>No Blog Posts Available, Try again later! :)</h2>;
  function deleteBlogPost(event) {
    event.preventDefault();

    deleteResource(event.currentTarget.id);
    // router.push("/owner")
  }

  function filterFavResourcesForCurrentUser(){ 
    // favResources looks like [{id: 17, owner: 1, blogPostID: 2}, ...] 
    // filteredResources includes favResources made by current user
    const filteredResources = favResources.filter(resource => user.id == resource.owner)
 
    // result is an array of blog ids for blogs whose owner is the current user 
    const filteredResourcesBlogIds = filteredResources.map(blogResource => {
      return blogResource.blogPostID; 
    })

    const filteredBlogPosts = resources.filter((blog) =>{
      return filteredResourcesBlogIds.includes(blog.id)
    })

    return filteredBlogPosts
  }
  

  return (
    <>
      <Header />
      {/* ternary: if no user, this page just returns a header, and goes to home route, because of logic on owner.js */}
      <div
        className="pt-2"
        style={{ position: "relative", width: "100vw", height: "20vw" }}
      >
        <h1
          className="z-10 text-center text-7xl font-MajorMono"
          style={{
            position: "absolute",
            top: "30%",
            left: "15%",
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
          alt="Profile Page Banner"
          style={{ opacity: "0.6", zIndex: "-1" }}
          priority
        />
      </div>

      {user && (
        <>
          <div className="items-center justify-center w-4/5 gap-4 p-8 mx-auto text-center bg-orange-200 border-2 border-orange-400 rounded-lg my-7 text-md gap-x-8">
            <h1 className="pb-10 text-5xl font-bold text-amber-900">
              Welcome to Your Profile {user.username}!
            </h1>
            <h2 className="pb-10 text-4xl font-bold text-amber-900">
              {" "}
              Here are the Recipes you have Created:
            </h2>
          </div>
          <div className="flex flex-wrap justify-center w-3/4">
            {resources.map((blog) => {
              if (user.id == blog.owner) {
                return (
                  <div
                    className="w-1/4 pl-3 mx-3 my-10 text-center border-2 border-violet-500 bg-violet-300"
                    key={blog.id}
                  >
                    <Link href={`/${blog.id}`}>
                      <a className="text-2xl font-bold underline">
                        {blog.title}
                      </a>
                    </Link>
                    <p className="italic">
                      Author: {blog.owner} Date Created: {blog.created_at}
                    </p>
                    <p className="py-1">Meal Type: {blog.meal_type}</p>
                    <p className="py-1">
                      Level of Difficulty: {blog.difficulty} out of 5
                    </p>
                    <p className="py-1"> Image {blog.recipe_images}</p>
                    <p className="py-1 italic">Ratings Coming Soon!</p>
                    <p className="py-1 italic">Dietary Tags Coming Soon!</p>
                    <button id={blog.id} onClick={deleteBlogPost}>
                      DELETE
                    </button>
                  </div>
                );
              }
            })}
          </div>

          <div className="items-center justify-center w-4/5 gap-4 p-8 mx-auto text-center bg-orange-200 border-2 border-orange-400 rounded-lg my-7 text-md gap-x-8">
            <h2 className="pb-10 text-4xl font-bold text-amber-900">
              {" "}
              Here are the Recipes you have Favorited:
            </h2>
          </div>


          <div className="flex flex-wrap justify-center w-3/4">

            
            {
              filterFavResourcesForCurrentUser().map((blog) => {
                return (
                  <div
                    className="w-1/4 pl-3 mx-3 my-10 text-center border-2 border-violet-500 bg-violet-300"
                    key={blog.id}
                  >
                    <Link href={`/${blog.id}`}>
                      <a className="text-2xl font-bold underline">
                        {blog.title}
                      </a>
                    </Link>

                    <p className="italic">
                      Author: {blog.owner} Date Created: {blog.created_at}
                    </p>
                    <p className="py-1">Meal Type: {blog.meal_type}</p>
                    <p className="py-1">
                      Level of Difficulty: {blog.difficulty} out of 5
                    </p>
                    <p className="py-1"> Image {blog.recipe_images}</p>
                    <p className="py-1 italic">Ratings Coming Soon!</p>
                    <p className="py-1 italic">Dietary Tags Coming Soon!</p>
                    <button id={blog.id} onClick={deleteBlogPost}>
                      DELETE
                    </button>
                  </div>
                );
              })

            }
            
          </div>
        </>
      )}
    </>
  );
}
