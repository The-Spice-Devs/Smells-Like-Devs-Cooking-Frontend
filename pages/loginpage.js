import LoginForm from '../components/LoginForm';
import { useAuth } from '../contexts/auth'
import Main from '../components/Main';
import Header from "../components/Header";
import Head from 'next/head';
export default function LoginPage() {


  const { user, login } = useAuth();
  if (!user) return (
    <div>
      <Head>
        <title>Smells Like Devs Cooking</title>
      </Head>
      <LoginForm login={login} />
    </div>
  )

  return (
    <>
      <Main />
    </>
  )

}