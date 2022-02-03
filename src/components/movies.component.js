import React, { Component } from 'react';
import Table from './table.component';
import getMovies from '../service/get-movies.service';
import getGenres from '../service/get-genres.service';
import Rating from './rating.component';
import Pagination from './common/pagination.component';
import _ from 'lodash';
import Filter from './common/filter.component';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        sortingProps: { key: 'id', order: 'asc' },
        activePage: 1,
        itemsPerPage: 10,
        selectedGenre: 'All',
    };

    componentDidMount() {
        const movies = getMovies();
        const genres = ['All', ...getGenres()];
        this.setState({ ...this.state, movies, genres });
    }

    onFilter = (genre) => {
        this.setState({ ...this.state, selectedGenre: genre, activePage: 1 });
    };

    filterMovies = () => {
        const movies = [...this.state.movies];
        const filteredMovies = movies.filter((movie) => {
            if (this.state.selectedGenre === 'All') return true;
            return movie.genres.includes(this.state.selectedGenre);
        });
        return filteredMovies;
    };

    handleToggleFavourite = (id) => {
        const movies = [...this.state.movies];
        const movie = movies.find((movie) => movie.id === id);
        movie.isFavourite = !movie.isFavourite;
        this.setState({ ...this.state, movies });
    };

    onClickPage = (activePage) => {
        this.setState({ ...this.state, activePage });
    };

    handleSort = (sortingProps) => {
        this.setState({ ...this.state, sortingProps });
    };

    sortMovies = (filteredMovies) => {
        const { sortingProps } = this.state;
        const movies = [...filteredMovies];

        const sortedMovies = _.orderBy(
            movies,
            [sortingProps.key],
            [sortingProps.order]
        );
        return sortedMovies;
    };

    paginateMovies = (movies) => {
        const { activePage, itemsPerPage } = this.state;
        const start = (activePage - 1) * itemsPerPage;
        const paginatedMovies = movies.slice(start, start + itemsPerPage);
        return paginatedMovies;
    };

    render() {
        const filteredMovies = this.filterMovies();
        const sortedMovies = this.sortMovies(filteredMovies);
        const moviesToRender = this.paginateMovies(sortedMovies);
        const movieColumns = [
            {
                label: 'Rank',
                key: 'id',
                isSortable: true,
                content: (movie, key) => <th scope="row">{movie[key]}</th>,
            },
            {
                label: 'Title',
                key: 'title',
                isSortable: true,
                content: (movie, key) => <td>{movie[key]}</td>,
            },
            {
                label: 'Poster',
                key: 'posterUrl',
                content: (movie, key) => (
                    <td>
                        <img
                            src={movie[key]}
                            alt="poster"
                            height={100}
                            width={'auto'}
                        />
                    </td>
                ),
            },
            {
                label: 'Favourite',
                key: 'isFavourite',
                content: (movie, key) => (
                    <Rating
                        isFavourite={movie[key]}
                        id={movie.id}
                        handleToggleFavourite={this.handleToggleFavourite}
                    />
                ),
            },
            {
                label: 'Action',
                key: 'action',
                content: (movie, key) => <td>{movie[key]}</td>,
            },
        ];

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                        <Filter
                            items={this.state.genres}
                            selectedGenre={this.state.selectedGenre}
                            onFilter={this.onFilter}
                        />
                    </div>
                    <div className="col-8">
                        <Table
                            items={moviesToRender}
                            columns={movieColumns}
                            sortingProps={this.state.sortingProps}
                            onSort={this.handleSort}
                        />
                        <Pagination
                            totalItems={filteredMovies.length}
                            itemsPerPage={this.state.itemsPerPage}
                            activePage={this.state.activePage}
                            onClickPage={this.onClickPage}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Movies;
