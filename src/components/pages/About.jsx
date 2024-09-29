import React from "react";
import { FaUser, FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";

function About() {
	return (
		<div className="w-full mx-auto">
			<div>
				<h2 className="text-3xl font-semibold mb-4">
					Welcome to GitHub Finder!
				</h2>
				<p>
					This project is a simple and intuitive web application that allows
					users to search for GitHub profiles and repositories using the GitHub
					API. Whether you're looking for developers, organizations, or
					exploring interesting repositories, GitHub Finder provides a seamless
					experience for accessing information directly from GitHub.
				</p>
			</div>
			<h2 className="text-2xl font-bold mt-6">Technologies Used</h2>
			<div className="py-5 mt-2 mb-6 rounded-lg shadow-md bg-base-100 stats">
				<div className="stat">
					<div className="stat-figure text-secondary">
						<FaReact color="#03A9F4" className="text-3xl md:text-5xl" />
					</div>
					<div className="stat-title pr-5">React</div>
					<div className="stat-value pr-5 text-3xl md:text-4xl"></div>
				</div>
				<div className="stat">
					<div className="stat-figure text-secondary">
						<FaGithub color="#000" className="text-3xl md:text-5xl" />
					</div>
					<div className="stat-title pr-5">Github API</div>
					<div className="stat-value pr-5 text-3xl md:text-4xl"></div>
				</div>
				<div className="stat">
					<div className="stat-figure text-secondary">
						<RiTailwindCssFill
							color="#03A9F4"
							className="text-3xl md:text-5xl"
						/>
					</div>
					<div className="stat-title pr-5">Tailwind CSS</div>
					<div className="stat-value pr-5 text-3xl md:text-4xl"></div>
				</div>
				<div className="stat">
					<div className="stat-figure text-secondary">
						<SiDaisyui color="#5379D2" className="text-3xl md:text-5xl" />
					</div>
					<div className="stat-title pr-5">Daisy UI</div>
					<div className="stat-value pr-5 text-3xl md:text-4xl"></div>
				</div>
			</div>
			<div>
				<h2 className="text-2xl font-bold mt-6">Key Features:</h2>
				<ul class="space-y-2 list-none list-inside mt-4">
					<li>
						<span className="font-bold">Profile Search: </span> Find GitHub
						users by username, displaying their key information like bio,
						location, public repositories, followers, and following count.
					</li>
					<li>
						<span className=" font-bold">Responsive Design: </span>Built with a
						mobile-first approach, the app works flawlessly across all screen
						sizes.
					</li>
					<li>
						<span className="font-bold">useContext + useReducer:</span>
						For managing global state efficiently, providing a scalable
						structure for handling complex state logic within the app.
					</li>
					<li>
						<span className="font-bold">Theme: </span>
						DaisyUI’s Cyberpunk theme to create a bold, futuristic look for the
						app’s user interface.
					</li>
				</ul>
			</div>
			<div className="mt-6">
				<h2 className="text-3xl font-semibold mb-4">How It Works:</h2>
				<p>
					Simply enter the username of any GitHub user in the search bar, and
					the application will fetch their public profile details using GitHub's
					API. You can also view the user's repositories and check their details
					such as the number of stars, forks, and descriptions.
				</p>
			</div>
		</div>
	);
}

export default About;
