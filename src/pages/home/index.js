/**
 * Landing Page of the Books List Application
 * Sets the App Level by making an Api Call
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
	const [selectedFilters] = useState({});
	const [loaderVisible, setLoaderVisible] = useContext(AppContext);
	console.log(selectedFilters);
	console.log(shuttleLists);

	const updateFilterList = ({ filterKey, value }) => {
		console.log(filterKey);
		console.log(value);
	};

	const getShuttleLists = async () => {
		try {
			setLoaderVisible(true);
			const result = await NetworkUtils.makeApiRequest({
				url: '',
				params: {
					limit: 100,
				},
			});
			console.log(result);
			const { responseData = [] } = result;
			if (responseData.length) {
				const tranformedData = transformShuttleData(responseData);
				setShuttleLists(tranformedData);
			}
			setLoaderVisible(false);
		} catch (e) {
			console.log(e);
		} finally {
			setLoaderVisible(false);
		}
	};

	const getShuttleCards = () => {
		if (shuttleLists.length) {
			const shuttleCards = shuttleLists.map((data) => {
				return <ShuttleCard shuttleData={data} />;
			});
			return shuttleCards;
		}
		return <p>No Cards available</p>;
	};
	useEffect(() => {
		getShuttleLists();
	}, [selectedFilters]);
	return (
		<div className="spacex-homepage d-flex w-100 flex-wrap">
			{loaderVisible && <Loader />}
			<div className="spacex-homepage__filters">
				<h2>Filters</h2>
				<FilterList
					filterTitle="Launch Year"
					filterKey="launchYear"
					filterList={yearFilter}
					updateFilterList={updateFilterList}
				/>
				<FilterList
					filterTitle="Successful Launch"
					filterKey="launchSuccess"
					filterList={launchSuccessFilter}
					updateFilterList={updateFilterList}
				/>
				<FilterList
					filterTitle="Successful Landing"
					filterKey="landingSuccess"
					filterList={landingSuccessFilter}
					updateFilterList={updateFilterList}
				/>
			</div>
			<div className="spacex-homepage--cards d-flex flex-wrap">{getShuttleCards()}</div>
		</div>
	);
};

export default Home;
