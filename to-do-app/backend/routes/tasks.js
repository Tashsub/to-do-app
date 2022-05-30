const express = require("express");
const taskController = require("../controllers/tasks");

const router = express.Router();

router.get("/", taskController.getTasks);

router.post("/", taskController.createTask);

router.put("/:id", taskController.updateTask);

module.exports = router;
