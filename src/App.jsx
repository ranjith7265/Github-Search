import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="flex flex-col justify-between h-screen">
				<Navbar />
				<div className="container px-3 pb-20 mx-auto">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/*" element={<NotFound />} />
					</Routes>
				</div>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
