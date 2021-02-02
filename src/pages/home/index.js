/**
 * Landing Page of the SpaceX Search Application
 * Sets the App Level Data by making an Api Call
 */

import { useState, useEffect, useContext } from 'react';

// Network
import NetworkUtils from '../../network';

// Configs
import launchYearFilterConfig from '../../config/launchYearFilterConfig';
import successFilterConfig from '../../config/successFilterConfig';

// Components
import FilterList from '../../components/FilterList';
import Loader from '../../components/Loader';
import ShuttleCard from '../../components/ShuttleCard';

// Context
import { AppContext } from '../../contexts/AppContext';

// Utils
import transformShuttleData from '../../utils/shuttleListUtils';

// Styles
import './styles.scss';

const Home = () => {
	const [yearFilter] = useState(launchYearFilterConfig);
	const [launchSuccessFilter] = useState(successFilterConfig);
	const [landingSuccessFilter] = useState(successFilterConfig);
	const [shuttleLists, setShuttleLists] = useState([]);
	const [selectedFilters, setSelectecFilters] = useState({
		launch_year: [],
		launch_success: [],
		landing_success: [],
	});
	const [loaderVisible, setLoaderVisible] = useContext(AppContext);

	/**
	 * Method to update the selectedFilters based on the user interaction with filter CTA's
	 * @param {*} { filterKey, value }
	 */
	const updateFilterList = ({ filterKey, value }) => {
		let selectedFilter = selectedFilters[filterKey];
		if (selectedFilter.length) {
			const selectedValueIndex = selectedFilter.indexOf(value);
			if (selectedValueIndex > -1) {
				selectedFilter = [];
			} else {
				selectedFilter = [value];
			}
		} else {
			selectedFilter = [value];
		}
		setSelectecFilters((prevState) => {
			return {
				...prevState,
				[filterKey]: [...selectedFilter],
			};
		});
		/** the below commented block is to have multiple filter keys for the same category */
		// const selectedFilter = selectedFilters[filterKey];
		// if (selectedFilter.length) {
		// 	const selectedValueIndex = selectedFilter.indexOf(value);
		// 	//	remove the value from the filter list if already selected
		// 	if (selectedValueIndex > -1) {
		// 		selectedFilter.splice(selectedValueIndex, 1);
		// 	} else {
		// 		selectedFilter.push(value);
		// 	}

		// 	setSelectecFilters((prevState) => {
		// 		return {
		// 			...prevState,
		// 			[filterKey]: [...selectedFilter],
		// 		};
		// 	});
		// } else {
		// 	setSelectecFilters((prevState) => {
		// 		return {
		// 			...prevState,
		// 			[filterKey]: [value],
		// 		};
		// 	});
		// }
		/** the above commented block is to have multiple filter keys for the same category */
	};

	/**
	 * Method to make an api call to get the data based on the applied filter or the base api call with limit of 100
	 */
	const getShuttleLists = async () => {
		try {
			setLoaderVisible(true);
			const result = await NetworkUtils.makeApiRequest({
				url: '',
				params: {
					limit: 100,
					...selectedFilters,
				},
			});
			const { responseData = [] } = result;
			if (responseData.length) {
				const tranformedData = transformShuttleData(responseData);
				setShuttleLists(tranformedData);
			} else {
				setShuttleLists([]);
			}
			setLoaderVisible(false);
		} catch (e) {
			console.log(e);
		} finally {
			setLoaderVisible(false);
		}
	};

	/**
	 * Method to render the Shuttle Cards
	 */
	const renderShuttleCards = () => {
		if (shuttleLists.length) {
			const shuttleCards = shuttleLists.map((data) => {
				return <ShuttleCard shuttleData={data} />;
			});
			return shuttleCards;
		}
		return <p>No Cards available</p>;
	};

	/**
	 * useEffect to fire the api call based on the filter selection or on the first mount
	 */
	useEffect(() => {
		getShuttleLists();
	}, [selectedFilters]);

	return (
		<div className="spacex-homepage d-flex w-100 flex-column flex-sm-row">
			{loaderVisible && <Loader />}
			<div className="spacex-homepage__filters">
				<h2>Filters</h2>
				<FilterList
					filterTitle="Launch Year"
					filterKey="launch_year"
					filterList={yearFilter}
					updateFilterList={updateFilterList}
					selectedFiltersList={selectedFilters.launch_year}
				/>
				<FilterList
					filterTitle="Successful Launch"
					filterKey="launch_success"
					filterList={launchSuccessFilter}
					updateFilterList={updateFilterList}
					selectedFiltersList={selectedFilters.launch_success}
				/>
				<FilterList
					filterTitle="Successful Landing"
					filterKey="landing_success"
					filterList={landingSuccessFilter}
					updateFilterList={updateFilterList}
					selectedFiltersList={selectedFilters.landing_success}
				/>
			</div>
			<div className="spacex-homepage--cards d-flex flex-wrap">{renderShuttleCards()}</div>
		</div>
	);
};

export default Home;
