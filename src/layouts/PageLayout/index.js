/**
 * Page Layout Component which renders the entire page  with header,left navigation menu and the main Content
 */
import clsx from 'clsx';
import { string, node } from 'prop-types';
//  import { useState } from 'react';

// Styles
import './styles.scss';

const PageLayout = ({ additonalClasses, title, devName, children, ...rest }) => {
	return (
		<div className={clsx('spacex-page-layout', additonalClasses)} {...rest}>
			<header className="spacex-page-layout__header d-flex align-items-center w-100">
				<h1 className="spacex-page-layout__header--title">{title}</h1>
			</header>
			<main className="spacex-page-layout__content">{children}</main>
			<footer className="spacex-page-layout__footer w-100 d-flex justify-content-center align-items-center">
				<strong>Developed by:</strong> {devName}
			</footer>
		</div>
	);
};

PageLayout.propTypes = {
	additonalClasses: string,
	children: node,
	title: string.isRequired,
	devName: string.isRequired,
};

PageLayout.defaultProps = {
	additonalClasses: '',
	children: null,
};

export default PageLayout;
