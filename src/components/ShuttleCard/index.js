/**
 * ShuttleCard Component
 * this will render the individual card
 */

import { arrayOf, shape, string } from 'prop-types';

// Styles
import './styles.scss';

function ShuttleCard({ shuttleData }) {
	const {
		missionIds,
		missionName,
		launchLanding,
		launchSuccess,
		launchYear,
		missionPatchImage,
	} = shuttleData;

	/**
	 * Method too render the mission Id's via looping over missionIds array
	 * returns HTML
	 */
	const renderMissionIds = () => {
		return (
			<div className="spacex-shuttle-card__mission-id">
				<strong>Mission Ids:</strong>
				<ul>
					{missionIds && missionIds.length > 0 && missionIds.map((id) => <li key={id}>{id}</li>)}
				</ul>
			</div>
		);
	};

	/**
	 * Common method to render details such as launch year , launch success , landing success
	 * @param {*} { label, value }
	 * returns HTML
	 */
	const renderOtherDetails = ({ label, value }) => {
		return (
			<div className="spacex-shuttle-card__details">
				<strong>{label}</strong>
				<span>{value}</span>
			</div>
		);
	};
	return (
		<div
			className="spacex-shuttle-card"
			key={`${missionName}-${launchYear}`}
			data-testid="shuttle-card"
		>
			<div className="spacex-shuttle-card__image d-flex justify-content-center">
				<img src={missionPatchImage} alt={missionName} />
			</div>
			<h3 className="spacex-shuttle-card__name">{missionName}</h3>
			{renderMissionIds()}
			{renderOtherDetails({ label: 'Launch Year:', value: launchYear })}
			{renderOtherDetails({ label: 'Successful Launch:', value: launchSuccess })}
			{renderOtherDetails({ label: 'Successful Landing:', value: launchLanding })}
		</div>
	);
}

ShuttleCard.propTypes = {
	shuttleData: shape({
		missionIds: arrayOf(string),
		missionName: string,
		launch_landing: string,
		launch_success: string,
		launchYear: string,
		missionPatchImage: string,
	}).isRequired,
};

ShuttleCard.defaultProps = {};

export default ShuttleCard;
