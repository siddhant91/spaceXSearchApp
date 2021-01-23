const transformShuttleData = (shuttleData) => {
	let transFormedData = [];
	if (shuttleData.length) {
		transFormedData = shuttleData.map((item) => {
			const {
				mission_name: missionName,
				launch_year: launchYear,
				launch_success: launchSuccess,
				launch_landing: launchLanding = false,
				links: { mission_patch_small: missionPatchImage } = {},
				mission_id: missionIds = [],
			} = item;
			return {
				missionIds,
				missionName,
				launch_landing: launchLanding.toString(),
				launch_success: launchSuccess.toString(),
				launchYear,
				missionPatchImage,
			};
		});
	}
	return transFormedData;
};

export default transformShuttleData;
