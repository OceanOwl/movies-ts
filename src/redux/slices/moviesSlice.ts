import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie, IPagination} from "../../interfaces";
import {movieService} from "../../services";
import {ITrailer} from "../../interfaces/trailerInterface";

interface IState {
    page: IPagination<IMovie[]> | null;
    loading: boolean;
    error: string | null;
    movies: IMovie[];
    selectedMovie: IMovie;
    trailer: ITrailer;


}

const initialState: IState = {
    loading: false,
    error: null,
    page: null,
    movies: [],
    selectedMovie: null,
    trailer: null,

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

const getById = createAsyncThunk<IMovie, { id: string }>(
    'moviesSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            return data
        } catch (e) {
            return rejectWithValue(e)
        }

    }
);

const getMovieTrailers = createAsyncThunk<ITrailer, { id: string }>(
    'movies/getTrailers',
    async ({id}, {rejectWithValue}) => {
        try {
            const  trailer= await movieService.getTrailers(id);
            return trailer.data
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers:
        builder =>
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
                .addCase(getById.fulfilled, (state, action) => {
                    state.loading = false;
                    state.selectedMovie = action.payload
                })
                .addCase(getById.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(getById.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload as string;
                })
                .addCase(getMovieTrailers.fulfilled, (state, action) => {
                    state.loading = false;
                    state.trailer = action.payload;
                })
                .addCase(getMovieTrailers.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(getMovieTrailers.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload as string;
                })
})

const {reducer: moviesReducer, actions} = moviesSlice;

const moviesActions = {
    ...actions,
    getAll,
    getById,
    getMovieTrailers

}

export {
    moviesReducer,
    moviesActions
}