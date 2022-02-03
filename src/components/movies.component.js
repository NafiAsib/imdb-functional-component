import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import getMovies from '../service/get-movies.service';
import getGenres from '../service/get-genres.service';

import Filter from './common/filter.component';
import Table from './table.component';
import Rating from './rating.component';
import Pagination from './common/pagination.component';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [sortingProps, setSortingProps] = useState({
        key: 'id',
        order: 'asc',
    });
    const [activePage, setActivePage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [selectedGenre, setSelectedGenre] = useState('All');

    useEffect(() => {
        const movies = getMovies();
        const genres = ['All', ...getGenres()];
        setMovies(movies);
        setGenres(genres);
    }, []);

    const onFilter = (genre) => {
        setSelectedGenre(genre);
        setActivePage(1);
    };

    const filterMovies = () => {
        const allMovies = movies;
        const filteredMovies = allMovies.filter((movie) => {
            if (selectedGenre === 'All') return true;
            return movie.genres.includes(selectedGenre);
        });
        return filteredMovies;
    };

    const handleToggleFavourite = (id) => {
        const allMovies = movies;
        const movie = allMovies.find((movie) => movie.id === id);
        movie.isFavourite = !movie.isFavourite;
        setMovies([...allMovies]);
    };

    const onClickPage = (activePage) => {
        setActivePage(activePage);
    };

    const handleSort = (sortingProps) => {
        setSortingProps(sortingProps);
    };

    const sortMovies = (filteredMovies) => {
        const movies = [...filteredMovies];

        const sortedMovies = _.orderBy(
            movies,
            [sortingProps.key],
            [sortingProps.order]
        );
        return sortedMovies;
    };

    const paginateMovies = (movies) => {
        const start = (activePage - 1) * itemsPerPage;
        const paginatedMovies = movies.slice(start, start + itemsPerPage);
        return paginatedMovies;
    };

    const filteredMovies = filterMovies();
    const sortedMovies = sortMovies(filteredMovies);
    const moviesToRender = paginateMovies(sortedMovies);

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
                    handleToggleFavourite={handleToggleFavourite}
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
                        items={genres}
                        selectedGenre={selectedGenre}
                        onFilter={onFilter}
                    />
                </div>
                <div className="col-8">
                    <Table
                        items={moviesToRender}
                        columns={movieColumns}
                        sortingProps={sortingProps}
                        onSort={handleSort}
                    />
                    <Pagination
                        totalItems={filteredMovies.length}
                        itemsPerPage={itemsPerPage}
                        activePage={activePage}
                        onClickPage={onClickPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Movies;
