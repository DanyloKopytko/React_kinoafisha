import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.css';

import HomePage from './containers/HomePage/HomePage';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="*">
                    <div>Error 404 page was not found</div>
                </Route>
            </Switch>
        </Router>
    );
}
