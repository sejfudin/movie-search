import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
class ShowsList extends Component {
    componentDidMount() {
        this.props.MovieStore.isMovie = false
        if(this.props.MovieStore.searchTerm.length > 2 ){
           this.props.MovieStore.search();
        } else{
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
                    this.props.MovieStore.shows && this.props.MovieStore.shows.map((movie, index) => {
                        let imagePath = movie.backdrop_path ? movie.backdrop_path : movie.poster_path
                        if(index<10)
                        return <div key={index} className='movie-wrapper' onClick={() => this.getDetails(movie)}>
                            <img alt="No preview available" className="movie-image" src={this.props.MovieStore.IMAGE_BASE_URL + imagePath}></img>
                            <span className="movie-title">{movie.name}</span>
                        </div>
                    })
                }
            </div>
        )
    }
}
export default inject("MovieStore")(observer(ShowsList));