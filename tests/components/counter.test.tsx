import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import UserEvent from '@testing-library/user-event';
import Counter from '../../src/components/counter';

describe('Testing Counter Component', () => {
	it('shows 0 when no button is clicked', () => {
		render(<Counter />);

		const counter = screen.getByTestId('counter');

		expect(counter.textContent).toEqual('0');
	});

	it('increments counter on increment button click', async () => {
		render(<Counter />);

		const counter = screen.getByTestId('counter');
		const incrementBtn = screen.getByRole('button', { name: 'Increment' });
		const user = UserEvent.setup();

		await user.click(incrementBtn);
		await user.click(incrementBtn);

		expect(counter.textContent).toEqual('2');
	});

	it('decrements counter on decrement button click', async () => {
		render(<Counter />);

		const counter = screen.getByTestId('counter');
		const decrementBtn = screen.getByRole('button', { name: 'Decrement' });

		await UserEvent.click(decrementBtn);
		await UserEvent.click(decrementBtn);

		expect(counter.textContent).toEqual('-2');
	});
});
