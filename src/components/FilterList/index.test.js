import { render, cleanup, screen } from '@testing-library/react';

import FilterList from './index';
import successFilterConfig from '../../config/successFilterConfig';

afterEach(cleanup);

const fn = jest.fn();
const renderComponent = ({ filterList = [] } = {}) => {
	return (
		<FilterList
			filterTitle="Successful Landing"
			filterKey="landing_success"
			filterList={filterList}
			updateFilterList={fn}
			selectedFiltersList={[]}
		/>
	);
};

it('Matches snapshot', () => {
	const { asFragment } = render(renderComponent({ filterList: successFilterConfig }));
	expect(asFragment()).toMatchSnapshot();
});

it('renders the Filter title ', async () => {
	const { findByText } = render(renderComponent());
	expect(await findByText('Successful Landing')).toBeInTheDocument();
});

it('renders filter list', async () => {
	render(renderComponent({ filterList: successFilterConfig }));
	const filtersbtns = await screen.findAllByTestId('filter-button');
	expect(filtersbtns).toHaveLength(2);
});

it('renders no filter', async () => {
	render(renderComponent());
	const filtersbtnsContainer = await screen.findByTestId('filter-list-container');
	expect(filtersbtnsContainer).toBeEmptyDOMElement();
});
