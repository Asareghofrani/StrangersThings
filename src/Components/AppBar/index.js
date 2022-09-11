import { Link } from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function MyAppBar() {
  const [_, forceUpdate] = useState();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#1e3c42" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Stranger's Things
          </Typography>
          {localStorage.getItem("token") ? (
            <>
              <Button
                sx={{
                  color: "white",
                }}
              >
                <Link
                  to={"/profile"}
                  style={{
                    color: "white",
                    textDecoration: "unset",
                    marginRight: "16px",
                  }}
                >
                  Profile
                </Link>
              </Button>
              <Button>
                <Link
                  to={"/home"}
                  style={{
                    color: "white",
                    textDecoration: "unset",
                  }}
                >
                  Home
                </Link>
              </Button>

              <Button>
                <Link
                  to={"/posts"}
                  style={{
                    color: "white",
                    textDecoration: "unset",
                    marginLeft: "16px",
                  }}
                >
                  Posts
                </Link>
              </Button>
              <Button
                sx={{
                  color: "white",
                }}
                onClick={() => {
                  localStorage.removeItem("token");
                  forceUpdate({});
                }}
              >
                <Link
                  to={"/login"}
                  style={{
                    color: "white",
                    textDecoration: "unset",
                    marginRight: "16px",
                  }}
                >
                  Logout
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button
                sx={{
                  color: "white",
                }}
              >
                <Link
                  to={"/login"}
                  style={{
                    color: "white",
                    textDecoration: "unset",
                    marginRight: "16px",
                  }}
                >
                  Login
                </Link>
              </Button>
              <Button>
                <Link
                  to={"/home"}
                  style={{
                    color: "white",
                    textDecoration: "unset",
                  }}
                >
                  Home
                </Link>
              </Button>

              <Button>
                <Link
                  to={"/posts"}
                  style={{
                    color: "white",
                    textDecoration: "unset",
                    marginLeft: "16px",
                  }}
                >
                  Posts
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
