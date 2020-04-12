import {
    observable,
    runInAction, decorate
} from 'mobx';

class MovieStore {
    movies = null;
    shows = null;
    isMovie = false;
    searchTerm= '';
    details = {}
    IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w342'
    //Fetching Top 10 movies and shows
    loadTopMoviesAsync = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/${this.isMovie ? 'movie' : 'tv'}/top_rated?api_key=6100467b52b955961c1a1d63e4399d9e&language=en-US&page=1`);
        const data = await response.json();
        runInAction(() => {
            if(this.isMovie){
                this.movies = data.results
            }else{
                this.shows = data.results
            }
        })
    }
    //Searching Movies and Shows
    search = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/${this.isMovie ? 'movie':'tv'}?query=${this.searchTerm}&api_key=6100467b52b955961c1a1d63e4399d9e`);
        const data = await response.json();
        runInAction(() => {
            if(this.isMovie){
                this.movies = data.results
            }else{
                this.shows = data.results
            }
        })
    }
}
decorate(MovieStore, {
    movies: observable,
    shows: observable,
    isMovie: observable,
    searchTerm: observable,
    details: observable
})

export default new MovieStore();
