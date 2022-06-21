import Main from '../components/Main';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../contexts/auth'
import CreateUserForm from '../components/CreateUserFormPage';

export default function Home() { 
	
	const { user, login, logout } = useAuth();

	if (!user) return (
		<div>
			<LoginForm login={login} />
			<CreateUserForm />
		</div>
	)

	return ( 
		<div>
		<Main logout={logout} />
		</div>
		) 
	}

