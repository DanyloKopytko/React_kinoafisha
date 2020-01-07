import React, {Component} from 'react';

import './Main.css';

import {MoviesList} from '../index';

export default class Main extends Component {
    componentDidMount() {
        const {getAllMovies, getGenres} = this.props;

        getAllMovies();
        getGenres();
    }

    render() {
        const {loading, movies, genres, darkTheme} = this.props;

        let results = movies.results;

        return (
            <main className={darkTheme ? 'mainDarkTheme' : ''}>
                {loading ? <div>Loading...</div> :
                  <MoviesList movies={results} genres={genres}/>
                }
            </main>
        );
    }
}
