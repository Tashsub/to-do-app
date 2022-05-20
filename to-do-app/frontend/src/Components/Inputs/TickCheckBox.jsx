import React from "react";
import "../../scss/Inputs.scss";

export default function TickCheckBox({ completed }) {
	const styling = {
		fontSize: "0.5cm",
		margin: "0cm",
		paddingLeft: "0cm",
	};

	return (
		<div className="pretty p-curve p-icon p-smooth p-bigger" style={styling}>
			<input type="checkbox" defaultChecked={completed} />
			<div className="state p-success">
				<i
					className="icon fa fa-check"
					style={{
						paddingTop: "0.2cm",
						paddingLeft: "0.1cm",
					}}
				></i>
				<label></label>
			</div>
		</div>
	);
}
