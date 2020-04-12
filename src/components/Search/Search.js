import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

class Search extends Component {
    //Function called on change state in the search bar
    search = (e) => {
        const searchTerm = e.target.value
        this.props.MovieStore.searchTerm = searchTerm
        //Search when there are 3 or more characters in the search bar
        if (searchTerm.length > 2) {
            this.props.MovieStore.search()
        }
        //Display top 10 if there is less then 3 characters in the search bar
        else {
            this.props.MovieStore.loadTopMoviesAsync()
        }
    }
    render() {
        return (
            <div className="search-container">
                <input className="search-field" model={this.props.MovieStore.searchTerm} type="text" placeholder="Search" onChange={this.search} />
            </div>
        )
    }
}
export default inject("MovieStore")(observer(Search));