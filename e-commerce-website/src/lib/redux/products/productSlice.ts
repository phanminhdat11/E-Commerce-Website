import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Product {
    id: string,
    name: string,
    sku: string,
    brand: string,
    price: number,
    finalPrice: number,
}


export interface ProductImages {
    imageUrl: string,
    isMain: boolean,
    sortOrder: number
}

export interface ProductDetail extends Product {
    images: string[]
    specifications: Specifications[],
    relatedProducts: Product[],

}

export interface Specifications {
    key: string,
    value: string
}

export interface ProductFilters {
    minPrice?: number | null;
    maxPrice?: number | null;
};

export interface ProductState {
    listDataProduct: Product[],
    selectedProductID: string | null,
    productDetail: ProductDetail | null;
    productImages: ProductImages | null;
    searchKeyword: string,
    filterPrice: ProductFilters,
    cartProduct: string[],
    loading: boolean,
    error: string | undefined
}

const initialState: ProductState = {
    listDataProduct: [],
    selectedProductID: null,
    productDetail: null,
    productImages: null,
    searchKeyword: "",
    cartProduct: [],
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

        setSearchKeyword(state, action: PayloadAction<string>) {
            state.searchKeyword = action.payload;
        },

        setFilters(state, action: PayloadAction<Partial<ProductFilters>>) {
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
        getProductDetail(state, action: PayloadAction<{ productId: string }>) {
            state.loading = true;
        },

        getProductDetailSuccess(state, action: PayloadAction<ProductDetail>) {
            state.productDetail = action.payload;
            state.loading = false;
        },

        getProductDetailError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.loading = false;
        },

        getProductImages(state, action: PayloadAction<{ productId: string }>) {
            state.loading = true;
        },

        getProductImagesSuccess(state, action: PayloadAction<ProductDetail>) {
            state.productDetail = action.payload;
            state.loading = false;
        },

        getProductImagesError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.loading = false;
        },


    },
});

export const {
    fetchProduct,
    fetchProductError,
    fetchProductSuccess,
    setSearchKeyword,
    setFilters,
    clearFilters,
    getProductDetail,
    getProductDetailError,
    getProductDetailSuccess,
    
} = productSlice.actions;
export default productSlice.reducer;