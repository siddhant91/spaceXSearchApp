/**
 * Filter List Common Component
 * this will render the different filters
 */

import { arrayOf, string, shape, oneOfType, bool, number, func } from 'prop-types';

// Components
import Button from '../Button';

// Styles
import './styles.scss';

const FilterList = ({
	filterTitle,
	filterList,
	filterKey,
	updateFilterList,
	selectedFiltersList,
}) => {
	/**
	 * Click event handler of individual filter
	 * passes the filterkey and the value of the filter item clicked to the parent component handler
	 * @param {*} e
	 */
	const handleFilterClick = (e) => {
		const { value } = e.target.dataset;
		updateFilterList({
			filterKey,
			value,
		});
	};

	/**
	 * Method to render all the filter items
	 */
	const renderFilterItems = () => {
		if (filterList.length) {
			const filters = filterList.map((filter) => {
				const { text, value } = filter;
				const isSelected = selectedFiltersList.indexOf(value.toString()) > -1;
				return (
					<Button
						handleClick={handleFilterClick}
						data-value={value}
						isSelected={isSelected}
						key={`${filterKey}-${value}`}
						aria-label={text}
						data-testid="filter-button"
					>
						{text}
					</Button>
				);
			});
			return filters;
		}
		return null;
	};

	return (
		<div className="spacex-filter-list">
			<div className="spacex-filter-list--title">
				<h3>{filterTitle}</h3>
			</div>
			<div
				className="d-flex flex-wrap justify-content-between spacex-filter-list--items"
				data-testid="filter-list-container"
			>
				{renderFilterItems()}
			</div>
		</div>
	);
};

FilterList.propTypes = {
	filterTitle: string.isRequired,
	filterList: arrayOf(
		shape({
			text: string,
			value: oneOfType([bool, number]),
			isSelected: bool,
		}),
	).isRequired,
	updateFilterList: func.isRequired,
	filterKey: string.isRequired,
	selectedFiltersList: arrayOf(string),
};

FilterList.defaultProps = {
	selectedFiltersList: [],
};

export default FilterList;
