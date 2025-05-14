import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import NewsletterForm from '../../src/components/act/newsletter-form';
import userEvent from '@testing-library/user-event';

describe('NewsletterForm Component', () => {
	it('should sign user up for the newsletter', async () => {
		// given
		const user = userEvent.setup();
		const email = 'bob@gmail.com';
		const updateNewsletter = vi.fn();
		render(<NewsletterForm updateNewsletter={updateNewsletter} />);

		// when
		const emailInput = screen.getByTestId('email');
		const submitButton = screen.getByTestId('submit');
		await user.type(emailInput, email);
		await user.click(submitButton);

		// then
		expect(updateNewsletter).toHaveBeenCalledWith(email);
	});
});
