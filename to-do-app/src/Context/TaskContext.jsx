import { createContext, useEffect, useState } from "react";
import dummyData from "../data/dummyData.json";
import { nanoid } from "nanoid";

const TaskContext = createContext({
	tasks: [],
	addTask: (title, description, priority) => {},
	removeTask: (taskId) => {},
});

export const TaskContextProvider = ({ children }) => {
	const [tasks, setTasks] = useState(dummyData);

	const addTaskHandler = (title, description, priority) => {
		const completed = false;

		const taskToAdd = {
			id: nanoid(4),
			title,
			description,
			completed,
			priority,
		};

		setTasks((previousState) => {
			return [taskToAdd, ...previousState];
		});
	};

	return (
		<TaskContext.Provider value={{ tasks: tasks, addTask: addTaskHandler }}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;
