import {axiosService} from "./apiService";
import {urls} from "../constants/urls";
import {IRes} from "../types";
import {IMovie} from "../interfaces";


const movieService = {
    getAll:(page:number=1):IRes<IMovie[]>=>axiosService.get(urls.movies, {params:{page}}),
    getById:(id:number):IRes<IMovie>=>axiosService.get(urls.movie.byId(id))
}

export {
    movieService
}