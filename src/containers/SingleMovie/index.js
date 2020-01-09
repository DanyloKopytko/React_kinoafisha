import {connect} from 'react-redux';
import { withRouter } from 'react-router';

import SingleMovieComponent from './SingleMovie';

import {getAllMovies, setDarkTheme, getGenres} from '../../actions';

const mapStateToProps = (state) => {
    const {pageMain: {loading, movies, darkTheme, genres}} = state;

    return {
        loading,
        movies,
        darkTheme,
        genres
    };
};

const mapDispatchToProps = {
    getAllMovies,
    getGenres,
    setDarkTheme
};

const SingleMovieWithConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleMovieComponent);

export default withRouter(SingleMovieWithConnect);
