import {
	render,
	screen,
	waitForElementToBeRemoved,
} from '@testing-library/react';
import { describe, expect, it, vi, type Mock } from 'vitest';

import App from '../../src/App';

window.fetch = vi.fn(() => {
	const user = { name: 'Jack', email: 'jack@email.com' };

	return Promise.resolve({
		json: () => Promise.resolve(user),
		ok: true,
		status: 200,
	} as Response);
});

describe('Testing App component', () => {
	it('shows loading text whe api request is in progress', async () => {
		render(<App />);

		const loading = screen.getByText('Loading...');
		expect(loading).toBeInTheDocument();

		await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
	});

	it("renders the user's name", async () => {
		render(<App />);

		const userName = await screen.findByText('Jack');
		expect(userName).toBeInTheDocument();
	});

	it('shows error message', async () => {
		(window.fetch as Mock).mockImplementationOnce(() => {
			return Promise.reject({ message: 'API is down' });
		});

		render(<App />);

		const errorMessage = await screen.findByText('API is down');
		expect(errorMessage).toBeInTheDocument();
	});
});

// describe('App component', () => {
// 	it('renders magnificent monkeys', () => {
// 		// since screen does not have the container property,
// 		// we'll destructure render to obtain a container for this test
// 		const { container } = render(<App />);
// 		expect(container).toMatchSnapshot();
// 	});

// 	it('renders radical rhinos after button click', async () => {
// 		const user = userEvent.setup();

// 		render(<App />);
// 		const button = screen.getByRole('button', { name: 'Click Me' });

// 		await user.click(button);

// 		screen.debug();

// 		expect(screen.getByRole('heading').textContent).toMatch(/radical rhinos/i);
// 	});
// });
