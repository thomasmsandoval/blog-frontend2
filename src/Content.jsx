import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";

export function Content() {
  const [posts, setPosts] = useState([]);
  const handleIndexPosts = () => {
    console.log("handleIndexPosts");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
      console.log(posts);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <h1>Welcome to React!</h1>
      <PostsIndex />
    </div>
  );
}
