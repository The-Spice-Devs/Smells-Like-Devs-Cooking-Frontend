import { useAuth } from "../contexts/auth";

export default function CreateBlogPage({createResource}){
  const { user } = useAuth();
  console.log(user)
  function formHandler(event) {
    event.preventDefault();
    let newBlog = {
      title: event.target.title.value,
      recipe_ingredients: createIngredientList(event),
      recipe_directions: createDirectionList(event),
      recipe_images: event.target.recipe_image.value,
      difficulty: event.target.difficulty.value,
      recipe_intro: event.target.recipe_intro.value,
      prep_time: event.target.prep_time.value,
      cook_time: event.target.cook_time.value,
      meal_type: event.target.meal_type.value,
      created_at: new Date(),
      updated_at: new Date(),
      owner: user.id,
    };

    function createIngredientList(event){
      let ingredients = event.target.recipe_ingredients.value.split(",");
      for(let i = 0; i < ingredients.length; i++){
        ingredients[i] = ingredients[i].replace(/^\s*/, "").replace(/\s*$/, "");
      }
      return ingredients
    }
    function createDirectionList(event){
      let directions = event.target.recipe_directions.value.split(",");
      return directions
    }
    createResource(newBlog);
  }

  return(
    <form onSubmit={formHandler} method="post" className="justify-center w-full h-full max-w-screen-xl px-5 py-3 ml-auto mr-auto text-center border-4 border-solid rounded-lg top-56 bg-violet-200 border-violet-500 my-5">
    <div className="flex flex-col p-4">
      <h1 className="text-xl py-4 font-bold">Create A New Blog Post!</h1>
    <label htmlFor="title" className="py-4 font-bold text-2xl">Recipe Title</label>
    <input placeholder="Type Title Of Recipe!" type="text" id="title" name="title"></input>


    <label htmlFor="recipe_intro" className="py-4 font-bold text-2xl">About the Recipe</label>
    <input placeholder="Tell us about the recipe!" type="text" id="recipe_intro" name="recipe_intro" />

    <label htmlFor="recipe_image" className="py-4 font-bold text-2xl">Recipe Image</label>
    <input placeholder="input url for image"type="text" id="recipe_images" name="recipe_image" />

    <label htmlFor="recipe_ingredients" className="py-4 font-bold text-2xl">Recipe Ingredients</label>
    <input placeholder="input recipe ingredients with commas separating each ingredient (ex: potatoes, butter, milk)" id="recipe_ingredients" name="recipe_ingredients" />

    <label htmlFor="recipe_directions" className="py-4 font-bold text-2xl">Recipe Directions</label>
    <input placeholder="input recipe directions with commas separating each direction (ex:  boil potatoes, add butter to potatoes, add milk to potatoes, mix)" id="recipe_directions" name="recipe_directions" />

    <label htmlFor="meal_type" className="py-4 font-bold text-2xl">Meal Type</label>
    <input placeholder="Input Meal type (ex: Dinner, Breakfast, Snack etc)"type="text" id="meal_type" name="meal_type" />

    <label htmlFor="prep_time" className="py-4 font-bold text-2xl">Prep Time</label>
    <input placeholder= "Input a number of minutes" type="number" id="prep_time" name="prep_time" />

    <label htmlFor="cook_time" className="py-4 font-bold text-2xl">Cook Time</label>
    <input placeholder= "Input a number of minutes" type="number" id="cook_time" name="cook_time" />

    <label htmlFor="difficulty" className="py-4 font-bold text-2xl">Difficulty between 1 and 5</label>
    <input placeholder="Input a number between 1 and 5" type="number" id="difficulty" name="difficulty" />


    <button type="submit" className="py-4 mt-4 rounded p bg-violet-500 font-bold">Submit</button>
  </div>
</form >
  )
}