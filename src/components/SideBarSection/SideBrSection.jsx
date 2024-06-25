import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function SidebarSection({ title, children, more }) {
	return (
		<section className="bg-[#16181c] mb-4 rounded-2xl border border-[#16181c]">
			<h5 className="py-3 px-4 text-xl font-extrabold leading-6 flex items-center">
				{title}
			</h5>
			<div className="grid">
				{children}
			</div>
			{more && (
				<Link
					to={more}
					className="h-[52px] flex px-4 items-center text-[15px] text-[#1d9bf0] hover:bg-white/[0.3] transition-colors"
				>
					Daha fazla göster
				</Link>
			)}
		</section>
	)
}

SidebarSection.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

SidebarSection.defaultProps = {
	more: false
}