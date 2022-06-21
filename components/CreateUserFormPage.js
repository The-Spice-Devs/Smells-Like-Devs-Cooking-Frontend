import axios from 'axios'

import useResource from '../hooks/useResource';

export default function CreateUserForm() {

  const { createUser } = useResource();

  const registerURL = process.env.NEXT_PUBLIC_RESOURCE_REGISTER_URL;

  const handleCreateUserFormSubmit = async (event) => {

    // fields = ('username', 'password', 'password2',
    // 'email', 'first_name', 'last_name')

    event.preventDefault();
    let newUser = {
      username: event.target.username.value,
      password: event.target.password.value,
      password2: event.target.password2.value,
      email: event.target.email.value,
      first_name: event.target.firstName.value,
      last_name: event.target.lastName.value
    }
    // createUser(newUser);

    try {
      await axios.post(registerURL, newUser);
      // mutate(); // mutate causes complete collection to be refetched
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <form onSubmit={handleCreateUserFormSubmit} method="post" className="justify-center w-full h-full max-w-screen-xl px-5 py-3 ml-auto mr-auto text-center border-4 border-solid rounded-lg top-56 bg-violet-200 border-violet-500 my-5">
      <div className="flex flex-col p-4">
        <h1 className="text-xl py-4 font-bold">New User? Sign Up Here!</h1>
      <label htmlFor="username" className="py-4 font-bold text-2xl">Username:</label>
      <input type="text" id="username" name="username"></input>


      <label htmlFor="password" className="py-4 font-bold text-2xl">Password:</label>
      <input type="password" id="password" name="password" />

      <label htmlFor="password2" className="py-4 font-bold text-2xl">Confirm Password:</label>
      <input type="password" id="password2" name="password2" />

      <label htmlFor="email" className="py-4 font-bold text-2xl">Email:</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="firstName" className="py-4 font-bold text-2xl">First Name:</label>
      <input type="text" id="firstName" name="firstName" />

      <label htmlFor="lastName" className="py-4 font-bold text-2xl">Last Name:</label>
      <input type="text" id="lastName" name="lastName" />

      <br></br>

      <button type="submit" className="py-4 mt-4 rounded p bg-violet-500 font-bold">Submit</button>
    </div>
</form >
  )
}