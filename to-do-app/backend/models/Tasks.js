const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    user_id:{
        type: String, 
        required: true, 
    },
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
	},
	priority: {
		type: Boolean,
	}
});

//1st param of model name of the collection, where to store it
//2nd param of model is the schema that represents the model
const TaskModel = mongoose.model("tasks", TaskSchema);

module.exports = TaskModel;
