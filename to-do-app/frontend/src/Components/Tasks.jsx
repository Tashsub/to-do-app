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
					key={task.task_id}
					taskId={task.task_id}
					completed={task.completed}
					title={task.title}
					priority={task.priority}
					toggleModal={toggleModal}
				/>
			))}
		</div>
	);
}
