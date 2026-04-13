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
    loading: boolean,
    error: string | undefined
}

const initialState: ProductState = {
    listDataProduct: [],
    selectedProductID: null,
    searchKeyword: "",
    loading: false,
    error: undefined,
}

const url_data = process.env.NEXT_PUBLIC_API_URL;

export const fetchProduct = createAsyncThunk(
    "product/fetchProduct",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${url_data}/api/products`, {
            });
            const products = res.data.data.items;
            const result = await Promise.all(
                products.map(async (product: any) => {
                    try {
                        const resImg = await axios.get(
                            `${url_data}/api/products/${product.id}/images`
                        );
                        const primaryImage = resImg.data.find(
                            (img: any) => img.isPrimary
                        );
                        const imageUrl = primaryImage?.imageUrl;
                        return {
                            ...product,
                            image: imageUrl ? url_data + imageUrl : null,
                        };
                    } catch {
                        return {
                            ...product,
                            image: null,
                        };
                    }
                })
            );
            return result;
        } catch (error: any) {
            return rejectWithValue(error.response?.data);
        }
    }
);


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct(state, action: PayloadAction<Product[]>) {
            state.listDataProduct = action.payload
        },
        setSearchKeyword: (state, action: PayloadAction<string>) => {
            state.searchKeyword = action.payload
        },
        setSelectedProductID: (state, action: PayloadAction<string>) => {
            state.selectedProductID = action.payload
        },
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

export const { setProduct, setSearchKeyword, setSelectedProductID } = productSlice.actions;
export default productSlice.reducer;