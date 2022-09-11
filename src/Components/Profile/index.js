import { Typography } from "@mui/material";

export default function Profile({ loggedInUsername }) {
  console.log(loggedInUsername);
  return (
    <div>
      <Typography variant="h3">Welcome {loggedInUsername}</Typography>;
      <Typography variant="body2">Messages to Me:</Typography>;
      <Typography variant="body2">Messages from Me:</Typography>;
    </div>
  );
}
