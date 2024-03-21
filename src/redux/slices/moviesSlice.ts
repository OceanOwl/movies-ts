import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie, IPagination} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movies: IMovie[];
}

const initialState: IState = {
    movies: []
};

const getAll = createAsyncThunk<IPagination<IMovie>, void>(
    'moviesSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll();
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
                state.movies = action.payload.results
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