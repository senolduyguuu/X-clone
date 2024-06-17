import HomeLogo from "../../components/HomeLogo.jsx/HomeLogo"
import MenuSideBar from "./MenuSideBar/MenuSideBar"
const LeftSideBar = () => {
	return (
		<div className="w-[275px] min-h-screen px-2">
			<HomeLogo></HomeLogo>
			<MenuSideBar></MenuSideBar>
		</div>

	)
}
export default LeftSideBar