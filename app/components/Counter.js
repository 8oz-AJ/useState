"use client";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold text-black">🔢 Тоолуур</h2>
      <span className="text-4xl font-extrabold text-black">{count}</span>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-black text-white rounded-full font-semibold"
        >
          −
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-black text-white rounded-full font-semibold"
        >
          +
        </button>
      </div>
    </div>
  );
};
