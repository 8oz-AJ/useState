"use client";

import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addTodo() {
    const trimmed = input.trim();
    if (!trimmed) return;

    setTodos([...todos, { id: Date.now(), text: trimmed, done: false }]);
    setInput("");
  }

  function toggleDone(id) {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f7f9] px-4 py-14 flex items-start justify-center">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-[0_12px_36px_rgba(15,23,42,0.05)] border border-slate-100">
        <div className="mb-6">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-600 text-white text-sm font-bold leading-none">
              ✓
            </span>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              To-Do List
            </h1>
          </div>
          <p className="mt-1.5 text-sm text-slate-500">
            {todos.length} {todos.length === 1 ? "task" : "tasks"}
          </p>
        </div>

        <div className="mb-5 flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a new task..."
            className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none"
          />
          <button
            type="button"
            onClick={addTodo}
            className="rounded-xl bg-blue-400 px-5 py-3 text-sm font-medium text-white hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2.5">
          {todos.map((todo) => {
            const isDone = todo.done === true;

            return (
              <li
                key={todo.id}
                className="flex items-center justify-between rounded-xl bg-[#f8fafc] px-4 py-3.5 text-sm text-slate-800"
              >
                <div className="flex items-center gap-3 pr-3">
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => toggleDone(todo.id)}
                    className="h-4 w-4 accent-emerald-600"
                  />
                  <span
                    className={
                      isDone
                        ? "break-all line-through text-slate-400"
                        : "break-all text-slate-800"
                    }
                  >
                    {todo.text}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setTodos(todos.filter((item) => item.id !== todo.id))
                  }
                  className="text-base leading-none opacity-60 transition hover:opacity-100"
                >
                  🗑️
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
