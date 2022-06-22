import CreateUserForm from '../components/CreateUserFormPage';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../contexts/auth'


export default function SignupPage() {

  const { user } = useAuth();

  if (!user) return (
    <div>
      <CreateUserForm />
    </div>
  )

  return (
    <LoginForm />
  )
}