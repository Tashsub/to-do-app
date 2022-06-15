import React from "react";
import "../scss/Task.scss";

function ContainerMessage({ text1, text2 }) {
	return (
		<div className="single-task" style={{height: "3cm"}}>
			<div className="task-description-div" >
				<p style={{ paddingLeft: "1cm", textAlign: "center"}}>{text1}</p>
                <p style={{ paddingLeft: "1cm", textAlign: "center" }}>{text2}</p>
			</div>
		</div>
	);
}

export default ContainerMessage;
