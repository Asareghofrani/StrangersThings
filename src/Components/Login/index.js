import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useReducer, forwardRef, useState } from "react";
import { login } from "../../api.js";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const initialState = {
  username: "",
  password: "",
  confirmPassword: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TEXT INPUT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

export default function Login({ setLoggedInUsername }) {
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBarOpen(false);
  };

  const [formState, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const result = await login(formState.username, formState.password);
      if (result.success) {
        setLoginMessage(result.data.message);
        localStorage.setItem("token", result.data.token);
        console.log(formState.username);
        setLoggedInUsername(formState.username);
        setSnackBarOpen(true);
        navigate("/home");
      }
    },
    [formState.username, formState.password]
  );
  const handleTextChange = (e) => {
    dispatch({
      type: "TEXT INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <form
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        rowGap: "16px",
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h2">Log In</Typography>
      <TextField
        sx={{ width: "300px" }}
        required
        type={"text"}
        label="Username"
        name="username"
        onChange={(e) => handleTextChange(e)}
        value={formState.username}
      />
      <TextField
        sx={{ width: "300px" }}
        required
        type={"password"}
        label="password"
        name="password"
        onChange={(e) => handleTextChange(e)}
        value={formState.password}
      />
      <Button sx={{ width: "300px" }} variant="outlined" type="submit">
        Login
      </Button>
      <Link
        to={"/register"}
        style={{
          textDecoration: "unset",
        }}
      >
        Don't have an Account? Sign Up
      </Link>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={snackBarOpen}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {loginMessage}
          </Alert>
        </Snackbar>
      </Stack>
    </form>
  );
}
