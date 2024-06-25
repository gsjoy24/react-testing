import { render, screen } from '@testing-library/react';
import App from './App';

it('should render Testing React correctly', () => {
	render(<App />);
	const element = screen.getByText('Testing React');
	expect(element).toBeInTheDocument();
});
