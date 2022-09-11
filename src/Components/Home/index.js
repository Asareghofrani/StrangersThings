import { Typography, Button } from "@mui/material";

export default function Home({ loggedInUsername }) {
  return (
    <div>
      <Typography variant="h3">Welcome to Stranger's Things!</Typography>
      <Typography variant="h5">Logged in as {loggedInUsername}</Typography>
      {/* <Button variant="outlined">VIEW PROFILE</Button> */}
    </div>
  );
}
