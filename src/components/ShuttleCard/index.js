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
	const renderMissionIds = () => {
		return (
			<div className="spacex-shuttle-card__mission-id">
				<strong>Mission Ids:</strong>
				<ul>{missionIds && missionIds.length > 0 && missionIds.map((id) => <li>{id}</li>)}</ul>
			</div>
		);
	};

	const getOtherDetails = ({ label, value }) => {
		return (
			<div className="spacex-shuttle-card__details">
				<strong>{label}</strong>
				<span>{value}</span>
			</div>
		);
	};
	return (
		<div className="spacex-shuttle-card" key={`${missionName}-${launchYear}`}>
			<div className="spacex-shuttle-card__image d-flex justify-content-center">
				<img src={missionPatchImage} alt={missionName} />
			</div>
			<h3 className="spacex-shuttle-card__name">{missionName}</h3>
			{renderMissionIds()}
			{getOtherDetails({ label: 'Launch Year:', value: launchYear })}
			{getOtherDetails({ label: 'Successful Launch:', value: launchSuccess })}
			{getOtherDetails({ label: 'Successful Landing:', value: launchLanding })}
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
