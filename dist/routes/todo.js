"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("../controllers/todo");
const { Router } = require("express");
const router = Router();
router.post("/", todo_1.createTodo);
router.get("/", todo_1.getTodos);
module.exports = router;
