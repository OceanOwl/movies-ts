import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {GenresPage, MoviesPage, SearchPage, SingleMoviePage} from "./pages";
import {MovieTrailerPage} from "./pages/MovieTrailerPage";


let router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'movies/:id', element: <SingleMoviePage/>},

            {path: 'genres', element: <GenresPage/>},
            {path: 'search', element: <SearchPage/>}
        ]

    },
    {path: 'movies/:id/:movieTrailerId', element: <MovieTrailerPage/>},

]);

export {router}