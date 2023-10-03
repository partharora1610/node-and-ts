"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodos = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../db/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    // this should give me an error
    const body = req.body;
    const id = Math.random().toString();
    const newTodo = new todo_1.Todo(id, body.text);
    TODOS.push(newTodo);
    res.status(200).json({
        data: { todo: newTodo },
        message: "Created a new todo",
    });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.status(200).json({
        data: {
            todos: TODOS,
        },
        message: "All Todos Returned",
    });
};
exports.getTodos = getTodos;
const deleteTodos = (req, res, next) => {
    const id = req.params.id;
    // changing teh database
    TODOS.filter((t) => t.id != id);
    res.status(200).json({
        data: {
            data: null,
        },
        message: "Todo Deleted",
    });
};
exports.deleteTodos = deleteTodos;
