import React, {Component} from 'react';

import {Header, Main} from '../../components';

class HomePage extends Component {

    render() {
        const {loading, getAllMovies, movies, getGenres, genres, setDarkTheme, darkTheme} = this.props;

        return (
            <>
                <Header
                    setDarkTheme={setDarkTheme}
                    darkTheme={darkTheme}
                />
                <Main
                    loading={loading}
                    getAllMovies={getAllMovies}
                    movies={movies}
                    getGenres={getGenres}
                    genres={genres}
                    darkTheme={darkTheme}
                />
            </>
        );
    }
}

export default HomePage;
