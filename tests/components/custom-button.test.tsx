import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CustomButton from '../../src/components/custom-button';
import userEvent from '@testing-library/user-event';

describe('CustomButton Component', () => {
	it('should render a button with the text "Click Me"', () => {
		render(<CustomButton onClick={() => {}} />);

		const buttonEle = screen.getByRole('button', {
			name: 'Click Me',
		}) as HTMLInputElement;

		expect(buttonEle).toBeInTheDocument();
	});

	it('should call the onClick function when clicked', async () => {
		const onClick = vi.fn();
		const user = userEvent.setup();
		render(<CustomButton onClick={onClick} />);

		const buttonEle = screen.getByRole('button', { name: 'Click Me' });

		await user.click(buttonEle);

		expect(onClick).toHaveBeenCalled();
	});

	it("should not call the callback function when it isn't clicked", async () => {
		const onClick = vi.fn();
		render(<CustomButton onClick={onClick} />);

		expect(onClick).not.toHaveBeenCalled();
	});
});
