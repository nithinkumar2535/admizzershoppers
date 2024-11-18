import React from "react";
import { ShoppingCart } from "lucide-react";

export const ProductCard = ({product}) => {
 

  return (
    <div className="bg-white border rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt="Product"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-gray-600">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span
            className={`${
              product?.salePrice > 0 ? "line-through" : ""
            } text-lg text-primary font-bold`}
          >
            ${product.price}
          </span>
          {product?.salePrice > 0 ? (
            <span className="text-lg text-primary font-bold">
              ${product.salePrice}
            </span>
          ) : null}
          <button className="bg-blue-500 text-white p-2 rounded-full">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
