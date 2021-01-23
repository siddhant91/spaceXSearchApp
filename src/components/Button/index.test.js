import { render, cleanup, waitFor, fireEvent } from '@testing-library/react';

import Button from './index';

afterEach(cleanup);

const fn = jest.fn();
const renderComponent = ({ disabled = false, isSelected = false } = {}) => {
	return (
		<Button handleClick={fn} disabled={disabled} isSelected={isSelected}>
			Click Me
		</Button>
	);
};
it('Matches snapshot', () => {
	const { asFragment } = render(renderComponent());
	expect(asFragment()).toMatchSnapshot();
});

it('Renders children props', () => {
	const { getByText } = render(renderComponent());
	expect(getByText('Click Me')).toBeInTheDocument();
});

it('Handles Button Click', async () => {
	const { getByTestId } = render(renderComponent());
	const button = getByTestId('button');
	fireEvent.click(button);
	await waitFor(() => {
		expect(fn).toHaveBeenCalledTimes(1);
	});
});

it('disables the Button', async () => {
	const { getByTestId } = render(renderComponent({ disabled: true }));
	const button = getByTestId('button');
	fireEvent.click(button);
	await waitFor(() => {
		expect(fn).toHaveBeenCalledTimes(0);
	});
});

it('the Button is selected', async () => {
	const { getByTestId } = render(renderComponent({ disabled: true, isSelected: true }));
	const button = getByTestId('button');
	expect(button.classList.contains('selected')).toBe(true);
});
