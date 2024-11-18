import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
 isAuthenticated: false,
 isLoading: false,
 user: null,
 error: null
};

export const registerUser = createAsyncThunk(
  "auth/signup",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/register",
        formData
      ); // Update with your backend URL
      return response.data;
    } catch (error) {
      
      if (error.response && error.response.status === 409) {
        return rejectWithValue({message: "User with email or username already exist"});
      }
      return rejectWithValue("Something went wrong");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/login",
        formData,
        {
          withCredentials: true
        }
      );
      return response.data; 
    } catch (error) {
      
      if (error.response && error.response.status === 409) {
        return rejectWithValue({
          message: "Invalid email or password",
        });
      }
      return rejectWithValue(error.response.data); // Handles API errors
    }
  }
);

export const checkAuth = createAsyncThunk(
  "/auth/checkauth",
  async() => {
    const response = await axios.get(
      "http://localhost:3000/api/v1/users/check-auth",
      {
        withCredentials: true
      }
    );
    return response.data
  }
)

export const logoutUser = createAsyncThunk(
  "/auth/logout",
  async () => {
    const response = await axios.post(
      "http://localhost:3000/api/v1/users/logout",
      {},
      {
        withCredentials: true,
      }
    );
     return response.data;
  }
)


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setuser: (state, action) => {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload;
      })

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data.loggedInUser;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
        console.log(action.payload);
        
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null
        state.isAuthenticated = false
        state.error = null;
      });
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;





