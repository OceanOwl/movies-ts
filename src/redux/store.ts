import {configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: moviesReducer
    }
});

export {
    store
}