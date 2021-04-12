import React, { Component } from 'react';
import CardComponent from './CardComponent';
import InputComponent from './InputComponent';
import './MainComponent.css'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieTitle: "",
            moviesData: [],
            currentPage: 0
        }
    }

    fetchMovies = value => {
        const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
        const API_KEY = 'd7a3a18bf1f75a32e20a4c21012ba47b';
        const URI = `${BASE_URL}?api_key=${API_KEY}&language=en-US&query=${value}&page=${this.state.currentPage}&include_adult=false`;

        fetch(URI)
            .then(response => {
                if (response.ok) {
                    return response
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    const errMess = new Error(error.message);
                    throw errMess;
                }
            )
            .then(response => response.json())
            .then(response => {
                if(this.state.currentPage > 1) {
                    this.setState({ moviesData: [...this.state.moviesData, ...response.results] })
                } else {
                    this.setState({ moviesData: response.results })
                }
            })
            .catch(error => console.log(error.message));
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.fetchMovies(value);

        this.setState({
            [name]: value,
            currentPage: 1
        });
    }

    handleLoadMore = () => {
        this.setState({ currentPage: this.state.currentPage + 1 }, 
            () => this.fetchMovies(this.state.movieTitle));
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="container" data-test="main-render">
                <div className="row row-content">
                    <div className="col-md-10 my-5">
                        <InputComponent
                            movieTitle={this.state.movieTitle}
                            handleInputChange={this.handleInputChange}
                            handleSubmit={this.handleSubmit}
                        />
                    </div>
                </div>
                <div className="row">
                    <CardComponent
                        moviesData={this.state.moviesData}
                    />
                </div>
                {this.state.currentPage > 0 ? (
                <div className="row">
                    <div className="col-sm-12 col-md-10 my-5">
                        <button className="btn btn-outline-primary full-width" color="success" size="lg" onClick={this.handleLoadMore}>Load More</button>
                    </div>
                </div>
                ) : ""}
            </div>
        )
    }
}

export default Main;