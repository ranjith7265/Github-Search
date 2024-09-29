import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	const searchUsers = async (text) => {
		const params = new URLSearchParams({
			q: text,
		});
		setLoading();
		const resp = await fetch(`https://api.github.com/search/users?${params}`);
		const { items } = await resp.json();
		dispatch({
			type: "GET_USERS",
			payload: items,
		});
	};

	const userRepos = async (login) => {
		const params = new URLSearchParams({
			sort: "created",
			per_page: 10,
		});
		setLoading();
		const resp = await fetch(`https://api.github.com/users/${login}/repos?${params}`);
		const data = await resp.json();
		dispatch({
			type: "GET_USER_REPOS",
			payload: data,
		});
	};

	const getUser = async (login) => {
		setLoading();
		const resp = await fetch(`https://api.github.com/users/${login}`);
		if (resp.status === 404) {
			window.location = "./notfoundsfsdfsdf";
		} else {
			const data = await resp.json();
			dispatch({
				type: "GET_USER",
				payload: data,
			});
		}
	};

	const setLoading = () =>
		dispatch({
			type: "SET_LOADING",
		});

	const clearUsers = () => {
		dispatch({
			type: "GET_USERS",
			payload: [],
		});
	};

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				loading: state.loading,
				user: state.user,
				repos: state.repos,
				searchUsers,
				clearUsers,
				getUser,
				userRepos,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
