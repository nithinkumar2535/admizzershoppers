import React from "react";

export const SearchBar = () => {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
