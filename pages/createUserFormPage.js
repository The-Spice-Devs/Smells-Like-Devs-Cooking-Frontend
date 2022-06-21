import axios from 'axios'

import useResource from '../hooks/useResource';
 
export default function CreateUserForm (){

  const { createUser } = useResource();
  
  const registerURL = process.env.NEXT_PUBLIC_RESOURCE_REGISTER_URL; 

  const handleCreateUserFormSubmit = async (event) =>{

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
    <form onSubmit={handleCreateUserFormSubmit}  method="post">

  <label htmlFor="username">Username:</label>    
  <input type="text" id="username" name="username"></input>


  <label htmlFor="password">Password:</label>
  <input type="password" id="password" name="password" />

  <label htmlFor="password2">Confirm Password:</label>
  <input type="password" id="password2" name="password2" />
  
  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" />

  <label htmlFor="firstName">First Name:</label>
  <input type="text" id="firstName" name="firstName" />
  
  <label htmlFor="lastName">Last Name:</label>
  <input type="text" id="lastName" name="lastName" />

  <br></br>

  <button type="submit">Submit</button>
</form>
  )
}