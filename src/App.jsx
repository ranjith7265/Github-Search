import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import "./App.css";

function App() {
	return (
    <Router>
		<div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main>main</main>
      <footer>@2024</footer>
    </div>
    </Router>
	);
}

export default App;
