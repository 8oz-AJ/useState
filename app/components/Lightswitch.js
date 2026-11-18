"use client";
import { useState } from "react";

export const LightSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`p-6 rounded-xl shadow-md flex flex-col items-center gap-4 ${isOn ? "bg-yellow-100 text-gray-900" : "bg-gray-800 text-white"}`}
    >
      <h2 className="text-xl font-bold">{isOn ? "💡" : "🌑"} Гэрэл</h2>
      <span className="text-4xl">{isOn ? "💡" : "🌑"}</span>
      <button
        onClick={() => setIsOn(!isOn)}
        className={`px-4 py-2 rounded font-semibold ${isOn ? "bg-yellow-400 text-black" : "bg-yellow-400 text-gray-900"}`}
      >
        {isOn ? "Унтраах" : "Асаах"}
      </button>
    </div>
  );
};
