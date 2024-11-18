import { asyncHandler } from "../utils/asyncHandler.js";
import {Product} from '../models/product.model.js'
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";



const getFilteredProduct = asyncHandler (async (req, res) => {
    const products = await Product.find({})

    if(!products){
        throw new ApiError(500, "something went wrong when fetching the products")
    }

    return res
            .status(200)
            .json( new ApiResponse(200, products, "all products"))
})

export default getFilteredProduct