import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItems {
    id?: string;
    name?: string;
    productId: string;
    quantity?: number;
    unitPrice?: number;
}

interface CartState {
    items: CartItems[];
    loading: boolean;
    error: string | undefined
}

const initialState: CartState = {
    items: [],
    loading: false,
    error: undefined
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItems>) {
            state.loading = true;
        },

        addToCartSuccess(state, action: PayloadAction<CartItems[]>) {
            state.loading = false;
            state.items = action.payload;
        },

        addToCartError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },

        fetchCart(state) {
            state.loading = true;
            state.error = undefined
        },

        fetchCartSuccess(state, action: PayloadAction<CartItems[]>) {
            state.loading = false;
            state.items = action.payload
        },

        fetchCartError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },

        increamentQuanity(state, action: PayloadAction<CartItems>) {
            const item = state.items.find(
                (i) => i.productId === action.payload.productId
            );

            if (item) {
                item.quantity! += action.payload.quantity!;
            }
        },

        decreamentQuanity(state, action: PayloadAction<CartItems>) {
            const item = state.items.find(
                (i) => i.productId === action.payload.productId
            );

            if (item) {
                item.quantity! -= action.payload.quantity!;

                if (item.quantity! <= 0) {
                    state.items = state.items.filter(
                        (i) => i.productId !== action.payload.productId
                    );
                }
            }
        },
        deleteItem(state, action: PayloadAction<{id: string}>) {
            const item = state.items.find(
                (i) => i.id === action.payload.id
            );

            if (item) {
                item.quantity = 0,
                    state.items = state.items.filter(
                        (i) => i.id !== action.payload.id
                    );
            }
        }

    }
});
export const {
    addToCart,
    addToCartSuccess,
    addToCartError,
    fetchCart,
    fetchCartSuccess,
    fetchCartError,
    increamentQuanity,
    decreamentQuanity,
    deleteItem

} = cartSlice.actions;
export default cartSlice.reducer;