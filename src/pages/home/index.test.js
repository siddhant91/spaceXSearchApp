import { render, cleanup, act, screen, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import Home from './index';
import { AppProvider } from '../../contexts/AppContext';
import mockShuttlesList from '../../../mockData/shuttlesList';

afterEach(cleanup);
const mock = new MockAdapter(axios);

const renderComponent = (data = {}, mockError = false) => {
	act(() => {
		const mockData = data;
		if (mockError) {
			const mockErrorObj = {
				status: 400,
				errorMessage: 'bad Request',
			};
			mock.onGet().reply(400, mockErrorObj);
		} else {
			mock.onGet().reply(200, mockData);
		}
	});

	return (
		<AppProvider>
			<Home />
		</AppProvider>
	);
};

it('Matches snapshot', () => {
	const { asFragment } = render(renderComponent());
	expect(asFragment()).toMatchSnapshot();
});

it('renders the Filter title ', async () => {
	const { findByText } = render(renderComponent());
	expect(await findByText('Filters')).toBeInTheDocument();
});

it('fetches the empty data ', async () => {
	render(renderComponent());
	expect(await screen.findByText('No Cards available')).toBeInTheDocument();
});

it('fetches the data ', async () => {
	render(renderComponent(mockShuttlesList));
	const shuttleCards = await screen.findAllByTestId('shuttle-card');
	await waitFor(() => {
		expect(shuttleCards).toHaveLength(2);
	});
});
