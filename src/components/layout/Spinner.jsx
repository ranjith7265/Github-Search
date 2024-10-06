import loadingGIF from "../../assets/loading.gif";

function Spinner() {
	return (
		<div className="w-full mx-auto mt-20 felx-row items-center">
			<img src={loadingGIF} alt="loading..."></img>
		</div>
	);
}

export default Spinner;
