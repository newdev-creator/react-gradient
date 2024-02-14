import React from "react";

export default function CodeModal() {
  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full bg-gray-800/95 flex justify-center items-center">
      <div className="max-w-[500px] rounded p-7 bg-gray-50">
        <div className="flex items-center mb-5">
          <p className="font-semibold text-gray-950 mr-6">Here is your code!</p>
          <button className="ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded">
            Copy
          </button>
          <button className="text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
            Close
          </button>
        </div>
        <p className="rounded bg-gray-900 p-5 text-gray-200 font-semibold">
          LE code
        </p>
      </div>
    </div>
  );
}
