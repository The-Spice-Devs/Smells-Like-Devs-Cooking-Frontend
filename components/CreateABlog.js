import { useAuth } from "../contexts/auth";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from 'next/image'
import banner from '../assets/mainBanner.jpeg'


export default function CreateBlogPage({ createResource }) {
  const cloudinaryURL = process.env.NEXT_PUBLIC_RESOURCE_CLOUD_URL;
  const { user } = useAuth();
  const router = useRouter();
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  console.log("URL: ", url);

  console.log("USER: ", user);



  async function formHandler(event) {
    event.preventDefault();

    // Get image data from form, add Cloudinary data
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "recipe_images");
    data.append("cloud_name", "dkgm8e6lz");

    axios.post(cloudinaryURL, data)
      .then((res) => res.data)
      .then((data) => {
        setUrl(data.url);
      })

      .catch((err) => console.log(err));

    let newBlog = {
      title: event.target.title.value,
      recipe_ingredients: createIngredientList(event),
      recipe_directions: createDirectionList(event),
      recipe_images: url,
      difficulty: event.target.difficulty.value,
      recipe_intro: event.target.recipe_intro.value,
      prep_time: event.target.prep_time.value,
      cook_time: event.target.cook_time.value,
      meal_type: event.target.meal_type.value,
      created_at: new Date(),
      updated_at: new Date(),
      owner: user.id,
    };

    function createIngredientList(event) {
      let ingredients = event.target.recipe_ingredients.value.split(",");
      for (let i = 0; i < ingredients.length; i++) {
        ingredients[i] = ingredients[i].replace(/^\s*/, "").replace(/\s*$/, "");
      }
      return ingredients;
    }
    function createDirectionList(event) {
      let directions = event.target.recipe_directions.value.split(",");
      return directions;
    }

    if (url.length > 5) {
      createResource(newBlog);
      router.push("/")
    }
  }


  return (
    <>
    <div className="pt-2" style={{ position: 'relative', width: '100vw', height: '20vw' }}>
    <h1 className="text-7xl z-10 font-MajorMono" style={{ position: 'absolute', top: '30%',left:'15%', opacity: '1', color: 'rgb(41,0,0)'}}>Smells Like Devs Cooking</h1>
      <Image
        src={banner}
        layout="fill"
        objectFit="cover"
        alt="Home Page Banner"
        style={{opacity:'0.6', zIndex:'-1'}}
        priority
      />
    </div>
    <form
      onSubmit={formHandler}
      method="post"
      className="justify-left w-2/6 h-full px-5 py-3 ml-auto mr-auto rounded-lg top-56 mt-5 mb-10 border-2 border-orange-500" style={{color: 'rgb(41,0,0)'}}
    >
      <div className="flex flex-col p-4">
        <h1 className="py-4 text-3xl font-bold text-center">Create A New Blog Post!</h1>
        <label htmlFor="title" className="py-4 text-2xl font-bold">
          Recipe Title
        </label>
        <input
          placeholder="Type Title Of Recipe!"
          type="text"
          id="title"
          name="title"
          required
          className="bg-stone-50 h border border-2 border-orange-200 placeholder-stone-400 px-2"
        ></input>

        <label htmlFor="recipe_intro" className="py-4 text-2xl font-bold">
          About the Recipe
        </label>
        <input
          placeholder="Tell us about the recipe!"
          type="text"
          id="recipe_intro"
          name="recipe_intro"
          required className="bg-stone-50 border border-2 border-orange-200 placeholder-stone-400 px-2"
        />


        <label htmlFor="recipe_images" className="py-4 text-2xl font-bold">
          Recipe Image
        </label>
        {/* <input placeholder="input url for image"type="text" id="recipe_images" name="recipe_images" /> */}
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required className="bg-stone-50 h border border-2 border-orange-200 placeholder-stone-400 px-2"
        ></input>

        <label htmlFor="recipe_ingredients" className="py-4 text-2xl font-bold">
          Recipe Ingredients<br></br><p className=" font-normal text-sm italic">Separate each ingredient with a comma</p>
        </label>
        <input
          placeholder="(ex: potatoes, butter, milk)"
          id="recipe_ingredients"
          name="recipe_ingredients"
          required className="bg-stone-50 h border border-2 border-orange-200 placeholder-stone-400 px-2"
        />

        <label htmlFor="recipe_directions" className="py-4 text-2xl font-bold">
          Recipe Directions<br></br><p className=" font-normal text-sm italic">Separate each direction with a comma</p>
        </label>
        <input
          placeholder="(ex:  boil potatoes, add butter to potatoes, add milk to potatoes, mix)"
          id="recipe_directions"
          name="recipe_directions"
          required className="bg-stone-50 h border border-2 border-orange-200 placeholder-stone-400 px-2"
        />

        <label htmlFor="meal_type" className="py-4 text-2xl font-bold">
          Meal Type
        </label>
        <select
          type="text"
          id="meal_type"
          name="meal_type"
          required className="bg-stone-50 h border border-2 border-orange-200 placeholder-stone-400 px-2"
        >
          <option value="" selected disabled hidden>Select an Option</option>
          <option value="breakfast">Breakfast</option>
          <option value="secondBreakfast">Second Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="snack">Snack</option>
          <option value="dinner">Dinner</option>
          <option value="dessert">Dessert</option>
        </select>

        <label htmlFor="prep_time" className="py-4 text-2xl font-bold">
          Prep Time
        </label>
        <input
          placeholder="Input a number of minutes"
          type="number"
          id="prep_time"
          name="prep_time"
          required className="bg-stone-50 h border border-2 border-orange-200 placeholder-stone-400 px-2"
        />

        <label htmlFor="cook_time" className="py-4 text-2xl font-bold">
          Cook Time
        </label>
        <input
          placeholder="Input a number of minutes"
          type="number"
          id="cook_time"
          name="cook_time"
          required className="bg-stone-50 h border border-2 border-orange-200 placeholder-stone-400 px-2"
        />

        <label htmlFor="difficulty" className="py-4 text-2xl font-bold">
          Difficulty between 1 and 5
        </label>
        <select
          type="number"
          id="difficulty"
          name="difficulty"
          required className="bg-stone-50 h border border-2 border-orange-200 placeholder-stone-400 px-2" >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button
          type="submit"
          className="py-4 mt-4 rounded p bg-orange-900 text-orange-50 font-bold w-1/2"
        >
          Submit
        </button>
      </div>
    </form>
    </>
  );
}
