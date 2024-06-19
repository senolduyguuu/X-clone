import { useParams } from "react-router-dom";

const Profile = () => {
	const { slug } = useParams()
	return (
		<p>Profil Sayfası + {slug}</p>
	)
};
export default Profile;