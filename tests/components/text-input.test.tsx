import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Form from '../../src/components/form';
import userEvent from '@testing-library/user-event';
import TextInput from '../../src/components/text-input';

describe('Testing TextInput Component', () => {
	it('updates input value correctly', async () => {
		render(<Form />);

		const inputEle = screen.getByRole('textbox') as HTMLInputElement;
		const user = userEvent.setup();

		await user.type(inputEle, 'React');

		expect(inputEle.value).toBe('React');
	});

	it('calls the callback every time input value is changed', async () => {
		const handleChange = vi.fn();

		render(<TextInput inputValue="" handleChange={handleChange} />);

		const inputEle = screen.getByRole('textbox') as HTMLInputElement;
		const user = userEvent.setup();

		await user.type(inputEle, 'React');

		expect(handleChange).toHaveBeenCalledTimes(5);
	});
});
