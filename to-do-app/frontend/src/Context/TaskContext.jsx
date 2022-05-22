import { createContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { api } from "../api";

const TaskContext = createContext({
	tasks: [],
	addTask: (title, description, priority) => {},
	removeTask: (taskId) => {},
	updateTasks: (taskId) => {},
});

export const TaskContextProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		api.get("tasks").then((response) => {
			setTasks(response.data);
		});
	}, [tasks]);

	const addTaskHandler = (task) => {
		console.log(task);
		setTasks((previousState) => {
			return [task, ...previousState];
		});
	};

	const updateTaskHandler = (updatedTasks) => {
		setTasks(updatedTasks)
	};

	return (
		<TaskContext.Provider value={{ tasks: tasks, addTask: addTaskHandler, updateTasks: updateTaskHandler }}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;
