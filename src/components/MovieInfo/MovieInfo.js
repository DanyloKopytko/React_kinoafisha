import React, {Component} from "react";
import StarRatings from 'react-star-ratings';

import {GenreBadge} from "../index";

export default class MovieInfo extends Component{

    render() {
        const {movieTitle, movieDescription, genres, genre_ids, movieRating} = this.props;

        return (
            <div className={'movieInfo'}>
                <h3>{movieTitle}</h3>
                <GenreBadge genres={genres} genre_ids={genre_ids}/>
                <p>{movieDescription}</p>
                <hr/>
                <StarRatings
                    rating={movieRating}
                    starRatedColor="#b9cb41"
                    numberOfStars={10}
                    name='rating'
                />
            </div>
        );
    }
}
