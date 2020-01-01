import React, {Component} from 'react';

import {Header, Main} from '../../components';

class HomePage extends Component {

    render() {
        const {setLoading, loading} = this.props;

        console.log(setLoading, loading);

        // setLoading(true);

        return (
            <>
                <Header/>
                {

                    loading ? <div>Loading...</div> :
                        <Main/>
                }
            </>
        );
    }
}

export default HomePage;
