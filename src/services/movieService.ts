import {axiosService} from "./apiService";
import {urls} from "../constants/urls";

import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";
import {ITrailer} from "../interfaces/trailerInterface";


const movieService = {
    getAll: (page: number = 1): IRes<IPagination<IMovie>> => axiosService.get(urls.movies, {params: {page}}),
    getById: (id: string): IRes<IMovie> => axiosService.get(urls.movie.byId(id)),
    getTrailers: (id: string): IRes<ITrailer> => axiosService.get(urls.trailer(id)),
    getMoviesByGenreId:(page: number = 1, id:string):IRes<IPagination<IMovie>> =>axiosService.get(urls.movies, {params:{page, id}})
}

export {
    movieService
}