import { useState } from 'react';
import type { UserType } from './group-form';
import UserForm from './user-form';

export type UserManagementProps = {
	users: UserType[];
	onAdd: (newUser: UserType) => void;
	onDelete: (id: number) => void;
	onEdit: (editedUser: UserType) => void;
};

export default function UserManagement({
	users,
	onAdd,
	onDelete,
	onEdit,
}: UserManagementProps) {
	const [formOpen, setFormOpen] = useState(false);
	const [selectedUser, setSelectedUser] = useState<number | null>(null);

	function addUser(data: { name: string; address: string }) {
		const newUser = { id: Date.now(), name: data.name, address: data.address };
		onAdd(newUser);
		setFormOpen(false);
	}

	function editUser(data: { name: string; address: string }) {
		if (selectedUser) {
			onEdit({ id: selectedUser, ...data });
		}
		setSelectedUser(null);
		setFormOpen(false);
	}

	return (
		<>
			<button onClick={() => setFormOpen(true)}>Add user</button>
			<table>
				<thead>
					<tr>Name</tr>
					<tr>Address</tr>
					<tr>Action</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr>
							<td>{user.name}</td>
							<td>{user.address}</td>
							<td>
								<button
									onClick={() => {
										setSelectedUser(user.id);
										setFormOpen(true);
									}}>
									Edit
								</button>
								<button onClick={() => onDelete(user.id)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{formOpen && selectedUser && (
				<UserForm
					onSubmit={editUser}
					user={
						(users.find((user) => (user.id = selectedUser)) as UserType) ?? null
					}
				/>
			)}

			{formOpen && !selectedUser && <UserForm onSubmit={addUser} user={null} />}
		</>
	);
}
