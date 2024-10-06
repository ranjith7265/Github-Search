import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="text-center">
			<h1 className="text-6xl mb-4">Opps!</h1>
			<h2 className="text-4xl mb-4"> 404-Page Not Found!</h2>
			<Link
				class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
				to="/"
			>
				<IoIosArrowBack className="mr-2" />
				Back to Home
			</Link>
		</div>
	);
}

export default NotFound;
