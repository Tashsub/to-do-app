const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const tasks_routes = require("./routes/tasks")

const app = express();
app.use(express.json()); //we need this as any requests come in as json and we need objects
app.use(cors());
app.use('/api/tasks', tasks_routes)

const port = 3001;

mongoose.connect(
	"mongodb+srv://userRoot:UHstZdr6w@cluster0.bewr1.mongodb.net/to-do-app-db?retryWrites=true&w=majority"
);

app.listen(port, () => {
	console.log("server is running on port " + port);
});
