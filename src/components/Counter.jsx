import React, { useState } from "react";

function Counter({ init }) {
  const [count, upCount] = useState(init);
  const [count2, downCount] = useState(init);
  return (
    <div>
      <button onClick={() => upCount(count + 1)}>좋아요 </button> {count}
      <button onClick={() => downCount(count2 - 1)}> 싫어요 </button> {count2}
    </div>
  );
}

export default Counter;
