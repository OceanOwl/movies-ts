import {axiosService} from "./apiService";
import {urls} from "../constants/urls";
import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";


const movieService = {
    getAll: (page:number=1): IRes<IPagination<IMovie> >=> axiosService.get(urls.movies) ,
    getById:(id:number):IRes<IPagination<IMovie> >=>axiosService.get(urls.movie.byId(id))
}

export {
    movieService
}