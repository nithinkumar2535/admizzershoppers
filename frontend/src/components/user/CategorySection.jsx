import React from "react";


export const CategorySection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Categories</h2>
        <div className="flex justify-center space-x-6">
          <div className="w-1/3 p-4  bg-white shadow-md rounded-lg">
            <img
              src="../../../images/women.jpg"
              alt="Women"
              className="w-full h-96 object-cover mb-4"
            />
            <h3 className="font-semibold text-xl">Women</h3>
          </div>
          <div className="w-1/3 p-4 bg-white shadow-md rounded-lg">
            <img
              src="../../../images/children.jpg"
              alt="Children"
              className="w-full h-96 object-cover mb-4"
            />
            <h3 className="font-semibold text-xl">Children</h3>
          </div>
          <div className="w-1/3 p-4 bg-white shadow-md rounded-lg">
            <img
              src="../../../images/men.jpg"
              alt="Men"
              className="w-full h-96 object-cover mb-4"
            />
            <h3 className="font-semibold text-xl">Men</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
