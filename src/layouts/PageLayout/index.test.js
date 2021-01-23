import { render, cleanup } from '@testing-library/react';

import PageLayout from './index';

afterEach(cleanup);

const renderComponent = () => {
	return (
		<PageLayout title="Some title" devName="Some Dev Name">
			<p>this is child node text</p>
		</PageLayout>
	);
};

it('Matches snapshot', () => {
	const { asFragment } = render(renderComponent());
	expect(asFragment()).toMatchSnapshot();
});

it('renders title', async () => {
	const { findByText } = render(renderComponent());
	expect(await findByText('Some title')).toBeInTheDocument();
});

it('renders footer', async () => {
	const { findByText } = render(renderComponent());
	expect(await findByText('Some Dev Name')).toBeInTheDocument();
});

it('Renders Chidren', async () => {
	const { findByText } = render(renderComponent());
	expect(await findByText('this is child node text')).toBeInTheDocument();
});
