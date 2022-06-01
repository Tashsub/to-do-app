const TaskModel = require("../models/Tasks");

const getTasks = async (req, res) => {
	TaskModel.find({}, (error, result) => {
		if (error) {
			res.json(error);
		} else {
			res.json(result);
		}
	});
};

const createTask = async (req, res) => {
	const task = req.body;
	const newTask = new TaskModel(task);
	newTask
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((error) => {
			res.status(500).send({
				message: error.message || "Some error occurred while creating the task",
			});
		});
};

const updateTask = async (req, res) => {
	const task = req.body;

	const id = req.params.id;

	TaskModel.findByIdAndUpdate(id, task, { useFindAndModify: false })
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Can not update this task. Maybe it does not exist`,
				});
			} else {
				res.send({ message: "Task was updated successfully" });
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: `Error updating task with id ${id} because of ${err.message}`,
			});
		});
};

const deleteTask = async (req, res) => {
	const id = req.params.id;
	TaskModel.findByIdAndRemove(id)
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: "This task could not be deleted",
				});
			} else {
				res.send({
					message: `Task: ${data.title}  was successfully deleted`,
				});
			}
		})
		.catch((err) => {
			res.send(500).send({
				message: "There was an error deleting this message: " + err.message,
			});
		});
};

module.exports = {
	getTasks,
	createTask,
	updateTask,
	deleteTask,
};
