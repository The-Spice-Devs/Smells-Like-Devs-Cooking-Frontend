import Main from '../components/Main';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../contexts/auth'
import CreateUserForm from './createUserFormPage';

export default function Home() { 
	
	const { user, login, logout } = useAuth();

	if (!user) return (
		<div>
			{/* <LoginForm login={login} /> */}
			<br></br>
			<CreateUserForm />
		</div>
	)

	return ( 
		<div>
		<Main logout={logout} username={user.username}/>
		</div>
		) 
	}

