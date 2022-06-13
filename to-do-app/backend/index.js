const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const tasks_routes = require("./routes/tasks");
require("dotenv").config();

const app = express();
app.use(express.json()); //we need this as any requests come in as json and we need objects
app.use(cors());
app.use("/api/tasks", tasks_routes);

const port = process.env.PORT;

const pass = process.env.MONGODBPASS;

mongoose.connect(process.env.MONGOURL);

app.listen(port || 3001, () => {
	console.log("server is running on port " + port);
});
