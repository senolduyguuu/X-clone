import { posts } from "../../Mock/Post";
import PostData from "../Post/PostData";

const ForYou = () => {
	return (
		<>
			{posts.map((post) => <PostData post={post} key={post.id} />)}
		</>
	);
}

export default ForYou;
