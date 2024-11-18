import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {uploadOnCloudinary} from '../utils/cloudinary.js'




const handleImageUpload = asyncHandler(async (req, res) => {
 

  // Upload to Cloudinary
  const localFilePath = req.file.path;
  const result = await uploadOnCloudinary(localFilePath);

  if (!result) {
    throw new ApiError(500,"Error uploading image to Cloudinary")
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, result.url, "Image uploaded successfully to Cloudinary")
    );
});

// add a new product

const addProduct = asyncHandler( async (req, res) => {
  const {image, title, description, category, brand, price, salePrice, totalStock} = req.body;

  if (!image || !title || !description || !category || !brand || !price || !totalStock) {
    throw new ApiError(400, "All fields are required")
  }

  const existedProduct = await Product.findOne({title})

  if(existedProduct) {
    throw new ApiError(400, "Product with this title already exist")
  }

  const product = await Product.create({
    image,
    title,
    description,
    category,
    brand,
    price,
    salePrice,
    totalStock
  })

  const createdProduct = await Product.findById(product._id)

  if(!createdProduct) {
    throw new ApiError(500, "Something went wrong when creating a product")
  }

  return res
    .status(200)
    .json(new ApiResponse(200, createdProduct, "Product created successfully"));
})

// fetch all products

const fetchAllProducts = asyncHandler (async (req, res) => {
  const listOfProducts = await Product.find({})
  if (!listOfProducts) {
    throw new ApiError(500, "Something went wrong when fetching products")
  }
   return res
     .status(200)
     .json(
       new ApiResponse(200, listOfProducts, "list of products")
     );
})

// Edit a product
const editProduct = asyncHandler(async (req, res) => {
  const { id } = req.params; // Get product id from URL parameter
  const { image, title, description, category, brand, price, salePrice, totalStock } = req.body;

  // Check if the product exists
  const product = await Product.findById(id);
  
  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  // Update the product with the new details, but only update fields that were passed in the request
  product.image = image || product.image;
  product.title = title || product.title;
  product.description = description || product.description;
  product.category = category || product.category;
  product.brand = brand || product.brand;
  product.price = price === '' ? 0 : price || product.price;
  product.salePrice = salePrice === "" ? 0 : salePrice || product.salePrice;
  product.totalStock = totalStock || product.totalStock;

  // Save the updated product
  await product.save();

  return res
    .status(200)
    .json(new ApiResponse(200, product, "Product updated successfully"));
});



// Delete a product

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params; // Get product id from URL parameter

  // Find the product by id
  const product = await Product.findById(id);

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  // Delete the product
  await Product.findByIdAndDelete(id);

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Product deleted successfully"));
});



export {
  handleImageUpload,
  addProduct,
  fetchAllProducts,
  editProduct,
  deleteProduct,
};