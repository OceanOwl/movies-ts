const baseURL = 'https://api.themoviedb.org/3'

const movie = '/movie';
const genres = '/genre/movie/list'

const urls = {
    genres,
    movie: {
        byId: (id: number): string => `${movie}/${id}`
    },
    movies: '/discover/movie'

}


export {
    baseURL,
    urls,
}