import React, { useEffect } from "react";
import { Truck, RefreshCcw, HelpCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "@/store/productSlice";


const HomePage = () => {

   const { productList } = useSelector((state) => state.adminProducts);

   const dispatch = useDispatch()

   useEffect(() => {
    dispatch(fetchAllProducts())
   },[dispatch])
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('../../../images/hero_1.jpg')" }}
      >
        <div className="container mx-auto h-3/4 flex items-center justify-end">
          <div className="text-black px-4 py-5 md:px-10 md:py-20 text-center md:text-left md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Finding Your Perfect Shoes
            </h1>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at iaculis quam. Integer accumsan tincidunt fringilla.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex items-start space-x-4">
            <Truck size={50} className="text-indigo-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Free Shipping
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <RefreshCcw size={50} className="text-indigo-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Free Returns
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <HelpCircle size={50} className="text-indigo-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Customer Support
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>

  
    

      {/* Featured Products Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {productList && productList.length > 0 ? productList.map(
              (product, index) => (
                <div key={product} className="bg-white shadow-lg p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-xl font-bold text-indigo-600">$50</p>
                  <a href="#" className="text-indigo-600 mt-4 inline-block">
                    View Product
                  </a>
                </div>
              )
            ) : null}
          </div>
        </div>
      </div>

      {/* Big Sale Section */}
      <div className="py-16">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2">
            <img
              src="../../../images/blog_1.jpg"
              alt="Big Sale"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-1/2 pl-10">
            <h2 className="text-4xl font-semibold mb-4">
              50% off on all items
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              iste dolor accusantium facere corporis.
            </p>
            <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
