import React from "react";
import "../scss/Menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouseChimney} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

export default function Menu() {
	return (
		<div className="menu-div">
            <button name="woo" className="menu-button"> <FontAwesomeIcon icon={faHouseChimney} color={'#3B7CF4'}/> </button>
            <button className="menu-button"> <FontAwesomeIcon icon={faStar} color={'#FFD233'}/> </button>
            <button className="menu-button"> <FontAwesomeIcon icon={faSquareCheck} color={'#5CB85B'}/> </button>
            <button className="menu-button"> <FontAwesomeIcon icon={faSquare} color={'#848484'}/> </button>

		</div>
	);
}
