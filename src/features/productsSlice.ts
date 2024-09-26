import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";



interface ProductsState {
  loading: boolean;
  error: boolean;
  productsList: Product[];
  categories: string[];
  favorites: Product[];
}

const initialState: ProductsState = {
  loading: false,
  error: false,
  productsList: [],
  categories: [],
  favorites: [],
};

export const productsSlice = createSlice({
  name: "products",

  initialState,
  reducers: {
    fetchStart (state) {
        state.loading= true;
        state.error = false;
    },
    getSuccessProduct (state,action:PayloadAction<Product[]>) {
        state.loading = false;
        state.error = false;
        state.productsList = action.payload;

    },
    addFavorites(state,action:PayloadAction<Product>){
        state.favorites = [...state.favorites, action.payload]
    },
    removeFvorites (state,action: PayloadAction<Product[]>){
        state.favorites = action.payload
    },
    fetchFail(state){
        state.loading=false;
        state.error=true;
    }
  },
});

export const {fetchFail,fetchStart,addFavorites,removeFvorites,getSuccessProduct} = productsSlice.actions;

export const productsReducer= productsSlice.reducer;
