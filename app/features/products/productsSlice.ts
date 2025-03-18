import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define and export the type for a product
export interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

// Define the state structure
interface ProductState {
  data: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Initial state to use in the reducers!

const initialState: ProductState = {
  data: [],
  status: "idle",
  error: null,
};

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk<Product[], void>(
  "products/fetchProducts",
  async () => {
    const response = await axios.get<Product[]>(
      "https://fakestoreapi.com/products"
    );
    return response.data;
  }
);

// Creating the products slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          state.data = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch products.";
      });
  },
});

export default productsSlice.reducer;
