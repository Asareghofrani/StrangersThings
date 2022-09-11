import { Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../api";
import Post from "./Post";

export default function Posts({ loggedInUsername }) {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  function postMatches(post, text) {
    if (
      post.title.toLowerCase().includes(text) |
      post.description.toLowerCase().includes(text) |
      post.price.toLowerCase().includes(text) |
      post.author.username.toLowerCase().includes(text)
    ) {
      return true;
    } else {
      return false;
    }
  }
  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  useEffect(() => {
    const getPosts = async () => {
      const results = await fetchPosts();
      setPosts(results.data.posts);
    };
    getPosts();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          columnGap: "16px",
          marginTop: "16px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">Posts</Typography>
        <TextField
          variant="standard"
          label="Search Posts"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></TextField>
        <Button variant="text">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"/posts/add"}
          >
            (ADD POST)
          </Link>
        </Button>
      </div>
      {postsToDisplay.map(
        ({ title, _id, location, author, price, description }) => {
          return (
            <Post
              loggedInUsername={loggedInUsername}
              key={_id}
              id={_id}
              name={title}
              seller={author.username}
              description={description}
              price={price}
              location={location}
            />
          );
        }
      )}
    </>
  );
}
