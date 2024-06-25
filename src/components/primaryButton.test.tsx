import { render, screen } from '@testing-library/react';
import PrimaryButton from './PrimaryButton';

describe('PrimaryButton', () => {
	it('should render the button correctly', () => {
		render(<PrimaryButton />);
		const ele = screen.getByText('Click to add');

		expect(ele).toBeInTheDocument();
	});

	it('should render the button with action type correctly', () => {
		render(<PrimaryButton actionType='post' />);
		const ele = screen.getByText('Click to post');

		expect(ele).toBeInTheDocument();
	});
});
