import { Link } from "react-router-dom"
import { topics } from "../../../data/MainMenuData/MenuData"
import Topic from "../Topic/Topic"

const Topics = () => {
	return (
		<section className="bg-[#16181c] mb-4 rounded-2xl border border-[#16181c]">
			<p className="py-3 text-xl font-bold leading-6 px-4 flex items-center">İlgini Çekebilecek Gündemler</p>
			<div className="grid">
				{topics.map((topic, index) => {
					return <Topic item={topic} key={index} />
				})}
				<Link to="/trends" className="h-[52px] flex px-4 items-center text-[15px] text-[#1d9bf0] hover:bg-white/[0.3] transition-colors" >
					Daha Fazla Göster
				</Link>
			</div>

		</section>
	)
}

export default Topics
