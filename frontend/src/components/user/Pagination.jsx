import React from "react";

export const Pagination = () => {
  return (
    <div className="flex justify-center mt-8">
      <ul className="flex space-x-2">
        <li>
          <a href="#" className="px-3 py-1 bg-gray-300 rounded-lg">
            1
          </a>
        </li>
        <li>
          <a href="#" className="px-3 py-1 bg-gray-300 rounded-lg">
            2
          </a>
        </li>
        <li>
          <a href="#" className="px-3 py-1 bg-gray-300 rounded-lg">
            3
          </a>
        </li>
        <li>
          <a href="#" className="px-3 py-1 bg-gray-300 rounded-lg">
            4
          </a>
        </li>
        <li>
          <a href="#" className="px-3 py-1 bg-gray-300 rounded-lg">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};
