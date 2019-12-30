import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import HomePageComponent from './HomePage';

import {setLoading} from '../../actions';

const mapStateToProps = (state) => {
    const {pageMain: {loading}} = state;

    return {
        loading
    };
};

const mapDispatchToProps = {
    setLoading
};

const HomePageWithConnect = connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);

export default withRouter(HomePageWithConnect);
