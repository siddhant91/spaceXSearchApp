import { render, cleanup, screen } from '@testing-library/react';

import ShuttleCard from './index';

afterEach(cleanup);

const mockData = {
	missionIds: ['1234'],
	missionName: 'FalconSat',
	launchLanding: 'false',
	launchSuccess: 'false',
	launchYear: '2006',
	missionPatchImage: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
};
const renderComponent = () => {
	return <ShuttleCard shuttleData={mockData} />;
};

it('Matches snapshot', () => {
	const { asFragment } = render(renderComponent());
	expect(asFragment()).toMatchSnapshot();
});

it('renders ShuttleCards list', async () => {
	render(renderComponent());
	const shuttleCards = await screen.findAllByTestId('shuttle-card');
	expect(shuttleCards).toHaveLength(1);
});
