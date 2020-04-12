import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

class MoviesList extends Component {
    componentDidMount() {
        this.props.MovieStore.isMovie = true;
        if (this.props.MovieStore.searchTerm.length > 2) {
            this.props.MovieStore.search();
        } else {
            this.props.MovieStore.loadTopMoviesAsync();
        }
    }
    getDetails = (movie) => {
        this.props.MovieStore.details = movie;
        this.props.history.push('/details'); //There is Route '/details'
    }
    render() {
        return (
            <div className="movie-container">
                {
                    this.props.MovieStore.movies && this.props.MovieStore.movies.map((movie, index) => {
                        let imagePath = movie.backdrop_path ? movie.backdrop_path : movie.poster_path
                        if(index<10)
                        return  <div key={index} className='movie-wrapper' onClick={()=>this.getDetails(movie)}>
                            <img alt="No preview available" className="movie-image" src={this.props.MovieStore.IMAGE_BASE_URL + imagePath}></img>
                            <span className="movie-title">{movie.title} proba</span>
                        </div>
                    })
                }
            </div>
        )
    }
}
export default inject("MovieStore")(observer(MoviesList));