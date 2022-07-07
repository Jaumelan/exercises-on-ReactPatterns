import { useState } from "react";
import LikeButton from "../../components/LikeButton";

const ControlPropsPage = () => {
  const [counter, setCounter] = useState(0);

  const handleUpdateCounter = () => setCounter(counter + 5);

  return (
    <div>
    <h2>Controlled Props</h2>
      <LikeButton value={counter} setValue={handleUpdateCounter} />
    </div>
  );
};

export default ControlPropsPage;
