import { useContext } from "react";
import { AllTodoPage } from "./pages";
import { DesktopMenu } from "./components/DesktopMenu";
import Dasboard from "./components/Dashboard/Dasboard";
import AddTodo from "./components/AddTodo/AddTodo.jsx";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Avatar, Button, Typography, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Routes, Route } from "react-router-dom";
import TodoContext from "./components/store/todo-context.js";

import Form from "./components/Form/Form.jsx";

function App() {
  const todoCtx = useContext(TodoContext);
  return (
    <>
      {!todoCtx.isLoggedIn && <Form />}
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Box
          sx={{
            marginTop: "2rem",
            marginLeft: "2rem",
          }}
        >
          <DesktopMenu />
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: "2rem" }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" sx={{ color: "white" }}>
                Todo Applicaton
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Avatar sx={{ width: 50, height: 50 }}>
                  <AccountCircleIcon />
                </Avatar>
              </Box>
            </Box>
            <Routes>
              <Route path="/" element={<Dasboard />} />
              <Route path="/Todo" element={<AllTodoPage />} />
              <Route path="/AddTodo" element={<AddTodo />} />
            </Routes>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;
