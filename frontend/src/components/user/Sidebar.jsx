import React from "react";

export const Sidebar = () => {
  return (
    <div className="w-1/4 bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Categories</h3>
      <ul>
        <li className="mb-2">
          <a href="#">Men (2,220)</a>
        </li>
        <li className="mb-2">
          <a href="#">Women (2,550)</a>
        </li>
        <li className="mb-2">
          <a href="#">Children (2,124)</a>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4">Filter by Price</h3>
      <input type="range" min="0" max="100" className="w-full mb-4" />
      <p className="text-center">$50 - $100</p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Size</h3>
      <label>
        <input type="checkbox" className="mr-2" /> Small
      </label>
      <br />
      <label>
        <input type="checkbox" className="mr-2" /> Medium
      </label>
      <br />
      <label>
        <input type="checkbox" className="mr-2" /> Large
      </label>
    </div>
  );
};
