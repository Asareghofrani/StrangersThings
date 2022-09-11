import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { addPost as createPost } from "../../../api.js";
import { useNavigate } from "react-router-dom";

export default function CreateForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, SetDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const addPost = async (e) => {
    e.preventDefault();
    await createPost(
      {
        title,
        description,
        price,
        location,
        willDeliver,
      },
      localStorage.getItem("token")
    );
    navigate("/posts");
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: "16px",
      }}
      onSubmit={addPost}
    >
      <Typography variant="h3">Add New Post</Typography>
      <TextField
        sx={{ width: "400px" }}
        required
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        sx={{ width: "400px" }}
        required
        label="Description"
        value={description}
        onChange={(e) => SetDescription(e.target.value)}
      />
      <TextField
        sx={{ width: "400px" }}
        required
        label="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <TextField
        sx={{ width: "400px" }}
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={willDeliver}
              onChange={(e) => setWillDeliver(e.target.checked)}
            />
          }
          label="Willing to Deliver?"
        />
      </FormGroup>
      <Button sx={{ width: "400px" }} variant="outlined" type="submit">
        Create
      </Button>
    </form>
  );
}
