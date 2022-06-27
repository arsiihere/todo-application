import React, { useState, useEffect, useContext } from "react";
import TodoContext from "../store/todo-context.js";

import {
  Paper,
  List,
  Modal,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import UpdateModal from "../Modals/Model.jsx";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { styled } from "@mui/material/styles";

const DisplayTodoList = styled(Paper)(({ theme }) => ({
  backgroundColor: "#2F394F",
  color: "white",
}));

const ActionButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "variant",
})(({ variant, theme }) => ({
  cursor: "pointer",
  ...(variant === "succcess" && {
    color: theme.palette.success.light,
    inset: theme.shadows[24],
    transition: "all 150ms",
    "&:hover": {
      backgroundColor: theme.palette.grey[50],
      transform: "scale(1.2)",
    },
    "&:active": {
      transform: "scale(0.9)",
    },
    backgroundColor: theme.palette.grey[50],
  }),
  ...(variant === "danger" && {
    color: "#fff",
    transition: "all 150ms",

    backgroundColor: theme.palette.error.light,
    "&:hover": {
      backgroundColor: theme.palette.error.light,
      transform: "scale(1.2)",
    },
    "&:active": {
      transform: "scale(0.9)",
    },
    inset: theme.shadows[25],
  }),
  ...theme,
}));

function TodoList() {
  const [currTodo, setCurrTodo] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const todoCtx = useContext(TodoContext);

  // useEffect(() => {
  //   const fetchAllTodo = async () => {
  //     const data = await fetch(
  //       "https://mytodo-express-api.herokuapp.com/api/task/all",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "x-access-token": `Bearer ${window.localStorage.getItem(
  //             "access_token"
  //           )}`,
  //         },
  //       }
  //     );

  //     const response = await data.json();
  //     console.log(response);
  //   };

  //   fetchAllTodo();
  // }, []);

  const updateTodoHandler = (id, updatedText) => {
    todoCtx.updateTodo({ id: id, name: updatedText });
  };

  return (
    <DisplayTodoList sx={{ padding: "20px", marginTop: "20px" }}>
      <Typography variant="h2">All Todos</Typography>
      {currTodo && (
        <UpdateModal
          open={isModalOpen}
          item={currTodo}
          SetModal={setIsModalOpen}
          updateTodo={updateTodoHandler}
        />
      )}
      <List>
        {todoCtx.allTodos?.map((el) => (
          <ListItem key={el.id}>
            <ListItemText primary={el.name} />
            <ActionButton sx={{ marginRight: "10px" }} variant={"succcess"}>
              <DoneIcon />
            </ActionButton>
            <ActionButton
              sx={{ marginRight: "10px" }}
              variant={"succcess"}
              onClick={() => {
                setCurrTodo(el);
                console.log(currTodo);
                setIsModalOpen(true);
              }}
            >
              <EditIcon />
            </ActionButton>
            <ActionButton
              sx={{ marginRight: "10px" }}
              variant={"danger"}
              onClick={() => todoCtx.deleteTodo(el.id)}
            >
              <ClearIcon />
            </ActionButton>
          </ListItem>
        ))}
      </List>
    </DisplayTodoList>
  );
}

export default TodoList;
