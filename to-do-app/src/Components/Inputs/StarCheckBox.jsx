import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import "../../scss/Inputs.scss";

export default function StarCheckBox({priority}) {
	const iconSize = 'xl';
	let check = true;

	const changeHandler = () => {
		if (check === true) {
			check = false;
		} else if (check === false) {
			check = true;
		}

		console.log(check);
	};

	return (
		<div class="pretty p-icon p-toggle p-plain" style={{ margin:0}}>
			<input type="checkbox" onChange={changeHandler} defaultChecked={priority}/>

			<div class="state p-off">
				<FontAwesomeIcon icon={faRegularStar} size={iconSize} />
			</div>

			<div class="state p-on p-warning-o">
				<FontAwesomeIcon icon={faSolidStar} size={iconSize} />
			</div>
		</div>
	);
}
