# Software Requirements

## Vision

- What is the vision of this product?
  - A blog style app that allows the creator to publish recipes they have cooked. Recipes will be organized by meals and there will be an option for meals that take 20 minutes or less. Visitors will be able to favorite recipes.

- What pain point does this project solve?
  - This project provides recipes for busy people who don't have time to browse the web. We will have a feature for users to be notified when a 20 minute recipe is posted.

- Why should we care about your product?
  - This is a neat alternative to usual food blogs, we will have a focus on a range of accessible recipes for the users to choose from.

## Scope

- IN : What will your product do?
  - This web application will provide recipes to the users in a organized and clean way
  - There will be options to sort recipes by meal type or time frame
  - User can star recipes they like or want to cook
  - Each recipe will provide high-level dietary information ex: (gluten-free, vegan, veg, dairy, soy)

- OUT : What will your product not do?
  - It will not be a social media site
  - You will not be able to edit the recipe or convert measurements, or automatically increase serving size

### MVP

- 5 recipes created by the super user
- Home page where you can click on a thumbnail to navigate to one of those 5 recipes
- Nicely styled blog (Slight stretch of light/dark)
- Full functionality of create/update/delete for Superuser
- Authenticated API
- Fully deployed(heroku, vercel and elephantSQL DB)
Thomas and his sous-chefs page (about the devs)

### Stretch Goals

- Dark/Light Mode
- Authentication of non-super users
- Comments on Blog post
- create a blog post for non-super users
- user profile page/blogs made by that user
- ability for users to "favorite" blog pages they didn't create
- Dietary tags (vegan, gluten free)
- Sectioning off by categories (cuisine type)
- Ratings (1-5 stars)
- Ability to email recipe to yourself
- pick ingredients to find recipes that include those ingredients
- nutritional info for each recipe (servings, calories etc)

## Functional Requirements

- Superuser can create blog posts, and delete them if needed
- Superuser can sort meals by category
- Superuser can add their own photo or an photo will autofill

### Data Flow

- User Experience:
  - Open webpage
  - Homepage loads
  - In header there is a Login option
  - Header changes to Profile/Username
    - From this Page they can update or delete their post
    - OR create a new blog post

## Non-Functional Requirements

- Usability:
  - This is an essential feature of this app. We are focusing on providing a very strong user interface. We will be focusing on aesthetics of the webpage, interactivity, and an overall simple and usable application

- Testability:
  - We plan to practice TDD to help our model making and overall build of our backend. This is an important step towards ensuring a productive team and smooth deployment. 