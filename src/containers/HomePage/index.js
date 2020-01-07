import {connect} from 'react-redux';
import { withRouter } from 'react-router';

import HomePageComponent from './HomePage';

import {setLoading, getAllMovies, getGenres, setDarkTheme} from '../../actions';

const mapStateToProps = (state) => {
    const {pageMain: {loading, movies, genres, darkTheme}} = state;

    return {
        loading,
        movies,
        genres,
        darkTheme
    };
};

const mapDispatchToProps = {
    setLoading,
    getAllMovies,
    getGenres,
    setDarkTheme
};

const HomePageWithConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageComponent);

export default withRouter(HomePageWithConnect);
