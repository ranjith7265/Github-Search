# Welcome to GitHub Search!

This project is a simple and intuitive web application that allows users to search for GitHub profiles and repositories using the GitHub API. Whether you're looking for developers, organizations, or exploring interesting repositories, GitHub Search provides a seamless experience for accessing information directly from GitHub.

## Key Features

- **🔍 Profile Search:** Find GitHub users by their username, displaying key information like bio, location, public repositories, followers, and following count.
- **📱 Responsive Design:** The app works flawlessly across all screen sizes and is built with a mobile-first approach.
- **🌐 Repository Explorer:** View a user's repositories with details like the number of stars, forks, and descriptions.
- **⚙️ Global State Management:** Utilizes `useContext` and `useReducer` for efficient global state management, providing a scalable structure for handling complex state logic.
- **🎨 Cyberpunk Theme:** Incorporates DaisyUI’s Cyberpunk theme to create a bold, futuristic look for the app’s user interface.

## Technologies Used
- **Frontend:** React + Vite
- **API Integration:** GitHub API
- **UI/Styling:** Tailwind CSS and DaisyUI (Cyberpunk theme)
- **State Management:** useContext and useReducer for efficient global state handling

## Live Demo
Check out the live version of the app deployed on Vercel:  
[Live Demo on Vercel](https://github-search-seven-nu.vercel.app/)

## How It Works

1. **Profile Search:**  
   Enter the username of any GitHub user in the search bar, and the application will fetch their public profile details using GitHub's API. This includes information like bio, location, number of public repositories, followers, and following.

2. **Repository Search:**  
   Once a profile is found, the application also allows you to view the user's repositories. Each repository displays details like the repository name, description, number of stars, forks, and more.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/ranjith7265/Github-Search.git

2. Navigate into the project directory:
   ```bash
   cd github-search
   
3. Install dependencies:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm run dev

## Usage
- **Search GitHub Users: Enter a GitHub username in the search bar to retrieve their profile and repository information.
- **Responsive Design: Use the app across devices — desktop, tablet, or mobile — without any issues.
- **Explore Repositories: View detailed information on the user's public repositories, including stars, forks, and descriptions.
- **Custom Themes: Enjoy the futuristic Cyberpunk theme from DaisyUI for a visually engaging experience.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change. Contributions, issues, and feature requests are greatly appreciated.
