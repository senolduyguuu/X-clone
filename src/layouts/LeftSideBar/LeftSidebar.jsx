import HomeLogo from "../../components/HomeLogo.jsx/HomeLogo"
import Auth from "../Auth/auth"
import MenuSideBar from "./MenuSideBar/MenuSideBar"
const LeftSideBar = () => {
	return (
		<aside className="w-[275px] min-h-screen max-h-screen px-2 flex flex-col">
			<HomeLogo></HomeLogo>
			<MenuSideBar></MenuSideBar>
			<Auth></Auth>
		</aside>

	)
}
export default LeftSideBar