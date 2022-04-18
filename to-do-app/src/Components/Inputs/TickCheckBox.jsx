import React from "react";
import "../../scss/Inputs.scss"

export default function TickCheckBox({completed}) {
    const styling= {
        fontSize:"0.5cm", 
        margin: "0cm"
    }

	return (
		<div class="pretty p-curve p-icon p-smooth p-bigger" style={styling}>
        <input type="checkbox" defaultChecked={completed}/>
        <div class="state p-success">
            <i class="icon fa fa-check"></i>
            <label></label>
        </div>
    </div>
	);
}
