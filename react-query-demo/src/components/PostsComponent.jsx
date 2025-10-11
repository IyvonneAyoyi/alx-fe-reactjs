import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const PostsComponent = () => {
  const {
    data,
    error,
    isError,   // add isError
    isLoading,
    isFetching,
    refetch,
  } = useQuery("posts", fetchPosts, {
    // cache for 5 minutes
    cacheTime: 1000 * 60 * 5,

    // prevents refetch when window is focused
    refetchOnWindowFocus: false,

    // keeps old data while fetching new data
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading posts...</p>;
  /* update to use isError */
  if (isError) return <p>Error: {error.message}</p>;  

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      {isFetching && <p>Updating...</p>}
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
