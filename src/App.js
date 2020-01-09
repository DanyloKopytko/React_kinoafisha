import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.css';

import HomePage from './containers/HomePage';
import SingleMovie from './containers/SingleMovie';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/movie/:movieTitle" component={SingleMovie}/>
                <Route path="*">
                    <div>Error 404 page not found</div>
                </Route>
            </Switch>
        </Router>
    );
}
