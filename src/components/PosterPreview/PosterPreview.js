import React, {Component} from "react";

export default class PosterPreview extends Component {

    render() {
        const {poster_path, movieTitle, id} = this.props;

        return (
            <div className={'posterPreview'}>
                <a href={`/movie/${id}`}><img src={`https://image.tmdb.org/t/p/w300/${poster_path}?api_key=cc809c60b58f948232bce08b642e354e`} alt={`Poster preview for film ${movieTitle}`}/></a>
            </div>
        );
    }
}
