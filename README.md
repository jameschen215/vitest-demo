# Vitest Practice Demo

## What I've learned

### How to set a default value (like an empty array) for a prop in a React component

**Note:** Just make the props type optional

```TypeScript
type UserType = {
	id: number;
	name: string;
	address: string;
};

type Props = {
	users?: UserType[];
};

function UserList({ users = [] }: Props) {
	// ...
}
```

### How to mock a child component correctly when you use `default` to export it

**Note:**

- Pay attention to the keyword `default`
- > The mock component doesn’t necessarily need to emulate the entire functionality of the original component, but it does need to present the same API as the original. Generally speaking, this means it should take the same props, and use the same callbacks.

```TypeScript
vi.mock(
	'../../src/components/form/user-management',
	() => ({
		default: ({ onAdd, onEdit, onDelete, users }: UserManagementProps) => (
			<div>
				<button onClick={() => onAdd(mockUser)} data-testid="addUser">
					Add
				</button>

				<button onClick={() => onDelete(mockUser.id)} data-testid="deleteUser">
					Delete
				</button>

				<button onClick={() => onEdit(mockUser.id, mockUser)} data-testid="editUser">
					Edit
				</button>

				<span data-testid="users">{JSON.stringify(users)}</span>
			</div>
		),
	})
);
```
