/**
 * Generic Button Component
 */
import { node, string, bool, func } from 'prop-types';
import clsx from 'clsx';

// Styles
import './styles.scss';

function Button({ additionalClasses, children, disabled, handleClick, isSelected, ...props }) {
	return (
		<button
			type="button"
			className={clsx('spacex-button-component', additionalClasses, {
				disabled,
				selected: isSelected,
			})}
			disabled={disabled}
			onClick={handleClick}
			data-testid="button"
			{...props}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	children: node.isRequired,
	disabled: bool,
	handleClick: func.isRequired,
	additionalClasses: string,
	isSelected: bool,
};

Button.defaultProps = {
	disabled: false,
	additionalClasses: '',
	isSelected: false,
};

export default Button;
