import Tab from "../Tab/Tab"
import ForYou from "./ForYou"

const HomeComponent = () => {
	return (
		<Tab activeTab="for-you" >
			<Tab.Items >
				<Tab.Item id="for-you">
					Sana Özel
				</Tab.Item>
				<Tab.Item id="followings">
					Takip Edilenler
				</Tab.Item>
			</Tab.Items>
			<Tab.Content id="for-you">
				<ForYou></ForYou>
			</Tab.Content>
			<Tab.Content id="followings">
				content 2
			</Tab.Content>
		</Tab>
	)
}
export default HomeComponent