import React, { useContext } from "react";
import Task from "./Task";
import "../scss/Task.scss";
import TaskContext from "../Context/TaskContext";
import ContainerMessage from "./ContainerMessage";

export default function Tasks({ toggleModal }) {
	const { tasks } = useContext(TaskContext);
	const message1 = "You haven't created any tasks yet!";
	const message2 = " Click the '+' icon in the bottom right to create one!";

	const displayTasks = tasks.map((task) => (
		<Task
			key={task._id}
			taskId={task._id}
			completed={task.completed}
			title={task.title}
			description={task.description}
			priority={task.priority}
			toggleModal={toggleModal}
		/>
	));

	const noTasksMessage = <ContainerMessage text1={message1}  text2={message2}></ContainerMessage>;

	return (
		<div className="all-tasks">
			{tasks.length > 0 ? displayTasks : noTasksMessage}
		</div>
	);
}
