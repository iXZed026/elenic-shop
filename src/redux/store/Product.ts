import { IProduct } from "@/types/productType";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface ProductsState {
    data: IProduct[] | []
    status: number | null
    loading: boolean
    error: string | null
}

export const getProductsServer = createAsyncThunk('products/getProductsServer',
    async (url: string) => {
        return fetch(url)
            .then(res => res.json())
            .then(data => data as IProduct[])
    }
)

const initialState: ProductsState = {
    data: [],
    status: null,
    loading: true,
    error: null,
};

const slice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductsServer.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
                state.loading = false;
                state.status = 200;
                state.data = action.payload;
            })
            .addCase(getProductsServer.pending, (state) => {
                state.loading = true;
                state.status = 202;

            })
            .addCase(getProductsServer.rejected, (state) => {
                state.loading = true;
                state.status = 500;
            })
    }
})


export default slice.reducer