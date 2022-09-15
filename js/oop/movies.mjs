import ApiMovies from './services/api.mjs';

class MovieController extends ApiMovies {
    async showData(){
        const data   = await this.callApi();
        const result = data.status === 200 ? data.data : {};
        console.log(result);
    }
}
let key = 'batman';
let page= 1;
const movie = new MovieController(`https://api.themoviedb.org/3/search/movie?query=${key}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`,'get',{});
movie.showData();