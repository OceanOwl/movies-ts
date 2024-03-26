const baseURL = 'https://api.themoviedb.org/3'

const movie = '/movie';
const genres = '/genre/movie/list'


const urls = {
    genres,
    movie: {
        byId: (id: string): string => `${movie}/${id}`
    },
    movies: '/discover/movie',
    movieImage: 'https://image.tmdb.org/t/p/w300',


}


export {
    baseURL,
    urls,
}