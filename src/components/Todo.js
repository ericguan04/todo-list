//Todo.js manages the "todos" after you click submit

import React from "react";
import { Close } from "@mui/icons-material";
import { ListItem, Typography, IconButton, Checkbox } from "@mui/material";

function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return(
        <ListItem style={{ display: "flex" }}>
            <Checkbox 
                checked={todo.completed}
                onClick={handleCheckboxClick} 
            />
            <Typography
                variant="body1"
                style={{
                    textDecoration: todo.completed ? "line-through" : null,
                }}
            >
                {todo.task}
            </Typography>
            <IconButton onClick={handleRemoveClick}>
                <Close />
            </IconButton>
        </ListItem>
    );
}

export default Todo;