import CreateUserForm from '../components/CreateUserFormPage';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../contexts/auth'
import Header from '../components/Header';

export default function SignupPage() {

  const { user } = useAuth();

  if (!user) return (
    <div>
      <Header />
      <CreateUserForm />
    </div>
  )

  return (
    <LoginForm />
  )
}