import {axiosService} from "./apiService";
import {urls} from "../constants/urls";

import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";
import {ITrailer} from "../interfaces/trailerInterface";
import {IGenre} from "../interfaces/genreInterface";


const movieService = {
    getAll: (page: number = 1,with_genres:string): IRes<IPagination<IMovie>> =>
        axiosService.get(urls.movies, {params: {page,with_genres}}),
    getById: (id: string): IRes<IMovie> => axiosService.get(urls.movie.byId(id)),
    getTrailers: (id: string): IRes<ITrailer> => axiosService.get(urls.trailer(id)),
    getGenres: (): IRes<IGenre[]> => axiosService.get<IGenre[]>(urls.genres.base)
}

export {
    movieService
}