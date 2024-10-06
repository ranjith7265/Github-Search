import { useState, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import AlertContext from "../context/alert/AlertContext";
function UserSearch() {
	const { users, searchUsers, clearUsers } = useContext(GithubContext);
	const { setAlert } = useContext(AlertContext);

	const [text, setText] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();

		if (text === "") {
			setAlert("Please enter search value!!", "error");
		} else {
			searchUsers(text);
			setText("");
		}
	};
	return (
		<div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
			<form onSubmit={handleSubmit}>
				<div className="form-control">
					<div className="relative">
						<input
							name="Search"
							type="text"
							className="bg-yellow-300  placeholder:text-slate-800 w-full pr-40 input input-lg"
							placeholder="Search"
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
						<button
							type="submit"
							className="bg-amber-400 absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
						>
							GO
						</button>
					</div>
				</div>
				{users.length > 0 && (
					<div>
						<button className="btn btn-ghost btn-lg mt-2" onClick={clearUsers}>
							Clear
						</button>
					</div>
				)}
			</form>
		</div>
	);
}

export default UserSearch;
