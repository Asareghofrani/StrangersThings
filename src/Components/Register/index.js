import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useCallback, useReducer } from "react";
import { Link } from "react-router-dom";
import { register } from "../../api.js";

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
export default function Register() {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      await register(formState.username, formState.password);
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
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        rowGap: "16px",
      }}
    >
      <Typography variant="h2">Register</Typography>
      <TextField
        sx={{ width: "300px" }}
        required
        type={"text"}
        label="Username"
        name="username"
        value={formState.username}
        onChange={(e) => handleTextChange(e)}
      />
      <TextField
        sx={{ width: "300px" }}
        required
        type={"password"}
        label="Password"
        name="password"
        value={formState.password}
        onChange={(e) => handleTextChange(e)}
      />
      <TextField
        sx={{ width: "300px" }}
        required
        type={"password"}
        label="Confirm Password"
        value={formState.confirmPassword}
        name="confirmPassword"
        onChange={(e) => handleTextChange(e)}
        error={formState.password !== formState.confirmPassword}
        helperText={
          formState.password !== formState.confirmPassword
            ? "password and confirmation field should match"
            : undefined
        }
      />
      <Button
        sx={{ width: "300px" }}
        variant="outlined"
        type="submit"
        disabled={formState.password !== formState.confirmPassword}
      >
        Register
      </Button>
    </form>
  );
}
