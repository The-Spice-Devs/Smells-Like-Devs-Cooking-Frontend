import Main from '../components/Main';
import LoginForm from '../components/LoginForm';
import LoginPage from './loginpage';
import { useAuth } from '../contexts/auth'
import CreateUserForm from '../components/CreateUserFormPage';
import Header from '../components/Header';

export default function Home() { 
	
	const { user, login, logout } = useAuth();

	// if (!user) return (
	// 	<div>
	// 		{/* <LoginForm login={login} /> */}
	// 		{/* <LoginPage />  */}
	// 		{/* <CreateUserForm /> */}
	// 		<Main />

	// 	</div>
	// )

	return ( 
		<div>
		<Main logout={logout} />
		</div>
		) 
	}

