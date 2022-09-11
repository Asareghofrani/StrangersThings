import "./App.css";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Login, Posts, Home, Register, Profile, MyAppBar } from "./Components";
import CreateForm from "./Components/Posts/CreateForm";

function App() {
  const [loggedInUsername, setLoggedInUsername] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <MyAppBar />
        <Routes>
          <Route
            path="/"
            element={<Login setLoggedInUsername={setLoggedInUsername} />}
          ></Route>
          <Route
            path="/login"
            element={<Login setLoggedInUsername={setLoggedInUsername} />}
          ></Route>
          <Route
            path="/home"
            element={<Home loggedInUsername={loggedInUsername} />}
          ></Route>
          <Route
            path="/posts"
            element={<Posts loggedInUsername={loggedInUsername} />}
          ></Route>
          <Route path="/posts/add" element={<CreateForm />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/profile"
            element={<Profile loggedInUsername={loggedInUsername} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
