import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

class Movie extends Component {
    //Return the User to the previous state
    goBack = () =>{
        this.props.history.goBack();
    } 
    render() {
        return (
            <div className="movie-container">
                <ul className="back-btn">
                    <li className="btn" onClick= {this.goBack}> Back</li>
                </ul>
                <img alt="No preview available" className="movie-image" src={this.props.MovieStore.IMAGE_BASE_URL + this.props.MovieStore.details.poster_path}></img>
                <span className="movie-details-title">{!this.props.MovieStore.isMovie ? this.props.MovieStore.details.name : this.props.MovieStore.details.title}</span>
                <div className="movie-details-text-wrapper">
                    <span className="movie-title">{!this.props.MovieStore.isMovie ? 'TV Show Overview' : 'Movie Overview'}</span>
                    <span className="movie-title">{this.props.MovieStore.details && this.props.MovieStore.details.overview}</span>
                </div>
            </div>
        );
    }
}
export default inject("MovieStore")(observer(Movie));