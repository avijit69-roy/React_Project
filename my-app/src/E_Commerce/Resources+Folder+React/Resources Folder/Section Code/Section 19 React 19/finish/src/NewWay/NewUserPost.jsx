import { use, useEffect, useState } from "react";

const NewUserPosts = ({ userPostPromise }) => {
  const posts = use(userPostPromise);

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default NewUserPosts;
