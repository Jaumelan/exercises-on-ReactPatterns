import { useState } from "react";

const LikeButton = ({ value, setValue }) => {
  const isControlled = value !== undefined && setValue !== undefined;
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    isControlled ? setValue() : setLikes(likes + 1);
  };

  return (
    <button onClick={handleClick}>
      <span aria-label="fire">🔥</span>
      {isControlled ? value : likes}
    </button>
  );
};

export default LikeButton;
