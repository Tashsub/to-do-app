const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const tasks_routes = require("./routes/tasks");
require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json()); //we need this as any requests come in as json and we need objects
app.use(cors());
app.use(bodyParser.json());
app.use("/api/tasks", tasks_routes);

app.use(express.static(path.join(__dirname, "frontend", "dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

const port = process.env.PORT;

mongoose.connect(process.env.MONGOURL);

app.listen(port || 3001, () => {
	console.log("server is running on port " + port);
});
