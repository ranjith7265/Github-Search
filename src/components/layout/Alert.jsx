import React, { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";
import { IoIosAlert } from "react-icons/io";

function Alert() {
	const { alert } = useContext(AlertContext);
	return (
		alert !== null && (
			<p className="flex item-start mb-4">
				<IoIosAlert className="mr-2" />
				{alert.msg}
			</p>
		)
	);
}

export default Alert;
