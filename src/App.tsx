import { useEffect, useState } from 'react';
import './App.css';
import User from './components/user';

type UserType = {
	name: string;
	email: string;
};

function App() {
	const [user, setUser] = useState<UserType | null>(null);
	const [error, setError] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users/1')
			.then((resp) => resp.json())
			.then((user: UserType) => setUser(user))
			.catch((error: Error) => setError(error.message));
	}, []);

	if (error) {
		return <span>{error}</span>;
	}

	return <div>{user ? <User user={user} /> : <span>Loading...</span>}</div>;
}

export default App;
