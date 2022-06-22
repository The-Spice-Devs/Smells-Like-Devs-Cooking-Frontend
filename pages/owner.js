import { useRouter } from 'next/router'
import { useAuth } from '../contexts/auth'
import { useEffect } from 'react'
import ProfilePage from '../components/ProfilePage';


export default function User() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/')
        }
    })


    return (
			<ProfilePage />
		)
}
