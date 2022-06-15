import { createContext, useEffect, useState } from "react";
import { api } from "../api";
import { modes } from "./Modes";;

const TaskContext = createContext({
	tasks: [],
	addTask: (title, description, priority) => {},
	removeTask: (taskId) => {},
	updateTasks: (taskId) => {},
	updateMode: (mode) => {},
	mode: "",
});

export const TaskContextProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);
	const [mode, setMode] = useState("home");
	const [loading, setIsLoading] = useState(true) //move to external config file later


	useEffect(() => {
		api.get("tasks").then((response) => {
			switch (mode) {
				case modes.home:
					setTasks(response.data);
					break;
				case modes.priority:
					const prio = response.data.filter((task) => task.priority === true);
					setTasks(prio);
					break;
				case modes.completed:
					const comp = response.data.filter((task) => task.completed === true);
					setTasks(comp);
					break;
				case modes.notcompleted:
					const uncomp = response.data.filter(
						(task) => task.completed === false
					);
					setTasks(uncomp);
					break;
				default:
					setTasks(response.data);
					break;
				
			}
		});
	}, [tasks, mode]);

	const addTaskHandler = (task) => {
		setTasks((previousState) => {
			return [task, ...previousState];
		});
	};

	const updateTaskHandler = (updatedTasks) => {
		setTasks(updatedTasks);
	};

	const changeModeHandlr = (newMode) => {
		setMode(newMode);
	};

	const updateLoadingHandler =(bool)=>{
		setIsLoading(bool); 
	}

	return (
		<TaskContext.Provider
			value={{
				tasks: tasks,
				addTask: addTaskHandler,
				updateTasks: updateTaskHandler,
				updateMode: changeModeHandlr,
				mode: mode, 
				loading: loading, 
				updateLoading: updateLoadingHandler
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;
