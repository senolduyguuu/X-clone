import Footer from "./Footer/Footer";
import Premium from "./Premium/Premium";
import SearchBar from "./SearchBar/SearchBar";
import Topics from "./Topics/Topics";
import WhoFollow from "./who-follow/who-follow";

const RightSideBar = () => {
	return (
		<div className="w-[350px] min-h-screen">
			<SearchBar></SearchBar>
			<Premium></Premium>
			<Topics></Topics>
			<WhoFollow></WhoFollow>
			<Footer></Footer>
		</div>

	)
}
export default RightSideBar;