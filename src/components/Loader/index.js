/**
 * Generic Loader Component
 */

// styles
import './styles.scss';

const Loader = () => {
	return (
		<div className="spacex-loader spacex-loader--wrapper">
			<div className="spacex-loader--container" />
		</div>
	);
};

Loader.propTypes = {};

Loader.defaultProps = {};

export default Loader;
