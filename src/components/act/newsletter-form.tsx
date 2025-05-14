import { useState } from 'react';

type NewsletterFormProps = {
	updateNewsletter: (email: string) => void;
};

export default function NewsletterForm({
	updateNewsletter,
}: NewsletterFormProps) {
	const [signedUp, setSignedUp] = useState(false);
	const [email, setEmail] = useState('');

	const header = signedUp ? "You're signed up!" : 'Sign up for our newsletter!';

	async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault();

		await updateNewsletter(email);

		setSignedUp(true);
	}

	return (
		<form onSubmit={handleSubmit} className="newsletter">
			<span>{header}</span>

			<label htmlFor="email">Email Address</label>
			<input
				type="email"
				name="email"
				id="email"
				data-testid="email"
				value={email}
				onChange={(ev) => setEmail(ev.target.value)}
			/>

			<button type="submit" data-testid="submit" disabled={!email}>
				Sign up
			</button>
		</form>
	);
}
