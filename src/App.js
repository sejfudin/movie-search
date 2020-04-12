import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import MoviesList from './components/MoviesList/MoviesList';
import Movie from './components/Movie/Movie'
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import "./main.css";
import ShowsList from './components/ShowsList/ShowsList';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="movies-container">
                    <Nav />
                    <Search />
                    <Switch>
                        <Route path="/Movies" component={MoviesList} />
                        <Route path="/" exact component={ShowsList} />
                        <Route path="/details" component={Movie} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default inject("MovieStore")(observer(App));