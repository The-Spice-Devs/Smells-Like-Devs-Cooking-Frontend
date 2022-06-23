import CreateUserForm from '../components/CreateUserFormPage';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../contexts/auth'
import Header from '../components/Header';
import Head from 'next/head'

export default function SignupPage() {

  const { user } = useAuth();

  if (!user) return (
    <div>
      	<Head>
				<title>Join Us!</title>
			</Head>
      <Header />
      <CreateUserForm />
    </div>
  )

  return (
    <LoginForm />
  )
}