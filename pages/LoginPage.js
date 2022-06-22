import LoginForm from '../components/LoginForm';
import { useAuth } from '../contexts/auth'
import Main from '../components/Main';


export default function LoginPage(){

  
  const { user, login } = useAuth();
  if (!user) return (
    <div>

    <LoginForm login={login} />
    </div>
    )
  
  return(
    <Main />
  )

}