import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
    id: string,
    name: string,
    sku: string,
    brand: string,
    price: number,
    finalPrice: number,
    image: string
}

export interface ProductState {
    listDataProduct: Product[],
    selectedProductID: string | null
    searchKeyword: string,
    filterPrice: {
        maxPrice: number | null,
        minPrice: number | null,
    },
    addToCart: string | null,
    loading: boolean,
    error: string | undefined
}

const initialState: ProductState = {
    listDataProduct: [],
    selectedProductID: null,
    searchKeyword: "",
    addToCart: "",
    filterPrice: {
        maxPrice: null,
        minPrice: null
    },
    loading: false,
    error: undefined,
}



const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        fetchProduct(state) {
            state.loading = true;
            state.error = undefined;
        },

        fetchProductSuccess(state, action: PayloadAction<Product[]>) {
            state.loading = false;
            state.listDataProduct = action.payload;
        },


        fetchProductError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },

        setProduct(state, action: PayloadAction<Product[]>) {
            state.listDataProduct = action.payload;
        },
        setSearchKeyword(state, action: PayloadAction<string>) {
            state.searchKeyword = action.payload;
        },
        setSelectedProductID(state, action: PayloadAction<string>) {
            state.selectedProductID = action.payload;
        },
        setFilters(state, action: PayloadAction<any>) {
            state.filterPrice = {
                ...state.filterPrice,
                ...action.payload,
            };
        },
        clearFilters(state) {
            state.filterPrice = {
                minPrice: null,
                maxPrice: null,
            };
        },
    },
});

export const {
    fetchProduct,
    fetchProductError,
    fetchProductSuccess,
    setProduct,
    setSearchKeyword,
    setSelectedProductID,
    setFilters,
    clearFilters } = productSlice.actions;
export default productSlice.reducer;