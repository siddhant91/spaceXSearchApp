import { arrayOf, string, shape, oneOfType, bool, number, func } from 'prop-types';

// Components
import Button from '../Button';
// Styles
import './styles.scss';

const FilterList = ({ filterTitle, filterList, filterKey, updateFilterList }) => {
	const handleFilterClick = (e) => {
		const { value } = e.target.dataset;
		updateFilterList({
			filterKey,
			value,
		});
	};
	const getFilters = () => {
		if (filterList.length) {
			const filters = filterList.map((filter) => {
				const { text, isSelected, value } = filter;
				return (
					<Button
						handleClick={handleFilterClick}
						data-value={value}
						isSelected={isSelected}
						key={`${filterKey}-${value}`}
						aria-label={text}
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
			<div className="d-flex flex-wrap justify-content-between spacex-filter-list--items">
				{getFilters()}
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
};

FilterList.defaultProps = {};

export default FilterList;
