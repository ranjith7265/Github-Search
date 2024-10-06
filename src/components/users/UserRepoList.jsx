import ReposItem from "./ReposItem";
import PropTypes from "prop-types";

function UserRepoList({ repos }) {
	return (
		<div className="rounded-lg shadow-lg card bg-base-100">
			<div className="card-body">
				<h2 className="text-3xl my-4 font-bold card-title">
					Top 10 Respositiories
				</h2>
				{repos.map((repo) => (
					<ReposItem key={repo.id} repo={repo} />
				))}
			</div>
		</div>
	);
}

UserRepoList.propTypes = {
	repos: PropTypes.array.isRequired,
};

export default UserRepoList;
