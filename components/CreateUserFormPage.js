import axios from 'axios'
import useResource from '../hooks/useResource';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function CreateUserForm() {

  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const[error, setError] = useState();

  console.log("Password1= ", password)
  

  const { createUser } = useResource();
  const router = useRouter();

  const registerURL = process.env.NEXT_PUBLIC_RESOURCE_REGISTER_URL;

  // async function matchPasswords (event) {
  //   if (password != event.target.value){
  //     console.log(event.target.value)
  //   setError('passwords must match')}
  // }

  const handleCreateUserFormSubmit = async (event) => {

    // fields = ('username', 'password', 'password2',
    // 'email', 'first_name', 'last_name')

    if (password != event.target.password2.value){
      console.log("Password2= ", event.target.password2.value)
    alert('passwords must match')
  }

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
          router.push('/loginpage')
    }
      catch (error) {
      console.log(error);
      alert(error.response.request.response);
    }
  }

  return (
    <form onSubmit={handleCreateUserFormSubmit} method="post" className="justify-center w-full h-full max-w-screen-xl px-5 py-3 ml-auto mr-auto text-center border-4 border-solid rounded-lg top-56 bg-violet-200 border-violet-500 my-5">
      <div className="flex flex-col p-4">
        <h1 className="text-xl py-4 font-bold">New User? Sign Up Here!</h1>
      <label htmlFor="username" className="py-4 font-bold text-2xl" pattern="[a-z]{0-9}" title="user name should only contain letters or numbers" >Username:</label>
      <input type="text" id="username" name="username" required></input>


      <label htmlFor="password" className="py-4 font-bold text-2xl">Password: (must be 8 characters must contain atleast 1 letter and 1 number)</label>
      <input type="password" id="password" name="password" minLength="8" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" title="must be 8 characters must contain atleast 1 letter and 1 number" onChange={(e)=> setPassword(e.target.value)} required/>

      <label htmlFor="password2" className="py-4 font-bold text-2xl">Confirm Password:</label>
      <input type="password" id="password2" name="password2" required/>
      <div>{error}</div>

      <label htmlFor="email" className="py-4 font-bold text-2xl">Email:</label>
      <input type="email" id="email" name="email" required/>

      <label htmlFor="firstName" className="py-4 font-bold text-2xl">First Name:</label>
      <input type="text" id="firstName" name="firstName" required/>

      <label htmlFor="lastName" className="py-4 font-bold text-2xl">Last Name:</label>
      <input type="text" id="lastName" name="lastName" required/>

      <br></br>

      <button type="submit" className="py-4 mt-4 rounded p bg-violet-500 font-bold">Submit</button>
    </div>
</form >
  )
}