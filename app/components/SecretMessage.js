"use client";
import { useState } from "react";

export const SecretMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold text-black">🔒 Нууц мессеж</h2>
      <h2 className="text-4xl font-bold">🔒</h2>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-4 py-2 bg-purple-500 text-white rounded font-semibold"
      >
        {isVisible ? "Нуух" : "Харах"}
      </button>
      {isVisible && (
        <p className="text-gray-700 text-xl bg-purple-200 p-3 rounded-xl text-center w-full">
          You are a piece of shit! 🤪
        </p>
      )}
    </div>
  );
};
