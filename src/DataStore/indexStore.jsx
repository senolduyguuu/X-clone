import { createBrowserRouter } from "react-router-dom";
import Bookmarks from "../components/Bookmarks/bookmarks";
import ExploreComponent from "../components/Explore/ExploreComponent";
import HomeComponent from "../components/Home/HomeComponent";
import List from "../components/Lists/list";
import Messages from "../components/Messages/Messages";
import NotificationsComponent from "../components/Notifications/NotificationsComponent";
import Profile from "../components/Profile/Profile";
import Verified from "../components/Verified/Verified";
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
				path: "messages",
				element: <Messages></Messages>,
			},
			{
				path: "lists",
				element: <List></List>,
			},
			{
				path: "bookmarks",
				element: <Bookmarks></Bookmarks>,
			},
			{
				path: ":slug",
				element: <Profile></Profile>,
			},
			{
				path: "verified",
				element: <Verified></Verified>,
			},
			{
				path: "*",
				element: "error Page",
			},
		],
	},
]);

export default router;
