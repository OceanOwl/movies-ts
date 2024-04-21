const baseURL = 'https://api.themoviedb.org/3'

const movie = '/movie';
const genres = '/genre/movie/list'



const urls = {
    genres:{
        base:genres
    },
    movie: {
        byId: (id: string): string => `${movie}/${id}`
    },
    movies: '/discover/movie',
    trailer:(id:string):string=>`${movie}/${id}/videos`,
    movieImageHigherQuality: 'https://image.tmdb.org/t/p/original',
    movieImageLowerQuality:'https://image.tmdb.org/t/p/w500'


}


export {
    baseURL,
    urls,
}