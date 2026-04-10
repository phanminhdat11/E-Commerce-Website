import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Product {
    id: string,
    name: string,
    slug?: string,
    description?: string,
    categoryName?: string;
    categoryId?: string,
    tags?: string[],
    images?: string[],
    price?: number,
    priceOriginal?: number,
    discountPercentage?: number,
    inStock: boolean;
    stockQuanlity: number;
    soldOut: number;
    rating?: number;
    reviewsCount?: number;
    createAt?: string;
    updateAt?: string;
    metadata?: Record<string, any>;
}

export interface ProductState {
    listDataProduct: Product[],
    loading: boolean,
    error: string | undefined
    searchKeyword: string
}

const initialState: ProductState = {
    listDataProduct: [],
    loading: false,
    error: undefined,
    searchKeyword: ""
}

export const fetchProduct = createAsyncThunk(
    "product/fetchProduct",

    async () => {
        const url_data_product = "http://localhost:3000/api/product";
        const res = await fetch(url_data_product);
        return res.json();
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct(state, action: PayloadAction<Product[]>) {
            state.listDataProduct = action.payload
        },
        setSearchKeyword: (state, action: PayloadAction<string>) => {
            state.searchKeyword  = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.loading = true;
                state.error = undefined;
            })
            .addCase(fetchProduct.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.loading = false;
                state.listDataProduct = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
})

export const { setProduct, setSearchKeyword } = productSlice.actions;
export default productSlice.reducer;