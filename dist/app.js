"use strict";
const express = require("express");
const todoRouter = require("./routes/todo");
const app = express();
app.use(express.json());
app.use("/todos", todoRouter);
app.listen(3000, () => {
    console.log("Server started on the port 3000");
});
