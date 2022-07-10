import useResource from "../hooks/useResource";
import { useAuth } from "../contexts/auth";
import Link from "next/link";
import Header from "./Header";
import Image from "next/image";
import banner from "../assets/profileBanner.jpeg";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { GrTrash } from "react-icons/gr";

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

  function filterFavResourcesForCurrentUser() {
    // favResources looks like [{id: 17, owner: 1, blogPostID: 2}, ...]
    // filteredResources includes favResources made by current user
    if (favResources) {
      const filteredResources = favResources.filter(
        (resource) => user.id == resource.owner
      );

      // result is an array of blog ids for blogs whose owner is the current user
      const filteredResourcesBlogIds = filteredResources.map((blogResource) => {
        return blogResource.blogPostID;
      });

      const filteredBlogPosts = resources.filter((blog) => {
        return filteredResourcesBlogIds.includes(blog.id);
      });
      return filteredBlogPosts;
    }
  }
  function favorites() {
    if (filterFavResourcesForCurrentUser()) {
      return filterFavResourcesForCurrentUser().map((blog) => {
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
      });
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
          alt="Profile Page Banner"
          style={{ opacity: "0.6", zIndex: "-1" }}
          priority
        />
      </div>

      {user && (
        <>
          <div className="items-center justify-center w-4/5 gap-4 p-8 mx-auto text-center rounded-lg my-7 text-md gap-x-8">
            <h2 className="pb-10 text-4xl font-bold text-amber-900">
              {" "}
              {user.username}, here are the recipes you have created:
            </h2>
          </div>
          <div className="flex flex-wrap justify-center w-3/4">
            {resources.map((blog) => {
              if (user.id == blog.owner) {
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
                    <button
                      className="text-2xl pl-36"
                      id={blog.id}
                      onClick={deleteBlogPost}
                    >
                      <GrTrash />
                    </button>
                  </div>
                );
              }
            })}
          </div>

          <div className="items-center justify-center w-4/5 gap-4 p-8 mx-auto text-center rounded-lg my-7 text-md gap-x-8">
            <h2 className="pb-10 text-4xl font-bold text-amber-900">
              {" "}
              Your Favorites:
            </h2>
          </div>

          <div className="flex flex-wrap justify-center w-3/4">
            {favorites()}
          </div>
        </>
      )}
    </>
  );
}
