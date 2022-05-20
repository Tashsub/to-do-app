import app from "../index"; 
const TaskModel = require("../models/tasks");

const ("/getTasks", (req, res) => {
	TaskModel.find({}, (error, result) => {
		if (error) {
			res.json(error);
		} else {
			res.json(result);
		}
	});
});

post("/createTask", async (req, res) => {
	//body exists inside req
	//front ent will send body
	const task = req.body;
	const newTask = new TaskModel(task);
	await newTask.save();
	res.json(task);
});

patch("/editTask", async (req, res) => {
	//body exists inside req
	//front ent will send body
	const task = req.body;
	const newTask = new TaskModel(task);
	await newTask.save();
	res.json(task);
});