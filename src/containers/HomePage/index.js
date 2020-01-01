import {connect} from 'react-redux';

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageComponent);
