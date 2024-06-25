/* eslint-disable react/no-unescaped-entities */
// import Button from "~/components/button";
import Button from "../../../components/ButtonComponent/button";
export default function Premium() {
	return (
		<section
			className="bg-[#16181c] mb-4 rounded-2xl  border-[#1618b1c] py-3 px-4 flex flex-col gap-2.5"
		>
			<h6 className="text-xl leading-6 font-extrabold">Premium'a Abone Ol</h6>
			<p className="leading-5 font-bold">
				Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.
			</p>
			<div className=" py-4  flex align-center justify-center bg-button hover:bg-cyan-600 rounded-full">
				<Button >Gönder</Button>
			</div>
		</section>
	)
}