"use client";
import { useState } from "react";

const Counter = ({ users }) => {
  console.log(users);

  const [count, setCount] = useState(0);
  return (
    <div>
      <p> There are {users.length} in users array</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
};

export default Counter;
