import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import List from '../../src/components/list';

describe('List component', () => {
	it('contains 5 animals', () => {
		render(<List />);

		screen.debug();
		const listWrapper = screen.getByRole('list');
		const listItems = screen.getAllByRole('listitem');

		expect(listWrapper).toBeInTheDocument();
		expect(listWrapper).toHaveClass('animals');
		expect(listItems.length).toEqual(5);
	});
});
