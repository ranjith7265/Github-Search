import UserLists from "../users/UserLists";
import UserSearch from "../users/UserSearch";

function Home() {
	return (
		<div>
			<UserSearch />
			<UserLists />
		</div>
	);
}

export default Home;
