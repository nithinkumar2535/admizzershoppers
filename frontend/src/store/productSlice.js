import axios from "axios";
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


const initialState = {
    isLoading: false,
    productList: []
}

export const addNewProduct = createAsyncThunk('/products/addnewproduct', async(formData) => {
    const result = await axios.post("http://localhost:3000/api/v1/admin/add", formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return result?.data
})

export const fetchAllProducts = createAsyncThunk(
  "/products/fetchAllProducts",
  async () => {
    const result = await axios.get(
      "http://localhost:3000/api/v1/admin/get",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return result?.data;
  }
);

export const editProduct = createAsyncThunk(
  "/products/editProduct",
  async ({id, formData}) => {
    const result = await axios.put(
      `http://localhost:3000/api/v1/admin/edit/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return result?.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "/products/deleteProduct",
  async (id) => {
    const result = await axios.delete(
      `http://localhost:3000/api/v1/admin/delete/${id}`
    );

    return result?.data;
  }
);



const adminProductSlice = createSlice({
    name: 'adminProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchAllProducts.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchAllProducts.fulfilled, (state, action) => {
            console.log(action.payload);

            state.isLoading = false;
            state.productList = action.payload.data;
          })
          .addCase(fetchAllProducts.rejected, (state, action) => {
            console.log(action.payload);

            state.isLoading = false;
            state.productList = []
          });
    }
})

export default adminProductSlice.reducer