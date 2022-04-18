import React from "react";
import Task from "./Task";
import "../scss/Task.scss";
import dummyData from "../data/dummyData.json";

export default function Tasks() {
	return (
		<div className="all-tasks">
			{dummyData.map((task) => (
				<Task
					key={task.id}
					completed={task.completed}
					description={task.description}
					priority={task.priority}
				/>
			))}
		</div>
	);
}
