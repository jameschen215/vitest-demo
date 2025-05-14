import { useState } from 'react';
import type { UserType } from './group-form';

type UserFormProps = {
	user: UserType | null;
	onSubmit: (user: UserType) => void;
};

export default function UserForm({ user, onSubmit }: UserFormProps) {
	const [name, setName] = useState(user?.name ?? '');
	const [address, setAddress] = useState(user?.address ?? '');

	function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault();
		ev.stopPropagation();

		onSubmit({ id: Date.now(), name, address });
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name</label>
			<input
				type="text"
				name="name"
				id="name"
				value={name}
				onChange={(ev) => setName(ev.target.value)}
			/>

			<label htmlFor="address">Address</label>
			<input
				type="text"
				name="address"
				id="address"
				value={address}
				onChange={(ev) => setAddress(ev.target.value)}
			/>

			<button type="submit">Submit</button>
		</form>
	);
}
