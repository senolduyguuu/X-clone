import { Outlet } from "react-router-dom";
import LeftSideBar from "../layouts/LeftSideBar/LeftSidebar";
import RightSideBar from "../layouts/RightSidebar";
const MainComponent = () => {
	return (
		<div className="w-[1265px] mx-auto flex">
			<LeftSideBar></LeftSideBar>
			<div className="flex-1 flex gap-[30px]">
				<main className="flex-1 border-x border-[#2f3336] max-w-[600px]">
					<Outlet></Outlet>
				</main>
				<RightSideBar></RightSideBar>
			</div>
		</div>

	)
}
export default MainComponent;