import { createTodo, getTodos, deleteTodos } from "../controllers/todo";

const { Router } = require("express");

const router = Router();

router.post("/", createTodo);

router.get("/", getTodos);

module.exports = router;
