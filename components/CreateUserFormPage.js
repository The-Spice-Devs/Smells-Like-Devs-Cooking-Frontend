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
      <div className="w-full pt-2" style={{ position: 'relative', height: '30vmax' }}>
      <h1 className="text-center font-MajorMono" style={{ fontSize: "4.5vmax", position: 'relative', top: '30%', opacity: '1', color: 'rgb(41,0,0)' }}>Smells Like Devs Cooking</h1>
    <Image
      src={banner}
      layout="fill"
      objectFit="cover"
      alt="Profile Page Banner"
      style={{ opacity: '0.6', zIndex: '-1' }}
      priority
    />
  </div>
    <form onSubmit={handleCreateUserFormSubmit} method="post" className="w-2/6 h-full px-5 py-3 mt-5 mb-10 ml-auto mr-auto border-2 border-orange-500 rounded-lg justify-left top-56" style={{color: 'rgb(41,0,0)'}}>
      <div className="flex flex-col p-4">
        <h1 className="py-4 text-4xl font-bold text-center">Sign Up Here!</h1>
      <label htmlFor="username" className="py-4 text-lg font-bold " pattern="[a-z]{0-9}" title="user name should only contain letters or numbers" >Username:</label>
      <input type="text" id="username" name="username" required placeholder="Username" className="w-1/2 px-2 border border-2 border-orange-200  placeholder-stone-400 bg-stone-10"></input>


      <label htmlFor="password" className="py-4 text-lg font-bold">Password: <br></br><p className="text-sm italic font-normal ">Must contain 8 characters and at least 1 number</p></label>
      <input type="password" id="password" name="password" minLength="8" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" title="must be 8 characters must contain atleast 1 letter and 1 number" onChange={(e)=> setPassword(e.target.value)} required placeholder="Password" className="w-1/2 px-2 border border-2 border-orange-200  placeholder-stone-400 bg-stone-10"/>

      <label htmlFor="password2" className="py-4 text-lg font-bold">Confirm Password:</label>
      <input type="password" id="password2" name="password2" required placeholder="Confirm Password" className="w-1/2 px-2 border border-2 border-orange-200  placeholder-stone-400 bg-stone-10"/>
      <div>{error}</div>

      <label htmlFor="email" className="py-4 text-lg font-bold">Email:</label>
      <input type="email" id="email" name="email" required placeholder="Email" className="w-1/2 px-2 border border-2 border-orange-200  placeholder-stone-400 bg-stone-10"/>

      <label htmlFor="firstName" className="py-4 text-lg font-bold">First Name:</label>
      <input type="text" id="firstName" name="firstName" required placeholder="First Name" className="w-1/2 px-2 border border-2 border-orange-200  placeholder-stone-400 bg-stone-10"/>

      <label htmlFor="lastName" className="py-4 text-lg font-bold">Last Name:</label>
      <input type="text" id="lastName" name="lastName" required placeholder="Last Name"className="w-1/2 px-2 border border-2 border-orange-200  placeholder-stone-400 bg-stone-10"/>

      <br></br>

      <button type="submit" className="w-1/2 py-4 mt-4 font-bold bg-orange-900 rounded p text-orange-50">Submit</button>
    </div>
</form >
</>
  )
}