import { useState } from 'react';
import UserManagement from './user-management';

export type UserType = {
	id: number;
	name: string;
	address: string;
};

type GroupFormProps = {
	initialUsers?: UserType[];
};

export default function GroupForm({ initialUsers = [] }: GroupFormProps) {
	const [users, setUsers] = useState(initialUsers);

	function handleAddUser(newUser: UserType) {
		setUsers((prev) => [...prev, newUser]);
	}

	function handleDeleteUser(id: number) {
		const newUsers = users.filter((user) => user.id !== id);
		setUsers(newUsers);
	}

	function handleEditUser(editedUser: UserType) {
		const newUsers = users.map((user) =>
			user.id === editedUser.id ? editedUser : user
		);

		setUsers(newUsers);
	}

	function handleSubmit() {
		// Send a request to create a group with given users
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="groupName">Group Name</label>
				<input type="text" id="groupName" name="groupName" />

				<label htmlFor="date">Date</label>
				<input type="date" name="date" id="date" />

				<button type="submit">Submit</button>
			</form>

			<UserManagement
				users={users}
				onAdd={handleAddUser}
				onDelete={handleDeleteUser}
				onEdit={handleEditUser}
			/>
		</>
	);
}
