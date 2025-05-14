import { describe, expect, it, vi } from 'vitest';
import type { UserType } from '../../src/components/form/group-form';
import type { UserManagementProps } from '../../src/components/form/user-management';
import { render, screen } from '@testing-library/react';
import GroupForm from '../../src/components/form/group-form';
import userEvent from '@testing-library/user-event';

let mockUser: UserType;

vi.mock('../../src/components/form/user-management', () => ({
	default: ({ onAdd, onEdit, onDelete, users }: UserManagementProps) => (
		<div>
			<button onClick={() => onAdd(mockUser)} data-testid="addUser">
				Add
			</button>

			<button onClick={() => onDelete(mockUser.id)} data-testid="deleteUser">
				Delete
			</button>

			<button onClick={() => onEdit(mockUser)} data-testid="editUser">
				Edit
			</button>

			<span data-testid="users">{JSON.stringify(users)}</span>
		</div>
	),
}));

function assertUsers(expectedUsers: UserType[]) {
	const usersSpan = screen.getByTestId('users');
	const usersText = usersSpan.innerHTML;
	const actualUsers = JSON.parse(usersText);

	expect(expectedUsers).toEqual(actualUsers);
}

describe('GroupForm', () => {
	it('handles adding a user correctly', async () => {
		mockUser = {
			id: Date.now(),
			name: 'Jack Add',
			address: 'Street Add',
		};
		const user = userEvent.setup();

		render(<GroupForm />);

		const addUserButton = screen.getByTestId('addUser');
		await user.click(addUserButton);

		assertUsers([mockUser]);
	});

	it('handles deleting a user correctly', async () => {
		const user = userEvent.setup();

		mockUser = {
			id: 2,
			name: '2',
			address: '2',
		};

		const initialUsers = [
			{
				id: 1,
				name: '1',
				address: '1',
			},
			{
				id: 2,
				name: '2',
				address: '2',
			},
			{
				id: 3,
				name: '3',
				address: '3',
			},
		];

		render(<GroupForm initialUsers={initialUsers} />);

		const deleteButton = screen.getByTestId('deleteUser');

		await user.click(deleteButton);

		const expectedUsers = [initialUsers[0], initialUsers[2]];
		assertUsers(expectedUsers);
	});

	it('handles editing a user correctly', async () => {
		const user = userEvent.setup();
		const initialUsers = [
			{
				id: 1,
				name: 'You will be changed',
				address: 'You will be changed too',
			},
		];
		mockUser = {
			id: 1,
			name: 'Jack Edit',
			address: 'Street Edit',
		};

		render(<GroupForm initialUsers={initialUsers} />);

		const editButton = screen.getByTestId('editUser');

		await user.click(editButton);

		assertUsers([mockUser]);
	});
});
