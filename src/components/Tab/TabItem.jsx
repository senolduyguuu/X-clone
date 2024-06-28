/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useTab } from "./Context";

const TabItem = ({ children, id }) => {
	const { active, setActive } = useTab()
	return (
		<button type="button" className="flex-auto transition-colors hover:bg-white/[0.03] sticky top-0 " onClick={() => {
			setActive(id)
		}} >
			<div className="h-[3.313rem] relative inline-flex items-center">
				{children}
				{active === id && (
					<div className="h-[4px] absolute bottom-0 left-0 w-full rounded-full bg-custom-blue"></div>
				)}
			</div>

		</button>
	)
}

TabItem.propTypes = {
	children: PropTypes.node.isRequired,
};

export default TabItem;
