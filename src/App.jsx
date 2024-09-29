import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import { GithubProvider } from "./components/context/github/GithubContext";
import { AlertProvider } from "./components/context/alert/AlertContext";
import "./App.css";

function App() {
	return (
		<GithubProvider>
			<AlertProvider>
				<Router>
					<div className="flex flex-col justify-between h-screen">
						<Navbar title={"Github-Finder"} />
						<div className="container px-3 pb-20 mx-auto">
							<Alert />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/about" element={<About />} />
								<Route path="/user/:login" element={<User />} />
								<Route path="/*" element={<NotFound />} />
							</Routes>
						</div>

						<Footer />
					</div>
				</Router>
			</AlertProvider>
		</GithubProvider>
	);
}

export default App;
