import Main from '../components/Main';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../contexts/auth'

export default function Home() { 
	
	const { user, login, logout } = useAuth();

	if (!user) return <LoginForm login={login} />

	return ( 
		<Main logout={logout} username={user.username}/>
		) 
	}

