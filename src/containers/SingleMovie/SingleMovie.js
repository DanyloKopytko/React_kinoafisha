import React, {Component} from "react";

import {MoviesListCard} from "../../components";

export default class SingleMovie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movieId: '',
        }
    }

    componentDidMount() {
        const {getAllMovies, getGenres} = this.props;

        getAllMovies();
        getGenres();

        this.setState({movieId: this.props.location.pathname.split('/')[2]});
    }

    findCurrentMovie() {
        const {movies} = this.props;

        let allMovies = movies.results;

        let currentMovie;

        allMovies && allMovies.forEach(movie => {
            if (movie.id == this.state.movieId) {
                currentMovie = movie;
            }
        });

        return currentMovie;
    }

    render() {
        const {genres} = this.props;

        const currentMovie = this.findCurrentMovie();

        return (
            <>
                <h1>No design for this page so...</h1>
                {
                    currentMovie && <MoviesListCard movie={currentMovie} genres={genres} key={`${currentMovie.id}`}/>
                }
            </>
        );
    }
}
