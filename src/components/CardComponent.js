import React from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
} from 'reactstrap';

const CardComponent = ({ moviesData }) => {
    if (moviesData) {
        return moviesData.map(movie => {
            return (
                <div key={movie.id} className="col-md-5 m-1 mb-5" data-test="render-card">
                    <Card>
                        <CardImg width="100%" src={"http://image.tmdb.org/t/p/w342" + movie.poster_path} alt={movie.original_title} />
                        <CardBody>
                            <CardTitle tag="h5">{movie.original_title}</CardTitle>
                            <CardText>{movie.overview}</CardText>
                        </CardBody>
                    </Card>    
                </div>
            )
        })
    }
    else {
        return (
            <></>
        )
    }
};

export default CardComponent;