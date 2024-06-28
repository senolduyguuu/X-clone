import PropTypes from "prop-types";
const TabItems = ({ children }) => {
	return (
		<div className="flex sticky top-0" >
			{children}
		</div>
	)
}
TabItems.propTypes = {
	children: PropTypes.node.isRequired,
};
export default TabItems