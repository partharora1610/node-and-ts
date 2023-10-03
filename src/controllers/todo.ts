import { RequestHandler } from "express";
import { Todo } from "../db/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const body = req.body as { text: string };
  const id = Math.random().toString();

  const newTodo = new Todo(id, body.text);
  TODOS.push(newTodo);

  res.status(200).json({
    data: { todo: newTodo },
    message: "Created a new todo",
  });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({
    data: {
      todos: TODOS,
    },
    message: "All Todos Returned",
  });
};

export const deleteTodos: RequestHandler = (req, res, next) => {
  const id: string = req.params.id;

  TODOS.filter((t) => t.id != id);

  res.status(200).json({
    data: {
      data: null,
    },
    message: "Todo Deleted",
  });
};
