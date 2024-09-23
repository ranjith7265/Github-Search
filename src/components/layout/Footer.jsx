import React from "react";

function Footer() {
	const fullYear = new Date().getFullYear();
	const month = new Date().getMonth();
	return (
		<footer className="footer p-10 text-primary-content footer-center">
			<p>
				Created by Ranjith &copy;{month} {fullYear}
			</p>
		</footer>
	);
}

export default Footer;
