import axios from 'axios'
import useResource from '../hooks/useResource';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image';
import banner from '../assets/profileBanner.jpeg'

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
    <>
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
    <form onSubmit={handleCreateUserFormSubmit} method="post" className="justify-left w-2/6 h-full px-5 py-3 ml-auto mr-auto rounded-lg top-56 mt-5 mb-10 border-2 border-orange-500" style={{color: 'rgb(41,0,0)'}}>
      <div className="flex flex-col p-4">
        <h1 className="text-4xl text-center py-4 font-bold">Sign Up Here!</h1>
      <label htmlFor="username" className="py-4 font-bold text-lg " pattern="[a-z]{0-9}" title="user name should only contain letters or numbers" >Username:</label>
      <input type="text" id="username" name="username" required placeholder="Username" className=" placeholder-stone-400 bg-stone-10 w-1/2 border border-2 border-orange-200 px-2"></input>


      <label htmlFor="password" className="py-4 font-bold text-lg">Password: <br></br><p className=" font-normal text-sm italic">Must contain 8 characters and at least 1 number</p></label>
      <input type="password" id="password" name="password" minLength="8" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" title="must be 8 characters must contain atleast 1 letter and 1 number" onChange={(e)=> setPassword(e.target.value)} required placeholder="Password" className=" placeholder-stone-400 bg-stone-10 w-1/2 border border-2 border-orange-200 px-2"/>

      <label htmlFor="password2" className="py-4 font-bold text-lg">Confirm Password:</label>
      <input type="password" id="password2" name="password2" required placeholder="Confirm Password" className=" placeholder-stone-400 bg-stone-10 w-1/2 border border-2 border-orange-200 px-2"/>
      <div>{error}</div>

      <label htmlFor="email" className="py-4 font-bold text-lg">Email:</label>
      <input type="email" id="email" name="email" required placeholder="Email" className=" placeholder-stone-400 bg-stone-10 w-1/2 border border-2 border-orange-200 px-2"/>

      <label htmlFor="firstName" className="py-4 font-bold text-lg">First Name:</label>
      <input type="text" id="firstName" name="firstName" required placeholder="First Name" className=" placeholder-stone-400 bg-stone-10 w-1/2 border border-2 border-orange-200 px-2"/>

      <label htmlFor="lastName" className="py-4 font-bold text-lg">Last Name:</label>
      <input type="text" id="lastName" name="lastName" required placeholder="Last Name"className=" placeholder-stone-400 bg-stone-10 w-1/2 border border-2 border-orange-200 px-2"/>

      <br></br>

      <button type="submit" className="py-4 mt-4 rounded p bg-orange-900 text-orange-50 font-bold w-1/2">Submit</button>
    </div>
</form >
</>
  )
}