import React from "react";

export default function ExampleCard() {
  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-md p-6 text-center">
      <h2 className="text-2xl font-semibold mb-2">Hello Tailwind</h2>
      <p className="text-gray-600 mb-4">
        This is a sample card component styled only with Tailwind CSS.
      </p>
      <button className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition">
        Click Me
      </button>
    </div>
  );
}
