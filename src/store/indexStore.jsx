import { createBrowserRouter } from "react-router-dom";
import ExploreComponent from "../components/Explore/ExploreComponent";
import HomeComponent from "../components/Home/HomeComponent";
import NotificationsComponent from "../components/Notifications/NotificationsComponent";
import MainComponent from "../main/MainComponent";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainComponent></MainComponent>,
		children: [
			{
				index: true,
				element: <HomeComponent></HomeComponent>,
			},
			{
				path: "explore",
				element: <ExploreComponent></ExploreComponent>,
			},
			{
				path: "notifications",
				element: <NotificationsComponent></NotificationsComponent>,
			},
			{
				path: "welcome",
				element: "Welcome Page",
			},
		],
	},
]);

export default router;
