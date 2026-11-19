"use client";

import { useState } from "react";

const SIZES = {
  S: { name: "Жижиг", price: 15000 },
  M: { name: "Дунд", price: 20000 },
  L: { name: "Том", price: 25000 },
};

const SIZE_KEYS = ["S", "M", "L"];

export default function Pizza() {
  const [size, setSize] = useState("M");
  const [hasCheese, setHasCheese] = useState(false);
  const [hasMushroom, setHasMushroom] = useState(false);
  const [hasPepper, setHasPepper] = useState(false);
  const [count, setCount] = useState(1);

  const unitPrice =
    SIZES[size].price +
    (hasCheese ? 3000 : 0) +
    (hasMushroom ? 2000 : 0) +
    (hasPepper ? 1000 : 0);

  const totalPrice = unitPrice * count;
  const noToppings = !hasCheese && !hasMushroom && !hasPepper;

  return (
    <div className="max-w-md mx-auto p-6 rounded-xl border space-y-6">
      <h2 className="text-xl font-bold">🍕 Пицца угсрах</h2>

      <div className="space-y-2">
        <p className="font-medium">1. Хэмжээ</p>
        <div className="flex gap-2">
          {SIZE_KEYS.map((key) => {
            const isSelected = size === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSize(key)}
                className={`px-3 py-2 rounded-lg border text-sm font-medium ${
                  isSelected
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-800 border-gray-300"
                }`}
              >
                {SIZES[key].name} ({SIZES[key].price}₮)
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-2">
        <p className="font-medium">2. Нэмэлт</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setHasCheese(!hasCheese)}
            className={`px-3 py-2 rounded-lg border text-sm font-medium ${
              hasCheese
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          >
            🧀 Бяслаг (+3000₮)
          </button>

          <button
            type="button"
            onClick={() => setHasMushroom(!hasMushroom)}
            className={`px-3 py-2 rounded-lg border text-sm font-medium ${
              hasMushroom
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          >
            🍄 Мөөг (+2000₮)
          </button>

          <button
            type="button"
            onClick={() => setHasPepper(!hasPepper)}
            className={`px-3 py-2 rounded-lg border text-sm font-medium ${
              hasPepper
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          >
            🌶️ Чинжүү (+1000₮)
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="font-medium">3. Тоо ширхэг</p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={count <= 1}
            onClick={() => setCount(count - 1)}
            className="w-9 h-9 rounded-lg border font-bold disabled:opacity-40 disabled:cursor-not-allowed"
          >
            −
          </button>
          <span className="font-semibold">{count}</span>
          <button
            type="button"
            disabled={count >= 5}
            onClick={() => setCount(count + 1)}
            className="w-9 h-9 rounded-lg border font-bold disabled:opacity-40 disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>
      </div>

      <div className="pt-4 border-t space-y-1">
        <p className="font-medium">
          {SIZES[size].name} пицца · {hasCheese && "🧀"} {hasMushroom && "🍄"}{" "}
          {hasPepper && "🌶️"}
          {noToppings && "нэмэлтгүй"}
        </p>
        <p className="text-sm text-gray-600">Нэг пиццаны үнэ: {unitPrice}₮</p>
        <p className="text-lg font-bold">Нийт үнэ: {totalPrice}₮</p>
      </div>
    </div>
  );
}
