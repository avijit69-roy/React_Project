import React, { useOptimistic, useState } from "react";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const [optimisticIsLiked, addOptimisticIsLiked] = useOptimistic(
    isLiked,
    (state, newState) => newState,
  );

  async function handleLikeAction() {
    const newState = !optimisticIsLiked;
    addOptimisticIsLiked(newState);

    try {
      // Like API
      await new Promise((res) => setTimeout(res, 2000));
      throw new Error("Error in Like API!");

      setIsLiked(newState);
      console.log(`${newState} Like Request Completed!`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form action={handleLikeAction}>
      <button>{optimisticIsLiked ? "❤️" : "🤍"}</button>
    </form>
  );
};

export default LikeButton;
