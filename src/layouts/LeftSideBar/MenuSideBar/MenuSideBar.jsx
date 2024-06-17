import classNames from "classnames";
import { NavLink } from "react-router-dom";
import Button from "../../../components/ButtonComponent/button";
import mainMenu from "../../../data/MainMenuData/MenuData";
import MenuPopOver from "./MenuPopOver";

const MenuSideBar = () => {
	return (
		<div className="mt-0.5 mb-1">
			<nav>
				{mainMenu.map((menu, index) => (
					<NavLink
						key={menu.id || index}
						to={menu.path}
						className={({ isActive }) =>
							classNames(
								"py-1 block group",
								{ "font-bold": isActive }
							)
						}
					>
						{({ isActive }) => (
							<div className="inline-flex gap-5 p-3 rounded-full items-center group-hover:bg-[#538b991a]">
								<div className="relative">
									{menu.notification && (
										<span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -right-1 -top-1.5 flex items-center justify-center">
											{menu.notification}
										</span>
									)}
									{isActive ? menu.icon.active : menu.icon.passive}
								</div>
								<p className="pr-4 text-xl">{menu.title}</p>
							</div>
						)}
					</NavLink>
				))}
				<MenuPopOver />
				<div className="py-4 w-[90%] flex align-center justify-center bg-button hover:bg-cyan-600 rounded-full">
					<Button>Gönder</Button>
				</div>

			</nav>
		</div>
	);
};

export default MenuSideBar;
