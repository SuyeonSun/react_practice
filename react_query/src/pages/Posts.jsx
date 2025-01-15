// App.jsx

// /posts -> ["posts"]
// /posts/1 -> ["posts", post.id]
// /posts?authorId=1 -> ["posts", {authorId: 1}]
// /posts/2/comments -> ["posts", post.id, "comments"]

import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function Posts() {
  const queryClient = useQueryClient();

  // Fetch posts
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3001/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      return response.json();
    },
  });

  // Add new post
  const addPostMutation = useMutation({
    mutationFn: async (newPost) => {
      const response = await fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });
      if (!response.ok) {
        throw new Error("Failed to add post");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  // Delete post
  const deletePostMutation = useMutation({
    mutationFn: async (postId) => {
      const response = await fetch(`http://localhost:3001/posts/${postId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete post");
      }
      return postId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const handleAddPost = () => {
    const newPost = {
      title: "New Post",
      body: "This is a new post content.",
    };
    addPostMutation.mutate(newPost);
  };

  const handleDeletePost = (postId) => {
    deletePostMutation.mutate(postId);
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => handleDeletePost(post.id)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddPost}>
        {addPostMutation.isLoading ? "Adding Post..." : "Add Post"}
      </button>
    </div>
  );
}

export default Posts;
