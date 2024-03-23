import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie, IPagination} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    page: IPagination<IMovie[]> | null;
    loading: boolean;
    error: string | null;
    movies: IMovie[];

}

const initialState: IState = {
    loading: false,
    error: null,
    page: null,
    movies: []
};

const getAll = createAsyncThunk<IPagination<IMovie>, number>(
    'moviesSlice/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false;
                state.page = action.payload;
                state.movies = action.payload?.results || [];
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
})

const {reducer: moviesReducer, actions} = moviesSlice;

const moviesActions = {
    ...actions,
    getAll
}

export {
    moviesReducer,
    moviesActions
}