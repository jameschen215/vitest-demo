type UserProps = { user: { name: string; email: string } };

export default function User({ user }: UserProps) {
	return (
		<div className="person">
			<h3>{user.name}</h3>
			<span>{user.email}</span>
		</div>
	);
}
