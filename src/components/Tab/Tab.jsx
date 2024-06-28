import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Content from "./Content";
import { TabContext } from "./Context";
import TabItem from "./TabItem";
import TabItems from "./TabItems";
// eslint-disable-next-line react/prop-types, no-unused-vars
const Tab = ({ children, activeTab }) => {
	const [active, setActive] = useState(activeTab)

	useEffect(() => {
		setActive(activeTab)
	}, [activeTab])
	const data = {
		active,
		setActive
	}

	const contents = children.filter((c) => c.type === Content);
	const items = children.filter((c) => c.type === TabItems);
	const content = contents.find(c => c.props.id === active)
	return (
		<TabContext.Provider value={data}>
			<div className="border-b border-[#16181c]">
				{items}

			</div>
			{content}
		</TabContext.Provider>
	)
};

Tab.Items = TabItems
Tab.Item = TabItem
Tab.Content = Content

Tab.propTypes = {
	children: PropTypes.node.isRequired,
};
export default Tab