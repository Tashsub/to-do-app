import React, { useContext } from "react";
import Task from "./Task";
import "../scss/Task.scss";
import TaskContext from "../Context/TaskContext";

export default function Tasks({ toggleModal }) {
	const { tasks } = useContext(TaskContext);

	return (
		<div className="all-tasks">
			{tasks.map((task) => (
				<Task
					key={task._id}
					taskId={task._id}
					completed={task.completed}
					title={task.title}
					description={task.description}
					priority={task.priority}
					toggleModal={toggleModal}
				/>
			))}
		</div>
	);
}
